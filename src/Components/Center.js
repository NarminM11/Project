import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFilter,
  faInfo,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Center.css";

function Center() {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState([]); //for index item

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    //search logic will be here later
  };

  return (
    <div className="center-content container-fluid">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex mt-4 justify-content-between flex-wrap">
            <div
              className="btn-group btn-group-custom mb-3 mb-md-0"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faPlus} className="me-1" /> Yeni
                Şikayetler
              </button>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faFilter} className="me-1" /> Ətraflı
                Axtarış
              </button>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faInfo} className="me-1" /> Təlimat
              </button>
            </div>

            <form className="d-flex align-items-center">
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
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={handleSearch}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row mt-3 third">
        <div className="col ">
          <div className="table-responsive">
            <table className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
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
                    Əməliyyatlar <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center"
                      style={{ height: "100px" }}
                    >
                      Heç bir məlumat əlavə edilməyib...
                    </td>
                  </tr>
                ) : (
                  tableData.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.sikayetNomresi}</td>
                      <td>{item.fealiyyetSahesi}</td>
                      <td>{item.sirket}</td>
                      <td>{item.movzu}</td>
                      <td>{item.abuneciKodu}</td>
                      <td>{item.status}</td>
                      <td>{item.emeliyyatlar}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-start">
          <p className="centered-paragraph">
            Göstərilən: 0-0, cəmi 0 (0 səhifə)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Center;
