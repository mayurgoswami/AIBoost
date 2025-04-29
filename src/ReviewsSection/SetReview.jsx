import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ReviewsSection.module.css';
import { Star } from 'lucide-react';

function SetReview({ onSubmit }) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0 || !review.trim()) return;

        setIsSubmitting(true);

        const newReview = {
            rate: rating,
            description: review,
            user_name: name || 'Anonymous',
            user_profession: profession || 'Customer'
        };

        onSubmit(newReview);

        setRating(0);
        setReview('');
        setName('');
        setProfession('');
        setIsSubmitting(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className={styles.set_review_container}
            initial="hidden"
            whileInView='visible'
            variants={containerVariants}
            transition={{ delay: 0.3 }}
        >
            <motion.h3 className={styles.set_review_title} variants={itemVariants}>Share Your Experience</motion.h3>
            <motion.form onSubmit={handleSubmit} className={styles.review_form} variants={itemVariants}>
                <div className={styles.rating_input}>
                    <label>Your Rating:</label>
                    <div className={styles.star_rating}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={styles.star_button}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                <Star
                                    size={30}
                                    fill={(hoverRating || rating) >= star ? '#FFD700' : 'none'}
                                    strokeWidth={(hoverRating || rating) >= star ? 0 : 1.5}
                                    color={(hoverRating || rating) >= star ? '#FFD700' : '#DDDDDD'}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.form_group}>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write your review here..."
                        required
                        className={styles.review_textarea}
                    />
                </div>

                <div className={styles.user_info_inputs}>
                    <div className={styles.form_group}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name (optional)"
                            className={styles.name_input}
                        />
                    </div>

                    <div className={styles.form_group}>
                        <input
                            type="text"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            placeholder="Your profession (optional)"
                            className={styles.profession_input}
                        />
                    </div>
                </div>

                <motion.button
                    type="submit"
                    className={styles.submit_button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || rating === 0 || !review.trim()}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </motion.button>
            </motion.form>
        </motion.div>
    );
}

export default SetReview;