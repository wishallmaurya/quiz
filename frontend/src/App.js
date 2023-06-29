// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
  
import ProtectedRoute from "./utils/protectedRoute";
import PrivateRoutes from "./route/PrivateRoutes";
import AdminRoutes from "./route/AdminRoutes";
import LoginSingUpRoutes from "./route/LoginSingUpRoutes";
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
import CreateQuestion from "./pages/Admin/CreateQuestion";
// import AdminSignUp from "./layouts/AdminSignUp";
import AdminSignIn from "./layouts/AdminSignIn";
import AllUserList from "./pages/Admin/AllUserList";
import AllResults from "./pages/Admin/AllResults";
import SingleUser from "./pages/Admin/SingleUser";
import UpdateQuestions from "./pages/Admin/UpdateQuestions";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PageNotFound from "./layouts/PageNotFound";
import DailyRegisteredUser from "./pages/Admin/DailyRegisteredUser";
import DailyQuizPlayed from "./pages/Admin/DailyQuizPlayed";
import UpdateSingleQ from "./pages/Admin/UpdateSingleQ";
import DailyPassedUser from "./pages/Admin/DailyPassedUser";
import CreateQuizModule from "./pages/Admin/CreateQuizModule";
import UpdateQuizList from "./pages/Admin/UpdateQuizList";
import ForbiddenPage from "./layouts/ForbiddenPage";


function App() {

  return (
      <Router>
        <Routes>
         <Route exact path="*" element={<PageNotFound/>} />
         <Route exact path="/" element={<HomePage/>} />
         <Route exact path="/language" element={<Language/>} />

         <Route exact path="/termsAndCondition" element={ <TermsAndCondition />} />
         {/* <Route exact path="/profile" element={ <Profile/>} /> */}


         <Route element={<LoginSingUpRoutes />}>
         <Route exact path="/signIn" element={<SignIn/>} />

         <Route exact path="/signUp" element={<SignUp/>} />
         <Route exact path="/admin-signIn" element={ <AdminSignIn/>} />
          </Route>
         <Route element={<PrivateRoutes />}>
         <Route exact path="/quizList" element={<QuizList/>} />
         <Route exact path="/quiz/:id" element={<Quiz/>} /> 
         <Route exact path="/score" element={<ScoreCard/>} />
         <Route exact path="/invite" element={ <Invite />} />
         <Route exact path="/payment" element={ <Payment/>} />
         <Route exact path="/paymentMethod" element={ <Method/>} />
          

         <Route exact path="/profileInfo" element={ <ProfileInfo/>} />
         <Route exact path="/myRewards" element={ <MyReward/>} />
         <Route exact path="/quizPaymentDetails" element={ <QuizPaymentDetails/>} />
         <Route exact path="/myQuiz" element={ <MyQuizzes/>} />
         <Route exact path="/ChangePassword" element={ <ChangePassword/>} />
         <Route exact path="/myReward" element={ <MyReward/>} />
         </Route>


{/* admin */}
<Route element={<AdminRoutes />}>

         {/* <Route exact path="/admin-signup" element={ <AdminSignUp/>} /> */}
         <Route exact path="/adminDashboard" element={ <AdminDashboard/>} />
         <Route exact path="/createQuizModule" element={ <CreateQuizModule/>} />
         <Route exact path="/createQuestion" element={ <CreateQuestion/>} />
         <Route exact path="/updateQuizList" element={ <UpdateQuizList/>} />
         <Route exact path="/updateQuestion/:moduleId" element={ <UpdateQuestions/>} />
         <Route exact path="/updateQuestion/:moduleId/question/:quesId/" element={ <UpdateSingleQ/>} />
         <Route exact path="/userList" element={ <AllUserList/>} />
         <Route exact path="/AllResults" element={ <AllResults/>} />
         <Route exact path="/SingleUser/:id" element={ <SingleUser/>} />
         <Route exact path="/dailyRegisteredUser" element={ <DailyRegisteredUser/>} />
         <Route exact path="/dailyQuizPlayed" element={ <DailyQuizPlayed/>} />                                              
         <Route exact path="/dailyPassedUser" element={ <DailyPassedUser/>} />

         </Route>

         <Route exact path="/ForbiddenPage" element={<ForbiddenPage />}/>
         
        </Routes>

      </Router>
   
  );
}

export default App;
