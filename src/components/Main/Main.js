import Promo from '../Promo/Promo';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
const Main = ({ loggedIn }) => {
  return (
    <>
      <Promo loggedIn={loggedIn} />
      <About />
      <Technologies />
      <Student />
      <Portfolio />
    </>
  );
};

export default Main;
