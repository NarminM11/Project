import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFilter,
  faInfo,
  faCaretDown,
  faSearch,
  faEye as farEye,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Center.css";
import Navbar from "../Components/NavBar";

function Center() {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState([
    {
      id: 10037,
      activity: "Internet (GPON, ADSL və s.)",
      company: '"ADANET" MMC',
      topic: "Xidmətə qoşulma",
      subscriberCode: 546787,
      status: "Cavablandırıldı",
      date: "03.09.2023",
      path: "/notexist",
    },
    {
      id: 10234,
      activity: "Internet (GPON, ADSL və s.)",
      company: '"ADANET" MMC',
      topic: "Xidmətə qoşulma",
      subscriberCode: 115664,
      status: "Baxılır",
      date: "08.09.2023",
      path: "/info",
    },
    {
      id: 10166,
      activity: "Internet (GPON, ADSL və s.)",
      company: '"ADANET" MMC',
      topic: "Xidmətə qoşulma",
      subscriberCode: 106545,
      status: "Baxılır",
      date: "07.09.2023",
      path: "/info",
    },
    {
      id: 10167,
      activity: "Internet (GPON, ADSL və s.)",
      company: '"ADANET" MMC',
      topic: "Xidmətə qoşulma",
      subscriberCode: 106545,
      status: "Ləğv edildi",
      date: "08.09.2023",
      path: "/notexist",
    },
  ]);
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseQuery = query.toLowerCase();
    const filtered = tableData.filter(
      (item) =>
        item.id.toString().includes(lowerCaseQuery) ||
        item.activity.toLowerCase().includes(lowerCaseQuery) ||
        item.company.toLowerCase().includes(lowerCaseQuery) ||
        item.topic.toLowerCase().includes(lowerCaseQuery) ||
        item.subscriberCode.toString().includes(lowerCaseQuery) ||
        item.status.toLowerCase().includes(lowerCaseQuery) ||
        item.date.includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  const handleDownload = () => {
    const pdfUrl =
      "https://e-complaint.icta.az/documents/instructions/E-%C5%9Eikay%C9%99t%20-%20Abun%C9%99%C3%A7i%20T%C9%99limat%C4%B1.pdf";
    window.open(pdfUrl, "_blank"); //new browser tab
  };

  return (
    <div className="center-content container-fluid">
      <div className="row mb-4">
        <div className="col">
          <Navbar />

          <div className="d-flex mt-4 justify-content-between flex-wrap">
            <div
              className="btn-group btn-group-custom mb-3 mb-md-0"
              role="group"
              aria-label="Basic example"
            >
              <Link to="">
                <button type="button" className="btn me-2">
                  <FontAwesomeIcon icon={faPlus} className="me-1" /> Yeni
                  Şikayetler
                </button>
              </Link>
              <Link to="/new">
                <button type="button" className="btn me-2">
                  <FontAwesomeIcon icon={faFilter} className="me-1" /> Ətraflı
                  Axtarış
                </button>
              </Link>

              <button
                type="button"
                className="btn me-2"
                onClick={handleDownload}
              >
                <FontAwesomeIcon icon={faInfo} className="me-1" /> Təlimat
              </button>
            </div>

            <form className="d-flex align-items-center" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control search-input me-1"
                  style={{ maxWidth: "80%" }}
                  placeholder="Axtar"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row mt-3 third">
        <div className="col">
          <div className="table-responsive">
            <table className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">
                    Şikayət nömrəsi <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Fəaliyyət sahəsi <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Şirkət <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Mövzu <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Abunəçi kodu <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Status <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Tarix <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th scope="col">
                    Əməliyyatlar <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="center-td">{item.id}</td>
                    <td>{item.activity}</td>
                    <td>{item.company}</td>
                    <td>{item.topic}</td>
                    <td>{item.subscriberCode}</td>
                    <td>{item.status}</td>
                    <td>{item.date}</td>
                    <td style={{ textAlign: "center" }}>
                      {item.path === "/notexist" && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to={`/again/${item.id}`}
                            style={{
                              marginRight: "8px",
                              textDecoration: "none",
                            }}
                          >
                            <button
                              style={{
                                background: "#ce2029",
                                color: "white",
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "4px",
                                cursor: "pointer",
                              }}
                            >
                              Təkrar şikayət et
                            </button>
                          </Link>
                          <div
                            style={{
                              marginLeft: "auto",
                              padding: "8px",
                              background: "#f0f0f0",
                              borderRadius: "4px",
                              width: "40px",
                              textAlign: "end",
                            }}
                          >
                            <Link
                              to={item.path}
                              style={{
                                display: "block",
                                textAlign: "end",
                                textDecoration: "none",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={farEye}
                                style={{ fontSize: "18px", color: "#3c6cb4" }}
                              />
                            </Link>
                          </div>
                        </div>
                      )}

                      <div
                        style={{
                          marginLeft: "auto",
                          textAlign: "end",
                          width: "12%",
                        }}
                      >
                        {item.path !== "/notexist" && (
                          <div style={{ marginLeft: "auto", textAlign: "end" }}>
                            <Link to={item.path} style={{}}>
                              <div
                                style={{
                                  padding: "8px",
                                  background: "#f0f0f0",
                                  borderRadius: "4px",
                                  textAlign: "end",
                                  // width:"20%"
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={farEye}
                                  style={{ fontSize: "18px", color: "#3c6cb4" }}
                                />
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
