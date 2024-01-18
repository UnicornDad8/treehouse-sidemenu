import { useRouteError } from "react-router-dom";
import logo from "./treehouse-png.png";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src={logo} alt="logo" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
