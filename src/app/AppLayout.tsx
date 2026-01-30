import { CircleQuestionMark } from "lucide-react";
import Routes from "../components/Routes.component";
import Searchbar from "../components/Searchbar.component";
import Core from "../components/Core";
import AppRouter from "./AppRouter";
import Sidebar from "../components/Sidebar.component";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <>
      <div className="app-container">
        <ToastContainer />
        <Sidebar />
        <div className="main-container">
          <div className="grid">
            <header className="main-header row">
              <Routes />
              <Searchbar />
              <div className="header-btns col-1">
                <button type="button" className="btn">
                  <CircleQuestionMark />
                </button>
              </div>
            </header>
          </div>
          <Core>
            <AppRouter />
          </Core>
        </div>
      </div>
    </>
  );
}
