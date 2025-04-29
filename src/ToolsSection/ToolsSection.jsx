import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Image, 
  MessageSquare, 
  Globe, 
  Zap,
  ArrowRight
} from 'lucide-react';
import ToolCards from './ToolCards';
import styles from './ToolsSection.module.css';

const ToolsSection = () => {
  const tools = [
    { 
      name: 'Stack Overflow', 
      category: 'content',
      description: 'AI-powered coding assistance and knowledge base',
      icon: <Code size={24} />
    },
    { 
      name: 'Quora', 
      category: 'content',
      description: 'Intelligent Q&A platform with AI moderation',
      icon: <MessageSquare size={24} />
    },
    { 
      name: 'ChatGPT', 
      category: 'chat_bot',
      description: 'Advanced conversational AI for any task',
      icon: <MessageSquare size={24} />
    },
    { 
      name: 'X AI', 
      category: 'chat_bot',
      description: 'Real-time AI assistant for research',
      icon: <MessageSquare size={24} />
    },
    { 
      name: 'Img AI', 
      category: 'image',
      description: 'Generate stunning visuals with text prompts',
      icon: <Image size={24} />
    },
    { 
      name: 'Canva AI', 
      category: 'image',
      description: 'Design professional graphics effortlessly',
      icon: <Image size={24} />
    },
    { 
      name: 'Wix Studio', 
      category: 'website',
      description: 'AI-powered website builder',
      icon: <Globe size={24} />
    },
    { 
      name: 'Figma AI', 
      category: 'website',
      description: 'Smart design collaboration tools',
      icon: <Globe size={24} />
    },
  ];

  const [filteredTools, setFilteredTools] = useState(tools);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilter = (category) => {
    setActiveFilter(category);
    const newFiltered = category === 'all' 
      ? tools 
      : tools.filter(tool => tool.category === category);
    setFilteredTools(newFiltered);
  };

  const filterOptions = [
    { label: "All Tools", category: "all", icon: <Zap size={16} /> },
    { label: "Content", category: "content", icon: <Code size={16} /> },
    { label: "Image", category: "image", icon: <Image size={16} /> },
    { label: "Website", category: "website", icon: <Globe size={16} /> },
    { label: "ChatBot", category: "chat_bot", icon: <MessageSquare size={16} /> },
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
      className={styles.tools_section} 
      id='tools'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.section_container}>
        <motion.div className={styles.section_header} variants={itemVariants}>
          <h2 className={styles.section_title}>
            Powerful AI <span>Tools</span> for Every Need
          </h2>
          <p className={styles.section_subtitle}>
            Access our curated collection of cutting-edge AI solutions
          </p>
        </motion.div>

        <motion.div className={styles.filter_container} variants={itemVariants}>
          {filterOptions.map((opt) => (
            <motion.button
              key={opt.category}
              className={`${styles.filter_button} ${activeFilter === opt.category ? styles.active : ''}`}
              onClick={() => handleFilter(opt.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {opt.icon}
              {opt.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className={styles.tools_grid} variants={containerVariants}>
          <AnimatePresence>
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.name + index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <ToolCards data={tool} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className={styles.cta_container} variants={itemVariants}>
          <motion.a 
            href="#contact" 
            className={styles.cta_button}
            whileHover={{ x: 5 }}
          >
            Request Custom Tool <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ToolsSection;