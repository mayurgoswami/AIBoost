import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  MessageSquare
} from 'lucide-react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
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
    hidden: { y: 30, opacity: 0 },
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
    <motion.section 
      id='contact'
      className={styles.contact_section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.section_container}>
        <motion.div className={styles.section_header} variants={itemVariants}>
          <h2 className={styles.section_title}>
            Get In <span>Touch</span>
          </h2>
          <p className={styles.section_subtitle}>
            Have questions or want to discuss a project? Reach out to our team.
          </p>
        </motion.div>

        <div className={styles.contact_content}>
          <motion.div className={styles.contact_info} variants={itemVariants}>
            <div className={styles.info_item}>
              <div className={styles.info_icon}>
                <Mail size={24} />
              </div>
              <div className={styles.info_text}>
                <h3>Email Us</h3>
                <p>support@aiboost.com</p>
                <a href="mailto:support@aiboost.com" className={styles.info_link}>
                  Send Message <Send size={16} />
                </a>
              </div>
            </div>

            <div className={styles.info_item}>
              <div className={styles.info_icon}>
                <Phone size={24} />
              </div>
              <div className={styles.info_text}>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <a href="tel:+15551234567" className={styles.info_link}>
                  Call Now <Send size={16} />
                </a>
              </div>
            </div>

            <div className={styles.info_item}>
              <div className={styles.info_icon}>
                <MapPin size={24} />
              </div>
              <div className={styles.info_text}>
                <h3>Visit Us</h3>
                <p>123 AI Street, Tech Valley</p>
                <p>San Francisco, CA 94107</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.info_link}
                >
                  Get Directions <Send size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className={styles.contact_form}
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.form_group}>
              <label htmlFor="name" className={styles.form_label}>
                <User size={18} />
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                className={styles.form_input}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.form_label}>
                <Mail size={18} />
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                className={styles.form_input}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="subject" className={styles.form_label}>
                <MessageSquare size={18} />
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                className={styles.form_input}
                placeholder="How can we help?"
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="message" className={styles.form_label}>
                <MessageSquare size={18} />
                Your Message
              </label>
              <textarea 
                id="message" 
                className={styles.form_textarea}
                rows="5"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={styles.submit_button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;