import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Check, X } from 'lucide-react';
import styles from './PlansSection.module.css';

const PlanCard = ({ title, amount, features, isPopular = false }) => {
  return (
    <motion.div 
      className={`${styles.plans_plan_box} ${isPopular ? styles.popular : ''}`}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {isPopular && (
        <div className={styles.popular_badge}>
          <Zap size={16} />
          <span>Most Popular</span>
        </div>
      )}
      
      <div className={styles.plan_name}>{title}</div>
      <div className={styles.plan_amount}>
        <DollarSign size={24} />
        <span>{amount}</span>
      </div>
      <div className={styles.plan_duration}>per month</div>
      
      <ul className={styles.plan_features_cointainer}>
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className={styles.plan_feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Check size={18} className={styles.feature_icon} />
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <motion.button 
        className={styles.plan_feature_btn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        SELECT PLAN
      </motion.button>
    </motion.div>
  );
};

export default PlanCard;














// import React from 'react';
// import { DollarSign } from 'lucide-react';
// import styles from './PlansSection.module.css';

// const PlanCard = (props) => {
//     const features = props.features.map((feature, index) => {
//         return <li key={index} className={styles.plan_feature}>{feature}</li>
//     });
    
    
//     return (
//         <div className={styles.plans_plan_box}>
//             <div className={styles.plan_name}>{props.title}</div>
//             <div className={styles.plan_amount}>
//                 <DollarSign />{props.amount}
//             </div>
//             <div className={styles.plan_duration}>per month</div>
//             <ul className={styles.plan_features_cointainer}>
//                 {features}
//             </ul>
//             <button className={styles.plan_feature_btn}>SELECT PLAN</button>
//         </div>
//     )
// }

// export default PlanCard;