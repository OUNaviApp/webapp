import React from 'react';
import styled from 'styled-components';
import logo from './assets/navi-logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App-header extendfull extendup">
          <table>
                <tr>
                    <td><img className="App-logo" src={logo} alt="logo" /></td>
                    <td className="menuitem"><Link to='/index'>Home</Link></td>
                    <td className="menuitem"><Link to='/Page2'>Page1</Link></td>
                    <td className="menuitem"><Link to='/index2'>Page2</Link></td>
                </tr>
          </table>
      </div>
      
<Switch>
  <Route path='/index'>
  <Index />
  </Route>
    
  <Route path='/page2'>
  <Page2 />
  </Route>
     
  <Route path='/index2'>
  <Index2 />
  </Route>
    
</Switch>
</Router>
  );
}

export default App;

function Index() {
  return (
  <table>
    <tr>
        <td>
<div>
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div><Button>E</Button></div>
<div><ButtonLong>button</ButtonLong></div>
<div><ButtonLongLong>button</ButtonLongLong></div>
<div><ButtonHazard>!</ButtonHazard></div>
</td>
</tr>
</table>
)
}
function Page2() {
  return (
    <table>
      <tr>
          <td>
  <div>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div><Button>E</Button></div>
  <div><ButtonLong>button</ButtonLong></div>
  <div><ButtonHazard>!</ButtonHazard></div>
  </td>
  </tr>
  </table>
  )
}
function Index2() {
  return (
    <table>
      <tr>
          <td>
  <div>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div><Button>E</Button></div>
  <div><ButtonLong>button</ButtonLong></div>
  <div><ButtonLongLong>button</ButtonLongLong></div>
  </td>
  </tr>
  </table>
  )
}

const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'libre_baskervillebold';
font-size: 18px;
border: 3px solid white;
border-radius: 50px;
background-color: #016a4f;
color: white;
width: 50px;
height: 50px;`;

const ButtonLong = styled(Button)`
width: 100px`;

const ButtonLongLong = styled(Button)`
width: 200px`;

const ButtonHazard = styled(Button)`
font-size: 25px;
background-color: yellow;
color: #016a4f;
width: 50px;
height: 50px;`;