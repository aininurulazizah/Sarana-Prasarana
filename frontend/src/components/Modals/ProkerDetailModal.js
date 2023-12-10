import React from 'react';

const ProkerDetailModal = ({ proker, showModal, setShowModal }) => {
    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} id="prokerDetailModal" tabIndex="-1" aria-labelledby="prokerDetailModalLabel" aria-hidden={!showModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="prokerDetailModalLabel">Detail Proker</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            Nama Kegiatan: {proker.nama_kegiatan}<br />
                            Ketua Pelaksana: {proker.ketua_pelaksana}<br />
                            Deskripsi Kegiatan: {proker.deskripsi_kegiatan}<br />
                            Tanggal Mulai: {proker.tanggal_mulai}<br />
                            Tanggal Akhir: {proker.tanggal_akhir}<br />
                            Status: {proker.status}<br />
                            Catatan: {proker.catatan}<br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProkerDetailModal;
