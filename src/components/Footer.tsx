import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer" style={{padding: "10rem 0rem"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui illo esse labore numquam quaerat blanditiis hic quae eaque. Delectus suscipit quo velit minima architecto optio officia quas, voluptatem quae?</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href='#'>Html</a></li>
                <li><a href="#">Css</a></li>
                <li><a href="#">React</a></li>
                <li><a href="#">Redux</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2023 All Rights Reserved by 
                <a href="#"> EmrahMrgl</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><FacebookIcon /></a></li>
                <li><a className="twitter" href="#"><TwitterIcon /></a></li>
                <li><a className="linkedin" href="#"><LinkedInIcon /></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer