import { NavLink, useLocation } from "react-router";

export default function Routes() {
  const currentLocation = useLocation();

  let currentLocationName = "";

  if (currentLocation.pathname == "/") {
    currentLocationName = "Dashboard";
  } else if (currentLocation.pathname == "/inventario") {
    currentLocationName = "Inventario";
  }

  return (
    <>
      <nav className="col-5">
        <div className="routes js-routes">
          <p>
            <NavLink to={currentLocation.pathname}>
              {currentLocationName}
            </NavLink>
          </p>
        </div>
      </nav>
    </>
  );
}
