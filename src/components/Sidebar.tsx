import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { SidebarRoutesProps, sidebarRoutes } from "../routes/sidebarRoutes";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <SidebarWrapper>
      {sidebarRoutes.map((route: SidebarRoutesProps) => {
        if (location.pathname.indexOf(route.path) > -1)
          return (
            <div key={route.name}>
              <button onClick={() => navigate(route.path)}>{route.name}</button>
              {route.item &&
                route.item.map((i) => (
                  <button key={i.name} onClick={() => navigate(i.path)}>
                    {i.name}
                  </button>
                ))}
            </div>
          );
      })}
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100px;
  background-color: beige;
`;
