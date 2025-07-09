import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
      <img src={image} alt={title} className={styles.card__image} />
    </div>
  );
};

export default Card;