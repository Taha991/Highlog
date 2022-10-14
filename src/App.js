import "./App.css";

import {  Container } from "./components/index";

import { Hero , Header , Footer , MostPopular , GamingLibrary} from "./sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary />
      </Container>
      <Footer />
    </>
  );
};
export default App;
