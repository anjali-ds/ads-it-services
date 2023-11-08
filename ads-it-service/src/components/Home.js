import React from 'react';
import Carousels from './Carousel';
function Home(props) {
    return (
        <div>
            <Carousels/>
            <div className="container-fluid my-4">
    <div className="home_card">
      <div className="row">
        <div className="col-lg-4  my-2">
          <div className="home_card_img">
            <img src="/img/home cards/ext.jpg" alt="" height='300px' />
            <div className="home_img_text">
              <div className="home_img_text_align">
              <h2>WEBSITE DESIGN</h2>
              <p>Exterior design encompasses both physical structures as well as personal and artistic designs such as paint color, roof shape and material, decks, patios, gardens, and more.</p>
              <p className="card_read">Read more...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4  my-2">
          <div className="home_card_img">
            <img src="/img/home cards/int.jpg" alt="" height='300px' />
            <div className="home_img_text">
              <div className="home_img_text_align">
              <h2>WEBSITE DEVELOPMENT</h2>
              <p>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.</p>
              <p className="card_read">Read more...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4  my-2">
          <div className="home_card_img">
            <img src="/img/home cards/bui.jpg" alt="" height='300px' />
            <div className="home_img_text">
              <div className="home_img_text_align">
              <h2>GRAPHIC DESIGN</h2>
              <p>Building renovation is defined as the structural and technical restoration, or modernisation of one or several floors or even an entire existing structure.</p>
              <p className="card_read">Read more...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="home_choose">
      <div className="home_choose_heading">
        <h2>WHY CHOOSE US?</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="home_choose_img">
            <div className="row">
          <div className="col-lg-6">
            <img src="/img/home choose/home choose (3).jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="row">
            <div className="col-lg-12">
            <div className="home_choose_img_small_1">
            <img src="/img/home choose/home choose (2).jpg" alt="" />
            </div>
            </div>
            <div className="col-lg-12">
            <div className="home_choose_img_small_2">
            <img src="/img/home choose/home choose (1).jpg" alt="" />
            </div>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="home_realiability">
            <div className="row">
           
              <div className="col-lg-3">
              <div className="home_choose_icon">
              {/* <AiFillLike/> */}
              </div>
              </div>
              <div className="col-lg-9">
                <h3>REALIABILITY</h3>
                <p>We trust in our employees because we choose smart, experienced, and hard working professionals.</p>
              </div>
            </div>
          
          </div>
          <div className="home_expertise">
          <div className="row">
         
              <div className="col-lg-3">
              <div className="home_choose_icon">
             {/* < BiTime/> */}
              </div>
              </div>
              <div className="col-lg-9">
                <h3> EXPERTISE</h3>
                <p>We trust in our employees because we choose smart, experienced, and hard working professionals.</p>
              </div>
            </div>
          </div>
          <div className="home_quality">
          <div className="row">
         
              <div className="col-lg-3">
              <div className="home_choose_icon">
              {/* <IoDiamondSharp/> */}
              </div>
              </div>
              <div className="col-lg-9">
                <h3>QUALITY</h3>
                <p>We trust in our employees because we choose smart, experienced, and hard working professionals.</p>
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

export default Home;