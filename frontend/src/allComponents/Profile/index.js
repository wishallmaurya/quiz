import React from "react";
import Skeleton from "../../layouts/Skeleton";
import Loader from "../../components/Loader";
import ProfileInfo from "./ProfileInfo";
import QuizPaymentDetails from "./QuizPaymentDetails";
import ChangePassword from "./ChangePassword";
import MyQuizzes from "./MyQuizzes";
import Menu from "./Menu";

function Profile() {
  return (
    <Skeleton>
      <Loader />
      <div className="bg-[#152C4F] h-44 w-full    "></div>
      <div className="flex">
        <div className="flex-col">
          {/* <Menu /> */}
        </div>
        {/* <ProfileInfo /> */}
      </div>
    </Skeleton>
  );
}

export default Profile;
