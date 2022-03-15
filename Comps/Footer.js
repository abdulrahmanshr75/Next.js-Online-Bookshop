import {motion} from 'framer-motion';
const year = new Date()

const Footer = () => {
    return ( 
        <div className="footer">
                <h3 className="footerh3">All copyrights reserved @ Khawater Library <span>{year.getFullYear()}</span></h3>
                <p>Reach us at :</p>
                <div className="contact">
                <motion.a whileHover ={{rotate : 360, scale:1.3, damping:10}} transition={{type:"spring", stiffness: 100, duration: 4}} href="https://www.facebook.com/khwaterlibrary" target="_blank" ><i class="fab fa-facebook-square fa-3x"></i></motion.a>
                <motion.a whileHover ={{rotate : 360, scale:1.3, damping:10}} transition={{type:"spring", stiffness: 100, duration: 4}} href="https://www.instagram.com/khwater.library/" target="_blank"><i class="fab fa-instagram fa-3x"></i></motion.a>
                <motion.a whileHover ={{rotate : 360, scale:1.3, damping:10}} transition={{type:"spring", stiffness: 100, duration: 4}} href="http://m.me/khwaterlibrary" target="_blank"><i class="fab fa-facebook-messenger fa-3x"></i></motion.a>
                </div>
        </div>
    );
} 
export default Footer;