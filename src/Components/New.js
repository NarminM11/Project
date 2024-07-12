import React, { useState } from "react";
import {
  Select,
  Input,
  Form,
  Upload,
  Button,
  message,
  Typography,
  Row,
  Col,
  Modal,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfo } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/NavBar";
import optionsData from "../data.json";
import "../Assets/New.css";

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

const New = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const showModal = () => {
    if (isFormValid) {
      setOpen(true);
    } else {
      form
        .validateFields()
        .then(() => {
          setIsFormValid(true);
        })
        .catch((errorInfo) => {
          console.log("Validation failed:", errorInfo);
        });
    }
  };
  const validateForm = () => {
    form
      .validateFields()
      .then(() => {
        setIsFormValid(true);
        showModal();
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const [prefix, setPrefix] = useState("050");

  const onFinish = (values) => {
    console.log("Form values:", values);
    const fullNumber = `${values.prefix}${values.phoneNumber}`;
    console.log("Full number:", fullNumber);
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

  const handleSecondModalOk = () => {
    setSecondModalOpen(false);
    //actions for clicking "OK" button on the second modal
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const [form] = Form.useForm();
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const [thirdSelect, setThirdSelect] = useState("");
  const [fourthSelect, setFourthSelect] = useState("");

  const handleFirstSelectChange = (value) => {
    setFirstSelect(value);
    setSecondSelect("");
    setThirdSelect("");
    setFourthSelect("");
  };

  const handleSecondSelectChange = (value) => {
    setSecondSelect(value);
    setThirdSelect("");
    setFourthSelect("");
  };

  const handleThirdSelectChange = (value) => {
    setThirdSelect(value);
    setFourthSelect("");
  };

  const handleFourthSelectChange = (value) => {
    setFourthSelect(value);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="forms-container">
        <div className="new-header">
          <div className="header-content" style={{ fontSize: "28px" }}>
            Şikayət məlumatları
          </div>
        </div>
        <div className="row">
          <div className="col-md-24">
            <Form {...formItemLayout} onFinish={onFinish} form={form}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={24} xl={8}>
                  <Form.Item
                    label="Şikayət etdiyiniz fəaliyyət sahəsi"
                    name="select1"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      className="custom-select"
                      placeholder="Faəliyyət sahəsi"
                      style={{ width: "100%" }}
                      onChange={handleFirstSelectChange}
                      value={firstSelect}
                    >
                      {optionsData.select1.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Şikayətçi olduğunuz şirkət"
                    name="select2"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      className="custom-select"
                      placeholder="Şirkəti seçin"
                      style={{ width: "100%" }}
                      onChange={handleSecondSelectChange}
                      value={secondSelect}
                      disabled={!firstSelect}
                    >
                      {firstSelect &&
                        optionsData.select2[firstSelect]?.map((option) => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Şikayətin xarakterikası"
                    name="select3"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      placeholder="Xarakterika"
                      style={{ width: "100%" }}
                      className="custom-select"
                      onChange={handleThirdSelectChange}
                      value={thirdSelect}
                      disabled={!secondSelect}
                    >
                      {firstSelect &&
                        optionsData.select3[firstSelect]?.map((option) => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Şikayətin mövzusunu seçin"
                    name="select4"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      className="custom-select"
                      placeholder="Mövzu"
                      style={{ width: "100%" }}
                      onChange={handleFourthSelectChange}
                      value={fourthSelect}
                      disabled={!thirdSelect}
                    >
                      {thirdSelect &&
                        optionsData.select4[thirdSelect]?.map((option) => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} xl={8}>
                  <Form.Item
                    label="Abunəçi kodu"
                    name="input"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Input placeholder="Abunəçi kodunu daxil edin..." />
                  </Form.Item>
                  <Form.Item
                    label="Şikayət mətni (Qalan simvol sayı:)"
                    name="textarea"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <TextArea rows={4} placeholder="Maksimum 1000 simvol" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} xl={8}>
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
                      <h6 className="file mt-2">
                        {selectedFile ? selectedFile.name : "Fayl əlavə et"}
                      </h6>
                      {!selectedFile && (
                        <p className="uploadFileText">
                          Faylları buraya əlavə edin. Faylın maksimum 10 MB
                          həcmində, png, txt, jpeg, jpg, pdf formatında fayl
                          əlavə edə bilərsiniz.
                        </p>
                      )}
                      <input
                        id="file-upload"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]} className="mt-4">
                <Col xs={24} md={6}>
                  <Form.Item
                    label="Şəhəri seçin"
                    name="select5"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      placeholder="Şəhəri seçin"
                      style={{ width: "100%" }}
                      className="custom-select "
                    >
                      <Option value="option1">Option 1</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>
                  <div className="custom-form-row">
                    <Form.Item
                      label="Bina/ev"
                      name="input1"
                      className=""
                      rules={[
                        {
                          required: true,
                          message: "Bu xana boş qoyula bilməz!",
                        },
                      ]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                    <Form.Item
                      label="Mənzil"
                      name="input2"
                      className=""
                      rules={[
                        {
                          required: true,
                          message: "Bu xana boş qoyula bilməz!",
                        },
                      ]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item
                    label="Rayonu seçin"
                    name="select6"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      className="custom-select "
                      placeholder="Rayonu seçin"
                      style={{ width: "50%" }}
                    >
                      <Option value="option1">Option 1</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Əlaqə nömrəsi">
                    <Col span={6}>
                      <Form.Item name="prefix" noStyle>
                        <Select
                          onChange={(value) => setPrefix(value)}
                          className="select"
                          placeholder="(050)"
                        >
                          <Option value="050">050</Option>
                          <Option value="051">051</Option>
                          <Option value="055">055</Option>
                          <Option value="070">070</Option>
                          <Option value="077">077</Option>
                          <Option value="010">010</Option>
                          <Option value="060">060</Option>
                          <Option value="099">099</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={18}>
                      <Form.Item
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: "Bu xana boş qoyula bilməz!",
                          },
                          {
                            pattern: /^[0-9]{7}$/,
                            message: "",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          style={{ width: "100%" }}
                          placeholder="XXX-XX-XX"
                          addonBefore={
                            <span className="input-addon">+994</span>
                          }
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </Form.Item>
                    </Col>
                    {/* </Row> */}
                  </Form.Item>

                  {/* </div> */}
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item
                    label="Küçəni/Kəndi seçin"
                    name="select7"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select
                      className="custom-select "
                      placeholder="Küçəni/Kəndi seçin"
                      style={{ width: "100%" }}
                    >
                      <Option value="option1">Option 1</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Statisonar telefon" name="subscriberCode">
                    <Input placeholder="" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item
                    label="Yeni küçə əlavə et"
                    name="input3"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                  <Form.Item
                    label="E-poçt"
                    name="email"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Input placeholder="example@gmai.com" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]} className="mt-4">
                <Col xs={24}></Col>
              </Row>
              <Row>
                <Col span={24} style={{ textAlign: "right" }}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={validateForm}
                    >
                      <FontAwesomeIcon icon={faCheck} /> Şikayət yarat
                    </Button>
                  </Form.Item>

                  <Modal
                    visible={open}
                    onCancel={handleCancel}
                    footer={[
                      <Button
                        key="ok"
                        type="primary"
                        onClick={handleSecondModalOk}
                      >
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
                      Yeni şikayət yaradıldı!
                    </p>
                  </Modal>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
