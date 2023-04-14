import Promo from '../Promo/Promo';
const Main = ({ loggedIn }) => {
  return (
    <>
      <Promo loggedIn={loggedIn} />
    </>
  );
};

export default Main;
