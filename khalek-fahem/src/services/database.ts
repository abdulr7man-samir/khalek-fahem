// Database service for managing user data, settings, and topics
export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  language: 'ar' | 'en';
  notifications: boolean;
  autoSave: boolean;
  favoriteTopics: number[];
  recentTopics: number[];
  bookmarks: number[];
  searchHistory: string[];
  lastVisited: string;
  userProgress: {
    [topicId: number]: {
      completed: boolean;
      lastAccessed: string;
      timeSpent: number;
      rating?: number;
    };
  };
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  settings: UserSettings;
  createdAt: string;
  lastLogin: string;
  preferences: {
    categories: string[];
    difficulty: 'easy' | 'medium' | 'hard' | 'all';
    sortBy: 'title' | 'category' | 'date' | 'rating';
    viewMode: 'grid' | 'list';
  };
}

class DatabaseService {
  private readonly STORAGE_KEYS = {
    USER_DATA: 'khalek_fahem_user_data',
    SETTINGS: 'khalek_fahem_settings',
    TOPICS_CACHE: 'khalek_fahem_topics_cache',
    SEARCH_HISTORY: 'khalek_fahem_search_history',
    FAVORITES: 'khalek_fahem_favorites',
    BOOKMARKS: 'khalek_fahem_bookmarks',
    PROGRESS: 'khalek_fahem_progress'
  };

  private defaultSettings: UserSettings = {
    theme: 'auto',
    fontSize: 'medium',
    language: 'ar',
    notifications: true,
    autoSave: true,
    favoriteTopics: [],
    recentTopics: [],
    bookmarks: [],
    searchHistory: [],
    lastVisited: new Date().toISOString(),
    userProgress: {}
  };

  // Initialize database and user data
  init(): void {
    if (!this.getUserData()) {
      this.createDefaultUser();
    }
  }

  // User Management
  createDefaultUser(): UserData {
    const userData: UserData = {
      id: this.generateId(),
      name: 'مستخدم جديد',
      email: '',
      settings: this.defaultSettings,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      preferences: {
        categories: [],
        difficulty: 'all',
        sortBy: 'title',
        viewMode: 'grid'
      }
    };

    this.saveUserData(userData);
    return userData;
  }

  getUserData(): UserData | null {
    const data = localStorage.getItem(this.STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  }

  saveUserData(userData: UserData): void {
    localStorage.setItem(this.STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  }

  updateUserSettings(settings: Partial<UserSettings>): void {
    const userData = this.getUserData();
    if (userData) {
      userData.settings = { ...userData.settings, ...settings };
      this.saveUserData(userData);
    }
  }

  // Settings Management
  getSettings(): UserSettings {
    const userData = this.getUserData();
    return userData?.settings || this.defaultSettings;
  }

  updateSetting<K extends keyof UserSettings>(key: K, value: UserSettings[K]): void {
    const settings = this.getSettings();
    settings[key] = value;
    this.updateUserSettings(settings);
  }

  // Favorites Management
  getFavorites(): number[] {
    return this.getSettings().favoriteTopics || [];
  }

  addToFavorites(topicId: number): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(topicId)) {
      favorites.push(topicId);
      this.updateSetting('favoriteTopics', favorites);
    }
  }

  removeFromFavorites(topicId: number): void {
    const favorites = this.getFavorites().filter(id => id !== topicId);
    this.updateSetting('favoriteTopics', favorites);
  }

  isFavorite(topicId: number): boolean {
    return this.getFavorites().includes(topicId);
  }

  // Bookmarks Management
  getBookmarks(): number[] {
    return this.getSettings().bookmarks || [];
  }

  addBookmark(topicId: number): void {
    const bookmarks = this.getBookmarks();
    if (!bookmarks.includes(topicId)) {
      bookmarks.push(topicId);
      this.updateSetting('bookmarks', bookmarks);
    }
  }

  removeBookmark(topicId: number): void {
    const bookmarks = this.getBookmarks().filter(id => id !== topicId);
    this.updateSetting('bookmarks', bookmarks);
  }

  isBookmarked(topicId: number): boolean {
    return this.getBookmarks().includes(topicId);
  }

  // Recent Topics Management
  getRecentTopics(): number[] {
    return this.getSettings().recentTopics || [];
  }

  addToRecent(topicId: number): void {
    const recent = this.getRecentTopics();
    const filtered = recent.filter(id => id !== topicId);
    filtered.unshift(topicId);
    
    // Keep only last 20 items
    const limited = filtered.slice(0, 20);
    this.updateSetting('recentTopics', limited);
  }

  // Search History Management
  getSearchHistory(): string[] {
    return this.getSettings().searchHistory || [];
  }

  addToSearchHistory(query: string): void {
    if (!query.trim()) return;
    
    const history = this.getSearchHistory();
    const filtered = history.filter(q => q !== query);
    filtered.unshift(query);
    
    // Keep only last 50 searches
    const limited = filtered.slice(0, 50);
    this.updateSetting('searchHistory', limited);
  }

  clearSearchHistory(): void {
    this.updateSetting('searchHistory', []);
  }

  // Progress Tracking
  getTopicProgress(topicId: number) {
    const settings = this.getSettings();
    return settings.userProgress[topicId] || null;
  }

  updateTopicProgress(topicId: number, progress: {
    completed?: boolean;
    timeSpent?: number;
    rating?: number;
  }): void {
    const settings = this.getSettings();
    const currentProgress = settings.userProgress[topicId] || {
      completed: false,
      lastAccessed: new Date().toISOString(),
      timeSpent: 0
    };

    settings.userProgress[topicId] = {
      ...currentProgress,
      ...progress,
      lastAccessed: new Date().toISOString()
    };

    this.updateUserSettings(settings);
  }

  // Statistics
  getStats() {
    const settings = this.getSettings();
    const progress = settings.userProgress;
    
    const completed = Object.values(progress).filter(p => p.completed).length;
    const totalTimeSpent = Object.values(progress).reduce((sum, p) => sum + p.timeSpent, 0);
    const averageRating = Object.values(progress)
      .filter(p => p.rating)
      .reduce((sum, p, _, arr) => sum + (p.rating || 0) / arr.length, 0);

    return {
      topicsCompleted: completed,
      totalTopicsAccessed: Object.keys(progress).length,
      totalTimeSpent,
      averageRating: averageRating || 0,
      favoriteCount: settings.favoriteTopics.length,
      bookmarkCount: settings.bookmarks.length,
      recentCount: settings.recentTopics.length
    };
  }

  // Data Export/Import
  exportData(): string {
    const userData = this.getUserData();
    return JSON.stringify(userData, null, 2);
  }

  importData(jsonData: string): boolean {
    try {
      const userData = JSON.parse(jsonData);
      if (userData && userData.id && userData.settings) {
        this.saveUserData(userData);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  // Clear all data
  clearAllData(): void {
    Object.values(this.STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  // Utility methods
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Backup and restore
  createBackup(): string {
    const timestamp = new Date().toISOString();
    const userData = this.getUserData();
    return JSON.stringify({
      timestamp,
      data: userData,
      version: '1.0'
    });
  }

  restoreFromBackup(backupData: string): boolean {
    try {
      const backup = JSON.parse(backupData);
      if (backup.data && backup.data.settings) {
        this.saveUserData(backup.data);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
}

// Create singleton instance
export const database = new DatabaseService();

// Initialize on load
database.init();