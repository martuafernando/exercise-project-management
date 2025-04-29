import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { BaseLayout } from "../layouts/BaseLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<BaseLayout />}>  
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}