import React, { useState, useEffect } from 'react';
import axios from 'axios';
import feather from 'feather-icons';
import 'bootstrap/dist/js/bootstrap.bundle';
import EditKAKModal from '../components/Modals/EditKAKModal';
import FileKAKModal from '../components/Modals/FileKAKModal';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Using Arrow Function
const KAK = () => {
    const [kaks, setKaks] = useState([]);

    useEffect(() => {
        axios.get('/api/kak')
        .then(response => {
            setKaks(response.data);
        })
        .catch(error => {
            console.error('Error fetching KAK data:', error);
        });
        feather.replace();
    }, []);

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');

    const handleShowModal = () => {
        setShowModal(true);
        setPdfUrl('/test.pdf')
    };

    const handleUpload = () => {
        navigate('/upload-kak');
    };

    const handleDelete = async () => {
        const confirmDelete = await Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Anda akan menghapus data ini',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText : 'Batal',
            confirmButtonText: 'Ya, hapus!'
        });
    }

    

    return (
      <main class="content">
        <div class="container-fluid p-0">

          <h1 class="h3 mb-3">Pengajuan<strong> KAK</strong></h1>

          <div className="row">
            <div className="col-xl-12">
                <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title mt-1">KAK</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Ormawa</th>
                            <th>Nama Ketua</th>
                            <th>Dokumen KAK</th>
                            <th>Dokumen RAB</th>
                            <th>Status</th>
                            <th>Catatan</th>
                            <th>Proker</th>
                            <th>Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {kaks.map((kak, index) => (
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{kak.id_ketua}</td>
                            <td>{kak.id_ketua}</td>
                            <td>
                                <a href={`/storage/${kak.file_kak}`} target="_blank" rel="noopener noreferrer">Dokumen KAK</a>
                            </td>
                            <td>{kak.file_rab}</td>
                            <td>{kak.status}</td>
                            <td>{kak.catatan}</td>
                            <td>
                                {kak.prokers.map(proker => (
                                <div key={proker.id_proker}>
                                    Nama Kegiatan: {proker.nama_kegiatan}<br />
                                    Ketua Pelaksana: {proker.ketua_pelaksana}<br />
                                    Deskripsi Kegiatan: {proker.deskripsi_kegiatan}<br />
                                    Tanggal Mulai: {proker.tanggal_mulai}<br />
                                    Tanggal Akhir: {proker.tanggal_akhir}<br />
                                    Status: {proker.status}<br />
                                    Catatan: {proker.catatan}<br /><br />
                                </div>
                                ))}
                            </td>
                            <td>
                                <button class="btn btn-primary mt-2" onClick={handleShowModal} data-bs-toggle="modal" data-bs-target="#editKAKModal" style={{marginRight: '5px'}}><i className="align-middle" data-feather="check"></i> Acc</button>
                                <button class="btn btn-warning mt-2" onClick={handleShowModal} data-bs-toggle="modal" data-bs-target="#editKAKModal" style={{marginRight: '5px'}}><i className="align-middle" data-feather="edit"></i> Revisi</button>
                                <button class="btn btn-danger mt-2" onClick={handleShowModal} data-bs-toggle="modal" data-bs-target="#editKAKModal" style={{marginRight: '5px'}}><i className="align-middle" data-feather="trash"></i> Tolak</button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default KAK;
