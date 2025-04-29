import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import RateStar from './RateStar';
import styles from './ReviewsSection.module.css';

const ReviewCards = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
    }
  };

  return (
    <motion.div 
      className={styles.review_card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Quote className={styles.quote_icon} />
      
      <div className={styles.review_content}>
        <div className={styles.review_rating}>
          <RateStar rate={data.rate} size={20} />
          <span className={styles.review_date}>{data.date}</span>
        </div>
        
        <p className={styles.review_text}>
          {data.description}
        </p>
        
        <div className={styles.reviewer_info}>
          <div 
            className={styles.user_avatar}
            style={{ backgroundColor: data.user_color }}
          >
            {data.user_initials}
          </div>
          <div className={styles.user_details}>
            <h4 className={styles.user_name}>{data.user_name}</h4>
            <p className={styles.user_title}>{data.user_profession}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCards;