import Home from "./componant/afterLogin/index.jsx";
import LayOut from "./componant/layout/index.jsx";
import Login from "./componant/login";
import Eroor from "./componant/error";
import Singup from "./componant/singup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import Store from "./componant/store/index.jsx";
import Index from "./componant/text/index.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <Eroor />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/singup",
          element: <Singup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      
      ],
    },
  ]);
  return (
    <ConfigProvider>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
