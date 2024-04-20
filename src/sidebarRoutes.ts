import FirstPage from "./pages/first/First";
import Home from "./pages/Home";
import SecondPage from "./pages/second/Second";
import ThirdPage from "./pages/third/Third";
import FirstA from "./pages/first/FirstA";
import FirstB from "./pages/first/FirstB";
import SecondA from "./pages/second/SecondA";
import SecondB from "./pages/second/SecondB";
import ThirdA from "./pages/third/ThirdA";
import ThirdB from "./pages/third/ThirdB";

export interface SidebarRoutesProps {
  name: string;
  path: string;
  component: () => React.ReactElement;
  item?: SidebarRoutesProps[];
}
/*사이드바 라우팅, 페이지 라우팅 나누기 */

export const sidebarRoutes: SidebarRoutesProps[] = [
  {
    name: "홈페이지",
    path: "/",
    component: Home,
  },
  {
    name: "첫번째",
    path: "/first",
    component: FirstPage,
    item: [
      {
        name: "첫번째-a",
        path: "/first/a",
        component: FirstA,
      },
      {
        name: "첫번째-b",
        path: "/first/b",
        component: FirstB,
      },
    ],
  },
  {
    name: "두번째",
    path: "/second",
    component: SecondPage,
    item: [
      {
        name: "두번째-a",
        path: "/second/a",
        component: SecondA,
      },
      {
        name: "두번째-b",
        path: "/second/b",
        component: SecondB,
      },
    ],
  },
  {
    name: "세번째",
    path: "/third",
    component: ThirdPage,
    item: [
      {
        name: "세번째-a",
        path: "/third/a",
        component: ThirdA,
      },
      {
        name: "세번째-b",
        path: "/third/b",
        component: ThirdB,
      },
    ],
  },
];
