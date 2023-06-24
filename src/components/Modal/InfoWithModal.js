import React, { useState } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import ModalResponsiveInfo from "./ModalResponsiveInfo";
import ModalInfoStudentFirstClass from "../StudentPanel/FirstRequest/ClassStudentModalInfo";
import ClassStudentModalInfo from "../Class/Modals/ClassStudentModalInfo";
import ModalInfoStudentSemiPrivate from "../StudentSemiPrivateClass/ModalInfoStudentSemiPrivate";
import ModalInfoCalenderStudent from "../PanelCalender/ModalInfoCalenderStudent";
import GuideModal from "../StudentDashboard/Content/Profile/GuideModal/GuideModal";

const InfoWithModal = (props) => {
  let [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div onClick={() => setShowModal(true)}>
        {/*{*/}
        {/*    buttonInfo && <buttonInfo/> :*/}
        {/*        <div className="flex-center icon_Title " >*/}
        {/*            <span className="text-white">راهنما</span>*/}
        {/*            <BsFillLightbulbFill className="mr-2"/>*/}
        {/*        </div>*/}
        {/*}*/}
        {props.children}
      </div>

      <ModalResponsiveInfo show={showModal} setter={setShowModal}>
        {props.typeModal === "studentFirstClass" && (
          <ModalInfoStudentFirstClass show={showModal} setter={setShowModal} />
        )}
        {props.typeModal === "studentClass" && <ClassStudentModalInfo />}
        {props.typeModal === "privateStudent" && (
          <ModalInfoStudentSemiPrivate />
        )}
        {props.typeModal === "calenderStudent" && <ModalInfoCalenderStudent />}
        {props.typeModal === "profile" && (
          <GuideModal setShowModal={setShowModal} />
        )}
      </ModalResponsiveInfo>
    </div>
  );
};

export default InfoWithModal;
