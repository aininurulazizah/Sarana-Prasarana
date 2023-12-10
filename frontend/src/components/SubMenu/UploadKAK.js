import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import feather from 'feather-icons';
import { useNavigate } from 'react-router-dom';

const UploadKAK = ({ }) => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    useEffect(() => {
        feather.replace(); 
        const role = localStorage.getItem('role');
        setRole(role);
    }, []);

    const [proker, setProker] = useState([
        {
            id_kak: null,
            nama_kegiatan: '',
            ketua_pelaksana: '',
            jenis_kegiatan: '',
            deskripsi_kegiatan: '',
            izin_submit: 'false',
            tanggal_mulai: '',
            tanggal_akhir: '',
            status: '',
            catatan: ''
        }
    ]);
    const [formData, setFormData] = useState({ 
        id_ketua : null,
        file_kak: null,
        file_rab: null,
        prokers: []
    });
    
    const handleInputChange = (e) => {
        if (e.target.name === 'id_ketua') {
          // Menggunakan parseInt untuk mengonversi ke tipe integer
          setFormData({ ...formData, [e.target.name]: parseInt(e.target.value, 10) });
        } else {
          // Jika field bukan 'id_ketua', maka tetapkan nilainya sebagai string
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }
      };
      

    const handleProkerChange = (e, index) => {
        let data = [...proker];
        data[index][e.target.name] = e.target.value;
        setProker(data);
    };
    
    const submit = (e) => {
      e.preventDefault();
      
      console.log(formData);
      feather.replace();
    };

    const handleSubmit = async (e) => {
        formData.prokers = proker;
        e.preventDefault();
        console.log(formData);
        axios.post('/api/kak/', formData)
            .then((res) => {
                console.log(res);
                alert("KAK berhasil diupload");
                navigate('/kak');
            })
            .catch((err) => {
                console.log(err);
                alert("KAK gagal diupload");
            });
    };

    const addInputRow = () => {
        let object = {
            id_kak: null,
            nama_kegiatan: '',
            ketua_pelaksana: '',
            jenis_kegiatan: '',
            deskripsi_kegiatan: '',
            izin_submit: 'false',
            tanggal_mulai: '',
            tanggal_akhir: '',
            status: '',
            catatan: ''
        };
        setProker([...proker, object]);
        feather.replace();
    };

    const handleDeleteRow = (index) => {
        let data = [...proker];
        data.splice(index, 1);
        setProker(data);
    };
  
    return (
        <main class="content">
            <div class="container-fluid p-0">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="namaOrmawa" className="form-label">Nama ORMAWA</label>
                        <input
                            type="text"
                            disabled
                            className="form-control"
                            id="namaOrmawa"
                            name="namaOrmawa"
                            placeholder="ORMAWA"
                            value={role}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="idKetua" className="form-label">ID Ketua</label>
                        <input
                            type="number"
                            className="form-control"
                            id="idKetua"
                            name="id_ketua"
                            placeholder="Id Ketua"
                            value={formData.id_ketua}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fileKAK" className="form-label">File KAK</label>
                        <input
                            type="file"
                            className="form-control"
                            id="fileKAK"
                            name="file_kak"
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fileRAB" className="form-label">File RAB</label>
                        <input
                            type="file"
                            className="form-control"
                            id="fileRAB"
                            name="file_rab"
                            onChange={(e) => handleInputChange(e)}
                            required
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
                                    <div className="col-sm-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nama_kegiatan"
                                            placeholder="Nama Kegiatan"
                                            onChange={(e) => handleProkerChange(e, index)}
                                            value={proker.nama_kegiatan}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="ketua_pelaksana"
                                            placeholder="Ketua Pelaksana"
                                            onChange={(e) => handleProkerChange(e, index)}
                                            value={proker.ketua_pelaksana}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-3">
                                    <select
                                        className="form-select"
                                        name="jenis_kegiatan"
                                        onChange={(e) => handleProkerChange(e, index)}
                                        value={proker.jenis_kegiatan}
                                        required
                                    >
                                        <option value="" disabled>Jenis Kegiatan</option>
                                        <option value="Karakter">Karakter</option>
                                        <option value="Penalaran/Keilmuan">Penalaran/Keilmuan</option>
                                        <option value="Peminatan">Peminatan</option>
                                        <option value="Pengabdian">Pengabdian</option>
                                    </select>

                                    </div>
                                    <div className="col-sm-4">
                                        <textarea
                                            rows="1"
                                            className="form-control"
                                            name="deskripsi_kegiatan"
                                            placeholder="Deskripsi kegiatan"
                                            onChange={(e) => handleProkerChange(e, index)}
                                            value={proker.deskripsi_kegiatan}
                                            required
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