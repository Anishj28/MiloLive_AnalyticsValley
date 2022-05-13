import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Hostuser from './pages/Hostuser';
import Myprofile from './pages/Myprofile';
import { createContext,useReducer } from 'react';
import Navbar from './pages/Navbar';
import { initialState,reducer } from './reducer/useReducer';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"

export const userContext=createContext();

const App=()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{state,dispatch}}>
      <Router>
        <Navbar></Navbar>
        <Routes>
            <Route exact path="/" element={<Login></Login>}>
            </Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            </Route>
            <Route path="/hostuser" element={<Hostuser></Hostuser>}>
            </Route>
            <Route path="/myprofile" element={<Myprofile></Myprofile>}>
            </Route>
        </Routes>
      </Router>
    </userContext.Provider>
  );
};

export default App;
