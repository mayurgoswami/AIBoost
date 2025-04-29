import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlanCard from './PlanCard';
import styles from './PlansSection.module.css';

const PlansSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: 'BASIC',
      amount: isAnnual ? '8.90' : '10.90',
      features: [
        "10 Prompts/Day",
        "Standard Tools",
        "Email Support",
        "Watermarked Output",
        "Limited Storage",
        "Basic Stats"
      ]
    },
    {
      title: 'STARTUP',
      amount: isAnnual ? '59.90' : '79.90',
      features: [
        "1,000 Prompts/Month",
        "Advanced Models",
        "Team Access (5)",
        "API Access",
        "Custom Branding",
        "Data Export"
      ],
      isPopular: true
    },
    {
      title: 'ENTERPRISE',
      amount: isAnnual ? '299.90' : '400.90',
      features: [
        "Unlimited Prompts",
        "Custom Models",
        "Team Access (Unlimited)",
        "Dedicated API",
        "White-Labeling",
        "Advanced Analytics",
        "Priority Support",
        "Dedicated Account Manager"
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id='plans' className={styles.plans_section}>
      <motion.div 
        className={styles.plans_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className={styles.plans_header} variants={itemVariants}>
          <h2 className={styles.plans_title}>
            Make Your Business More Innovative With <span>Premium Plans</span>
          </h2>
          <p className={styles.plans_subtitle}>
            Choose the perfect plan for your needs. Scale up or down as needed.
          </p>
          
          <div className={styles.billing_toggle}>
            <span className={!isAnnual ? styles.active : ''}>Monthly</span>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={isAnnual ? styles.active : ''}>
              Annual <span className={styles.discount}>(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <motion.div className={styles.plans_grid} variants={itemVariants}>
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              amount={plan.amount}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PlansSection;























// import React from 'react';
// import PlanCard from './PlanCard';
// import styles from './PlansSection.module.css';
// import { motion } from 'motion/react';

// const PlansSection = () => {
//   const plans = [
//     {
//       title: 'BASIC',
//       amount: '10.90',
//       features: [
//         "10 Prompts/Day",
//         "Standard Tools",
//         "Email Support",
//         "Watermarked Output",
//         "Limited Storage",
//         "Basic Stats"
//       ]
//     },
//     {
//       title: 'STARTUP',
//       amount: '79.90',
//       features: [
//         "1,000 Prompts/Month",
//         "Advanced Models",
//         "Team Access (5)",
//         "API Access",
//         "Custom Branding",
//         "Data Export"
//       ]
//     },
//     {
//       title: 'ENTERPRISE',
//       amount: '400.90',
//       features: [
//         "Unlimited Prompts",
//         "Custom Models",
//         "Team Access (Unlimited)",
//         "Dedicated API",
//         "White-Labeling",
//         "Advanced Analytics"
//       ]
//     },
//   ];

//   const monthly_plan_cards = plans.map((plan, index) => {
//     return <PlanCard key={index} title={plan.title} amount={plan.amount} features={plan.features}/>
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2,
//             when: 'beforeChildren',
//         },
//     },
// };

// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5,
//             ease: 'easeOut',
//         },
//     },
// };

//   return (
//     <motion.section id='plans' variants={containerVariants} initial='hidden' whileInView='visible'>
//       <motion.div className={styles.plans_title} variants={itemVariants}>Make Your Bussiness More Innovative With Premium Plans</motion.div>
//       <motion.div className={styles.plans_plan_cointainer} variants={itemVariants}>
//         {monthly_plan_cards}
//       </motion.div>
//     </motion.section>
//   )
// }

// export default PlansSection;