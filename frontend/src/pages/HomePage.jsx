import React from "react";
import Skeleton from "../layouts/Skeleton";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import Right from "../assets/images/right.png";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Skeleton>
      <Loader />
      <div className="relative  w-full h-[380rem] top-8 overflow-hidden text-left text-[0.88rem] text-darkslategray-300 ">
        <div className="absolute top-[32.56rem] left-[8.69rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
        <img
          className="absolute h-[4.96%] w-[46.36%] top-[3.59%] right-[3.47%] bottom-[91.45%] left-[50.17%] max-w-full overflow-hidden "
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
        </div>

        <div id="howItsWork" className="absolute top-[70rem] left-[4.5rem] w-[69.44rem] h-[32.25rem] text-[1.69rem]">
          <div className="absolute top-[16.69rem] left-[44rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
          <div className="absolute top-[12.94rem] left-[44.06rem] font-medium">
            Register on our website
          </div>
          <div className="absolute top-[16.75rem] left-[44.81rem] text-[1.13rem] text-gray-500 inline-block w-[24.63rem]">
            Register on our website with your details
          </div>
          <img
            className="absolute top-[1.56rem] left-[0rem] w-[36.38rem] h-[30.69rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
          />
          <img
            className="absolute top-[3.63rem] left-[3.88rem] rounded-2xl w-[34.94rem] h-[25.88rem] object-cover"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a7a48c3-6f1e-48c9-aa05-e310d237541e_1684387213415235935_Expires_-62135596800_Signature_mEVRV-0xqvPFH4C-dCcX09S3jPGqKMvqbIGh6GwMYJl0iwvRcdYiFYL6Ktn76Do9Q0YkmsKg59Xprar_cw187N0lZ5LAze2l-ylPgp_3mbh74jPyUTRXntiWtuObHpipZlPAVtv2OTZ9DQQcH7sxadKKDWvDVxPnymAq5IjguhHrBNUI2GMMYFh1QXdOUdqp2OOKc5znmVfK5-OIP3vgjIclt4CCDHDH7PlBBIyxcYdYKKsTHnJL-5o6K1Z6Wg9Dn_6JXASZni-iy6oitgpO6HFBJNhZ7D8av35DwKi9EB92pWygzZCKrpm6da_GaD9U5W0Di_bLFQ2HA2PyfTg1LQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394281353"
          />
          <img
            className="absolute top-[4.25rem] left-[52.06rem] w-[7.38rem] h-[7.38rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/40f1dc99-bb90-4f77-aac0-cae4d278a4a6_1684387213415334862_Expires_-62135596800_Signature_NA4D0YpayhpesuinWk2E2AZN7rHUoBzdfOr24nbQtSEP6Wz_qG1RqkTo6pylIZMaklJTVzeq_WQzG_hzknviw3uiczdlU1-EpKF-x1DFYI2xOPwlBdkI3r-j9fQZnnkY6gjBZpACQVMRG2mocrcp1IOYlzE5pbNiDtbAiu01rKnaEPpRoVFj7c8E-IlLjoESQbC3l1-ZSaer_mYEyBI4cVrUt1ugaNNZnVVHFP0aAAd-v9rD75l7apxtwmbAM4xBSsYu5V3CRmxd3Dpsw6fSdOwDiWHNBkxuPJoX4sY5qN6z3_qHEvA_B6AknkRsMmhz8UJcMEfyWG3x3xJ8uPsQxA___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394944613"
          />
          <div className="absolute top-[6rem] left-[55.2rem] text-[2.5rem] font-semibold text-white">
            1
          </div>
        </div>

        <div className="absolute top-[105.31rem] left-[9.38rem] w-[77rem] h-[32.25rem] text-[1.69rem]">
          <div className="absolute top-[16.69rem] left-[-0.06rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
          <div className="absolute top-[12.94rem] left-[0rem] font-medium">
            Log In with your credentials{" "}
          </div>

          <img
            className="absolute top-[0rem] left-[39.19rem] w-[38.81rem] h-[32.25rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/2a422dfa-c6d8-40d3-89fa-95aa51a2b8c9_1684387213415621635_Expires_-62135596800_Signature_uBfkp21itvuj3h7Ayy9B0udNizccwFXzVe4LCjERVHpOSrEEy_IBRghtmJxvrg_i2J2PUMWpXjtCOiWF_gSd8znWL1ALfvqNlXV089Ea7BxLDY6wLPiwcPwinO9WOxGccDiozyldYmRi4UD2zziRcdhW4QC8Hfvm8hhEoPMiHIAXm7ubWaoLOGu8ddigRtPhxVyPAsHikPD3dRrtxTYScVmDuhO9Y3SCv84N9DrpibyhTvUeUjzBGehWmYOvP-7XURHh8j04q2JgAsytVNcMBYHV2JwuUh2is3SoSq3492ri3N6r2HM2ded2g1AN_7eKI1k7PycX6bEpGjQZ_y-gLQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394828140"
          />
          <img
            className="absolute top-[4.25rem] left-[8rem] w-[7.38rem] h-[7.38rem]"
            alt=""
            src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/40f1dc99-bb90-4f77-aac0-cae4d278a4a6_1684387213415334862_Expires_-62135596800_Signature_NA4D0YpayhpesuinWk2E2AZN7rHUoBzdfOr24nbQtSEP6Wz_qG1RqkTo6pylIZMaklJTVzeq_WQzG_hzknviw3uiczdlU1-EpKF-x1DFYI2xOPwlBdkI3r-j9fQZnnkY6gjBZpACQVMRG2mocrcp1IOYlzE5pbNiDtbAiu01rKnaEPpRoVFj7c8E-IlLjoESQbC3l1-ZSaer_mYEyBI4cVrUt1ugaNNZnVVHFP0aAAd-v9rD75l7apxtwmbAM4xBSsYu5V3CRmxd3Dpsw6fSdOwDiWHNBkxuPJoX4sY5qN6z3_qHEvA_B6AknkRsMmhz8UJcMEfyWG3x3xJ8uPsQxA___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394944613"
          />
          <div className="absolute top-[6.06rem] left-[10.94rem] text-[2.5rem] font-semibold text-white">
            2
          </div>
        </div>
      </div>

      <div className="absolute top-[140rem] left-[4.5rem] w-[69.44rem] h-[32.25rem] text-[1.69rem]">
        <div className="absolute top-[16.69rem] left-[44rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
        <div className="absolute top-[12.94rem] left-[44.06rem] font-medium">
          Take our Membership
        </div>
        <div className="absolute top-[16.75rem] left-[44.81rem] text-[1.13rem] text-gray-500 inline-block w-[24.63rem]">
          Take our mandatory basic or standard plan to play our Quiz Game and
          Make Payment
        </div>
        <img
          className="absolute top-[1.56rem] left-[0rem] w-[36.38rem] h-[30.69rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
        />
        <img
          className="absolute top-[3.63rem] left-[3.88rem] rounded-2xl w-[34.94rem] h-[25.88rem] object-cover"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/e90172f5-407e-4c57-b09e-85c89054473b_1684387213415434636_Expires_-62135596800_Signature_W-aP9-oSpeWMtO6cyP0H0rZWsOKHHrVYCDzgno5Nt0-JuIBiWZ4Gn1wBXs7ZA7sakp1ch-Z7s_Xl9tI2hnT-cyVzp25_G72-TIj_4pwAC6wWGDj4_4ROKezjpA2rZQmN5KyI14HiXs44XOqeB4ESa4vxQ2DhpsEqfSHyM6s2B5McHakRVZfWMwIfFkUu6MoyiEwl69Oo5K2psFdEpb5LnhvYbIGjOf_g_g7jmmkjAPSsYXOVUeWbb-ggGtyGZ8kQMkCRkG2ocsjXvbFnuHeMcoALQpN5mPO6Tcm_KujaBULIvd9UC4XRiEu_S-FLpEYHVaPbfdfl0l3NgddHEfCe-Q___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395398343"
        />
        <img
          className="absolute top-[4.25rem] left-[52.06rem] w-[7.38rem] h-[7.38rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/40f1dc99-bb90-4f77-aac0-cae4d278a4a6_1684387213415334862_Expires_-62135596800_Signature_NA4D0YpayhpesuinWk2E2AZN7rHUoBzdfOr24nbQtSEP6Wz_qG1RqkTo6pylIZMaklJTVzeq_WQzG_hzknviw3uiczdlU1-EpKF-x1DFYI2xOPwlBdkI3r-j9fQZnnkY6gjBZpACQVMRG2mocrcp1IOYlzE5pbNiDtbAiu01rKnaEPpRoVFj7c8E-IlLjoESQbC3l1-ZSaer_mYEyBI4cVrUt1ugaNNZnVVHFP0aAAd-v9rD75l7apxtwmbAM4xBSsYu5V3CRmxd3Dpsw6fSdOwDiWHNBkxuPJoX4sY5qN6z3_qHEvA_B6AknkRsMmhz8UJcMEfyWG3x3xJ8uPsQxA___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394944613"
        />
        <div className="absolute top-[6.06rem] left-[55rem] text-[2.5rem] font-semibold text-white">
          3
        </div>
      </div>

      <div className="absolute top-[170rem] left-[9.38rem] w-[77rem] h-[32.25rem] text-[1.69rem]">
        <div className="absolute top-[16.69rem] left-[-0.06rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
        <div className="absolute top-[12.94rem] left-[0rem] font-medium">
          Choose Your Language
        </div>
        <div className="absolute top-[16.75rem] left-[0.75rem] text-[1.13rem] text-gray-500 inline-block w-[23rem]">
          After taking the Membership proceed to the Language selection to play
          Quiz in your selected Language.
          <br />
          <br />
          We have English, Telugu, Tamil and Kannada language
        </div>
        <img
          className="absolute top-[0rem] left-[39.19rem] w-[38.81rem] h-[32.25rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/74ecb5b9-f970-4abf-8b4b-f286a4e12ae9_1684387213415706142_Expires_-62135596800_Signature_d5TugDgnslbI__2jlKN8Ngfx7aof0fUM97rxI7-lY6ERMPhFwBu7u1qPuvMaHJ-ArdqoXFY4yr2JReKtefsAhLXI21o7KrYm5x4XONwE7FEa1gu0VnYey_N4nvOuPnEb7-WOO50xwhRI9blD52UbZVUrqjfbz4rqEAJEdPsU61prfI6B_IawdU7yxHO0xEWPrgZoKPIYdiSZB3FK_PSBjOzzu917nfaVJNY4Gyq42Rfv00uFeoEis-n9p6ShGx2Y2CZo3WuZUhM8gGCH2XM4cJracVXwU6seMWK3hE1iTYDgW7r9nLjAP0_9DkNMlpD04Q0vjFY1ZTjcrFNAXt1pUw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684398178139"
        />
        <img
          className="absolute top-[4.25rem] left-[8rem] w-[7.38rem] h-[7.38rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/40f1dc99-bb90-4f77-aac0-cae4d278a4a6_1684387213415334862_Expires_-62135596800_Signature_NA4D0YpayhpesuinWk2E2AZN7rHUoBzdfOr24nbQtSEP6Wz_qG1RqkTo6pylIZMaklJTVzeq_WQzG_hzknviw3uiczdlU1-EpKF-x1DFYI2xOPwlBdkI3r-j9fQZnnkY6gjBZpACQVMRG2mocrcp1IOYlzE5pbNiDtbAiu01rKnaEPpRoVFj7c8E-IlLjoESQbC3l1-ZSaer_mYEyBI4cVrUt1ugaNNZnVVHFP0aAAd-v9rD75l7apxtwmbAM4xBSsYu5V3CRmxd3Dpsw6fSdOwDiWHNBkxuPJoX4sY5qN6z3_qHEvA_B6AknkRsMmhz8UJcMEfyWG3x3xJ8uPsQxA___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394944613"
        />
        <div className="absolute top-[6.06rem] left-[10.94rem] text-[2.5rem] font-semibold text-white">
          4
        </div>
      </div>
      <div className="absolute top-[205rem] left-[4.5rem] w-[69.44rem] h-[32.25rem] text-[1.69rem]">
        <div className="absolute top-[16.69rem] left-[44rem] box-border w-[0.13rem] h-[1.79rem] border-r-[2px] border-solid border-darkslategray-200" />
        <div className="absolute top-[12.94rem] left-[44.06rem] font-medium">
          Start Playing the Quiz
        </div>
        <div className="absolute top-[16.75rem] left-[44.81rem] text-[1.13rem] text-gray-500 inline-block w-[24.63rem]">
          Play the Quiz game with 3 options you will have 90 sec for each
          Question
        </div>
        <img
          className="absolute top-[1.56rem] left-[0rem] w-[36.38rem] h-[30.69rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ef90fa55-d30c-4a48-a4d3-5596c9a897f3_1684387213415162436_Expires_-62135596800_Signature_hf949RoZnK4Cmztyhg4a_Rg6tLIRCq_LrsYUaiVOi_BC-_QsuBQ1mgnwSnzYpyY2AEozHdhZYoEZ3SCLbxGYuA80N8SYoF98tgsLOoYNBFIga3mR6p81ZXcqTkklW04D1y55aY-RaNLPp2tKZ9wT58_AGZwEnSYZ9GnEPmNSUCHa65RPtV0A_LTsB5jdZk5lKkLb0TUAacQEjUzKiF5AWm4cVxza6VHuLnxZ6KRcs2rpB3LpLh1LT602EcvWGuaUAOAmAwaPGdOnaro0pa3MMSdMAKuz3F6XS1zvBPdMjv0N7M49SRnUMNPw4fBq_qREJUXlVnVhqL_2Rfo4jXiTLw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684395567972"
        />
        <img
          className="absolute top-[3.63rem] left-[3.88rem] rounded-2xl w-[34.94rem] h-[25.88rem] object-cover"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/ff8c4364-b7d0-4deb-9bd4-192466f444c8_1684387213415524628_Expires_-62135596800_Signature_rfLS46_avXv98ED0UOzhEe-9ZVXEJGjwXBNWB2rK9whqjccVbUA9ONi9VhdHUuT9aijrLC0BSdkzoFBhB2WlYKflOetLfH1reLjUDIYCJCuB39zb_oqZkT-UJoEcnI9-4dvR6skHbe31iVctm92men5jKgFwKDLBnaMXB63WHOb2cJlhmKXHBPkUhmWxYvOqqv8K33pcwUPJitmtzJnXmZ1eEqdQjMWPwA9-S94AY2wAS8enlg5aLlQAumRpOXc6heb6NXqf17EQQ2On9VdXhwOIpgSP12SiU1ZKchDrHP-X4sTG4RxAXm3a6y5pqbjrupMTGs6UA_SzkQscfXPR6Q___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684398206325"
        />
        <img
          className="absolute top-[4.25rem] left-[52.06rem] w-[7.38rem] h-[7.38rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/40f1dc99-bb90-4f77-aac0-cae4d278a4a6_1684387213415334862_Expires_-62135596800_Signature_NA4D0YpayhpesuinWk2E2AZN7rHUoBzdfOr24nbQtSEP6Wz_qG1RqkTo6pylIZMaklJTVzeq_WQzG_hzknviw3uiczdlU1-EpKF-x1DFYI2xOPwlBdkI3r-j9fQZnnkY6gjBZpACQVMRG2mocrcp1IOYlzE5pbNiDtbAiu01rKnaEPpRoVFj7c8E-IlLjoESQbC3l1-ZSaer_mYEyBI4cVrUt1ugaNNZnVVHFP0aAAd-v9rD75l7apxtwmbAM4xBSsYu5V3CRmxd3Dpsw6fSdOwDiWHNBkxuPJoX4sY5qN6z3_qHEvA_B6AknkRsMmhz8UJcMEfyWG3x3xJ8uPsQxA___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684394944613"
        />
        <div className="absolute top-[6.06rem] left-[55rem] text-[2.5rem] font-semibold text-white">
          5
        </div>
      </div>

      <div className="absolute top-[240rem] left-[39.88rem] rounded bg-style shadow-[0px_4px_8px_rgba(61,_88,_144,_0.24)] flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[0.25rem] cursor-pointer text-center text-white bg-blue-500">
        <button
          className="relative tracking-[0.75px] capitalize font-medium"
          onClick={() => navigate("/quiz")}
        >
          Start The Quiz
        </button>
        <img className="relative w-[0rem] h-[0rem]" alt="" />
        <img className="relative w-[0rem] h-[0rem]" alt="" />
      </div>

      <div
        className="absolute top-[245rem] left-[0rem] w-[99rem] h-[53.44rem] text-[1.69rem] bg-gray-200"
        data-scroll-to="whoAreWe"
      >
        <div className="absolute top-[0rem] left-[0rem] bg-lighter-shade-blue-2 w-[90rem] h-[53.44rem]" />
        <img
          className="absolute top-[8.31rem] left-[4.5rem] w-[34.5rem] h-[38.44rem] object-cover"
          alt="group"
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/1ec6b182-b1df-4846-8fa0-627d845dfdd1_1684387213415784512_Expires_-62135596800_Signature_duxv7fYTE5Nxo_rM0CxhNeH4bt8wo7rsIpzWvx1ClT76tbct4NWIr2HenD8Zrxn5BEy0soZg_wCZsioi-Q54Mz3AF5DE_paYDa22-GhGNqsRDGKnRLsU2eYLCMEiYvSwjtEIEraOYF0xvnyMsUdkp0GnlVwzWin7wzGpXQgFv-R04Q6XucGPkOaKtJPdlHbSY1ErqySZliuGSl2sy9z5-sSOUUS71SutdLOHpaVyC8ltO9qqc3Ei7DroxSPWpAZVcpH0Fo88utwehPtR0S53O4Un9QVT4QsG47yK_kfiYSNNg0plw9SDY66PcMm44q4j_4l51_2weq5-gMDHuvNjMQ___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684398995175"
        />
        <div className="absolute top-[8.31rem] left-[49.31rem] text-[2.5rem] font-medium inline-block w-[33.19rem]">
          We help to increase your Knowledge
        </div>
        <div id="aboutUs" className="absolute top-[2.31rem] left-[38.13rem] text-[2.25rem] font-medium text-darkslategray-500">
          Who are We
        </div>
        <div className="absolute top-[17.06rem] left-[49.31rem] text-[1.13rem] text-darkslategray-100 inline-block w-[31.63rem] h-[11.69rem]">
          Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi
          in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo.
          Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis
          lacus ut arcu vulputate, non pellentesque sem convallis. Proin tempus
          sapien nisl, nec varius risus tristique a. Etiam ligula lacus,
          ultricies at cursus id, fringilla ne
        </div>
        <div className="absolute top-[31.25rem] left-[54.25rem] w-[25.13rem] h-[5.56rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[2.56rem] left-[0rem] text-[1rem] text-darkslategray-100 inline-block w-[25.13rem]">{`Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. `}</div>
        </div>
        <div className="absolute top-[38.06rem] left-[54.25rem] w-[25.13rem] h-[5.56rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[2.56rem] left-[0rem] text-[1rem] text-darkslategray-100 inline-block w-[25.13rem]">{`Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. `}</div>
        </div>
        <img
          className="absolute top-[32.19rem] left-[49.31rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/c05e1966-89ec-4078-a2a0-392e1ad19089_1684387213415863182_Expires_-62135596800_Signature_MT15fdepIAfxHBuzekK2Fu0llp6SeCYAQHrI5VFQccn1iLwyPZNXBEwuIeycZdEesxxrpxukVZ0ZieUbAMGJPS0CXcJpIH9FuCj0uhK_MGO0p37gYIyNrHO-sQe2Ls1J378PV2-OM8yR4lERZkntK94uT89bjRraZJj3azePRMoevTDXaeIHU21whbrO9nA2yZN1CO6n02ic_6PHsGGi9GubCROJ6LxtXdVmdC9S95jy_f8MKxXIq1NQ58YcXoWUskWWRcaNAZ8D70ZXYfrd-KIzeE7LOxtBirvejLivc-9zqvKs_3o6oUpy_1vSib77l3-GGmKpWMZ1G987OkVXcw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684399069167"
        />
        <img
          className="absolute top-[39rem] left-[49.31rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src="https://ik.imagekit.io/wish/MAD_QUIZ_PROJECT/c05e1966-89ec-4078-a2a0-392e1ad19089_1684387213415863182_Expires_-62135596800_Signature_MT15fdepIAfxHBuzekK2Fu0llp6SeCYAQHrI5VFQccn1iLwyPZNXBEwuIeycZdEesxxrpxukVZ0ZieUbAMGJPS0CXcJpIH9FuCj0uhK_MGO0p37gYIyNrHO-sQe2Ls1J378PV2-OM8yR4lERZkntK94uT89bjRraZJj3azePRMoevTDXaeIHU21whbrO9nA2yZN1CO6n02ic_6PHsGGi9GubCROJ6LxtXdVmdC9S95jy_f8MKxXIq1NQ58YcXoWUskWWRcaNAZ8D70ZXYfrd-KIzeE7LOxtBirvejLivc-9zqvKs_3o6oUpy_1vSib77l3-GGmKpWMZ1G987OkVXcw___Key-Pair-Id_K1P54FZWCHCL6J?updatedAt=1684399069167"
        />
      </div>

      <div className="absolute top-[305rem] left-[17.31rem] text-[2.5rem] font-medium text-darkslategray-500">
        Here is what our Clients are saying About us
      </div>

      <section className="absolute top-[305rem] left-14">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    Paul Starr
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    Paul Starr
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    Paul Starr
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <div id="pricing" className="absolute top-[335rem] left-[41rem] text-[2.5rem] ">
        Pricing
      </div>
      <div className="absolute top-[340rem] left-[26rem] text-[2.5rem] font-bold">
        Pay ₹100 to start playing Quiz
      </div>
      <div className="absolute top-[345rem] left-[26rem] text-[1rem] text-gray-400 ">
      Please select and pay the One Time Fee of Rs.100 in order to play the Quiz
      </div>
      
      <div className="absolute top-[345rem] left-[36rem] mt-40 ">
          <div className="w-80 h-80 border-4 border-grey-500  rounded-xl">
            <div>
              <div className="text-xl  mt-5 font-bold text-center">
                One Time Fee
              </div>
              <div className="text-xl font-bold mt-8 text-center">₹100</div>
              <div className="text-gray-600 text-[14px] font-light text-center">
                Per Month / Year
              </div>
              <div>
                <div className="flex ml-6 mt-12">
                  <img className="w-6 m-1 p-1" src={Right} alt="right" />
                  Exciting Rewards
                </div>
              </div>
              <div>
                <div className="flex ml-6 mt-2">
                  <img className="w-6 m-1 p-1" src={Right} alt="right" />
                  100 Questions in 1 Quiz
                </div>
              </div>
            </div>
          </div>
        </div>
    </Skeleton>
  );
};

export default HomePage;
