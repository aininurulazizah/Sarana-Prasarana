import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

const PengajuanSarpras = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prokerData = location.state?.prokerData || null;
  const ketuaData = location.state?.ketuaData || null;
  const id_ormawa = ketuaData.data.id_ormawa;
  const [ormawaData, setOrmawaData] = useState(null);
  const [saranaPrasaranaList, setSaranaPrasaranaList] = useState([]);
  const [selectedSarana, setSelectedSarana] = useState('');
  const [inventarisList, setInventarisList] = useState([]);
  // const [pembina, setPembina] = useState('');
  // const [ketuaPelaksana, setKetuaPelaksana] = useState('');
  const [waktuMulai, setWaktuMulai] = useState('');
  const [waktuSelesai, setWaktuSelesai] = useState('');

  useEffect(() => {
    feather.replace(); // Replace the icons after component mounts

    // Mengambil data Proker dari API
    axios.get(`/api/ormawa/${id_ormawa}`)
        .then(response => {
            setOrmawaData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
  }, []);

  console.log(ormawaData?.nama_ormawa);

  useEffect(() => {
    // Ambil daftar sarana prasarana dari API
    // Gantilah URL sesuai dengan endpoint API Anda
    axios.get('/api/sarpras/tersedia/show')
      .then(response => {
        // Set daftar sarana prasarana ke state
        setSaranaPrasaranaList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(saranaPrasaranaList);

  useEffect(() => {
    // Ambil daftar inventaris berdasarkan sarana prasarana yang dipilih dari API
    if (selectedSarana) {
      // Gantilah URL sesuai dengan endpoint API Anda
      axios.get(`/api/inventaris/sarpras/${selectedSarana}`)
        .then(response => {
          // Set daftar inventaris ke state
          setInventarisList(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [selectedSarana]);

  const getSaranaById = (saranaId) => {
    return saranaPrasaranaList.find(sarana => sarana.id_sarpras == saranaId) || {};
  };  


  const handleSaranaChange = (event) => {
    // Update state saat sarana prasarana dipilih
    setSelectedSarana(event.target.value);
  };

  if (!prokerData) {
    // Tangani jika prokerData null (misalnya, pengguna mencoba mengakses langsung)
    return <div>Data Proker tidak tersedia.</div>;
  }

  //const { setFormData } = FormProvider();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mendapatkan daftar inventaris yang dipilih
    const selectedInventaris = inventarisList.filter(inventaris => {
        const checkboxId = `inventaris-${inventaris.id_inventaris}`;
        const checkbox = document.getElementById(checkboxId);
        return checkbox.checked;
    });

    // Simpan data formulir ke localStorage
    const formData = {
        prokerData,
        ormawaData,
        saranaPrasaranaList,
        selectedSarana,
        selectedInventarisIds: selectedInventaris.map(inventaris => inventaris.id_inventaris),
        inventarisList,
        // pembina,
        // ketuaPelaksana,
        waktuMulai,
        waktuSelesai,
      };
    
      localStorage.setItem('formData', JSON.stringify(formData));

    //console.log('Form submitted:', prokerData, selectedSarana, inventarisList);
    navigate('/review-pengajuan');
  };

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Peminjaman <strong>Sarana Prasarana</strong></h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="namaKegiatan" className="form-label">Nama Kegiatan :</label>
            <input type="text" id="namaKegiatan" className="form-control" value={prokerData?.nama_kegiatan || ''} readOnly />
          </div>
          <div className="mb-3">
            <label htmlFor="pelaksanaKegiatan" className="form-label">Ormawa Pelaksana :</label>
            <input type="text" id="pelaksanaKegiatan" className="form-control" value={ormawaData?.nama_ormawa || ''} readOnly />
          </div>
          <div className="mb-3">
            <label htmlFor="pembina" className="form-label">Pembina:</label>
            <input type="text" id="pembina" className="form-control" value={ormawaData?.pembina || ''} readOnly/>
          </div>

          <div className="mb-3">
            <label htmlFor="ketuaPelaksana" className="form-label">Ketua Pelaksana:</label>
            <input type="text" id="ketuaPelaksana" className="form-control" value={prokerData?.ketua_pelaksana || ''} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="tanggalMulai" className="form-label">Tanggal Pelaksanaan :</label>
            <input type="date" id="tanggalMulai" className="form-control" value={prokerData?.tanggal_mulai || ''} readOnly />
          </div>

          <div className="mb-3">
            <label htmlFor="waktuMulai" className="form-label">Waktu Mulai:</label>
            <input type="time" id="waktuMulai" className="form-control" value={waktuMulai} onChange={(e) => setWaktuMulai(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="waktuSelesai" className="form-label">Waktu Selesai:</label>
            <input type="time" id="waktuSelesai" className="form-control" value={waktuSelesai} onChange={(e) => setWaktuSelesai(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="saranaPrasarana" className="form-label">Sarana Prasarana :</label>
            <select id="saranaPrasarana" className="form-control" onChange={handleSaranaChange} value={selectedSarana}>
                <option value="">Pilih Sarana Prasarana</option>
                {saranaPrasaranaList.map(sarana => (
                <option key={sarana.id_sarpras} value={sarana.id_sarpras}>
                    {sarana.nama_sarpras}
                </option>
                ))}
            </select>
            </div>

            {/* Section to display selected Sarana Prasarana details */}
            {selectedSarana && (
            <div className="mb-3">
                <div className="d-flex align-items-center">
                <img
                    src={getSaranaById(selectedSarana)?.link_gambar}
                    alt={getSaranaById(selectedSarana)?.nama_sarpras}
                    className="img-fluid mr-3"
                    style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                />
                <div>
                    <h5>&nbsp;&nbsp;</h5>
                </div>
                <div>
                    <h5>{getSaranaById(selectedSarana)?.nama_sarpras}</h5>
                    <p>Deskripsi: {getSaranaById(selectedSarana)?.deskripsi}</p>
                    <p>Daya Tampung: {getSaranaById(selectedSarana)?.daya_tampung}</p>
                </div>
                </div>
            </div>
            )}

            <div className="mb-3">
            <label><h5>Inventaris Tersedia :</h5></label>
            {inventarisList.map(inventaris => (
                <div key={inventaris.id} className="form-check">
                <input type="checkbox" className="form-check-input" id={`inventaris-${inventaris.id_inventaris}`} value={inventaris.id_inventaris} />
                <label className="form-check-label" htmlFor={`inventaris-${inventaris.id_inventaris}`}>
                    {inventaris.nama_inventaris} | Stok Tersedia : {inventaris.ketersediaan}
                </label>
                </div>
            ))}
            </div>


          <div className="mb-3 d-flex">
            <button type="submit" className="btn btn-primary">Ajukan Peminjaman</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PengajuanSarpras;
