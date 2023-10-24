import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>page not found :(</h1>
      <h2>
        <Link to="/">Return to home</Link>
      </h2>
    </div>
  );
}

export default PageNotFound;
