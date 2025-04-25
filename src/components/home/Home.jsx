
import './home.css'
import HomeInfo from './HomeInfo';
import HomeProfile from './HomeProfile';
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content ">
          <HomeInfo />
          <HomeProfile />
        </div>
      </div>
    </section>
  );
};

export default Home;
