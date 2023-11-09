import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import feather from 'feather-icons';

const TambahKegiatanTimelineModal = ({ showModal, setShowModal }) => {
    const [formData, setFormData] = useState({ namaOrmawa: '', fileKAK: null, fileRAB: null });
    const modalRef = useRef();
    
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        // Jika input adalah file, kita memerlukan penanganan khusus
        const newValue = type === 'file' ? files[0] : value;
        
        setFormData({
          ...formData,
          [name]: newValue,
        });
    };
    
    const handleSubmit = () => {
      
    };
  
    return (
      <div className={`modal fade ${showModal ? 'show' : ''}`} id="addUploadKAKModal" tabIndex="-1" aria-labelledby="addUploadKAKModalLabel" aria-hidden={!showModal}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUploadKAKModalLabel">Upload KAK</h5>
              <button type="button" className="d-none" ref={modalRef} data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
            <form>
                <div className="mb-3">
                <label htmlFor="namaOrmawa" className="form-label">Nama ORMAWA</label>
                <input
                    type="text"
                    disabled
                    className="form-control"
                    id="namaOrmawa"
                    name="namaOrmawa"
                    placeholder="ORMAWA"
                    value={formData.namaOrmawa}
                    onChange={handleInputChange}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="fileKAK" className="form-label">File KAK</label>
                <input
                    type="file"
                    className="form-control"
                    id="fileKAK"
                    name="fileKAK"
                    onChange={handleInputChange}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="fileRAB" className="form-label">File RAB</label>
                <input
                    type="file"
                    className="form-control"
                    id="fileRAB"
                    name="fileRAB"
                    onChange={handleInputChange}
                />
                </div>
            </form>
  
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Tutup</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TambahKegiatanTimelineModal;