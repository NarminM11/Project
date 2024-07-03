import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFilter,
  faInfo,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../Assets/Center.css";

function Center() {
  return (
    <div className="center-content container-fluid">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex mt-4 justify-content-between">
            <div
              className="btn-group btn-group-custom"
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
            <div className="search-container d-flex align-items-center">
              <form className="d-flex align-items-center">
                <input
                  className="form-control search-input me-1"
                  type="search"
                  placeholder="Axtar"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="me-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3 third">
        <div className="col d-flex justify-content-center">
          <div className="table-responsive col d-flex justify-content-center">
            {" "}
            {/* Ensure responsive behavior */}
            <table className="table table-bordered custom-table">
              <thead>
                <tr>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Şikayət nömrəsi <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Fəaliyyət sahəsi <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Şirkət <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Mövzu <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Abunəçi kodu <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Status <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "50px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Tarix <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th
                    style={{
                      height: "60px",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Əməliyyatlar <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8">Heç bir şikayət əlavə edilməyib...</td>
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
