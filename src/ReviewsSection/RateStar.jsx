import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const RateStar = ({ rate, size = 20 }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.span
          key={star}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Star
            size={size}
            fill={rate >= star ? '#FFD700' : 'none'}
            strokeWidth={rate >= star ? 0 : 1.5}
            color={rate >= star ? '#FFD700' : '#DDDDDD'}
          />
        </motion.span>
      ))}
    </div>
  );
};

export default RateStar;