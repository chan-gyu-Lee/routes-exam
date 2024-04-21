import { useNavigate } from "react-router-dom";
import { SidebarRoutesProps, sidebarRoutes } from "../routes/routes";
import styled from "styled-components";

export default function Gnb() {
  const navigate = useNavigate();

  return (
    <GnbWrapper>
      {sidebarRoutes.map((route: SidebarRoutesProps) => {
        return (
          <div className="a" key={route.name}>
            <button
              onClick={() =>
                navigate(
                  route.item
                    ? (route.item[0].path as string)
                    : (route.path as string)
                )
              }
            >
              {route.name}
            </button>
          </div>
        );
      })}
    </GnbWrapper>
  );
}

const GnbWrapper = styled.div`
  display: flex;
  gap: 20px;
  background-color: #bdc3c7;
  height: 100px;
  width: 100%;
  .a {
    width: 100%;
  }
`;
