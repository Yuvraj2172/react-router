import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section" >
      <Link to="/about" className="btn" style={{margin  : '12px'}}>
        About Page
      </Link>
      <Link to="/error" className="btn" style={{margin  : '12px'}} >Error Page</Link>
    </section>
  );
};
export default Home;
