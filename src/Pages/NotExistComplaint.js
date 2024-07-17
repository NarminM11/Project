import React, { useState } from "react";
import { Row, Col, Steps, Form, Button, Modal, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfo } from "@fortawesome/free-solid-svg-icons";
import "../Assets/notexist.css";
import Navbar from "../Components/NavBar";

const ComplaintDetails = () => {
  const { TextArea } = Input;

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      showSecondModal();
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const showSecondModal = () => {
    setSecondModalOpen(true);
  };

  const handleSecondModalOk = () => {
    setSecondModalOpen(false);
    //actions for clicking "OK" button on the second modal
  };

  const handleSecondModalCancel = () => {
    setSecondModalOpen(false);
    //actions for closing the second modal
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="complaint-details1 mt-4">
        <div className="md">
          <div className="new-header">
            <div className="header-content" style={{ fontSize: "28px" }}>
              Şikayət məlumatları
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ms-4">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={4} className="label-col">
                  <p>Şikayət nömrəsi:</p>
                  <p>Şikayət etdiyiniz fəaliyyət sahəsi:</p>
                  <p>Şikayətçi olduğunuz şirkət:</p>
                  <p>Şikayət xarakteristikası:</p>
                  <p>Abunəçi kodu:</p>
                </Col>
                <Col xs={24} md={4} className="value-col">
                  <p>10234</p>
                  <p>İnternet(GPON, ADSL və s.)</p>
                  <p>"ADANET" MMC</p>
                  <p>Xidmətə qoşulma</p>
                  <p>9999997888</p>
                </Col>
                <Col xs={24} md={3} className="label-col">
                  <p>Şəhər:</p>
                  <p>Bina:</p>
                  <p>Əlaqə nömrəsi:</p>
                  <p>E-poçt:</p>
                </Col>
                <Col xs={24} md={5} className="value-col">
                  <p>Bakı</p>
                  <p>15</p>
                  <p>+99455555555</p>
                  <p>test.mail@icta.az</p>
                </Col>
                <Col xs={24} md={3} className="label-col">
                  <p>Rayon:</p>
                  <p>Mənzil:</p>
                  <p>Statisionar telefon:</p>
                </Col>
                <Col xs={24} md={3} className="value-col">
                  <p>Yasamal</p>
                  <p>12</p>
                  <p>+994125555555</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className="complaint-details2 mt-4">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={4} className="label-col">
              <p>Şikayətin mövzusu:</p>
              <p>Şikayətin mətni:</p>
              <p>Fayl:</p>
            </Col>
            <Col xs={24} md={10} className="value-col">
              <p>Xidmətə qoşulma</p>
              <p>
                Müraciətin üzərindən uzun müddət keçməsinə baxmayaraq qoşulma
                təmin edilməmişdir
              </p>
              <p></p>
            </Col>
          </Row>
        </div>
      </div>

      <div>
        <div className="complaint-status mt-5">
          <div className="header-content" style={{ fontSize: "18px" }}>
            Şikayətə baxılmanın nəticəsi
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <Steps
              current={1}
              percent={100}
              items={[
                {
                  title: "Baxılır",
                  subTitle: "01.09.2023",
                },
                {
                  title: "Şikayət Ləğv edildi",
                },
              ]}
            />
          </div>
          <div style={{}} className="status-message mt-4">
            <p>Problem artıq mövcud deil</p>
          </div>
        </div>
        <div className="status d-flex justify-content-end align-items-right">
          <Row className="status-row mt-4">
            <Col className="status-p">Status:</Col>
            <Col className="status-p">Şikayət ləğv edildi</Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
