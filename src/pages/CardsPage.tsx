import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../components/CardList/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const newLimit = parseInt(searchParams.get('limit') || '10', 10);
    setLimit(isNaN(newLimit) ? 10 : newLimit);
  }, [searchParams]);

  return (
    <div>
      <h2>Все карточки</h2>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;