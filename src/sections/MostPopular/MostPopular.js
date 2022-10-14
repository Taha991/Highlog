import "./MostPopular.css";
import {PopularCard , SectionHeader , SectionWrapper} from "../../components/index";
import data from "../../Data/PopularData";


const MostPopular = () => {
  const cards = data.map((item) => {
    return (
      <PopularCard
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
      <SectionWrapper>
        <SectionHeader>Most Popular &#8594;{" "}
            <span style={{ color: "var(--color-primary)" }}>Right Now</span></SectionHeader>
        <div className="most-popular-items">
          {cards}
        </div>
      </SectionWrapper>

    </>
  );
};

export default MostPopular;

