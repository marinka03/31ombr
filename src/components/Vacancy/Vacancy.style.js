import styled from "styled-components";
import { theme } from "../../vars";

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: #151a1a;
  padding: 50px 0;
`;
export const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 50px;
  text-align: center;
  color: ${theme.color.light_summer};
`;
// export const ListWrapper = styled.div`
// width: 100%;
//   ::before{
//     content: '';
//     width: 30px;
//     height: 2px;
//     background-color: orange;
//   }
// `

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  margin: 50px auto 0;
  font-size: 24px;
`;


export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const HightImgWrap = styled.div`
  @media (min-width: 500px) {
    min-height: 330px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 600px;
  }
`;

export const HightImg = styled.img`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media (min-width: 500px) {
    width: 350px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 600px;
  }
`;

export const LowerImgWrap = styled.div`
  @media (min-width: 500px) {
    min-height: 330px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 600px;
  }
`;
export const LowerImg = styled.img`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
@media (min-width: 500px) {
  width: 350px;
  position: absolute;
  bottom: 50px;
  right: 10%; 
}
`;
