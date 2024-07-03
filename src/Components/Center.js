import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faFilter,
  faInfo,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import "../Assets/Center.css"

function App() {
  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col">
          <div className="d-flex justify-content-center mt-4">
            <div className="btn-group btn-group-custom" role="group" aria-label="Basic example">
              <button type="button" className="btn me-4">
                <FontAwesomeIcon icon={faPlus} className="me-1" /> Yeni Şikayetler
              </button>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faFilter} className="me-1" /> Ətraflı Axtarış
              </button>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faInfo} className="me-1" /> Təlimat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="search-container d-flex align-items-center">
            <form className="d-flex align-items-center">
              <input
                className="form-control search-input me-2"
                type="search"
                placeholder="Axtar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Axtar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col d-flex justify-content-center">
          <div className="table-responsive col d-flex justify-content-center"> {/* Ensure responsive behavior */}
            <table className="table table-bordered custom-table">
              <thead>
                <tr>
                  <th>
                    Şikayət nömrəsi <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Fəaliyyət sahəsi <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Şirkət <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Mövzu <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Abunəçi kodu <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Status <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Tarix <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                  <th>
                    Əməliyyatlar <FontAwesomeIcon icon={faCaretDown} />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8">Heç bir şikayet əlavə edilməyib...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-start">
          <p>Göstərilən: 0-0, cəmi 0 (0 səhifə)</p>
        </div>
      </div>
    </div>
  );
}

export default App;
