import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard.page";
import Inventario from "../pages/Inventario/Inventario.page";
import Account from "../pages/Account/Account.page";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </>
  );
}
