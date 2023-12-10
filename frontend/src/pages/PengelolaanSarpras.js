import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PengelolaanSarpras = () => {
    const [sarprasData, setSarprasData] = useState([]);

    useEffect(() => {
        // Mengambil data sarpras dari API
        axios.get('/api/sarpras')
            .then(response => {
                setSarprasData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Pengelolaan Sarana dan Prasarana</h1>
                <div className="row">
                    {sarprasData.map(sarpras => (
                        <div className="col-md-6" key={sarpras.id_sarpras}>
                            <div className="card">
                                <div className="card-body">
                                    {/* Tambahkan gambar sarpras jika ada */}
                                    {sarpras.gambar_sarpras && (
                                        <img 
                                            src={sarpras.link_gambar} 
                                            alt={sarpras.nama_sarpras} 
                                            className="img-fluid mb-3" 
                                            style={{ width: '450px', height: '300px', objectFit: 'cover' }} />
                                    )}
                                    <h5 className="card-title">{sarpras.nama_sarpras}</h5>
                                    <p className="card-text">{sarpras.deskripsi}</p>
                                    <p className="card-text">Daya Tampung: {sarpras.daya_tampung}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PengelolaanSarpras;
