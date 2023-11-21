import React ,{useEffect} from 'react';
import './Service.css'
import service from '../images/Service/service.png'
import a from '../images/Carousel/1.adaptive.png'
import icon from '../images/Service/icon.png'
import { AiFillPhone} from 'react-icons/ai';
import Aos from 'aos';

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum sequi soluta facilis minima quis laboriosam veniam, cum ipsam, ut assumenda aliquid consectetur dolores illo eum nihil consequatur obcaecati temporibus.
                        Perferendis error molestias rem voluptates vel, quaerat dicta. Nobis ullam quidem, libero praesentium distinctio laborum temporibus dolorum culpa, quaerat blanditiis vel pariatur perferendis consequuntur voluptatibus doloremque sed aspernatur deserunt recusandae.
                        Alias id tempore delectus, odit voluptate fuga velit accusantium dolorum maiores, officia voluptatum praesentium. Est, perspiciatis, esse dolorum amet in harum dolorem ipsam consectetur consequatur vitae suscipit, minus rem fugiat!
                        Deserunt animi vitae impedit maxime dolorem omnis alias eligendi. Vel dignissimos esse, itaque consequuntur iure laudantium cumque cupiditate consectetur. Expedita, consequuntur facilis autem officia tenetur ab aliquam suscipit perspiciatis cumque.
                        Totam nulla officiis consectetur aperiam ipsa harum explicabo possimus nihil magni? Dolorem iste dolores, soluta voluptatem inventore quibusdam tempora quo culpa beatae, dolor magnam molestiae, corrupti nisi possimus quidem tenetur.
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

                                                    
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                        <h5 class="scard-title org">Web Hosting</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

                                                    
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                        <h5 class="scard-title org">Domain Registration</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                        <h5 class="scard-title org">Static Website</h5>
                                                    </div>

                                                    
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

                                                    
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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