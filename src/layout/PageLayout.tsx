import { Route, Routes } from "react-router-dom";
import Gnb from "../components/Gnb";

import styled from "styled-components";
import SideBar from "../components/Sidebar";
import BreadCrumb from "../components/BreadCrumb";

import { SidebarRoutesProps, sidebarRoutes } from "../routes/routes";

export default function PageLayout() {
  const renderPage: any = (routes: SidebarRoutesProps[]) => {
    return routes.map((route: SidebarRoutesProps) => {
      if (route.item) {
        return renderPage(route.item);
      }
      if (route.component) {
        console.log(route.name);
        return (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.key}
          />
        );
      }
    });
  };
  return (
    <PageLayoutWrapper>
      <Headers>
        <Gnb />
      </Headers>
      <ContentsWrapper>
        <SideBar />
        <Contents>
          <BreadCrumb />
          <Routes>{renderPage(sidebarRoutes)}</Routes>
        </Contents>
      </ContentsWrapper>
    </PageLayoutWrapper>
  );
}

const PageLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  position: relative;
`;

const Headers = styled.div`
  position: absolute;
  width: 100%;

  top: 0;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  position: relative;
`;
const Contents = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f6f7f9;
  padding: 0px 50px 50px;
`;
