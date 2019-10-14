import React from 'react';
import styled from 'styled-components';
import logo from './assets/navi-logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App-header extendfull extendup">
          <table>
                <tr>
                    <td><img className="App-logo" src={logo} alt="logo" />
                    </td>
                    <table>
                        {/* <tr style="height: 65px;"> </tr> */}
                        <tr>
                    <td className="menuitem"><a href='file:///Users/hyperionskies/Desktop/NaviApp%20Project/navitest.html'>Home</a></td>
                    <td className="menuitem"><a href='file:///Users/hyperionskies/Desktop/NaviApp%20Project/navitest.html'>Page1</a></td>
                    <td className="menuitem"><a href='file:///Users/hyperionskies/Desktop/NaviApp%20Project/navitest.html'>Page2</a></td>
                </tr>
                    </table>
                </tr>
          </table>
      </div>
      <div className="long extendfull"></div>
      <table>
          <tr>
              <td>
    <div>
        <h1>A Large Header</h1>
        <h2>A Header</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="button"><p>E</p></div>
    <div className="button"><p>R</p></div>
    <div className="button-hazard"><p>!</p></div>
    <div className="button-long"><p>button</p></div>
    <div className="button-longlong"><p>button</p></div>
    <div><Button>E</Button></div>
    <div><ButtonLong>button</ButtonLong></div>
    <div><ButtonLongLong>button</ButtonLongLong></div>
    <div><ButtonHazard>!</ButtonHazard></div>
</td>
{/* <td style='padding: 200px;'></td> */}
</tr>
</table>
</>
  );
}

export default App;

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