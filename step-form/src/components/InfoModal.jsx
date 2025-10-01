import { Button, Modal } from "antd";
import { useState } from "react";
const InfoModal = ({ formData, isModalOpen, onClose }) => {
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const formDataString = JSON.stringify(formData);
  // const objectKeys = Object.keys(formData);
  // const objectValues = Object.values(formData);
  //   console.debug(
  //     "object values>>>>>>>>>>>",
  //     Object.keys(formData),
  //     Object.values(formData)
  //   );

  console.log("formData before modal render:", formData);

  return (
    <>
      <Modal
        title="Submitted Data"
        open={isModalOpen}
        onOk={onClose}
        onCancel={onClose}
      >
        <h3>Form Data:</h3>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {formDataString}
        </pre>
      </Modal>
    </>
  );
};
export default InfoModal;
