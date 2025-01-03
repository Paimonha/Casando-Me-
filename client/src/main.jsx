import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import HomeLogin from './Pages/HomeLogin/HomeLogin'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Galeria from './Pages/Galeria/Galeria'
import Formulario from './Pages/Formulario/Formulario'
import Fornecedor from './Pages/Fornecedores/Fornecedor'
import Cerimonialista from './Pages/Cerimonialista/Cerimonialista'
import Sobre from './Pages/Sobre/Sobre';
import Admin from './Pages/Admin/Admin';
import AdminU from './Pages/Admin/AdminU/AdminU';
import AdminC from './Pages/Admin/AdminC/AdminC';
import Cadastroc from './Pages/Cadastro_C/CadastroC';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLogin />,
  },
  {
    path: "/cerimonialista",
    element: <Cerimonialista />
  },
  {
    path: "/fornecedor",
    element: <Fornecedor />
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/galeria",
    element: <Galeria />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/adminu",
    element: <AdminU />,
  },
  {
    path: "/adminc",
    element: <AdminC />,
  },
  {
    path: "/cadastroc",
    element: <Cadastroc />
  }
 

]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <RouterProvider router={router} />
   
  </StrictMode>
);

