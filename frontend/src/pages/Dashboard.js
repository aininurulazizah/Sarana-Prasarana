import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Using Arrow Function
const Dashboard = () => {
    const [role, setRole] = useState(null);
    const history = useNavigate();

    useEffect(() => {
      const role = localStorage.getItem('role');
      setRole(role);
    }, []);

    // const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);

    return (
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>{role}</strong> Dashboard</h1>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <h5 class="card-title"></h5>
                <div class="card-body">
                {role && (
                  <div className="" role="">
                    Anda masuk sebagai: {role}
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-xxl-5 d-flex">
              <div class="w-100">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Sales</h5>
                          </div>
                          
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="truck"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">14.212</h1>
                        <div class="mb-0">
                          <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                          <span class="text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Visitors</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="users"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">14.212</h1>
                        <div class="mb-0">
                          <span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                          <span class="text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Earnings</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0">
                          <span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                          <span class="text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Orders</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="shopping-cart"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0">
                          <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> -2.25% </span>
                          <span class="text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-xxl-7">
              <div class="card flex-fill w-100">
                <div class="card-header">

                  <h5 class="card-title mb-0">Recent Movement</h5>
                </div>
                <div class="card-body py-3">
                  <div class="chart chart-sm">
                    <canvas id="chartjs-dashboard-line"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    );
};

export default Dashboard;
