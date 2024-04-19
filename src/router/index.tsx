import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ROUTE_PATH from "./constants";
import { ErrorPage, IntroPage, KakaoLogInPage } from "../pages";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
    children: [
      {
        element: <IntroPage />,
        path: ROUTE_PATH.INTRO,
      },
      {
        element: <KakaoLogInPage />,
        path: ROUTE_PATH.KAKAO_LOGIN,
      },
    ],
  },
]);

export default router;
