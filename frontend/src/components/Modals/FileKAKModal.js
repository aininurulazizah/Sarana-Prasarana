import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import feather from 'feather-icons';
import { Document, Page } from 'react-pdf';

const FileKAKModal = ({ pdfUrl, showModal, setShowModal }) => {
    const modalRef = useRef();
    pdfUrl = '/test.pdf';
    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} id="FileKAKModal" tabIndex="-1" aria-labelledby="FileKAKModalLabel" aria-hidden={!showModal}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FileKAKModalLabel">File KAK</h5>
                <button type="button" className="d-none" ref={modalRef} data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {/* <Document file={pdfUrl}>
                    <Page pageNumber={1} />
                </Document> */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Tutup</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default FileKAKModal;