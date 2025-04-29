import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import ReviewCards from './ReviewCards';
import SetReview from './SetReview';
import styles from './ReviewsSection.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rate: 5,
      date: '10th Feb, 2023',
      description: 'This service has completely transformed our workflow. The AI tools are incredibly accurate and save us hours of work each week. The support team is also very responsive and helpful.',
      user_name: 'Sarah Johnson',
      user_profession: 'Marketing Director',
      user_initials: 'SJ',
      user_color: '#5b7cfa',
    },
    {
      id: 2,
      rate: 4.5,
      date: '15th Mar, 2023',
      description: 'Excellent service! The team was professional and delivered beyond our expectations. The custom AI models have given us a competitive edge in our industry.',
      user_name: 'Michael Chen',
      user_profession: 'Tech Entrepreneur',
      user_initials: 'MC',
      user_color: '#00feba',
    },
    {
      id: 3,
      rate: 4,
      date: '22nd Apr, 2023',
      description: 'Very impressed with the quality of results. We use it daily for content generation and data analysis. The pricing is fair for the value provided.',
      user_name: 'Emma Rodriguez',
      user_profession: 'Content Strategist',
      user_initials: 'ER',
      user_color: '#ff5bf1',
    },
  ]);

  const handleNewReview = (newReview) => {
    const reviewWithId = {
      ...newReview,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      }),
      user_initials: newReview.user_name.split(' ').map(n => n[0]).join(''),
      user_color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
    };
    setReviews([reviewWithId, ...reviews]);
  };

  return (
    <motion.section
      className={styles.reviews_section}
      id="reviews"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.section_container}>
        <motion.div className={styles.section_header} variants={itemVariants}>
          <h2 className={styles.section_title}>
            Trusted by <span>Innovators Worldwide</span>
          </h2>
          <p className={styles.section_subtitle}>
            Join thousands of satisfied users who transformed their workflow
          </p>
        </motion.div>

        <motion.div className={styles.reviews_grid} variants={containerVariants}>
          {reviews.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <ReviewCards data={review} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <SetReview onSubmit={handleNewReview} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReviewsSection;

























// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import PersonIcon from '../assets/person_icon.png';
// import ReviewCards from './ReviewCards';
// import SetReview from './SetReview';
// import styles from './ReviewsSection.module.css';

// const containerVariants = {
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

// // Helper to format the date with suffix
// const formatDate = (date) => {
//     const d = date.getDate();
//     const suffix = ['st', 'nd', 'rd'][(((d + 90) % 100) - 10) % 10 - 1] || 'th';
//     const day = `${d}${suffix}`;
//     const month = date.toLocaleString('default', { month: 'short' });
//     const year = date.getFullYear();
//     return `${day} ${month}, ${year}`;
// };

// function ReviewsSection() {
//     const [reviews, setReviews] = useState([
//         {
//             id: 1,
//             rate: 5,
//             date: '10th Feb, 2020',
//             description:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel maxime delectus omnis doloremque? Dolore nobis consectetur accusantium sunt impedit itaque suscipit at, omnis, delectus inventore repudiandae est debitis placeat!',
//             user_icon: PersonIcon,
//             user_name: 'Sarah Johnson',
//             user_profession: 'Marketing Director',
//         },
//         {
//             id: 2,
//             rate: 4.5,
//             date: '15th Mar, 2021',
//             description:
//                 'Excellent service! The team was professional and delivered beyond our expectations.',
//             user_icon: PersonIcon,
//             user_name: 'Michael Chen',
//             user_profession: 'Tech Entrepreneur',
//         },
//     ]);

//     const handleNewReview = (newReview) => {
//         const reviewWithId = {
//             ...newReview,
//             id: Date.now(),
//             date: formatDate(new Date()),
//             user_icon: PersonIcon,
//         };
//         setReviews([reviewWithId, ...reviews]);
//     };

//     return (
//         <motion.section
//             className={styles.reviews_section}
//             id="reviews"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={containerVariants}
//         >
//             <motion.div
//                 className={styles.reviews_title}
//                 variants={itemVariants}
//             >
//                 What People Say About Us
//             </motion.div>

//             <SetReview onSubmit={handleNewReview} />

//             <motion.div
//                 className={styles.reviews_cards}
//                 variants={containerVariants}
//             >
//                 {reviews.map((review) => (
//                     <motion.div key={review.id} variants={itemVariants}>
//                         <ReviewCards
//                             data={{
//                                 review_rate: review.rate,
//                                 review_date: review.date,
//                                 review_description: review.description,
//                                 review_user_icon: review.user_icon,
//                                 review_user_name: review.user_name,
//                                 review_user_profession: review.user_profession,
//                             }}
//                         />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.section>
//     );
// }

// export default ReviewsSection;
