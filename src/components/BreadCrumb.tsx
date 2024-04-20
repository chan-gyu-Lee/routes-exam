import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
import { PageRoutesProps, pageRoutes } from "../routes";

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
    const page = pageRoutes.find(
      (route: PageRoutesProps) => route.path === location.pathname
    );
    // 전 페이지와 현재 페이지의 pathname을 비교해서 같지 않아야 브래드 크럼에 추가
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
