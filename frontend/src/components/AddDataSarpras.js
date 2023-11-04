import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

const AddDataSarpras = () => {
    const location = useLocation();

    useEffect(() => {
        feather.replace(); // Replace the icons after component mounts
    }, []);

    return (
        <main class="content">
            <div class="container-fluid p-0">

                <h1 class="h3 mb-3"><strong> Tambah Data Peminjaman Sarana dan Prasarana</strong></h1>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <button class="btn btn-primary mt-2"><i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Simpan Data</span></button>
                            </div>
                            <div className="card-body">
                                <form style={{ marginLeft: '40px' }}>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Nama Kegiatan</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Nama Ormawa</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="inputPassword" placeholder="name@example.com" className="col-sm-2 col-form-label">Nama Ketua Pelaksana</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="formFile" className="col-sm-2 col-form-label">Logo Ormawa</label>
                                        <div className="col-sm-8">
                                            <input className="form-control form-control-lg" type="file" id="formFile" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="formFile" className="col-sm-2 col-form-label">Lampiran Surat</label>
                                        <div className="col-sm-8">
                                            <input className="form-control form-control-lg" type="file" id="formFile" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="date" className="col-sm-2 col-form-label">Tanggal Kegiatan</label>
                                        <div className="col-sm-8">
                                            <input className="form-control form-control-lg" type="date" id="date" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="date" className="col-sm-2 col-form-label">Waktu Kegiatan</label>
                                        <div className="col-sm-8">
                                            <div className='d-flex'>
                                                <input className="form-control form-control-lg" placeholder="Start" type="time" style={{ marginRight: '10px' }} />
                                                <input className="form-control form-control-lg" type="time" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="date" className="col-sm-2 col-form-label">Sarana Prasarana yang Dipinjam</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control form-control-lg" id="exampleTextarea" rows="4" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="date" className="col-sm-2 col-form-label">Tanda Tangan Ketua Pelaksana</label>
                                        <div className="col-sm-8">
                                            <input className="form-control form-control-lg" type="file" id="formFile" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="date" className="col-sm-2 col-form-label">Nama Ketua Ormawa</label>
                                        <div className="col-sm-8">
                                            <input className="form-control form-control-lg" type="text" id="text" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row" style={{ fontSize: '16px', textAlign: 'right', fontWeight: '700' }}>
                                        <label for="date" className="col-sm-2 col-form-label">Tanda Tangan Ketua Ormawa</label>
                                        <div className="col-sm-8">
                                            <input className="form-control form-control-lg" type="file" id="formFile" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    );
};

export default AddDataSarpras;
