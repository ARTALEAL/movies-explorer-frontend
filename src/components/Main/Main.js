import Promo from '../Promo/Promo';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
const Main = ({ loggedIn }) => {
  return (
    <>
      <Promo loggedIn={loggedIn} />
      <About />
      <Technologies />
    </>
  );
};

export default Main;
