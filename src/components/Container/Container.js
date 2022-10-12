import './Container.css';
import Hero from '../Hero/Hero'
  
const Container = (props) => {
  return(
    <div>
    {props.children}
    </div>
  )
}
export default Container;