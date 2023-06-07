import React from "react";
import Skeleton from "../layouts/Skeleton";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import Right from "../assets/images/right.png";
import "./Styles.css"
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Skeleton>
      <Loader />
      <div className="relative flex top-8 w-full h-auto overflow-hidden text-left text-[0.88rem] text-darkslategray-300 ">

        <div className="w-50">
          <div className="marginleft">
            <div className="gain">Gain the Knowledge by Solving these Amazing Quizes</div>
            <div className="help">We help you prepare for more Bible quizes </div>
            <div className="top-[18rem] w-[10rem]  rounded bg-[#3D5890] shadow-[0px_4px_8px_rgba(61,_88,_144,_0.24)] flex flex-row py-[0.5rem] px-[1rem] items-start justify-start cursor-pointer text-center text-white bg-blue-500">
              <button
                className="relative tracking-[1px] capitalize font-medium"
                onClick={() => navigate("/quiz")}
              >
                Start The Quiz
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="overflow-hidden w-[100rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/e003eba1-af7c-4850-9fe4-b26c5572a254_1684387213414954240_Expires_-62135596800_Signature_dh-7rAarTwlfSXauPkx7FCQzsPb_VWD-vL3kUOyKk8MzVUT6E6eX_gxt8Y9CboNJeFiytfN-BiDB_nhpF57P3LGlg8vK7eYN5JGRIi4SH4xfP3qMgg9aalO2qc656qQZJUB3cIm3BcyJX_SPV4UFBQXFQEaeQZS9hy877vCOTl2K8EkovN-W5YJPIxoMBx3ch4bHmc_NyJUi1jk9ar6kU42Oa76vd_YsBpZQLME7E3tD5hgvAzWrcbj5m0ehSgOwBRCdBwr0KvIXaQXoBTVVGYAnkoNmwquMiMnEiAZvCAK_0l19je23OEfEz7BaVAQ3rUJfwArNKjLes2OJD_rsPg___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684391167307"
          />
        </div>



        {/* <div className="absolute  left-[8.69rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
        <img
          className="absolute h-[4.96%] w-[46.36%]  right-[3.47%] bottom-[91.45%] left-[50.17%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/e003eba1-af7c-4850-9fe4-b26c5572a254_1684387213414954240_Expires_-62135596800_Signature_dh-7rAarTwlfSXauPkx7FCQzsPb_VWD-vL3kUOyKk8MzVUT6E6eX_gxt8Y9CboNJeFiytfN-BiDB_nhpF57P3LGlg8vK7eYN5JGRIi4SH4xfP3qMgg9aalO2qc656qQZJUB3cIm3BcyJX_SPV4UFBQXFQEaeQZS9hy877vCOTl2K8EkovN-W5YJPIxoMBx3ch4bHmc_NyJUi1jk9ar6kU42Oa76vd_YsBpZQLME7E3tD5hgvAzWrcbj5m0ehSgOwBRCdBwr0KvIXaQXoBTVVGYAnkoNmwquMiMnEiAZvCAK_0l19je23OEfEz7BaVAQ3rUJfwArNKjLes2OJD_rsPg___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684391167307"
        />
        <div className="absolute top-[16.06rem] left-[8.75rem] text-[3.13rem] font-medium inline-block w-[42.63rem]">
          Gain the Knowledge by Solving these Amazing Quizes
        </div>
        <div className="absolute top-[30rem] left-[9.5rem] text-[1.13rem] text-gray-500">
          We help you prepare for more Bible quizes
        </div>
        <div className="absolute top-[34rem] left-[8.75rem] rounded bg-style shadow-[0px_4px_8px_rgba(61,_88,_144,_0.24)] flex flex-row py-[0.5rem] px-[1rem] items-start justify-start cursor-pointer text-center text-white bg-blue-500">
          <button
            className="relative tracking-[1px] capitalize font-medium"
            onClick={() => navigate("/quiz")}
          >
            Start The Quiz
          </button>
        </div> */}
      </div>
      <div className="text-center para">Here’s how Oliva Ministries Quiz works</div>
      <div className="flex">
        <div className="relative">
          <img
            className="ml-20 h-[30.69rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
          />
          <img
            className=" absolute top-[4rem] left-[8.25rem] h-[20.88rem] object-cover"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a7a48c3-6f1e-48c9-aa05-e310d237541e_1684387213415235935_Expires_-62135596800_Signature_mEVRV-0xqvPFH4C-dCcX09S3jPGqKMvqbIGh6GwMYJl0iwvRcdYiFYL6Ktn76Do9Q0YkmsKg59Xprar_cw187N0lZ5LAze2l-ylPgp_3mbh74jPyUTRXntiWtuObHpipZlPAVtv2OTZ9DQQcH7sxadKKDWvDVxPnymAq5IjguhHrBNUI2GMMYFh1QXdOUdqp2OOKc5znmVfK5-OIP3vgjIclt4CCDHDH7PlBBIyxcYdYKKsTHnJL-5o6K1Z6Wg9Dn_6JXASZni-iy6oitgpO6HFBJNhZ7D8av35DwKi9EB92pWygzZCKrpm6da_GaD9U5W0Di_bLFQ2HA2PyfTg1LQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394281353" />
        </div>
        <div className="divsion2">
          <div className="textCenter">
            <div className="roundCard">1</div>
            <div className="reg">Register on our Website</div>
            <div className="help">Register on our Website with your details.</div>
          </div>

        </div>
      </div>

      <div className="flex">

        <div className="divsion2">
          <div className="textCenter">
            <div className="roundCard">2</div>
            <div className="reg">Log In with your credentials </div>
            <div className="help">After the Registrations Login with your Email & Password</div>
          </div>

        </div>

        <div className="relative">
          <img
            className="ml-20 h-[30.69rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
          />
          <img
            className="absolute top-[4.25rem] left-[8rem] w-[7.38rem] h-[7.38rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/40f1dc99-bb90-4f77-aac0-cae4d278a4a6_1684387213415334862_Expires_-62135596800_Signature_NA4D0YpayhpesuinWk2E2AZN7rHUoBzdfOr24nbQtSEP6Wz_qG1RqkTo6pylIZMaklJTVzeq_WQzG_hzknviw3uiczdlU1-EpKF-x1DFYI2xOPwlBdkI3r-j9fQZnnkY6gjBZpACQVMRG2mocrcp1IOYlzE5pbNiDtbAiu01rKnaEPpRoVFj7c8E-IlLjoESQbC3l1-ZSaer_mYEyBI4cVrUt1ugaNNZnVVHFP0aAAd-v9rD75l7apxtwmbAM4xBSsYu5V3CRmxd3Dpsw6fSdOwDiWHNBkxuPJoX4sY5qN6z3_qHEvA_B6AknkRsMmhz8UJcMEfyWG3x3xJ8uPsQxA___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394944613"
          />
          <img
            className=" absolute top-[4rem] left-[8.25rem] h-[20.88rem] object-cover"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a7a48c3-6f1e-48c9-aa05-e310d237541e_1684387213415235935_Expires_-62135596800_Signature_mEVRV-0xqvPFH4C-dCcX09S3jPGqKMvqbIGh6GwMYJl0iwvRcdYiFYL6Ktn76Do9Q0YkmsKg59Xprar_cw187N0lZ5LAze2l-ylPgp_3mbh74jPyUTRXntiWtuObHpipZlPAVtv2OTZ9DQQcH7sxadKKDWvDVxPnymAq5IjguhHrBNUI2GMMYFh1QXdOUdqp2OOKc5znmVfK5-OIP3vgjIclt4CCDHDH7PlBBIyxcYdYKKsTHnJL-5o6K1Z6Wg9Dn_6JXASZni-iy6oitgpO6HFBJNhZ7D8av35DwKi9EB92pWygzZCKrpm6da_GaD9U5W0Di_bLFQ2HA2PyfTg1LQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394281353" />
        </div>
      </div>
      <div className="flex">
        <div className="relative">
          <img
            className="ml-20 h-[30.69rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
          />
          <img
            className=" absolute top-[4rem] left-[8.25rem] h-[20.88rem] object-cover"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a7a48c3-6f1e-48c9-aa05-e310d237541e_1684387213415235935_Expires_-62135596800_Signature_mEVRV-0xqvPFH4C-dCcX09S3jPGqKMvqbIGh6GwMYJl0iwvRcdYiFYL6Ktn76Do9Q0YkmsKg59Xprar_cw187N0lZ5LAze2l-ylPgp_3mbh74jPyUTRXntiWtuObHpipZlPAVtv2OTZ9DQQcH7sxadKKDWvDVxPnymAq5IjguhHrBNUI2GMMYFh1QXdOUdqp2OOKc5znmVfK5-OIP3vgjIclt4CCDHDH7PlBBIyxcYdYKKsTHnJL-5o6K1Z6Wg9Dn_6JXASZni-iy6oitgpO6HFBJNhZ7D8av35DwKi9EB92pWygzZCKrpm6da_GaD9U5W0Di_bLFQ2HA2PyfTg1LQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394281353" />
        </div>
        <div className="divsion2">
          <div className="textCenter">
            <div className="roundCard">3</div>
            <div className="reg">Take our Membership</div>
            <div className="help">Take our mandatory basic or standard plan to play our Quiz Game and Make Payment</div>
          </div>

        </div>
      </div>
      <div className="flex">
        <div className="relative">
          <img
            className="ml-20 h-[30.69rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
          />
          <img
            className=" absolute top-[4rem] left-[8.25rem] h-[20.88rem] object-cover"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a7a48c3-6f1e-48c9-aa05-e310d237541e_1684387213415235935_Expires_-62135596800_Signature_mEVRV-0xqvPFH4C-dCcX09S3jPGqKMvqbIGh6GwMYJl0iwvRcdYiFYL6Ktn76Do9Q0YkmsKg59Xprar_cw187N0lZ5LAze2l-ylPgp_3mbh74jPyUTRXntiWtuObHpipZlPAVtv2OTZ9DQQcH7sxadKKDWvDVxPnymAq5IjguhHrBNUI2GMMYFh1QXdOUdqp2OOKc5znmVfK5-OIP3vgjIclt4CCDHDH7PlBBIyxcYdYKKsTHnJL-5o6K1Z6Wg9Dn_6JXASZni-iy6oitgpO6HFBJNhZ7D8av35DwKi9EB92pWygzZCKrpm6da_GaD9U5W0Di_bLFQ2HA2PyfTg1LQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394281353" />
        </div>
        <div className="divsion2">
          <div className="textCenter">
            <div className="roundCard">4</div>
            <div className="reg">Choose your Language</div>
            <div className="help">After taking the Membership proceed to the Language selection to play Quiz in your selected Language.
              We have English, Telugu, Tamil and Kannada language</div>
          </div>

        </div>
      </div>
      <div className="flex">

        <div className="divsion2">
          <div className="textCenter">
            <div className="roundCard">5</div>
            <div className="reg">Start Playing the Quiz</div>
            <div className="help">Play the Quiz game with 3 options you will have 90 sec for each Question</div>
          </div>

        </div>
        <div className="relative">
          <img
            className="ml-20 h-[30.69rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
          />
          <img
            className=" absolute top-[4rem] left-[8.25rem] h-[20.88rem] object-cover"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a7a48c3-6f1e-48c9-aa05-e310d237541e_1684387213415235935_Expires_-62135596800_Signature_mEVRV-0xqvPFH4C-dCcX09S3jPGqKMvqbIGh6GwMYJl0iwvRcdYiFYL6Ktn76Do9Q0YkmsKg59Xprar_cw187N0lZ5LAze2l-ylPgp_3mbh74jPyUTRXntiWtuObHpipZlPAVtv2OTZ9DQQcH7sxadKKDWvDVxPnymAq5IjguhHrBNUI2GMMYFh1QXdOUdqp2OOKc5znmVfK5-OIP3vgjIclt4CCDHDH7PlBBIyxcYdYKKsTHnJL-5o6K1Z6Wg9Dn_6JXASZni-iy6oitgpO6HFBJNhZ7D8av35DwKi9EB92pWygzZCKrpm6da_GaD9U5W0Di_bLFQ2HA2PyfTg1LQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394281353" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="rounded w-auto bg-style shadow-[0px_4px_8px_rgba(61,_88,_144,_0.24)] flex flex-row py-[0.5rem] px-[1rem] gap-[0.25rem] cursor-pointer text-center text-white bg-blue-500">

          <button
            className=" tracking-[0.75px] capitalize font-medium "
            onClick={() => navigate("/quiz")}
          >
            Start The Quiz
          </button>
        </div>
      </div>
      <div className="text-center p-8"> <div className="who">Who are We</div></div>
      <div
        className=" flex w-[100%] h-[35.44rem] text-[1.69rem] bg-gray-200"
        data-scroll-to="whoAreWe"
      >
    

        <div className="w-[50%]">
          <img
            className=" w-[35.5rem] h-[35.44rem] object-cover p-20"
            alt="group"
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/1ec6b182-b1df-4846-8fa0-627d845dfdd1_1684387213415784512_Expires_-62135596800_Signature_duxv7fYTE5Nxo_rM0CxhNeH4bt8wo7rsIpzWvx1ClT76tbct4NWIr2HenD8Zrxn5BEy0soZg_wCZsioi-Q54Mz3AF5DE_paYDa22-GhGNqsRDGKnRLsU2eYLCMEiYvSwjtEIEraOYF0xvnyMsUdkp0GnlVwzWin7wzGpXQgFv-R04Q6XucGPkOaKtJPdlHbSY1ErqySZliuGSl2sy9z5-sSOUUS71SutdLOHpaVyC8ltO9qqc3Ei7DroxSPWpAZVcpH0Fo88utwehPtR0S53O4Un9QVT4QsG47yK_kfiYSNNg0plw9SDY66PcMm44q4j_4l51_2weq5-gMDHuvNjMQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684398995175"
          />
        </div>
        <div className="p-10">
      <div className=" textHelp">
      We help to increase your Knowledge 
      </div>
      
      <div className=" textPara inline-block w-[31.63rem] h-[11.69rem]">
        Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi
        in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo.
        Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis
        lacus ut arcu vulputate, non pellentesque sem convallis. Proin tempus
        sapien nisl, nec varius risus tristique a. Etiam ligula lacus,
        ultricies at cursus id, fringilla ne
      </div>

      <div className="flex flex-row">
        <div>
          <img
        className=""
        alt=""
        src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/c05e1966-89ec-4078-a2a0-392e1ad19089_1684387213415863182_Expires_-62135596800_Signature_MT15fdepIAfxHBuzekK2Fu0llp6SeCYAQHrI5VFQccn1iLwyPZNXBEwuIeycZdEesxxrpxukVZ0ZieUbAMGJPS0CXcJpIH9FuCj0uhK_MGO0p37gYIyNrHO-sQe2Ls1J378PV2-OM8yR4lERZkntK94uT89bjRraZJj3azePRMoevTDXaeIHU21whbrO9nA2yZN1CO6n02ic_6PHsGGi9GubCROJ6LxtXdVmdC9S95jy_f8MKxXIq1NQ58YcXoWUskWWRcaNAZ8D70ZXYfrd-KIzeE7LOxtBirvejLivc-9zqvKs_3o6oUpy_1vSib77l3-GGmKpWMZ1G987OkVXcw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684399069167"
      /></div>
        <div>
        <div className="top-[0rem] left-[0rem] font-medium m-2">
          Lorem Ipsum
        </div>
        <div className=" text-[1rem] text-darkslategray-100 inline-block w-[25.13rem]">{`Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.`}</div>
        
        </div>
      </div>

      <div className="flex flex-row">
        <div>
        <img
        className=""
        alt=""
        src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/c05e1966-89ec-4078-a2a0-392e1ad19089_1684387213415863182_Expires_-62135596800_Signature_MT15fdepIAfxHBuzekK2Fu0llp6SeCYAQHrI5VFQccn1iLwyPZNXBEwuIeycZdEesxxrpxukVZ0ZieUbAMGJPS0CXcJpIH9FuCj0uhK_MGO0p37gYIyNrHO-sQe2Ls1J378PV2-OM8yR4lERZkntK94uT89bjRraZJj3azePRMoevTDXaeIHU21whbrO9nA2yZN1CO6n02ic_6PHsGGi9GubCROJ6LxtXdVmdC9S95jy_f8MKxXIq1NQ58YcXoWUskWWRcaNAZ8D70ZXYfrd-KIzeE7LOxtBirvejLivc-9zqvKs_3o6oUpy_1vSib77l3-GGmKpWMZ1G987OkVXcw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684399069167"
      /></div>
        <div>
        <div className="top-[0rem] left-[0rem] font-medium m-2">
          Lorem Ipsum
        </div>
        <div className=" text-[1rem] text-darkslategray-100 inline-block w-[25.13rem]">{`Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.`}</div>
        
        </div>
      </div>


      {/* <div className=" w-[25.13rem] h-[5.56rem]">
        <div className=" top-[0rem] left-[0rem] font-medium">
          Lorem Ipsum
        </div>
        <div className=" text-[1rem] text-darkslategray-100 inline-block w-[25.13rem]">{`Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.`}</div>
      </div>
      <div className=" w-[25.13rem] h-[5.56rem]">
        <div className=" font-medium">
          Lorem Ipsum
        </div>
        <div className=" text-[1rem] text-darkslategray-100 inline-block w-[25.13rem]">{`Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. `}</div>
      </div>
      <img
        className=""
        alt=""
        src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/c05e1966-89ec-4078-a2a0-392e1ad19089_1684387213415863182_Expires_-62135596800_Signature_MT15fdepIAfxHBuzekK2Fu0llp6SeCYAQHrI5VFQccn1iLwyPZNXBEwuIeycZdEesxxrpxukVZ0ZieUbAMGJPS0CXcJpIH9FuCj0uhK_MGO0p37gYIyNrHO-sQe2Ls1J378PV2-OM8yR4lERZkntK94uT89bjRraZJj3azePRMoevTDXaeIHU21whbrO9nA2yZN1CO6n02ic_6PHsGGi9GubCROJ6LxtXdVmdC9S95jy_f8MKxXIq1NQ58YcXoWUskWWRcaNAZ8D70ZXYfrd-KIzeE7LOxtBirvejLivc-9zqvKs_3o6oUpy_1vSib77l3-GGmKpWMZ1G987OkVXcw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684399069167"
      />
      <img
        className=""
        alt=""
        src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/c05e1966-89ec-4078-a2a0-392e1ad19089_1684387213415863182_Expires_-62135596800_Signature_MT15fdepIAfxHBuzekK2Fu0llp6SeCYAQHrI5VFQccn1iLwyPZNXBEwuIeycZdEesxxrpxukVZ0ZieUbAMGJPS0CXcJpIH9FuCj0uhK_MGO0p37gYIyNrHO-sQe2Ls1J378PV2-OM8yR4lERZkntK94uT89bjRraZJj3azePRMoevTDXaeIHU21whbrO9nA2yZN1CO6n02ic_6PHsGGi9GubCROJ6LxtXdVmdC9S95jy_f8MKxXIq1NQ58YcXoWUskWWRcaNAZ8D70ZXYfrd-KIzeE7LOxtBirvejLivc-9zqvKs_3o6oUpy_1vSib77l3-GGmKpWMZ1G987OkVXcw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684399069167"
      />*/}
      </div> 
      </div>

    </Skeleton>
  );
};

export default HomePage;
