import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import feather from 'feather-icons';

const UploadKAK = ({ }) => {
    const [role, setRole] = useState(null);
    useEffect(() => {
        feather.replace(); 
        const role = localStorage.getItem('role');
        setRole(role);
    }, []);

    const [proker, setProker] = useState([
        {
            namaKegiatan: '',
            ketuaPelaksana: '',
            jenisKegiatan: ''
        }
    ]);
    const [formData, setFormData] = useState({ 
        namaOrmawa: role,
        fileKAK: null,
        fileRAB: null,
        proker: []
    });
    
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProkerChange = (e, index) => {
        let data = [...proker];
        data[index][e.target.name] = e.target.value;
        setProker(data);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      formData.namaOrmawa = role;
      formData.proker = proker;
      console.log(formData);
      feather.replace();
    };

    const addInputRow = () => {
        let object = {
            namaKegiatan: '',
            ketuaPelaksana: '',
            jenisKegiatan: ''
        };
        setProker([...proker, object]);
    };

    const handleDeleteRow = (index) => {
        let data = [...proker];
        data.splice(index, 1);
        setProker(data);
    };
  
    return (
        <main class="content">
            <div class="container-fluid p-0">
                <form onSubmit={handleSubmit}>
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
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fileKAK" className="form-label">File KAK</label>
                        <input
                            type="file"
                            className="form-control"
                            id="fileKAK"
                            name="fileKAK"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fileRAB" className="form-label">File RAB</label>
                        <input
                            type="file"
                            className="form-control"
                            id="fileRAB"
                            name="fileRAB"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div id='dynamic-inputs' className="mb-3">
                        <div className='row mb-3'>
                            <div className='col-sm-6'>
                                <label htmlFor="fProker" className="form-label">Program Kerja</label>
                            </div>
                            <div className='col-sm-6 '>
                                <button id='add-row' className='btn btn-primary float-end' onClick={addInputRow}><i className="align-middle" data-feather="plus"></i> <span className="align-middle">Tambah</span></button>
                            </div>
                        </div>
                        <div id='input-proker'>
                            {proker.map((proker, index) => (
                                <div className='row mb-3' key={index}>
                                    <div className="col-sm-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="namaKegiatan"
                                            placeholder="Nama Kegiatan"
                                            onChange={(e) => handleProkerChange(e, index)}
                                            value={proker.namaKegiatan}
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="ketuaPelaksana"
                                            placeholder="Ketua Pelaksana"
                                            onChange={(e) => handleProkerChange(e, index)}
                                            value={proker.ketuaPelaksana}
                                        />
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="jenisKegiatan"
                                            placeholder="Jenis kegiatan"
                                            onChange={(e) => handleProkerChange(e, index)}
                                            value={proker.jenisKegiatan}
                                        />
                                    </div>
                                    <div className='col-sm-1'>
                                        <button className='btn btn-danger float-end' onClick={() => handleDeleteRow(index)}>
                                            <i className="align-middle" data-feather="trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary float-end" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </main>
    );
  };
  
export default UploadKAK;