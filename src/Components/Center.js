import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter, faInfo, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import "../Assets/Center.css";
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="center-content container-fluid">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex mt-4 justify-content-between">
            <div className="btn-group btn-group-custom" role="group" aria-label="Basic example">
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faPlus} className="me-1" /> Yeni Şikayetler
              </button>
              <button type="button" className="btn me-2">
                <FontAwesomeIcon icon={faFilter} className="me-1" /> Ətraflı Axtarış
              </button>
              <button type="button" className="btn me-2" onClick={handleShow}>
                <FontAwesomeIcon icon={faInfo} className="me-1" /> Təlimat
              </button>
            </div>
          </div>
          <div className="search-container d-flex align-items-center">
            <form className="d-flex align-items-center">
              <input
                className="form-control search-input m-4"
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

      <div className="row mt-3 third">
        <div className="col d-flex justify-content-center">
          <div className="table-responsive col d-flex justify-content-center">
            <table className="table table-bordered custom-table">
              <thead>
                <tr>
                  <th>Şikayət nömrəsi <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Fəaliyyət sahəsi <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Şirkət <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Mövzu <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Abunəçi kodu <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Status <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Tarix <FontAwesomeIcon icon={faCaretDown} /></th>
                  <th>Əməliyyatlar <FontAwesomeIcon icon={faCaretDown} /></th>
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
          <p className="centered-paragraph">Göstərilən: 0-0, cəmi 0 (0 səhifə)</p>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Təlimat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Burada təlimatlar olacaq...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bağla
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
