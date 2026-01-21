import SidebarButton from "./SidebarButton.component";

import {
  List,
  Scale,
  Settings,
  ShoppingCart,
  SquareChartGantt,
  SquareChevronLeft,
  SquareUserRound,
} from "lucide-react";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <nav>
          <header className="nav-header">
            <div className="header-container">
              <h1>Mini-CMS</h1>
              <SidebarButton
                cssClass="btn"
                icon={<SquareChevronLeft />}
                type="button"
              />
            </div>
          </header>
          <menu className="nav-menu">
            <ul className="menu-list">
              <li>
                <SidebarButton
                  cssClass="btn"
                  path="/"
                  icon={<SquareChartGantt />}
                  label="Dashboard"
                />
              </li>
              <li>
                <SidebarButton
                  cssClass="btn"
                  path="inventario"
                  icon={<List />}
                  label="Inventario"
                />
              </li>
              <li>
                <SidebarButton
                  cssClass="btn"
                  path="negozio"
                  icon={<ShoppingCart />}
                  label="Negozio"
                />
              </li>
              <li>
                <SidebarButton
                  cssClass="btn"
                  path="bilancio"
                  icon={<Scale />}
                  label="Bilancio"
                />
              </li>
            </ul>
            <ul className="menu-settings">
              <li>
                <SidebarButton
                  cssClass="btn"
                  path="impostazioni"
                  icon={<Settings />}
                  label="Impostazioni"
                />
              </li>
              <li>
                <SidebarButton
                  cssClass="btn"
                  path="account"
                  icon={<SquareUserRound />}
                  label="Account"
                />
              </li>
            </ul>
          </menu>
        </nav>
      </div>
    </>
  );
}
