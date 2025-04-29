import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Zap, 
  Code, 
  ShieldCheck,
  Clock,
  Globe
} from 'lucide-react';
import styles from './FeaturesSection.module.css';

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const features = [
  {
    icon: <BarChart3 size={32} />,
    title: 'Advanced Analytics',
    description: 'Get real-time insights with our powerful analytics dashboard that helps you make data-driven decisions.',
    color: '#5b7cfa'
  },
  {
    icon: <Zap size={32} />,
    title: 'Lightning Fast',
    description: 'Experience sub-second response times with our optimized AI models and global CDN network.',
    color: '#00feba'
  },
  {
    icon: <Code size={32} />,
    title: 'Developer Friendly',
    description: 'Comprehensive API documentation and SDKs for all major programming languages.',
    color: '#ff5bf1'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance with industry security standards.',
    color: '#3a5bd9'
  },
  {
    icon: <Clock size={32} />,
    title: '24/7 Support',
    description: 'Our expert team is available around the clock to assist you with any issues.',
    color: '#00c9a7'
  },
  {
    icon: <Globe size={32} />,
    title: 'Global Infrastructure',
    description: 'Deployed across multiple regions for maximum availability and low latency worldwide.',
    color: '#5b7cfa'
  }
];

function FeaturesSection() {
  return (
    <motion.section 
      id='features'
      className={styles.features_section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.section_container}>
        <motion.div className={styles.section_header} variants={itemVariants}>
          <h2 className={styles.section_title}>
            Powerful Features for <span>Modern Teams</span>
          </h2>
          <p className={styles.section_subtitle}>
            Everything you need to accelerate your workflow and boost productivity
          </p>
        </motion.div>

        <div className={styles.features_grid}>
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

const FeatureCard = ({ icon, title, description, color }) => {
  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className={styles.feature_card}
      whileHover="hover"
      variants={cardVariants}
      style={{ '--accent-color': color }}
    >
      <div className={styles.feature_icon_container}>
        <motion.div 
          className={styles.icon_wrapper}
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          {icon}
        </motion.div>
      </div>
      <h3 className={styles.feature_title}>{title}</h3>
      <p className={styles.feature_description}>{description}</p>
    </motion.div>
  );
};

export default FeaturesSection;