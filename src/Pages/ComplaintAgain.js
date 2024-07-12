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
  message,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfo } from "@fortawesome/free-solid-svg-icons";
import "../Assets/AgainC.css";
import Navbar from "../Components/NavBar";

const ComplaintDetails = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [form] = Form.useForm(); 
  const { TextArea } = Input;
  const { Option } = Select;

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); 

  const showModal = () => {
    if (isFormValid) { 
      setOpen(true);
    } else {
      form.validateFields().then(() => {
        setIsFormValid(true);
      }).catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
    }
  };
  const validateForm = () => {
    form.validateFields().then(() => {
      setIsFormValid(true);
      showModal(); 
    }).catch((errorInfo) => {
      console.log("Validation failed:", errorInfo);
    });
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

  const handleFileSelect = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(info.file.originFileObj);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
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
              current={3}
              percent={60}
              items={[
                {
                  title: "Baxılır",
                  subTitle: "15.08.2023",
                },
                {
                  title: "Cavanlandırılır",
                  subTitle: "30.08.2023",
                },
                {
                  title: "Tamamlandı",
                  subTitle: "01.09.2023",
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
        <Form form={form}>
          <Row gutter={[16, 16]} className="mt-5">
            <Col xs={24} md={6} className="label-col me-4">
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
                  onChange={handleSelectChange}
                >
                  <Option value="option1">Qismən təmin olundu</Option>
                  <Option value="option2">Təmin olunmadı</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={8} className="label-col">
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
            <Col xs={24} md={8} xl={8}>
              <Form.Item
                className="mt-5"
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
              >
                <div className="uploadFile d-flex justify-content-center align-items-center flex-column">
                  <label htmlFor="file-upload" className="">
                    {!selectedFile && (
                      <i className="upload-icon fa fa-upload"></i>
                    )}
                  </label>
                  <h6 className="file mt-2">{selectedFile ? selectedFile.name : 'Fayl əlavə et'}</h6>
                  {!selectedFile && (
                    <p className="uploadFileText">
                      Faylları buraya əlavə edin. Faylın maksimum 10 MB həcmində, png, txt, jpeg, jpg, pdf
                      formatında fayl əlavə edə bilərsiniz.
                    </p>
                  )}
                  <input id="file-upload" type="file" style={{ display: 'none' }} onChange={handleChange} />
                </div>
              </Form.Item>
            </Col>

            <div className="cancel-button mt-2 mb-4 d-flex justify-content-end">
              <Button
                type="primary"
                htmlType="submit"
                onClick={validateForm} 
                style={{
                  width: "auto",
                  backgroundColor: selectedValue ? "#ce2029" : "grey",
                }}
                className=""
              >
                <FontAwesomeIcon icon={faCheck} /> Şikayəti ISP-yə göndər
              </Button>

              <Button
                type="primary"
                htmlType="submit"
                onClick={validateForm} 
                style={{
                  width: "auto",
                  backgroundColor: selectedValue ? "#3c6cb4" : "grey",
                }}
                className="ms-4"
              >
                <FontAwesomeIcon icon={faCheck} /> Şikayəti İKTA-ya göndər
              </Button>
            </div>

            <Modal
              visible={open}
              onCancel={handleCancel}
              footer={[
                <Button key="ok" type="primary" onClick={handleOk}>
                  OK
                </Button>,
              ]}
            >
              <div
                className="info-icon d-flex justify-content-center align-items-center flex-column mt-5"
                style={{
                  color: "#3c6cb4",
                }}
              >
                <FontAwesomeIcon icon={faInfo} size="3x" />
              </div>
              <p
                className="text-center mt-4"
                style={{ fontSize: "20px", color: "#3c6cb4" }}
              >
                Şikayətiniz Ləğv Edildi
              </p>
            </Modal>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ComplaintDetails;
