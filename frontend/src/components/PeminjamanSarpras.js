import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import feather from 'feather-icons';

const PeminjamanSarpras = () => {
  const location = useLocation();

  useEffect(() => {
    feather.replace(); // Replace the icons after component mounts
  }, []);

  return (
    <main class="content">
      <div class="container-fluid p-0">

        <h1 class="h3 mb-3"><strong>Peminjaman Sarana dan Prasarana</strong></h1>
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Tambah Data</h5>
                <NavLink to="/add-data-sarpras">
                  <button class="btn btn-primary mt-2"><i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Tambah Data</span></button></NavLink>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Proker atau Pegerakan</th>
                        <th>Status</th>
                        <th>Catatan</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Vanessa Tucker</td>
                        <td>864-348-0485</td>
                        <td>June 21, 1961</td>
                        <td>
                          <button class="btn btn-primary mt-2" style={{ marginRight: '5px' }}><i className="align-middle" data-feather="edit"></i></button>
                          <button class="btn btn-success mt-2"><i className="align-middle" data-feather="eye"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>William Harris</td>
                        <td>914-939-2458</td>
                        <td>May 15, 1948</td>
                        <td>
                          <button class="btn btn-primary mt-2" style={{ marginRight: '5px' }}><i className="align-middle" data-feather="edit"></i></button>
                          <button class="btn btn-success mt-2"><i className="align-middle" data-feather="eye"></i></button>
                        </td>
                      </tr>
                      {/* Add more rows as needed */}
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

export default PeminjamanSarpras;
