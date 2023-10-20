import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import feather from 'feather-icons';

// Using Arrow Function
const KAK = () => {
    const history = useNavigate();

    useEffect(() => {
        feather.replace(); // Replace the icons after component mounts
    }, []);

    return (
      <main class="content">
        <div class="container-fluid p-0">

          <h1 class="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

          <div className="row">
            <div className="col-xl-12">
                <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Tambah Data</h5>
                    <button class="btn btn-primary mt-2"><i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Tambah Dosen</span></button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Date of Birth</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Vanessa Tucker</td>
                            <td>864-348-0485</td>
                            <td>June 21, 1961</td>
                            <td>
                            <button class="btn btn-primary mt-2" style={{marginRight: '5px'}}><i className="align-middle" data-feather="edit"></i></button>
                            <button class="btn btn-danger mt-2"><i className="align-middle" data-feather="trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>William Harris</td>
                            <td>914-939-2458</td>
                            <td>May 15, 1948</td>
                            <td>
                            <button class="btn btn-primary mt-2" style={{marginRight: '5px'}}><i className="align-middle" data-feather="edit"></i></button>
                            <button class="btn btn-danger mt-2"><i className="align-middle" data-feather="trash"></i></button>
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

export default KAK;
