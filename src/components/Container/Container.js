import './Container.css';
import Hero from '../Hero/Hero'
  
const Container = (props) => {
  return(
    <div className='container main-container'>
    {props.children}
    </div>
  )
}
export default Container;