
import instImg1 from '../assets/instagram-1.jpg'
import instImg2 from '../assets/instagram-2.jpg'
import instImg3 from '../assets/instagram-3.jpg'
import instImg4 from '../assets/instagram-4.jpg'
import instImg5 from '../assets/instagram-5.jpg'
import instImg6 from '../assets/instagram-6.jpg'
const  Footer = () => {
    return (
        <>
        
            <footer className="section__container footer__container">
                <div className="footer__col">
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span><i className="ri-map-pin-2-fill"></i></span>
                        Chandina, Cumilla, Bangladesh
                    </p>
                    <p>
                        <span><i className="ri-mail-fill"></i></span>

                        armanmahim11@gmail.com

                    </p>
                    <p>
                        <span><i className="ri-phone-fill"></i></span>
                        +880 1685 757700
                    </p>
                </div>

                <div className="footer__col">
                    <h4>COMPANY</h4>
                    <a href="/">Home</a>
                    <a href="/aboutUs">About Us</a>
                    <a href="/contact">Work With Us</a>
                    <a href="/blog">Our Blogs</a>
                    <a href="/terms">Terms & Condition</a>
                </div>

                <div className="footer__col">
                    <h4>USEFUL LINK</h4>
                    <a href="/help">Help</a>
                    <a href="/orders/:orderId">Track Your Order</a>
                    <a href="/shop">Man</a>
                    <a href="/shop">Women</a>
                    <a href="/shop">Dresses</a>
                </div>


                <div className="footer__col">
                    <h4>INSTAGRAM</h4>
                    <div className="instagram__grid">
                        <img src={instImg1} alt="Instagram Image1" />
                        <img src={instImg2} alt="Instagram Image2" />
                        <img src={instImg3} alt="Instagram Image3" />
                        <img src={instImg4} alt="Instagram Image4" />
                        <img src={instImg5} alt="Instagram Image5" />
                        <img src={instImg6} alt="Instagram Image6" />
                    </div>
                </div>

            </footer>
            <div className='footer__bar'>
            © 2025 Her Haven. All Rights Reserved. Designed by Arman Hossain.
            </div>
        </>
    )
}

export default Footer