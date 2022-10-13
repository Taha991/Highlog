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
            <li className="popular-info"><span>{props.rate}</span></li>
            <li className="popular-info"><span>{props.view}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Card;