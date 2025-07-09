import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from '../Card/Card.module.css';

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 10 }) => {
  const [cards, setCards] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        return response.json();
      })
      .then(data => {
        const cardsWithImage = data.map((item: any) => ({
          ...item,
          image: "img/info-image.png"
        }));
        setCards(cardsWithImage);
        setLoading(false);
        setActiveIndex(0);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [limit]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (cards.length === 0) {
    return <div className={styles.noData}>Нет данных для отображения</div>;
  }

  return (
    <section className={styles.info}>
      <h2 className={styles.info__title}>Что вы получите?</h2>
      <div className={styles.info__cardDisplay}>
        <Card 
          title={cards[activeIndex].title} 
          description={cards[activeIndex].body} 
          image={cards[activeIndex].image} 
        />
      </div>
      <div className={styles.info__featuresSlider}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${styles.info__feature} ${activeIndex === index ? styles['info__feature--active'] : ''}`}
            onClick={() => handleFeatureClick(index)}
          >
            <h3 className={styles.info__featureTitle}>{card.title}</h3>
            <p className={styles.info__featureText}>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;