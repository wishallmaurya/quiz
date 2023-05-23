// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
  
import ProtectedRoute from "./utils/protectedRoute";
import PrivateRoutes from "./route/PrivateRoutes";
import Protect from "./pages/Protect/index.js";
import SignIn from "./layouts/SignInLayout";
import SignUp from "./layouts/SignUpLayout";
import Invite from "./allComponents/Invite";
import TermsAndCondition from "./allComponents/Terms/index";
import Payment from "./allComponents/Payment/payment";
import Method from "./allComponents/Payment/method";
import Profile from "./allComponents/Profile/index";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import Language from "./pages/Language";
import QuizList from "./pages/QuizList";
import ScoreCard from "./pages/ScoreCard";
import ProfileInfo from "./allComponents/Profile/ProfileInfo";
import QuizPaymentDetails from "./allComponents/Profile/QuizPaymentDetails";
import MyQuizzes from "./allComponents/Profile/MyQuizzes";
import ChangePassword from "./allComponents/Profile/ChangePassword";
import MyReward from "./allComponents/Profile/MyReward";


function App() {
  return (
      <Router>
        <Routes>
         <Route exact path="/" element={<HomePage/>} />
         <Route exact path="/language" element={<Language/>} />
         <Route exact path="/quizList" element={<QuizList/>} />
         <Route exact path="/quiz" element={<Quiz/>} />
         <Route exact path="/score" element={<ScoreCard/>} />
         <Route exact path="/signIn" element={<SignIn/>} />
         <Route exact path="/signUp" element={<SignUp/>} />
         <Route exact path="/termsAndCondition" element={ <TermsAndCondition />} />
         <Route exact path="/invite" element={ <Invite />} />
         <Route exact path="/payment" element={ <Payment/>} />
         <Route exact path="/paymentmethod" element={ <Method/>} />
         <Route exact path="/profile" element={ <Profile/>} />


         <Route exact path="/profileInfo" element={ <ProfileInfo/>} />
         <Route exact path="/myRewards" element={ <QuizPaymentDetails/>} />
         <Route exact path="/quizPaymentDetails" element={ <QuizPaymentDetails/>} />
         <Route exact path="/myQuiz" element={ <MyQuizzes/>} />
         <Route exact path="/ChangePassword" element={ <ChangePassword/>} />
         <Route exact path="/myReward" element={ <MyReward/>} />


         <Route element={<PrivateRoutes />}>
          {/* <Route exact path="/" element={<ProtectedRoute ><Dashboard/></ProtectedRoute>} />
          <Route exact path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} /> */}
          
         </Route>
         <Route exact path="/protect" element={<Protect />}/>
        </Routes>
      </Router>
   
  );
}

export default App;
