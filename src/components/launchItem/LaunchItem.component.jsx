import React from "react";
import {LaunchItemContainer, ImgContainer} from "./launchItem.styles";

const LaunchItem = ({launchImg, missionName, missionTime, missionDescr}) => {
    return (
        <LaunchItemContainer>
            <ImgContainer>
                <img src={launchImg} alt=""/>
            </ImgContainer>
            <div className='missionName'>{missionName}</div>
            <div className='missionTime'>{missionTime}</div>
            <div className='missionDescr'>{missionDescr}</div>
        </LaunchItemContainer>
    )
}
export default LaunchItem;
