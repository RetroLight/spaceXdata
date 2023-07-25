import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #000000e6;
  padding: 23px 10px;
  display: flex;
  position: sticky;
  top: 0;
`

export const LogoContainer = styled.div`
  width: 223px;
  display: flex;
  > * {
    height: 100%;
    margin-top: -3px;
  }
`

export const HeaderNavigation = styled.nav`
  margin-left: 20px;
  ul {
    display: flex;
    * {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin-left: 20px;
    }
  }
`
