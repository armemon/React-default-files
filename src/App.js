// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return ( <
//         div className = "App" >
//         <
//         header className = "App-header" >
//         <
//         img src = { logo }
//         className = "App-logo"
//         alt = "logo" / >
//         <
//         p >
//         Edit < code > src / App.js < /code> and save to reload. < /
//         p > <
//         a className = "App-link"
//         href = "https://reactjs.org"
//         target = "_blank"
//         rel = "noopener noreferrer" >
//         Learn React <
//         /a> < /
//         header > <
//         /div>
//     );
// }

// export default App;



import React from 'react';
import Button1 from './button'
class App extends React.Component { //merge this class and React.Component

    render() {
        return ( <
            div className = "App" >
            <
            Button1 / >
            <
            /div>
        )
    }
}
export default App;