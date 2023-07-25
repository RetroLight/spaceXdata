import styled from "styled-components";


export const LaunchPage = styled.div`
  
`
export const LaunchesContainer = styled.div`
  background-color: #000000a8;
  border-radius: 10px;
  margin-top: 30px;
  height: 100%;
  padding: 20px;
  .filterBtn {
    background-color: #fff;
    padding: 10px;
    width: 150px;
    border-radius: 10px;
    border: 1px solid #000;
    margin: 0 auto;
    margin-top: 10px;
    cursor: pointer;
    font-style: italic;
    &:hover {
      filter: brightness(95%);
    }
    &:active {
      filter: brightness(91%);
    }
  }
`

export const LaunchesHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bolder;
  background-color: #eaeaea;
  position: sticky;
  top: 65px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  > div:first-child {
    min-width: 55px;
    width: 55px;
  }
  .headerName {
    flex: 1
  }
  .headerTime {
    flex: 1
  }
  .headerDescr {
    flex: 4
  }
`
