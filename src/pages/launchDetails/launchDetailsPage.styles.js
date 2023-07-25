import styled from "styled-components";

export const LaunchDetailsPageContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  height: 100%;
  padding: 20px;
  font-size: 18px;
  > * {
    margin-top: 20px;
  }
`
export const MissionLogo = styled.div`
  width: 240px;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
  }
`
export const RocketImgContainer = styled.div`
  display: flex;
  width: 100%;
  grid-gap: 10px;
  flex-wrap: wrap;
  .rocket_img {
    width: 32%;
    img {
      display: block;
      width: 100%;
    }
  }
`
export const InfoContainer = styled.div`
  text-align: left;
`

export const VideoContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  min-width: 540px;
  > * {
    width: 100%;
  }
`
