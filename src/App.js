import React from "react";
import styled from "styled-components";
/*import {withRouter} from "react-router-dom";*/
/*import logo from "./assets/navi-logo.svg";*/
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

function App() {
  const loc = useLocation();
  return (
    <>
    <Header location={loc} />
    <Router>
      <Switch>
        <Route path="/index">
          <Index />
        </Route>

        <Route path="/resolve">
          <Resolve />
        </Route>

        <Route path="/announce">
          <Announce />
        </Route>

        <Route path="/maint">
          <Maint />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

function Header(location) {

  return (
    <div className="App-header extendfull extendup">
      <table>
        <tr>
          {/*<td><img className="App-logo" src={logo} alt="logo" /></td>*/}
          <td className="menuitem">
            <ButtonMenu>
             {location.pathname === '/resolve' ? '<Link to="/index">Back</Link>' : '<Link to="/resolve">Resolve</Link>'}
            </ButtonMenu>
          </td>
          <td className="menuitem">
            <ButtonMenu>
              {location.pathname === '/announce' ? '<Link to="/index">Back</Link>' : '<Link to="/announce">General Announcement</Link>'}
            </ButtonMenu>
          </td>
          <td className="menuitem">
            <ButtonMenu>
              {location.pathname === '/maint' ? '<Link to="/index">Back</Link>' : '<Link to="/maint">Maintenance Issues</Link>'}
            </ButtonMenu>
          </td>
        </tr>
      </table>
    </div>
  );
}

function Index() {
  return (
    <>
      <table className="frontpage">
        <tr>
          <td>
            {" "}
            <h1>Welcome</h1>
          </td>
        </tr>
      </table>
    </>
  );
}
function Resolve() {
  return (
    <>
      <table>
        <tr>
          <td>
            <div>
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Button>E</Button>
            </div>
            <div>
              <ButtonLong>button</ButtonLong>
            </div>
            <div>
              <ButtonHazard>!</ButtonHazard>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
function Announce() {
  return (
    <>
      <table>
        <tr>
          <td>
            <div>
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Button>E</Button>
            </div>
            <div>
              <ButtonLong>button</ButtonLong>
            </div>
            <div>
              <ButtonLongLong>button</ButtonLongLong>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
function Maint() {
  return (
    <>
      <table>
        <tr>
          <td>
            <div>
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Button>E</Button>
            </div>
            <div>
              <ButtonLong>button</ButtonLong>
            </div>
            <div>
              <ButtonLongLong>button</ButtonLongLong>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "libre_baskervillebold";
  font-size: 18px;
  border: 3px solid white;
  border-radius: 50px;
  background-color: #016a4f;
  color: white;
  width: 50px;
  height: 50px;
`;

const ButtonLong = styled(Button)`
  width: 100px;
`;

const ButtonLongLong = styled(Button)`
  width: 260px;
`;

const ButtonHazard = styled(Button)`
  font-size: 25px;
  background-color: yellow;
  color: #016a4f;
  width: 50px;
  height: 50px;
`;

const ButtonMenu = styled(ButtonLongLong)`
  background-color: white;
  color: #016a4f;
`;
