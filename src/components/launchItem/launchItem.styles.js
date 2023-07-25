import styled from "styled-components";

export const LaunchItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #ffffff;
  padding: 10px;
  max-height: 60px;  
  overflow: hidden;
  cursor: pointer;
  .missionName {
    flex: 1
  }
  .missionTime {
    flex: 1
  }
  .missionDescr {
    flex: 4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ImgContainer = styled.div`
  min-width: 55px;
  width: 55px;
  min-height: 55px;
  height: 55px;
  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
