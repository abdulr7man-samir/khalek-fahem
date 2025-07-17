// Database utility for managing topics and search functionality
import { Topic } from '../data/topics';

export interface SearchResult {
  topic: Topic;
  relevanceScore: number;
  matchedFields: string[];
}

export interface DatabaseStats {
  totalTopics: number;
  categoryCounts: Record<string, number>;
  lastUpdated: string;
}

export class TopicDatabase {
  private topics: Topic[] = [];
  private searchIndex: Map<string, Set<number>> = new Map();
  private categoryIndex: Map<string, Set<number>> = new Map();
  
  constructor(topics: Topic[]) {
    this.topics = topics;
    this.buildSearchIndex();
    this.buildCategoryIndex();
  }

  private buildSearchIndex() {
    this.searchIndex.clear();
    
    this.topics.forEach((topic, index) => {
      // Index title words
      const titleWords = this.extractWords(topic.title);
      titleWords.forEach(word => {
        if (!this.searchIndex.has(word)) {
          this.searchIndex.set(word, new Set());
        }
        this.searchIndex.get(word)!.add(index);
      });

      // Index content words
      const contentWords = this.extractWords(topic.content);
      contentWords.forEach(word => {
        if (!this.searchIndex.has(word)) {
          this.searchIndex.set(word, new Set());
        }
        this.searchIndex.get(word)!.add(index);
      });

      // Index category
      if (!this.searchIndex.has(topic.category)) {
        this.searchIndex.set(topic.category, new Set());
      }
      this.searchIndex.get(topic.category)!.add(index);
    });
  }

  private buildCategoryIndex() {
    this.categoryIndex.clear();
    
    this.topics.forEach((topic, index) => {
      if (!this.categoryIndex.has(topic.category)) {
        this.categoryIndex.set(topic.category, new Set());
      }
      this.categoryIndex.get(topic.category)!.add(index);
    });
  }

  private extractWords(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u200C-\u200D\u0621-\u063A\u0641-\u064A\u0660-\u0669a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 1);
  }

  public search(query: string, limit: number = 50): SearchResult[] {
    if (!query.trim()) {
      return [];
    }

    const queryWords = this.extractWords(query);
    const results: Map<number, SearchResult> = new Map();

    queryWords.forEach(word => {
      // Exact match
      if (this.searchIndex.has(word)) {
        this.searchIndex.get(word)!.forEach(topicIndex => {
          const topic = this.topics[topicIndex];
          if (!results.has(topicIndex)) {
            results.set(topicIndex, {
              topic,
              relevanceScore: 0,
              matchedFields: []
            });
          }
          
          const result = results.get(topicIndex)!;
          
          // Calculate relevance score
          if (topic.title.toLowerCase().includes(word)) {
            result.relevanceScore += 10;
            result.matchedFields.push('title');
          }
          if (topic.content.toLowerCase().includes(word)) {
            result.relevanceScore += 5;
            result.matchedFields.push('content');
          }
          if (topic.category === word) {
            result.relevanceScore += 3;
            result.matchedFields.push('category');
          }
        });
      }

      // Partial match
      this.searchIndex.forEach((topicIndices, indexedWord) => {
        if (indexedWord.includes(word) && indexedWord !== word) {
          topicIndices.forEach(topicIndex => {
            const topic = this.topics[topicIndex];
            if (!results.has(topicIndex)) {
              results.set(topicIndex, {
                topic,
                relevanceScore: 0,
                matchedFields: []
              });
            }
            
            const result = results.get(topicIndex)!;
            result.relevanceScore += 2; // Lower score for partial matches
            result.matchedFields.push('partial');
          });
        }
      });
    });

    return Array.from(results.values())
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  }

  public getTopicsByCategory(category: string): Topic[] {
    if (category === 'all' || !category) {
      return this.topics;
    }
    
    const indices = this.categoryIndex.get(category);
    if (!indices) {
      return [];
    }
    
    return Array.from(indices).map(index => this.topics[index]);
  }

  public getTopicById(id: number): Topic | undefined {
    return this.topics.find(topic => topic.id === id);
  }

  public getRandomTopics(count: number = 10): Topic[] {
    const shuffled = [...this.topics].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  public getStats(): DatabaseStats {
    const categoryCounts: Record<string, number> = {};
    
    this.topics.forEach(topic => {
      categoryCounts[topic.category] = (categoryCounts[topic.category] || 0) + 1;
    });

    return {
      totalTopics: this.topics.length,
      categoryCounts,
      lastUpdated: new Date().toISOString()
    };
  }

  public getSuggestions(query: string, limit: number = 5): string[] {
    if (!query.trim()) {
      return [];
    }

    const queryWords = this.extractWords(query);
    const suggestions: Set<string> = new Set();

    queryWords.forEach(word => {
      this.searchIndex.forEach((_, indexedWord) => {
        if (indexedWord.startsWith(word) && indexedWord !== word) {
          suggestions.add(indexedWord);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }

  public addTopic(topic: Topic): void {
    this.topics.push(topic);
    this.buildSearchIndex();
    this.buildCategoryIndex();
  }

  public updateTopic(id: number, updates: Partial<Topic>): boolean {
    const index = this.topics.findIndex(topic => topic.id === id);
    if (index === -1) {
      return false;
    }

    this.topics[index] = { ...this.topics[index], ...updates };
    this.buildSearchIndex();
    this.buildCategoryIndex();
    return true;
  }

  public deleteTopic(id: number): boolean {
    const index = this.topics.findIndex(topic => topic.id === id);
    if (index === -1) {
      return false;
    }

    this.topics.splice(index, 1);
    this.buildSearchIndex();
    this.buildCategoryIndex();
    return true;
  }
}

// Export a singleton instance
let databaseInstance: TopicDatabase | null = null;

export const getDatabase = (topics: Topic[]): TopicDatabase => {
  if (!databaseInstance) {
    databaseInstance = new TopicDatabase(topics);
  }
  return databaseInstance;
};

export const resetDatabase = (): void => {
  databaseInstance = null;
};