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
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../Assets/New.css";
import Navbar from "../Components/NavBar";

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

const New = () => {
  const [filePreview, setFilePreview] = useState(null);
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
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

  return (
    <div className="container-fluid">
      <Navbar />

      <div className="forms-container">
        <div className="new-header">
          <div
            className="header-content"
            style={{
              fontSize: "28px",
            }}
          >
            Şikayət Məlumatları
          </div>
        </div>
        <div className="row">
          <div className="col-md-24">
            <Form {...formItemLayout}>
              <Row gutter={[12, 12]}>
                <Col span={8}>
                  <Form.Item
                    label="Şikayət etdiyiniz fəaliyyət sahəsi"
                    name="select1"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select defaultValue="option1" style={{ width: "100%" }}>
                      <Option value="option1">Faəliyyət sahəsi</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Şikayətçi olduğunuz şirkət"
                    name="select2"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select defaultValue="option1" style={{ width: "100%" }}>
                      <Option value="option1">
                        Şikayətçi olduğunuz şirkəti seçin
                      </Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Şikayətin xarakterikası"
                    name="select3"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select defaultValue="option1" style={{ width: "100%" }}>
                      <Option value="option1">Şikayətin xarakterikası</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Şikayətin mövzusunu seçin"
                    name="select3"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <Select defaultValue="option1" style={{ width: "100%" }}>
                      <Option value="option1">Şikayətin mövzusu</Option>
                      <Option value="option2">Option 2</Option>
                      <Option value="option3">Option 3</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
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
                    label="Şikayət mətni(Qalan simvol sayı:)"
                    name="textarea"
                    rules={[
                      { required: true, message: "Bu xana boş qoyula bilməz!" },
                    ]}
                  >
                    <TextArea rows={4} placeholder="Maksimum 1000 simvol" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label="File Upload"
                    name="upload"
                    rules={[
                      { required: true, message: "Please upload a file" },
                    ]}
                  >
                    <Upload>
                      <Button
                        icon={<UploadOutlined />}
                        style={{ height: "250px" }}
                      >
                        Fayl əlavə et
                      </Button>
                    </Upload>
                  </Form.Item>
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
