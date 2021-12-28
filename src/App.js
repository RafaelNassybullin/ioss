import './App.css';
import imgBG from './assets/bg.jpg'
import message from './assets/message.jpg'
import {motion} from "framer-motion";

const App = () => {
    const AnimMessage = {
        hidden: {
            opacity: 0,
            scale: 0.7,
            transition: {
                duration: .5,
            }
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: .5,
            }
        },
    }
    const AnimLogo = {
        hidden: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.25,
                delay: 0.45
            }
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.25,
                delay: 0.45
            }
        },
    }
    const AnimTitle = {
        hidden: {
            y: 14,
            transition: {
                duration: 0.25,
                delay: 0.45
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.25,
                delay: 0.45
            }
        },
    }
    const AnimText = {
        hidden: {
            y: 12,
            opacity: 0,
            transition: {
                duration: 0.25,
                delay: 0.45
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
                delay: 0.45
            }
        },
    }
    const arr = ['Remix', ' and', ' make', ' it', ' shine', '☀️'];

    return (
        <>
            <div className="wrapper">
                <div className="image-bg">
                    <img src={imgBG} alt=""/>

                    <motion.div variants={AnimMessage}
                                initial="hidden"
                                animate="visible"
                                className="message">
                        <div className="top-name-message">
                            <div className="light">
                                <motion.div className="logo"
                                            variants={AnimLogo}
                                            initial="hidden"
                                            animate="visible"
                                >
                                    <img src={message} alt=""/>
                                </motion.div>
                                <div className="h2">
                                    <motion.p
                                        variants={AnimTitle}
                                        initial="hidden"
                                        animate="visible"
                                    >MESSAGES
                                    </motion.p>
                                </div>
                            </div>
                            <div className="right">now</div>
                        </div>
                        <div className="inner-message">
                            <motion.h3
                                variants={AnimText}
                                initial="hidden"
                                animate="visible"
                                className="title-message">Rafael Team
                            </motion.h3>
                            <motion.p>
                                {arr.map((item, i) => (
                                    <motion.div className='message-bottom-text'
                                                initial={{y: 12, opacity: 0}}
                                                animate={{y: 0, opacity: 1}}
                                                transition={{ease: "easeOut", duration: 0.3, delay: i * 0.2}}
                                    >{item}</motion.div>
                                ))}
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default App;
