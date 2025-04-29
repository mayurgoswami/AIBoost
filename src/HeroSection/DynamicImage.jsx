import styles from './HeroSection.module.css';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageVariants = {
    enter: {
        opacity: 0,
        rotate: "45deg",
        scale: 0.8,
        y: 50
    },
    center: {
        opacity: 1,
        rotate: "0deg",
        scale: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    exit: {
        opacity: 0,
        rotate: "-15deg",
        scale: 0.8,
        y: -50,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

function DynamicImage(props) {
    let images = props.images;
    const [imageIndex, setImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    let NextImage = () => {
        setImageIndex(pre => ((pre + 1) % images.length));
    }

    let TogglePlayPause = () => setIsPlaying(!isPlaying);

    useEffect(() => {
        let interval = setInterval(() => {
            if (isPlaying) NextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className={styles.image_container}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={imageIndex}
                    src={images[imageIndex]}
                    className={styles.dynamic_image}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    onMouseEnter={TogglePlayPause}
                    onMouseLeave={TogglePlayPause}
                    alt="AI tool demonstration"
                />
            </AnimatePresence>
            <div className={styles.image_overlay}></div>
        </div>
    );
}

export default DynamicImage;























// // DynamicImage.jsx
// import styles from './HeroSection.module.css';
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const imageVariants = {
//     enter: {
//         opacity: 0,
//         rotate: "45deg",
//         scale: 0.8
//     },
//     center: {
//         opacity: 1,
//         rotate: "15deg",
//         scale: 1,
//         transition: {
//             duration: 0.5,
//             ease: "easeInOut"
//         }
//     },
//     exit: {
//         opacity: 0,
//         rotate: "-15deg",
//         scale: 0.8,
//         transition: {
//             duration: 0.5,
//             ease: "easeInOut"
//         }
//     }
// };

// function DynamicImage(props) {
//     let images = props.images;
//     const [imageIndex, setImageIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(true);

//     let NextImage = () => {
//         setImageIndex(pre => ((pre + 1) % images.length));
//     }

//     let TogglePlayPause = () => setIsPlaying(!isPlaying);

//     useEffect(() => {
//         let interval = setInterval(() => {
//             if (isPlaying) NextImage();
//         }, 2000);

//         return () => clearInterval(interval);
//     }, [isPlaying]);

//     return (
//         <div className={styles.image_container}>
//             <AnimatePresence mode="wait">
//                 <motion.img
//                     key={imageIndex}
//                     src={images[imageIndex]}
//                     className={styles.dynamic_image}
//                     variants={imageVariants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     onMouseEnter={TogglePlayPause}
//                     onMouseLeave={TogglePlayPause}
//                 />
//             </AnimatePresence>
//         </div>
//     );
// }

// export default DynamicImage;