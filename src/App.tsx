import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { store, history } from './store'
import { useClearCache } from "react-clear-cache";
import i18n from './i18n';

//bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
//custom styles
import './styles/app.scss'
import UsersPage from "./pages/users";

const App: React.FC<{}> = () => {
    const { isLatestVersion, emptyCacheStorage } = useClearCache();
    if(!isLatestVersion)
        emptyCacheStorage();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    changeLanguage('ar');
    return (
      <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={UsersPage} />
            </Switch>
        </Router>
      </Provider>
    )
}

export default App;