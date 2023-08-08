import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className='section'>
      <Link to="/" className="btn">
        Home Page
      </Link>

      <Link to="/error" className="btn" style={{margin: '12px'}} > Error Page</Link>
    </section>
  );
};
export default About;
