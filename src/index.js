import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";

// store
import { Provider } from "react-redux";
import { store } from "./store";

// component
const Cart = React.lazy(() => import("./scenes/Cart"));
const Admin = React.lazy(() => import("./admin/Admin"));
const Home = React.lazy(() => import("./scenes/Home"));
const Editor = React.lazy(() => import("./layouts/editor"));
const Viewer = React.lazy(() => import("./layouts/viewer"));
const Checkout = React.lazy(() => import("./scenes/Checkout"));
const NotFound = React.lazy(() => import("./scenes/NotFound"));
const ProductList = React.lazy(() => import("./scenes/ProductList"));
const ProductDetail = React.lazy(() => import("./scenes/ProductDetail"));
const Confirmation = React.lazy(() => import("./scenes/Confirmation"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Viewer />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "products/page/:pageNum",
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "checkout/success",
        element: <Confirmation />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Editor />,
  },

  {
    path: "/admin",
    element: <Admin />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
