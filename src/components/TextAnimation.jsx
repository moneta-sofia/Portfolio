import { motion } from "framer-motion"

const TextAnimation = ({ text }) => {
    return (
        <motion.div>
            {text.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{opacity:1, transition: {duration: 0.2, delay: index * 0.1 }}}
                    viewport={{once:true}}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
}

export default TextAnimation;