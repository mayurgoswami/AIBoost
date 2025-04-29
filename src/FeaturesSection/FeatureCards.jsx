// FeatureCards.jsx
import styles from './FeaturesSection.module.css';
import { motion } from 'framer-motion';
import { BriefcaseBusinessIcon, LucideScreenShare, CircleDollarSign, LayersIcon } from 'lucide-react';

const cardVariants = {
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function FeatureCards(props) {
  const getIcon = () => {
    if (props.icon == 'market_image') {
      return <LucideScreenShare/>
    }
    
    else if (props.icon == 'busniess_image') {
      return <BriefcaseBusinessIcon/>
    }

    else if (props.icon == 'finance_image') {
      return <CircleDollarSign/>
    }

    else {
      return <LayersIcon/>
    }
  }
  
  
  return (
    <motion.div 
      className={styles.feature_card}
      whileHover="hover"
      variants={cardVariants}
    >
      <div className={styles.feature_icon_container}>
        {getIcon()}
      </div>
      <motion.div 
        className={styles.feature_title}
        whileHover={{ color: "var(--primary-color)" }}
      >
        {props.title}
      </motion.div>
      <div className={styles.feature_description}>{props.description}</div>
    </motion.div>
  )
}

export default FeatureCards;