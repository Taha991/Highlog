import  './GamingLibrary.css';
import {LibraryCard , SectionHeader , SectionWrapper} from "../../components/index";
import LibraryData from '../../Data/LibraryData';

function GamingLibrary() {
 
 const cards = LibraryData.map(card => {
  return <LibraryCard 
  key={card.id} img={card.img} title={card.title} category={card.category} date_added={card.date_added} hours={card.hours} up={card.up}
  />
 })
  return (
    <>
    <SectionWrapper>
      <SectionHeader>Gaming Library &#8594;{" "}
          <span style={{ color: "var(--color-primary)" }}>For Free</span></SectionHeader>
      <div className="library-cards">
        {cards}
      </div>
    </SectionWrapper>
  </>
  )
}

export default GamingLibrary;