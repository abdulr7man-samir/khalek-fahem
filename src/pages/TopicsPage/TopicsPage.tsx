import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { topics, categories } from '../../data/topics';
import TopicCard from '../../components/TopicCard/TopicCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import PremiumModal from '../../components/PremiumModal/PremiumModal';
import AdBanner from '../../components/AdBanner/AdBanner';
import styles from './TopicsPage.module.css';

const TopicsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  const handlePremiumClick = () => {
    setIsModalOpen(true);
  };

  const filteredTopics = useMemo(() => {
    let filtered = topics;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(topic => topic.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className={styles.topicsPage}>
      {isModalOpen && <PremiumModal onClose={() => setIsModalOpen(false)} />}

      <div className={styles.controls}>
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <AdBanner />

      <div className={styles.topicsHeader}>
        <h1 className={styles.pageTitle}>
          {currentCategory ? `${currentCategory.icon} ${currentCategory.name}` : 'كل المواضيع'}
        </h1>
        <p className={styles.pageSubtitle}>
          {filteredTopics.length.toLocaleString()} موضوع متاح
        </p>
      </div>

      <div className={styles.topicsGrid}>
        {filteredTopics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onPremiumClick={handlePremiumClick}
          />
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className={styles.noTopics}>
          <div className={styles.noTopicsIcon}>😔</div>
          <h3>لم نجد أي مواضيع</h3>
          <p>جرب كلمات بحث أخرى أو اختر فئة مختلفة</p>
        </div>
      )}
    </div>
  );
};

export default TopicsPage;
