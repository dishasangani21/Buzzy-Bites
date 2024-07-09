import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__about us-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">“EXCELLENT FOOD, EXCELLENT SERVICE”  Our business specializes in traditional world cuisine in a family atmosphere, Indian, Chinese, Greek, Italian, Russian, American, Seafoods, Cocktails.
        We offer friendly and positive work environment. We treat our customers like our family.
        We provide good quality and freshly made food from our kitchen. Food is made to perfection. Our team of chefs are well trained. Our restaurant is open planned. We celebrate people, share receipts, and most of all we have fun.
        We wish you would have a wonderful experience at our restaurant.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our restaurant was established in the year 1992 And celebrating its 30th year anniversary this year. We have had over 3000 satisfied customers who are always eager to visit again. people always trust us because nothing goes wrong. satisfied customers bring their friends and relatives
        to buzzy bytes to have a memorable experience, thereby growing the buzzy bytes family.we will continue to bring smiles to people as long as people walk through the doors of our restaurant.we are committed to upholding the standard that we have upheld for the last 30 glorious years.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;