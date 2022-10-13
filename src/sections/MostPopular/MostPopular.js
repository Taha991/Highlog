import './MostPopular.css';
import Fortnite from '../../assets/images/game-01.jpg'

const MostPopular = () => {
  return(
    <>
    <div className="section-wrapper">
      <div className="section-header">
        <h4>Most Popular</h4>
      </div>
      <div className='most-popular-items'>
        <div className='popular-item'>
          <div className='card-wrapper'>
            <img className='popular-img' src={Fortnite} />
            <div className='popular-content'>
              <h4 className='popular-title'>
                Fortnite <br/> 
                <span>Sandbox</span>
              </h4>
              <ul>
                <li><span>4.8</span></li>
                <li><span>2.3M</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MostPopular;