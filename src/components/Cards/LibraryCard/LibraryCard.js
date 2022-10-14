import  './LibraryCard.css'

function LibraryCard(props) {
  return (
    <div className='library-card'>
      <ul>
        <li><img src={props.img} alt="" /></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Data Added</h4><span>{props.date_added}</span></li>
        <li><h4>Hours Played</h4><span>{props.hours}</span></li>
        <li><h4>Currently</h4><span>{props.up}</span></li>
        <div className='main-button'>
          <a href='/#'>Download</a> 
        </div>
      </ul>
    </div>
  )
}

export default LibraryCard