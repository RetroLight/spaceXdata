import React from "react";
import {HeaderContainer, LogoContainer, HeaderNavigation} from "./header.styles";
import {Link} from "react-router-dom";
import {ReactComponent as XLogo} from '../../img/spacex.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <XLogo/>
            </LogoContainer>
            <HeaderNavigation>
                <ul>
                    <li>
                        <Link to={'/spaceXdata'}>Главная</Link>
                    </li>
                    <li>
                        <Link to={'/launches'}>Полеты</Link>
                    </li>
                </ul>
            </HeaderNavigation>
        </HeaderContainer>
    )
}

export default Header;
