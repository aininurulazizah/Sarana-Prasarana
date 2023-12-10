import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

const PeminjamanSarpras = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('tersedia');
  const [prokerOptions, setProkerOptions] = useState([]);
  const [selectedProker, setSelectedProker] = useState('');
  const [kakData, setKakData] = useState([]);
  const [ketuaData, setKetuaData] = useState([]);
  const [id_user, setIdUser] = useState(null);
  const [id_ketua, setIdKetua] = useState(null);
  const [id_kak, setIdKak] = useState(null);

  useEffect(() => {
    const id_user = localStorage.getItem('idUser');
    setIdUser(id_user);
  }, []);  

  useEffect(() => {
    feather.replace(); // Replace the icons after component mounts

    const id_user = localStorage.getItem('idUser');
    setIdUser(id_user);

    // Mengambil data Ketua Ormawa dari API
    axios.get(`/api/ketua-ormawa/user_id/${id_user}`)
        .then(response => {
            setKetuaData(response.data);
            const idKetua = response.data.data.id_ketua;
            setIdKetua(idKetua);

            // Mengambil data KAK setelah id_ketua didefinisikan
            return axios.get(`/api/kak/ketua/${idKetua}`);
        })
        .then(response => {
            setKakData(response.data);
            const idKak = response.data[0].id_kak;
            setIdKak(idKak);

            // Mengambil data Proker setelah id_kak didefinisikan
            return axios.get(`/api/proker/kak/${idKak}`);
        })
        .then(response => {
            setProkerOptions(response.data);
            console.log("Proker Options: ", response.data);
        })
        .catch(error => {
            console.error(error);
        });
  }, []);


  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };

  const handleProkerChange = (event) => {
      setSelectedProker(event.target.value);
  };

  const handlePengajuanButton = () => {

    // Memastikan ada proker yang dipilih sebelum navigasi
    if (selectedProker !== '') {
      const prokerData = prokerOptions.find(proker => proker.id_proker == selectedProker);
      console.log("Data Proker : ", prokerData);
      console.log("Data Proker : ", selectedProker);
      console.log("Data Ketua : ", ketuaData);

      // Navigasi ke halaman pengajuan sambil mengirimkan data proker
      navigate('/peminjaman-sarpras-pengajuan', { state: { prokerData, ketuaData } });
    } else {
      // Tindakan jika tidak ada proker yang dipilih (misalnya, tampilkan pesan kesalahan)
      console.error('Pilih Proker terlebih dahulu.');
    }
  };

  console.log('Id User:', id_user);
  console.log('Id Ketua:', id_ketua);
  console.log('Id KAK : ', id_kak);

    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Peminjaman <strong>Sarana Prasarana</strong></h1>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'tersedia' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tersedia')}
                        >
                            Proker/Pergerakkan Tersedia
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'baru' ? 'active' : ''}`}
                            onClick={() => handleTabClick('baru')}
                        >
                            Proker/Pergerakkan Baru
                        </button>
                    </li>
                </ul>

                {/* Render konten berdasarkan tab yang aktif */}
                {activeTab === 'tersedia' && (
                    <div className="tersedia-content">
                        {/* Konten untuk tab "Proker/Pergerakkan Tersedia" */}

                      <div className="dropdown mb-3">
                        <label htmlFor="prokerDropdown" className="form-label mt-3"></label>
                        <select
                              id="prokerDropdown"
                              className="form-select"
                              value={selectedProker}
                              onChange={handleProkerChange}
                        >
                              <option value="">Pilih Proker</option>
                              {prokerOptions.map(proker => (
                                  <option key={proker.id_proker} value={proker.id_proker}>
                                      {proker.nama_kegiatan}
                                  </option>
                              ))}
                        </select>
                      </div>

                        {/* Button "Buat Pengajuan Peminjaman" */}
                        <button
                            className="btn btn-primary"
                            onClick={handlePengajuanButton}
                            disabled={selectedProker === ''}
                        >
                            Buat Pengajuan Peminjaman
                        </button>

                    </div>
                )}

                {activeTab === 'baru' && (
                    <div className="baru-content">
                        {/* Konten untuk tab "Proker/Pergerakkan Baru" */}
                    </div>
                )}
            </div>
        </main>
    );
};

export default PeminjamanSarpras;
