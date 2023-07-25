import React, {useEffect, useContext} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {LaunchesContainer, LaunchesHeader, LaunchPage} from "./launchPage.styles";
import {LaunchesContext} from "../../state/launches";
import {
    DATE_START_FILTER,
    FETCH_LAUNCHES_FAILURE,
    FETCH_LAUNCHES_START,
    FETCH_LAUNCHES_SUCCESS
} from "../../state/actionTypes";

import LaunchItem from "../../components/launchItem/LaunchItem.component";

const LaunchesPage = () => {
    const {launchesState, dispatchLaunches} = useContext(LaunchesContext)

    const months = [
        'Янв',
        'Февр',
        'Март',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сент',
        'Окт',
        'Ноя',
        'Дек'
    ]

    const dateHandler = (rowDate) => {
        const date = new Date(rowDate);
        let fullDate = '';
        fullDate += `${('0' + date.getDate(rowDate)).slice(-2)}`;
        fullDate += ` ${months[date.getMonth(rowDate)]}`;
        fullDate += ` ${date.getFullYear(rowDate)}г.`;
        fullDate += ` ${('0' + date.getHours(rowDate)).slice(-2)}ч`;
        fullDate += ` : ${('0' + date.getMinutes(rowDate)).slice(-2)}мин`;
        return fullDate
    }

    const fetchLaunchesAsync = () => {
        dispatchLaunches({
            type: FETCH_LAUNCHES_START,
        })
        try {
            axios({
                method: 'post',
                url: 'https://api.spacexdata.com/v4/launches/query',
                data: {
                    query: {
                        "success": true,
                        "date_utc": {
                            "$gte": "2015-01-01T00:00:00.000Z",
                            "$lte": "2019-12-31T00:00:00.000Z"
                        },
                    },
                    options: {
                        "pagination": false,
                        "populate": [
                            "rocket",
                        ]
                    }
                }
            }).then(res => {
                dispatchLaunches({
                    type: FETCH_LAUNCHES_SUCCESS,
                    payload: {
                        launchesArr: res.data.docs.reverse()
                    }
                })
            })
        } catch(error) {
            dispatchLaunches({
                type: FETCH_LAUNCHES_FAILURE,
                payload: {
                    error: error.text
                }
            })
        }
    }

    useEffect(() => {
        fetchLaunchesAsync();
    }, [])

    return (
        <LaunchPage>
            <LaunchesContainer>
                <LaunchesHeader>
                    <div></div>
                    <div className='headerName'>Название миссии</div>
                    <div className='headerTime'>Дата запуска</div>
                    <div className='headerDescr'>Описание</div>
                </LaunchesHeader>
                <div className='filterBtn' onClick={() => dispatchLaunches({type: DATE_START_FILTER})}>
                    {launchesState.filters.newDateStart ? 'Сначала новые' : 'Сначала старые'}
                </div>
                {launchesState.isFetching ? <div style={{color: "#fff"}}>Загрузка...</div> :
                    launchesState.launchesArr.map(itm => <Link key={itm.id} to={`/launches/${itm.id}`}>
                        <LaunchItem launchImg={itm.links.patch.small}
                                    missionName={itm.name}
                                    missionTime={dateHandler(itm.date_utc)}
                                    missionDescr={itm.details}
                        />
                    </Link>)}
            </LaunchesContainer>
        </LaunchPage>
    )
}

export default LaunchesPage;
