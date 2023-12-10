// ReviewPengajuan.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const ReviewPengajuan = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [id_proker, setIdProker] = useState('');
  const [surat_peminjaman, setSuratPeminjaman] = useState('');
  const [status_peminjaman, setStatusPeminjaman] = useState('');
  const [id_peminjaman, setIdPeminjaman] = useState('');  
  const [sarpras_upload, setSarpras] = useState(null);
  const [inventaris_upload, setInventaris] = useState(null);
  const [waktu_mulai, setWaktuMulai] = useState('');
  const [waktu_selesai, setWaktuSelesai] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
        setFormData(JSON.parse(storedFormData));
        localStorage.removeItem('formData'); // Hapus data dari localStorage setelah digunakan
    }
  }, []);

  useEffect(() => {
    const formDataDetailSarpras = new FormData();

    // Memasukkan data sarpras
    formDataDetailSarpras.append('id_peminjaman', id_peminjaman);
    formDataDetailSarpras.append('id_sarpras', sarpras_upload);
    formDataDetailSarpras.append('waktu_mulai', waktu_mulai);
    formDataDetailSarpras.append('waktu_selesai', waktu_selesai);

    if(id_peminjaman){
      axios.post('http://localhost:8000/api/detail-peminjaman/', formDataDetailSarpras, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("Error:", error);
      });

      for (const inventarisId of inventaris_upload) {
        const formDataObjectDetailInventaris = new FormData(); // Memasukkan data inventaris
        formDataObjectDetailInventaris.append('id_peminjaman', id_peminjaman);
        formDataObjectDetailInventaris.append('id_inventaris', inventarisId);
        formDataObjectDetailInventaris.append('waktu_mulai', waktu_mulai);
        formDataObjectDetailInventaris.append('waktu_selesai', waktu_selesai);
      
        formDataObjectDetailInventaris.forEach((value, key) => {
          console.log(key, value);
        });
  
        axios.post('http://localhost:8000/api/detail-peminjaman/', formDataObjectDetailInventaris, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error("Error:", error);
        });

      }

      alert("Pengajuan Berhasil");
      navigate("/list-pengajuan");

    }

  }, [id_peminjaman]);


  if (!formData) {
    // Tangani jika formData null
    return <div>Data Pengajuan tidak tersedia.</div>;
  }

  const getSaranaById = (saranaId) => {
    return formData?.saranaPrasaranaList?.find(sarana => sarana.id_sarpras == saranaId) || {};
  };  
  
  const sarpras = getSaranaById(formData.selectedSarana);

  const getInventarisById = (inventarisId) => {
    return formData?.inventarisList?.find(inventaris => inventaris.id_inventaris === inventarisId) || {};
  };
  
  const inventarisItems = formData.selectedInventarisIds.map(inventarisId => (
    getInventarisById(inventarisId)
  ));

  const TanggalComponent = ({ tanggalMulai }) => {
    // Mengubah format tanggal menggunakan fungsi format dari date-fns
    const tanggalMulaiFormatted = format(new Date(tanggalMulai), 'dd MMMM yyyy', { locale: id });
    return <span>{tanggalMulaiFormatted}</span>;
  };

  // Mendapatkan tanggal saat ini
  const currentDate = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dateNow = `${currentDate.getDate()} ${currentDate.toLocaleString('id', { month: 'long' })} ${currentDate.getFullYear()}`;
  
  // Mendapatkan hari dari tanggal pelaksanaan
  const prokerDate = new Date(formData.prokerData.tanggal_mulai);
  const dayIndex = prokerDate.getDay();
  const dayNameProker = days[dayIndex];
  const dateProker = `${dayNameProker}, ${format(new Date(formData.prokerData.tanggal_mulai), 'dd MMMM yyyy', { locale: id })}`;

  // Buat instance jsPDF
  const pdfDoc = new jsPDF();

  const addKopSurat = (pdfDoc, text, posY) => {
    const textWidth = pdfDoc.getTextDimensions(text).w;
    const centerX = (pdfDoc.internal.pageSize.width - textWidth) / 2;
    pdfDoc.text(text, centerX, posY);
  };

  const addDynamicText = (pdfDoc, text, posX, posY, maxWidth) => {
    const lines = pdfDoc.splitTextToSize(text, maxWidth);
    pdfDoc.text(lines, posX, posY);
  };

  // Mengatur jenis font dan ukuran font
  pdfDoc.setFont("times");
  pdfDoc.setFontSize(12);

  // Teks KOP
  const texts = [
  `${formData.ormawaData.nama_ormawa}`,
  'Politeknik Negeri Bandung',
  'Sekretariat : Jl. Geger kalong Hilir Ds. Ciwaruga Kotak Pos 1234 Bandung 40012',
  'Telp.(022) 2013789 Fax. 2013889 Mobile Phone: 085776678167',
  '==========================================================================='
  ];

  // Loop untuk menambahkan teks ke halaman PDF
  texts.forEach((text, index) => {
  const posY = 10 + index * 7;
  addKopSurat(pdfDoc, text, posY);
  });

  addDynamicText(pdfDoc, 'Nomor : ', 16, 50, 100);
  addDynamicText(pdfDoc, 'Lampiran : 1 (satu) lembar', 16, 55, 100);
  addDynamicText(pdfDoc, 'Perihal : Peminjaman sarana dan prasarana', 16, 60, 100);
  addDynamicText(pdfDoc, 'Yang terhormat,', 16, 70, 100);
  addDynamicText(pdfDoc, 'Subbagian Umum', 16, 75, 100);
  addDynamicText(pdfDoc, 'Politeknik Negeri Bandung', 16, 80, 100);
  addDynamicText(pdfDoc, 'Dengan hormat,', 16, 90, 100);
  addDynamicText(pdfDoc, `Sehubungan dengan akan diadakannya ${formData.prokerData.nama_kegiatan} kami selaku pengurus ${formData.ormawaData.nama_ormawa} memohon izin untuk meminjam sarana prasarana terlampir sebagai penunjang kegiatan yang akan dilaksanakan pada :`, 16, 95, pdfDoc.internal.pageSize.width - 30);

  addDynamicText(pdfDoc, `hari, tanggal         : ${dateProker}`, 40, 120, 100);
  addDynamicText(pdfDoc, `waktu                   : ${formData.waktuMulai} - ${formData.waktuSelesai} WIB`, 40, 125, 100);
  addDynamicText(pdfDoc, `tempat                  : ${sarpras ? sarpras.nama_sarpras : ''}`, 40, 130, 100);

  addDynamicText(pdfDoc, 'Demikian surat ini kami buat, atas perhatian Bapak, kami ucapkan terimakasih', 16, 145, pdfDoc.internal.pageSize.width - 30);

  // Halaman Kedua
  pdfDoc.addPage();

  // Fungsi untuk mengonversi data inventaris menjadi teks
  function convertInventarisToText(inventarisItems) {
    let inventarisText = '';

  inventarisItems.forEach((inventaris, index) => {
    inventarisText += `${inventaris.nama_inventaris} ${inventaris.ketersediaan} Buah`;

    // Tambahkan pemisah antar item inventaris
    if (index < inventarisItems.length - 1) {
      inventarisText += ', ';
    }
  });

    return inventarisText;
  }
  
  const inventarisText = convertInventarisToText(inventarisItems);

  // Fungsi untuk mendapatkan lebar teks
  function getTextWidth(text, fontSize, fontType) {
    pdfDoc.setFont(fontType);
    pdfDoc.setFontSize(fontSize);
    const textWidth = pdfDoc.getStringUnitWidth(text) * fontSize / pdfDoc.internal.scaleFactor;
    return textWidth;
  }

  // Loop untuk menambahkan teks ke halaman PDF
  texts.forEach((text, index) => {
    const posY = 10 + index * 7;
    addKopSurat(pdfDoc, text, posY);
    });

  addDynamicText(pdfDoc, 'Lampiran 2', 16, 50, 100);
  addDynamicText(pdfDoc, 'Nomor : ', 16, 55, 100);
  addDynamicText(pdfDoc, `Tanggal : ${dateNow}`, 16, 60, 100);

  // Teks "Rincian Tempat"
  const rincianTempatText = "Rincian Tempat";
  const rincianTempatWidth = getTextWidth(rincianTempatText, 12, "times");
  const rincianTempatX = (pdfDoc.internal.pageSize.width - rincianTempatWidth) / 2;
  console.log(rincianTempatX);
  addDynamicText(pdfDoc, rincianTempatText, rincianTempatX, 75, 100);

  // Teks nama kegiatan
  const namaKegiatanText = `${formData.prokerData.nama_kegiatan}`;
  const namaKegiatanWidth = getTextWidth(namaKegiatanText, 12, "times");
  const namaKegiatanX = (pdfDoc.internal.pageSize.width - namaKegiatanWidth) / 2;
  console.log(namaKegiatanX);
  addDynamicText(pdfDoc, namaKegiatanText, namaKegiatanX, 80, 105);

  // Mengatur posisi awal tabel
  const tableX = 20;
  const tableY = 90;

  // Mengatur lebar kolom
  const columnWidths = [50, 120];

  // Mengatur tinggi baris
  const rowHeight = 6;

  // Membuat tabel dengan 6 kolom dan 2 baris
  const columns = ["Kolom 1", "Kolom 2"];
  const data = [
    ["Nama Kegiatan", `${formData.prokerData.nama_kegiatan}`],
    ["Nama Gedung", `${sarpras.nama_sarpras}`],
    ["Hari, tanggal", `${dateProker}`],
    ["Waktu", `${formData.waktuMulai} - ${formData.waktuSelesai} WIB`],
    ["Perlengkapan", `${inventarisText}`],
  ];

  // Menggambar tabel
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      const cellX = tableX + j * columnWidths[0]; 
      const cellY = tableY + i * rowHeight;
  
      // Menggambar batas setiap sel
      pdfDoc.rect(cellX, cellY, columnWidths[j], rowHeight);
  
      // Menambahkan teks ke dalam sel
      pdfDoc.text(cellX + 2, cellY + 4, data[i][j]);
    }
  }

  const handleReview = (e) => {
    e.preventDefault();
    // Menampilkan dokumen PDF di jendela baru
    pdfDoc.output("dataurlnewwindow");
    
    // Simpan atau tampilkan PDF (sesuaikan dengan kebutuhan)
    pdfDoc.save('Formulir_Pengajuan_Peminjaman.pdf');
  };

  // Tombol Cancel
  const handleCancelClick = () => {
    navigate("/peminjaman-sarpras-pengajuan");
  };

  // Upload Surat
  const loadSurat = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setSuratPeminjaman(selectedFile);
    }
    setIdProker(formData.prokerData.id_proker);
    setStatusPeminjaman("Diajukan");
    setWaktuMulai(formData.waktuMulai);
    setWaktuSelesai(formData.waktuSelesai);
    setSarpras(formData.selectedSarana);
    setInventaris(formData.selectedInventarisIds);
  };

  const handleBuatPengajuan = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
  
    // Memasukkan data ke dalam FormData
    formDataObject.append('id_proker', id_proker);
    formDataObject.append('surat_peminjaman', surat_peminjaman);
    formDataObject.append('status_peminjaman', status_peminjaman);
  
    try {
      const responsePeminjaman = await axios.post('http://localhost:8000/api/peminjaman/', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log("respon peminjaman : ", responsePeminjaman);
      const responseDataPeminjaman = responsePeminjaman.data;
  
      setIdPeminjaman(responseDataPeminjaman.id_peminjaman);
      console.log("Id Peminjaman 1 : ", id_peminjaman);


    } catch (err) {
      console.error(err);
      alert("Pengajuan Gagal, Coba Lagi");
    }

  };
  

  return (
    <main className="content">
      <div className="container-fluid p-0">
      <h1 className="h3 mb-3">Review Pengajuan</h1>
      <table className="table">
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nama Kegiatan</td>
            <td>{formData.prokerData.nama_kegiatan}</td>
          </tr>
          <tr>
            <td>Ormawa Pelaksana</td>
            <td>{formData.ormawaData.nama_ormawa}</td>
          </tr>
          <tr>
            <td>Pembina</td>
            <td>{formData.ormawaData.pembina}</td>
          </tr>
          <tr>
            <td>Ketua Pelaksana</td>
            <td>{formData.prokerData.ketua_pelaksana}</td>
          </tr>
          <tr>
            <td>Tanggal Kegiatan</td>
            <td><TanggalComponent tanggalMulai={formData.prokerData?.tanggal_mulai || ''} /></td>
          </tr>
          <tr>
            <td>Waktu Pelaksanaan</td>
            <td>{formData.waktuMulai} - {formData.waktuSelesai} WIB</td>
          </tr>
          <tr>
            <td>Sarana Dipinjam</td>
            <td>{sarpras ? sarpras.nama_sarpras : ''}</td>
          </tr>
          <tr>
            <td>Inventaris Dipinjam</td>
            <td>
                {inventarisItems.map((inventaris, index) => (
                <div key={index}>
                    {inventaris.nama_inventaris} : {inventaris.ketersediaan}
                    {/* Tambahan: Tampilkan detail inventaris sesuai kebutuhan */}
                </div>
                ))}
            </td>
           </tr>
           <tr>
            <td>Surat Pengajuan Peminjaman Sarpras</td>
            <td><a href="#" onClick={handleReview} >Pengajuan Sarpras - {formData.prokerData.nama_kegiatan} - {formData.ormawaData.nama_ormawa}</a></td>
          </tr>
          <tr>
            <td>Upload Surat</td>
            <td><form> 
                  <input type="file" className="file-input" onChange={loadSurat} />
                </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mb-3">
            <button onClick={handleBuatPengajuan} type="submit" className="btn btn-primary mr-3">Buat Pengajuan</button>
            <button className="btn btn-secondary" onClick={handleCancelClick}>Batal</button>
      </div>
    </div>
    </main>
  );
};

export default ReviewPengajuan;
