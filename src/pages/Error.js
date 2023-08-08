import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <h4>Page not found.</h4>
      <Link to="/" className="btn" >Home Page</Link>
    </section>
  );
};
export default Error;
