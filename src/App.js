import './App.css';
import React , {useReducer} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import {LaunchesContext, launchesReducer} from "./state/launches";
import {INITIAL_STATE} from "./state/launches/launchesRed";

import Header from "./components/header/Header.component";
import MainPage from "./pages/mainPage/MainPage";
import LaunchesPage from "./pages/launchesPage/LaunchesPage";
import LaunchDetailsPage from "./pages/launchDetails/LaunchDetailsPage";

function App() {
    const [launchesState, dispatchLaunches] = useReducer(launchesReducer, INITIAL_STATE);
    return (
        <LaunchesContext.Provider value={{launchesState, dispatchLaunches}}>
            <BrowserRouter>
                <div className='App'>
                    <Header/>
                    <div className='container'>
                        <Routes>
                            <Route path='/spaceXdata' exact element={<MainPage/>}/>
                            <Route path='/launches' element={<LaunchesPage/>}/>
                            <Route path='/launches/:id' element={<LaunchDetailsPage/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </LaunchesContext.Provider>
    )
}

export default App;
