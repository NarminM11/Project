import React, { useState } from "react";
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
          <Navbar />

          <div className="d-flex mt-4 justify-content-between flex-wrap">
            <div
              className="btn-group btn-group-custom mb-3 mb-md-0"
              role="group"
              aria-label="Basic example"
            >
              <Link to="/new">
                <button type="button" className="btn me-2">
                  <FontAwesomeIcon icon={faPlus} className="me-1" /> Yeni
                  Şikayetler
                </button>
              </Link>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faFilter} className="me-1" /> Ətraflı
                Axtarış
              </button>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faInfo} className="me-1" /> Təlimat
              </button>
            </div>

            <form className="d-flex align-items-center">
              <div className="input-group ">
                <input
                  type="search"
                  className="form-control search-input me-1 "
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
    <tr >
      <td >1</td>
      <td>Internet (GPON, ADSL və s.)</td>
      <td>"ADANET" MMC</td>
      <td>Xidmətə qoşulma</td>
      <td>115664</td>
      <td>Baxılır</td>
      <td>08.09.2023</td>
      <td style={{ textAlign: 'center' }}>
        <Link to="/info" style={{ display: 'block', width: '100%', height: '100%' }}>
          <FontAwesomeIcon icon={farEye} />
        </Link>
      </td>
    </tr>
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
