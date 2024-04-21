import { Route, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
import { SidebarRoutesProps, sidebarRoutes } from "../routes/routes";

interface HistoriesProps {
  name: string;
  path: string;
}

export default function BreadCrumb() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathname = useRef(location.pathname);
  console.log(prevPathname, location.pathname);

  const [histories, setHistories] = useState<HistoriesProps[]>([]);

  const findPageByName: any = (routes: SidebarRoutesProps[], path: string) => {
    // 배열을 순회하며 조건을 만족하는 첫 번째 요소를 반환 => find 쓰면 중첩구조에선 찾을 수 없음....
    for (let route of routes) {
      // 현재 라우트가 찾고자 하는 경로와 일치하는 경우
      if (route.path === path) {
        return route;
      }
      // 하위 라우트가 있는 경우 재귀적으로 탐색
      if (route.item) {
        const found: any = findPageByName(route.item, path);
        if (found) return found;
      }
    }
  };

  /*  
  useEffect 설명
  ex) A 페이지에서 B 페이지로 이동하고 c페이지로 이동 후 다시 A페이지로 이동 한다는 가정 

    1. 처음 A페이지 랜딩 : prevPathname.current = A , location.pathname = A 이므로 첫번째 if문 통과 불가 => histories에 추가되지 않음

    2. B 페이지로 이동 : prevPathname = A, location.pathname = B => 달라져서 첫번째 if문 통과함. 
    2-1. prevPathname = B로 변경

    3. c 페이지로 이동 : prevPathname = B, location.pathname = c => 달라져서 첫번째 if문 통과함. 
    3-1. prevPathname = C로 변경
   
    4. c 페이지로 이동 : prevPathname = c, location.pathname = A => 달라져서 첫번째 if문 통과함. 
    4-1 : !histories.some((history) => history.path === location.pathname) =>  기존 histories에 A가 등록되어 있어서 if문 통과 불가 => histories에 추가 x
    4-2. prevPathname = A로 변경    
    */
  useEffect(() => {
    const page = findPageByName(sidebarRoutes, location.pathname);
    console.log({ page });

    if (prevPathname.current !== location.pathname && page) {
      // 현재 histories에 똑같은 path가 있는지 확인
      if (!histories.some((history) => history.path === location.pathname)) {
        // 처음 방문하는 path일 경우 state에 추가, 중복이면 안함
        setHistories((prevHistories) => [
          ...prevHistories,
          { name: page.name, path: location.pathname },
        ]);
      }
    }

    //prevPathname 변경
    prevPathname.current = location.pathname;
  }, [location.pathname]);

  console.log({ histories });

  return (
    <BreadCrumbWrapper>
      {histories.map((history, idx: number) => (
        <button
          className="historyButton"
          key={`a_${idx}`}
          onClick={() => navigate(history.path)}
        >
          {history.name}
        </button>
      ))}
    </BreadCrumbWrapper>
  );
}

const BreadCrumbWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #2ecc71;

  .historyButton {
    background-color: #2ecc71;
  }
`;
