import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section">
      <Link to="/about" className="btn">
        About Page
      </Link>
    </section>
  );
};
export default Home;
