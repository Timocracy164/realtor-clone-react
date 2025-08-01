import { BrowserRouter as Router, Routes,Route} from "react-router";
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import ForgotPassword from "./Pages/ForgotPassword"
import Offers from "./Pages/Offers"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Header from "./Component/Header";



function App() {
  return (
    <>
     <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
