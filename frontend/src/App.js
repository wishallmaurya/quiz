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


function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  const auth=user.role
console.log(auth,'...1.1.1.1.')
  return (
      <Router>
        <Routes>
         <Route exact path="*" element={<PageNotFound/>} />
         <Route exact path="/" element={<HomePage/>} />
         <Route exact path="/language" element={<Language/>} />
         <Route exact path="/quizList" element={auth?<QuizList/>:<PageNotFound/>} />
         <Route exact path="/quiz/:id" element={auth?<Quiz/>:<PageNotFound/>} />
         <Route exact path="/score" element={auth?<ScoreCard/>:<PageNotFound/>} />
         <Route exact path="/signIn" element={auth?<HomePage/>:<SignIn/>} />
         <Route exact path="/signUp" element={auth?<HomePage/>:<SignUp/>} />
         <Route exact path="/termsAndCondition" element={ <TermsAndCondition />} />
         <Route exact path="/invite" element={ auth==='user'?<Invite />:<PageNotFound/>} />
         <Route exact path="/payment" element={auth==='user'? <Payment/>:<PageNotFound/>} />
         <Route exact path="/paymentmethod" element={auth==='user'? <Method/>:<PageNotFound/>} />
         {/* <Route exact path="/profile" element={ <Profile/>} /> */}


         <Route exact path="/profileInfo" element={ <ProfileInfo/>} />
         <Route exact path="/myRewards" element={ <MyReward/>} />
         <Route exact path="/quizPaymentDetails" element={ <QuizPaymentDetails/>} />
         <Route exact path="/myQuiz" element={ <MyQuizzes/>} />
         <Route exact path="/ChangePassword" element={ <ChangePassword/>} />
         <Route exact path="/myReward" element={ <MyReward/>} />
{/* admin */}

         {/* <Route exact path="/admin-signup" element={ <AdminSignUp/>} /> */}
         <Route exact path="/admin-signIn" element={ <AdminSignIn/>} />
         <Route exact path="/adminDashboard" element={ auth==='admin'?<AdminDashboard/>:<PageNotFound/>} />
         <Route exact path="/createQuizModule" element={ auth==='admin'?<CreateQuizModule/>:<PageNotFound/>} />
         <Route exact path="/createQuestion" element={ auth==='admin'?<CreateQuestion/>:<PageNotFound/>} />
         <Route exact path="/updateQuizList" element={ auth==='admin'?<UpdateQuizList/>:<PageNotFound/>} />
         <Route exact path="/updateQuestion/:moduleId" element={ auth==='admin'?<UpdateQuestions/>:<PageNotFound/>} />
         <Route exact path="/updateQuestion/:moduleId/question/:quesId/" element={auth==='admin'? <UpdateSingleQ/>:<PageNotFound/>} />
         <Route exact path="/userList" element={ auth==='admin'?<AllUserList/>:<PageNotFound/>} />
         <Route exact path="/AllResults" element={auth==='admin'? <AllResults/>:<PageNotFound/>} />
         <Route exact path="/SingleUser/:id" element={ auth==='admin'?<SingleUser/>:<PageNotFound/>} />
         <Route exact path="/dailyRegisteredUser" element={auth==='admin'? <DailyRegisteredUser/>:<PageNotFound/>} />
         <Route exact path="/dailyQuizPlayed" element={auth==='admin'? <DailyQuizPlayed/>:<PageNotFound/>} />
         <Route exact path="/dailyPassedUser" element={ auth==='admin'?<DailyPassedUser/>:<PageNotFound/>} />

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
