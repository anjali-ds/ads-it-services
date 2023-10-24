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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.

                                        Animi iusto distinctio voluptates, ut dolore aut asperiores eveniet illo debitis esse temporibus in eum, saepe nihil laudantium corrupti excepturi pariatur rerum quisquam sed, alias repellendus. Eius molestias ullam dolores.</p>
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.

                                        Animi iusto distinctio voluptates, ut dolore aut asperiores eveniet illo debitis esse temporibus in eum, saepe nihil laudantium corrupti excepturi pariatur rerum quisquam sed, alias repellendus. Eius molestias ullam dolores.</p>
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta beatae saepe corporis, quia eveniet sint maiores earum maxime, ea explicabo, vitae corrupti necessitatibus! Obcaecati quibusdam repellat earum quasi voluptatum.

                                        Animi iusto distinctio voluptates, ut dolore aut asperiores eveniet illo debitis esse temporibus in eum, saepe nihil laudantium corrupti excepturi pariatur rerum quisquam sed, alias repellendus. Eius molestias ullam dolores.</p>
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