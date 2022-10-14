import "./MostPopular.css";
import {Card , SectionHeader} from "../../components/index";
import data from "../../data";


const MostPopular = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        title={item.title}
        info={item.info}
        rate={item.rate}
        view={item.view}
      />
    );
  });
  return (
    <>
      <div className="section-wrapper">
        <SectionHeader>Most Popular &#8594;{" "}
            <span style={{ color: "var(--color-primary)" }}>Right Now</span></SectionHeader>
        <div className="most-popular-items">
          {cards}
        </div>
      </div>

    </>
  );
};

export default MostPopular;

