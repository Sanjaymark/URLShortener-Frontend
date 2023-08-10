import {Route, Routes} from "react-router-dom";
import './App.css';
import { Dashboard } from "./Pages/Dashboard";
import { ForgotPassword } from "./Pages/forgot";
import { ResetPassword } from "./Pages/reset";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import URLShortener from "./Pages/urlShortener";
import URLList from "./Pages/createdUrls";




function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/user/login" element={<Login/>} />
          <Route exact path="/user/signup" element={<Signup/>} />
          <Route exact path="/user/forgot-password" element={<ForgotPassword/>} />
          <Route exact path="/user/reset-password" element={<ResetPassword/>} />
          <Route exact path="/url/shorteningUrl" element={<URLShortener/>} />
          <Route exact path="/url/shortUrls/created" element={<URLList/>} />
        </Routes>
      </div>
  ); 
}


export default App;







