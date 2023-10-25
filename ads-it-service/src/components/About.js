import React ,{useEffect} from 'react';
import './About.css';
import a from '../images/LOGO/ads logo black.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function About(props) {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div>
            <div className="about-page">
                <div className="about-header">

                </div>

                <div className="about-heading" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content-left" data-aos="fade-right" >
                                    <p>
                                    Welcome to ADS IT SERVICES , where innovation meets reliability. With a proven track record of delivering customized IT solutions tailored to your unique business objectives, we offer 24/7 support, cutting-edge technology, robust cybersecurity, and cost-effective services to ensure your success. Our client-centric approach, passion for technology, and commitment to security make us your trusted partner for all your IT needs. Contact [ADS IT SERVICES] today to leverage the power of technology and drive your business forward.
                                    </p>
                                      </div>
                            </div>
                            <div className="col-lg-5" >
                                <div className="content-right" data-aos="fade-left">
                                    <img src={a} alt="" width="100%" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about-heading1">
                    <div className="container">
                        <h1 className='org center'>What we do</h1>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content-left1" data-aos="fade-up-right">
                                    <p>
                                    At ADS IT SERVICE , we specialize in comprehensive IT services to streamline your business operations and drive success. Our services encompass managed IT solutions, tailored to your specific needs, ensuring the reliability and security of your systems. We offer network services to optimize connectivity and provide cloud solutions, data management, and hardware procurement, all designed to enhance efficiency. Our 24/7 support minimizes downtime, and we keep your team up to date through training and education programs. Trust ADS IT SERVICES to be your dedicated IT partner, delivering innovative, secure, and cost-effective services to fuel your growth and success.</p>
                                </div>
                            </div>
                            <div className="col-lg-5" data-aos="fade-up-left">
                                <div className="content-right1">
                                    <img src={a} alt="" width="100%" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="about-heading2">
                    <div className="container">
                        <h1 className='org center'>Why choose us</h1>
                        <div className="row">

                            <div className="col-lg-5" data-aos="flip-left">
                                <div className="content-left2">
                                    <img src={a} alt="" width="100%" />
                                </div>

                            </div>
                            <div className="col-lg-7">
                                <div className="content-right2" data-aos="flip-right" >
                                    <p>
                                    Choose us because we're not just an IT service provider; we're your dedicated technology partner. Our team of experienced experts goes above and beyond to understand your specific needs and deliver customized solutions that ensure your business's success. We pride ourselves on our 24/7 support, using cutting-edge technology, robust cybersecurity, and cost-effective services to keep your operations running smoothly. With a commitment to transparent communication, a focus on innovation, and a passion for technology, we stand out as the trusted choice for all your IT needs. Your growth and security are our top priorities, making [ADS IT SERVICES] the right partner to help you thrive in the digital age..</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about-team">
                    <h1 className='org center'>Meet our Team</h1>
                    <div className="container">

                    <OwlCarousel className='owl-theme' autoplay loop margin={10} items={4} nav responsive={
                        {
                            '1': {
                                items: 1
                            },
                            '1025': {
                                items: 4
                            }
                        }

                    }>
                        <div class='item'>
                            <div class="card" >
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" >
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" >
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" >
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>


                    </OwlCarousel>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default About;