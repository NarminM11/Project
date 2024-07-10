import React, { useState } from "react";
import {
  Row,
  Col,
  Steps,
  Form,
  Button,
  Modal,
  Input,
  Select,
  Option,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfo } from "@fortawesome/free-solid-svg-icons";
import "../Assets/AgainC.css";
import Navbar from "../Components/NavBar";

const ComplaintDetails = () => {
  const { TextArea } = Input;
  const { Option } = Select;

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
              current={0}
              percent={60}
              items={[
                {
                  title: "Baxılır",
                  subTitle: "00:00:08",
                },
                {
                  title: "Cavanlandırılır",
                },
                {
                  title: "Tamamlandı",
                },
              ]}
            />
          </div>

          <p className="again-text mt-4">
            Hörmətli abunəçi! Sizin ünvanın yerləşdiyi ərazidə infrastrukturun
            yenidənqurma işləri aparıldığından qoşulmaların təmin edilməsində
            gecikmələr yaşanmışdır. 04.09.2023-cü il tarixində ünvana qoşulma
            təmin edilmişdir.
          </p>
        </div>
      </div>

      <div>
        <div className="header-content mt-5" style={{ fontSize: "18px" }}>
          Təkrar şikayət
        </div>
        <Form>
          <Row gutter={[16, 16]} className="mt-5">
            <Col xs={24} md={4} className="label-col me-4">
              <Form.Item
                label="Şikayətə baxılmanın nəticəsi"
                name="select1"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Bu xana boş qoyula bilməz!" },
                ]}
              >
                <Select
                  className="custom-select"
                  placeholder="Seçim edin"
                  style={{ width: "100%" }}
                >
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={10} className="label-col">
              <Form.Item
                label="Şikayət mətni"
                name="textarea"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Bu xana boş qoyula bilməz!" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Maksimum 1000 simvol"
                  style={{ height: "220px" }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8} xl={6}>
              <Form.Item
                // label="Fayl Əlavə Et"
                className="mt-5"
                name="upload"
                rules={[{ required: true, message: "" }]}
              >
                <div className="again-uploadFile d-flex justify-content-center align-items-center flex-column">
                  <i className="icon fa-solid fa-upload"></i>
                  <h6 className="file mt-2">Fayl əlavə et</h6>
                  <p className="uploadFileText mt-5">
                    Faylları buraya əlavə edin. Faylın maksimum 10 MB həcmində,
                    png, txt, jpeg, jpg, pdf formatında fayl əlavə edə
                    bilərsiniz.
                  </p>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      {/* <div className="cancel-button mt-4 d-flex justify-content-end">
        <Form.Item className="cancel">
          <Button type="primary" onClick={showModal}>
            Şikayəti ləğv et
          </Button>
        </Form.Item>
      </div> */}
      {/* 
      <Modal
        title="Şikayəti ləğv etmək səbəbiniz nədir?"
        visible={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Şikayəti ləğv et"
        cancelText="Bağla"
        okButtonProps={{ style: { width: "220px", fontSize: "18px" } }}
        cancelButtonProps={{ style: { width: "120px", fontSize: "18px" } }}
      >
        <Form.Item
          name="textarea"
          rules={[{ required: true, message: "Bu xana boş qoyula bilməz!" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Şikayəti ləğv etmə səbəbinizi daxil edin."
          />
        </Form.Item>
      </Modal> */}

      {/* <Modal
        visible={secondModalOpen}
        onCancel={handleSecondModalCancel}
        footer={[
          <Button key="ok" type="primary" onClick={handleSecondModalOk}>
            OK
          </Button>,
        ]}
      >
        <div className="info-icon d-flex justify-content-center align-items-center flex-column mt-5">
          <FontAwesomeIcon icon={faInfo} size="3x" />
        </div>
        <p className="text-center mt-4" style={{ fontSize: "20px" }}>
          Şikayətiniz Ləğv Edildi
        </p>
      </Modal> */}
    </div>
  );
};

export default ComplaintDetails;
