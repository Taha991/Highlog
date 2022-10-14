 import {BsFillBrightnessHighFill} from 'react-icons/bs';
 import {FaDownload} from 'react-icons/fa';
 import './Card.css' ;
 const Card = (props) => {

  return(
    <>
    <div className='most-popular-item'>
      <div className='card-wrapper'>
        <img className='popular-img' src={props.coverImg} />
        <div className='popular-content'>
          <h4 className='popular-title'>
            {props.title} <br/> 
            <span>{props.info}</span>
          </h4>
          <ul>
            <li className="popular-info"><span style={{"color":"var(--color-icons)"}}><BsFillBrightnessHighFill/></span> {props.rate}</li>
            <li className="popular-info"><span style={{"color" : "var(--color-primary)"}}><FaDownload/></span> {props.view}</li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Card;