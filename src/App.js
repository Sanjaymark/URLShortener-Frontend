import {Route, Routes} from "react-router-dom";
import './App.css';
import { Dashboard } from "./Pages/Dashboard";
import { ForgotPassword } from "./Pages/forgot";
import { ResetPassword } from "./Pages/reset";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";





function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/forgot-password" element={<ForgotPassword/>} />
          <Route exact path="/reset-password" element={<ResetPassword/>} />
        </Routes>
      </div>
  ); 
}


export default App;







