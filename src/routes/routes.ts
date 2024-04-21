import Home from "../pages/Home";
import FirstA from "../pages/first/FirstA";
import FirstB from "../pages/first/FirstB";
import SecondA from "../pages/second/SecondA";
import SecondB from "../pages/second/SecondB";
import ThirdA from "../pages/third/ThirdA";
import ThirdB from "../pages/third/ThirdB";

export interface SidebarRoutesProps {
  name: string;
  key: string;
  path?: string;
  component?: () => React.ReactElement;
  item?: SidebarRoutesProps[];
}
/*사이드바 라우팅, 페이지 라우팅 나누기 */

export const sidebarRoutes: SidebarRoutesProps[] = [
  {
    name: "홈페이지",
    key: "home",
    path: "/",
    component: Home,
  },
  {
    name: "첫번째",
    key: "first",

    item: [
      {
        name: "첫번째-a",
        key: "first",
        path: "/first/a",
        component: FirstA,
      },
      {
        name: "첫번째-b",
        key: "first",
        path: "/first/b",
        component: FirstB,
      },
    ],
  },
  {
    name: "두번째",
    key: "second",

    item: [
      {
        name: "두번째-a",
        key: "second",
        path: "/second/a",
        component: SecondA,
      },
      {
        name: "두번째-b",
        key: "second",
        path: "/second/b",
        component: SecondB,
      },
    ],
  },
  {
    name: "세번째",
    key: "third",

    item: [
      {
        name: "세번째-a",
        key: "third",
        path: "/third/a",
        component: ThirdA,
      },
      {
        name: "세번째-b",
        key: "third",
        path: "/third/b",
        component: ThirdB,
      },
    ],
  },
];
