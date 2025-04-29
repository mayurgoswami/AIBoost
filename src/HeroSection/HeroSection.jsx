import styles from './HeroSection.module.css';
import image1 from '../assets/sec_img0.jpeg';
import image2 from '../assets/sec_img1.jpeg';
import image3 from '../assets/sec_img2.jpeg';
import image4 from '../assets/sec_img3.jpg';
import image5 from '../assets/sec_img4.jpg';
import DynamicImage from './DynamicImage';
import { motion } from 'framer-motion';

function HeroSection() {
    let images = [image1, image2, image3, image4, image5];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className={styles.hero_section} id='home'>
            <div className={styles.hero_section_info}>
                <motion.div 
                    className={styles.hero_content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className={styles.hero_slogen} variants={itemVariants}>
                        Explore 500+ AI Tools For Your <span className={styles.highlight}>Automation</span> and <span className={styles.highlight}>Innovation</span>!
                    </motion.h1>
                    <motion.p className={styles.hero_description} variants={itemVariants}>
                        Discover the most comprehensive collection of AI tools to streamline your workflow, 
                        enhance productivity, and drive innovation across all industries.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <button className={styles.hero_btn}>Get Started</button>
                        <button className={styles.secondary_btn}>Learn More</button>
                    </motion.div>
                </motion.div>
            </div>
            <div className={styles.hero_section_images}>
                <DynamicImage images={images}/>
            </div>
        </section>
    );
}

export default HeroSection;















// import styles from './HeroSection.module.css';
// import image1 from '../assets/sec_img0.jpeg';
// import image2 from '../assets/sec_img1.jpeg';
// import image3 from '../assets/sec_img2.jpeg';
// import image4 from '../assets/sec_img3.jpg';
// import image5 from '../assets/sec_img4.jpg';
// import DynamicImage from './DynamicImage';

// function HeroSection() {
//     let images = [image1, image2, image3, image4, image5];

//     return (
//         <section className={styles.hero_section} id='home'>
//             <div className={styles.hero_section_info}>
//                 <div className={styles.hero_slogen}>Explore 500+ AI Tools For Your Automation and Innovation!</div>
//                 <div className={styles.hero_description}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Commodi voluptates natus dolore ad nihil, explicabo odio
//                     consequatur facilis obcaecati labore, fugit consectetur,
//                     sequi ratione saepe tenetur architecto rerum maiores alias.
//                 </div>
//                 <button className={styles.hero_btn}>Get Started</button>
//             </div>
//             <div className={styles.hero_section_images}>
//                 <DynamicImage images={images}/>
//             </div>
//         </section>
//     );
// }

// export default HeroSection;