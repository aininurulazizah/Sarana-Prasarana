import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('role', response.data.user.role);
      localStorage.setItem('idUser', response.data.user.id_user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      console.log('Login berhasil');
      
      // console.log(response.data.user);
      const user = JSON.parse(localStorage.getItem('user'));
      console.log("id_user: ", user.id_user);
      console.log(user);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: 'Silakan cek kembali email dan password Anda',
      });
    }
  };

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Login Web Pengelolaan Ormawa POLBAN</h1>
                <p className="lead">
                  Sign in to your account to continue
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} />
                      </div>
                      {/* <div>
                        <div className="form-check align-items-center">
                          <input id="customControlInline" type="checkbox" className="form-check-input" value="remember-me" name="remember-me" checked />
                          <label className="form-check-label text-small" htmlFor="customControlInline">Remember me</label>
                        </div>
                      </div> */}
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3">
                Don't have an account? <a href="pages-sign-up.html">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
