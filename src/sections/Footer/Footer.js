import './Footer.css';
import {FaInstagram} from 'react-icons/fa'
  
const Footer = () => {
  return(
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <p>Copyright © <a href='#'>Nossel Gaming</a> All rights reserved.
            <br/> Design: <a href='https://www.instagram.com/taha.mohamedt/'>Taha  <FaInstagram/></a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;