import { lazy } from "react";

const Content = lazy(() => import("../profile/Content/Content"));
const NoMatch = lazy(() => import("../components/NoMatch/NoMatch"));
const LoginPage = lazy(() => import("../components/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../components/RegisterPage/RegisterPage"));
const CartPage = lazy(() => import("../components/CartPage/CartPage"));

const routes = [
  {
    path: "/",
    component: Content,
  },
  {
    path: "/:locale",
    component: Content,
  },
  {
    path: "/:locale/products",
    component: Content,
  },
  {
    path: "/:locale/products/:productPath",
    component: Content,
  },
  {
    path: "/:locale/products/:productPath/:productItemPath",
    component: Content,
  },
  {
    path: "/:locale/login",
    component: LoginPage,
  },
  {
    path: "/:locale/register",
    component: RegisterPage,
  },
  {
    path: "/:locale/cart",
    component: CartPage,
  },
  {
    path: "*",
    component: NoMatch,
  },
];

export default routes;
