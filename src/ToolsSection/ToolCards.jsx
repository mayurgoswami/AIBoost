import { motion } from 'framer-motion';
import { 
  ExternalLink,
  Share2,
  Bookmark,
  Settings
} from 'lucide-react';
import styles from './ToolsSection.module.css';

const ToolCards = ({ data }) => {
  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className={styles.tool_card}
      variants={cardVariants}
      whileHover="hover"
    >
      <div className={styles.tool_header}>
        <div className={styles.tool_icon}>
          {data.icon}
        </div>
        <div className={styles.tool_category}>
          {data.category.replace('_', ' ').toUpperCase()}
        </div>
      </div>
      
      <h3 className={styles.tool_name}>{data.name}</h3>
      <p className={styles.tool_description}>{data.description}</p>
      
      <div className={styles.tool_actions}>
        <button className={styles.action_button}>
          <ExternalLink size={18} />
        </button>
        <button className={styles.action_button}>
          <Share2 size={18} />
        </button>
        <button className={styles.action_button}>
          <Bookmark size={18} />
        </button>
        <button className={styles.action_button}>
          <Settings size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ToolCards;