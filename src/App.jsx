import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import { Index } from "./pages/Index";
import { Resolve } from "./pages/Resolve";
import { General } from "./pages/General";
import { Maintenance } from "./pages/Maintenance";
import { Header } from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Login } from "./pages/Login";

function App() {
    const [token] = useLocalStorage("authentication_token", undefined);

    if (!token) {
        return <Login></Login>;
    }

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/resolve">
                    <Resolve />
                </Route>
                <Route path="/announce">
                    <General />
                </Route>
                <Route path="/maintenance">
                    <Maintenance />
                </Route>
                <Index />
            </Switch>
        </Router>
    );
}

export default App;
