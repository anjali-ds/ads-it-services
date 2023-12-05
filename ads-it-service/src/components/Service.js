import React ,{useEffect} from 'react';
import './Service.css'
import service from '../images/Service/service.png'
import a from '../images/Carousel/1.adaptive.png'
import icon from '../images/Service/icon.png'
import { AiFillPhone} from 'react-icons/ai';
import Aos from 'aos';
import { FaIoxhost } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { FaRegRegistered } from "react-icons/fa";




function Service(props) {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div>
            <div className="service-page">
                <div className="service-header">

                </div>
                <div className="services">
                <div className="service-content">
                    <div className="row">
                        <div className="col-lg-4">
                        <img src={a} alt="" width="100%"/>

                        </div>
                        <div className="col-lg-8">
                        <p>IT services are crucial for businesses to operate smoothly and efficiently. Our IT services are designed to provide comprehensive webpage for businesses of all sizes. We understand the importance of technology and how it can impact your business, which is why we offer a range of services to meet your specific needs.
Our IT services include network management, cybersecurity, cloud computing, data backup and recovery, and IT consulting. Our experienced professionals are equipped to manage your network and ensure that all systems are running smoothly. We also offer cybersecurity solutions to protect your business from potential threats and breaches.
Cloud computing is becoming increasingly popular, and our team is well-versed in the latest cloud technology and web developments. We can help you to support to ensure that your business is running efficiently. Data backup and recovery is also critical for businesses to ensure that all important information is protected and recoverable in case of an emergency.
Our IT consulting services are designed to help you make informed decisions about your technology. We can provide guidance on hardware and software solutions, as well as offer insights into the latest trends and developments in the industry.
At our company, we pride ourselves on providing reliable and efficient IT services to businesses of all sizes. Contact us today to learn more about how we can help your business thrive with our IT
 </p>
                        </div>
                    </div>
                        
                    </div>
                    <h1 className='org'>Service We Offer </h1>
                    
                    <div className="tech">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="service-card " data-aos="flip-left">
                                        <div className="card">
                                        
                                            <img class="card-img-top" src={a} alt="Card image cap" height="200px" />
                                                <div class="card-body">
                                                    <div className="shead">
                                                        <div className="sicon">
                                                            <img src={icon} alt="" height="50px" />
                                                        </div>
                                                        <h5 class="scard-title org">Web Designing</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">Web design is the creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience. Appearance and design are incorporated as vital elements whether you’re designing a website, mobile app or maintaining content on a web page.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-card " data-aos="flip-left">
                                        <div className="card">
                                        
                                            <img class="card-img-top" src={a} alt="Card image cap" height="200px" />
                                                <div class="card-body">
                                                    <div className="shead">
                                                        <div className="sicon">
                                                            <FaIoxhost alt="" height="100px"/> 
                                                        </div>
                                                        <h5 class="scard-title org">Web Hosting</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">A hosting provider allocates space on a web server for website to store its files, they are hosting a website. It makes the files that form a website available for viewing online.Every website you’ve ever visited is hosted on a server.In a nutshell, the process of renting or buying space to website on the WWW. </p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-card " data-aos="flip-left">
                                        <div className="card">
                                        
                                            <img class="card-img-top" src={a} alt="Card image cap" height="200px" />
                                                <div class="card-body">
                                                    <div className="shead">
                                                        <div className="sicon">
                                                            <img src={icon} alt="" height="50px" />
                                                        </div>
                                                        <h5 class="scard-title org">Graphic Design</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">Graphic designers work to communicate ideas in a visual format, guiding perception and informing their audience. Most graphic designers work on behalf of a client or company, creating designs to satisfy specific objectives. Graphic designers are also often considered artists.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-card " data-aos="flip-left">
                                        <div className="card">
                                        
                                            <img class="card-img-top" src={a} alt="Card image cap" height="200px" />
                                                <div class="card-body">
                                                    <div className="shead">
                                                        <div className="sicon">
                                                           
                                                            <FaRegRegistered alt="" height="100px" />

                                                        </div>
                                                        <h5 class="scard-title org">Domain Registration</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">Domain name registration is the act of reserving a name on the Internet for a certain period, usually one year. It is important to know that this domain will remain yours for as long as you renew it and there is no way to purchase a domain name forever.Domain name registration is necessary for a web service.</p>

                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-card " data-aos="flip-left">
                                        <div className="card">
                                        
                                            <img class="card-img-top" src={a} alt="Card image cap" height="200px" />
                                                <div class="card-body">
                                                    <div className="shead">
                                                        <div className="sicon">
                                                        <TiHtml5 alt="" height="400px" width="300px"/>

                                                        </div>
                                                        <h5 class="scard-title org">Static Website</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">A static website is made up of a fixed number of pre-built files stored on a web server. These files are written in HTML, CSS, and JavaScript, which are called “client-side” languages.During this exchange, the web server does not alter the files before they’re shipped to the user, so the web page will look the same who requests it.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-card " data-aos="flip-left">
                                        <div className="card">
                                        
                                            <img class="card-img-top" src={a} alt="Card image cap" height="200px" />
                                                <div class="card-body">
                                                    <div className="shead">
                                                        <div className="sicon">
                                                            <img src={icon} alt="" height="50px" />
                                                        </div>
                                                        <h5 class="scard-title org">Dynamic Website</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">A dynamic website presents different information to different visitors. The content that a visitor sees can be determined by several factors, such as their location, local time, settings and preferences, and/or actions they’re taken on the website (e.g., shopping habits), making for a more tailored and interactive</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;