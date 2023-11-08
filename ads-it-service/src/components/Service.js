import React from 'react';
import './Service.css'
import service from '../images/Service/service.png'

function Service(props) {
    return (
        <div>
            <div className="service-page">
                <div className="service-header">

                </div>
                <div className="services">
                    <h1 className='org'>We Work on </h1>
                    <div className="tech">
                        <ul>
                            <li>WEB DESIGNING</li>
                            <li>WEB DEVELOPMENT</li>
                            <li>STATIC WEBSITE</li>
                            <li>DYNAMIC WEBSITE</li>
                            <li>GRAPHIC DESIGN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;