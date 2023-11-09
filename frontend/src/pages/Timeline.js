import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';
import TambahKegiatanTimelineModal from '../components/Modals/TambahKegiatanTimelineModal';

const Timeline = () => {
    const [role, setRole] = useState(null);
    const history = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        feather.replace(); // Replace the icons after component mounts
        const role = localStorage.getItem('role');
        setRole(role);
        fetchTimeline();
    }, []);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const fetchTimeline = async () => {
        try {
            const res = await axios.get('/api/timeline');
            setTimeline(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main class="content">
          <div class="container-fluid p-0">
  
            <h1 class="h3 mb-3"><strong>Timeline {role}</strong></h1>
  
            <div className="row">
              <div className="col-xl-12">
                  <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Timeline</h5>
                      <button class="btn btn-primary mt-2" onClick={handleShowModal} data-bs-toggle="modal" data-bs-target="#addUploadKAKModal"><i className="align-middle" data-feather="plus"></i> <span className="align-middle">Tambah Kegiatan</span></button>
                      <TambahKegiatanTimelineModal showModal={showModal} setShowModal={setShowModal} />
                  </div>
                  <div className="card-body">
                      <div className="table-responsive">
                      <table className="table table-striped">
                          <thead>
                          <tr>
                              <th>No</th>
                              <th>Kegiatan</th>
                              <th>Tanggal Mulai</th>
                              <th>Tanggal Akhir</th>
                              <th>Aksi</th>
                          </tr>
                          </thead>
                          <tbody>
                            {timeline.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nama_kegiatan}</td>
                                    <td>{new Date(item.tanggal_mulai).toLocaleDateString('id-ID', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </td>
                                    <td>{new Date(item.tanggal_selesai).toLocaleDateString('id-ID', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Hapus</button>
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

export default Timeline;
