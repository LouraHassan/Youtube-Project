import App from '../App'
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Video from '../pages/Video';
import ErrorPage from '../pages/ErrorPage'
import {
    createBrowserRouter,
  } from "react-router-dom";
  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/signup",
      element: <Signup/>,
      },
      {
        path: "/home/:userId",
        element: <Home/>,
      },
      {
        path: "/video/:userId/:videoId",
        element: <Video/>,
      },
  ]);
  export default Routers