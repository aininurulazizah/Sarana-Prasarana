import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Using Arrow Function
const Dashboard = () => {
    const [role, setRole] = useState(null);
    const [roleCapital, setRoleCapital] = useState(null);
    const history = useNavigate();

    useEffect(() => {
      const role = localStorage.getItem('role');
      setRole(role);
      const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);
      setRoleCapital(capitalizedRole);
    }, []);

    return (
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>{roleCapital}</strong> Dashboard</h1>
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
        </div>
      </main>
    );
};

export default Dashboard;
