import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {
    LaunchDetailsPageContainer,
    InfoContainer,
    MissionLogo,
    RocketImgContainer, VideoContainer,
} from "./launchDetailsPage.styles";
import {LaunchesContext} from "../../state/launches";

const LaunchDetailsPage = () => {
    const {launchesState} = useContext(LaunchesContext)
    const {id} = useParams()

    const launchItem = launchesState.launchesArr.find(itm => itm.id === id)

    return (
        <LaunchDetailsPageContainer>
            <MissionLogo>
                <img src={launchItem.links.patch.large} alt="Логотип миссии"/>
            </MissionLogo>
            <h1>{launchItem.name}</h1>
            <InfoContainer>
                <h2>Mission Details</h2>
                {launchItem.details}
            </InfoContainer>
            <InfoContainer>
                <h2>Rocket Details</h2>
                {launchItem.rocket.description}
            </InfoContainer>
            <RocketImgContainer>
                {launchItem.rocket.flickr_images.map(img => <div className='rocket_img'><img src={img} alt=""/></div>)}
            </RocketImgContainer>
            <VideoContainer>
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${launchItem.links.youtube_id}`}
                    frameBorder="0"
                    allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </VideoContainer>
        </LaunchDetailsPageContainer>

    )
};

export default LaunchDetailsPage;
