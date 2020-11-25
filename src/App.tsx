import React from 'react'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'connected-react-router';
import {History} from 'history'
import {useClearCache} from "react-clear-cache";
import i18n from './i18n';

//bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
//custom styles
import './styles/app.scss'
import PokemonPage from "./pages/pokemon";
import Header from "./components/layout/header";
import FavouritePokemonPage from "./pages/favouritePokemon";

interface IAppProps {
    history: History;
}

const App= (props: IAppProps) => {
    const {isLatestVersion, emptyCacheStorage} = useClearCache();
    if (!isLatestVersion)
        emptyCacheStorage();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    changeLanguage('en');

    return (
        <ConnectedRouter history={props.history}>
            <>
                <Header/>
                <Switch>
                    <Route path="/favorites" component={FavouritePokemonPage}/>
                    <Route exact path="/" component={PokemonPage}/>
                </Switch>
            </>
        </ConnectedRouter>
    )
}

export default App;