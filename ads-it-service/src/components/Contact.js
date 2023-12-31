import React from 'react';
import './Contact.css'

import { BiSolidLocationPlus} from 'react-icons/bi';
import { MdEmail} from 'react-icons/md';
import { AiFillPhone} from 'react-icons/ai';

function Contact(props) {
    return (
        <div>
           <section id="contact" class="contact">
            <div class="container" >

<div class="section-title">
  <h2>Contact</h2>
  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
</div>

<div class="row">

  <div class="col-lg-5 d-flex align-items-stretch">
    <div class="info">
      <div class="address">
        <i class="bi bi-geo-alt"><BiSolidLocationPlus/></i>
        <h4>Location:</h4>
        <p>sector 51 noida,up</p>
      </div>

      <div class="email">
        <i class="bi bi-envelope"><MdEmail/></i>
        <h4>Email:</h4>
        <p>adsitservice@gmail.com</p>
      </div>

      <div class="phone">
        <i class="bi bi-phone"><AiFillPhone/></i>
        <h4>Call:</h4>
        <p>7056212117</p>
      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5176356006327!2d77.37114199999999!3d28.58424405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e324607ba3%3A0x61706bba72533f55!2sRama%20Celebration!5e0!3m2!1sen!2sin!4v1699426697004!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5176356006327!2d77.37114199999999!3d28.58424405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e324607ba3%3A0x61706bba72533f55!2sRama%20Celebration!5e0!3m2!1sen!2sin!4v1699426697004!5m2!1sen!2sin" width="100%" frameborder="0"  allowfullscreen></iframe>
    </div>

  </div>

  <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="name">Your Name</label>
          <input type="text" name="name" class="form-control" id="name" required/>
        </div>
        <div class="form-group col-md-6">
          <label for="name">Your Email</label>
          <input type="email" class="form-control" name="email" id="email" required/>
        </div>
      </div>
      <div class="form-group">
        <label for="name">Subject</label>
        <input type="text" class="form-control" name="subject" id="subject" required/>
      </div>
      <div class="form-group">
        <label for="name">Message</label>
        <textarea class="form-control" name="message" rows="10" required></textarea>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div class="text-center"><button type="submit">Send Message</button></div>
    </form>
  </div>

</div>

</div>
</section>
        </div>
    );
}

export default Contact;