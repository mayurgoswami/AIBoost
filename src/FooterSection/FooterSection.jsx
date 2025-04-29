import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.footer 
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.footer_container}>
        <div className={styles.footer_columns}>
          <motion.div className={styles.footer_column} variants={itemVariants}>
            <h3 className={styles.footer_logo}>⚡AI Boost</h3>
            <p className={styles.footer_description}>
              Empowering businesses with cutting-edge AI solutions to transform workflows and drive innovation.
            </p>
            <div className={styles.social_links}>
              <a href="#" aria-label="Twitter" className={styles.social_link}>
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.social_link}>
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className={styles.social_link}>
                <Github size={20} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.social_link}>
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.footer_column} variants={itemVariants}>
            <h4 className={styles.footer_heading}>Quick Links</h4>
            <ul className={styles.footer_links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#tools">AI Tools</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#plans">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div className={styles.footer_column} variants={itemVariants}>
            <h4 className={styles.footer_heading}>Resources</h4>
            <ul className={styles.footer_links}>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </motion.div>

          <motion.div className={styles.footer_column} variants={itemVariants}>
            <h4 className={styles.footer_heading}>Contact Info</h4>
            <ul className={styles.contact_info}>
              <li>
                <Mail size={18} />
                <span>support@aiboost.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>123 AI Street, Tech Valley, San Francisco, CA 94107</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className={styles.footer_bottom}
          variants={itemVariants}
        >
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} AI Boost. All rights reserved.
          </p>
          <div className={styles.legal_links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;