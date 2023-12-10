import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

const Sidebar = () => {
    const location = useLocation();
    const [role, setRole] = useState(null);
    
    useEffect(() => {
        feather.replace(); // Replace the icons after component mounts
    }, [role]);

    useEffect(() => {
        const role = localStorage.getItem('role');
        setRole(role);
      }, []);  

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand text-decoration-none" href="/dashboard">
                    <span className="align-middle">Web Ormawa</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Menu
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/dashboard">
                            <i className="align-middle" data-feather="home"></i> <span className="align-middle">Dashboard</span>
                        </a>
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/kak' ? 'active' : ''}`}>
                    {['ormawa', 'sekumbem', 'kli', 'admin', 'wd3'].includes(role) && (
                        <a className="sidebar-link" href="/kak">
                            <i className="align-middle" data-feather="file-text"></i> <span className="align-middle">KAK</span>
                        </a>  
                    )}
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/program-kerja' ? 'active' : ''}`}>
                    {['ormawa', 'sekumbem', 'kli', 'admin', 'wd3'].includes(role) && (
                        <a className="sidebar-link" href="/program-kerja">
                            <i className="align-middle" data-feather="briefcase"></i> <span className="align-middle">Program Kerja</span>
                        </a>
                    )}
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/pergerakan' ? 'active' : ''}`}>
                    {['ormawa', 'sekumbem', 'kli', 'admin', 'wd3'].includes(role) && (
                        <a className="sidebar-link" href="/pergerakan">
                            <i className="align-middle" data-feather="activity"></i> <span className="align-middle">Pergerakan</span>
                        </a>
                    )}
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/list-pengajuan' ? 'active' : ''}`}>
                    {['ormawa', 'sekumbem', 'sarpras', 'admin', 'wd3'].includes(role) && (
                        <a className="sidebar-link" href="/list-pengajuan">
                            <i className="align-middle" data-feather="archive"></i> <span className="align-middle">Peminjaman SarPras</span>
                        </a>
                    )}
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/timeline' ? 'active' : ''}`}>
                    {['ormawa', 'sekumbem', 'kli',  'admin', 'wd3'].includes(role) && (
                        <a className="sidebar-link" href="/timeline">
                            <i className="align-middle" data-feather="clock"></i> <span className="align-middle">Timeline</span>
                        </a>
                    )}
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/pengumuman' ? 'active' : ''}`}>
                    {['ormawa', 'sekumbem', 'kli',  'admin', 'wd3'].includes(role) && (
                        <a className="sidebar-link" href="/pengumuman">
                            <i className="align-middle" data-feather="clipboard"></i> <span className="align-middle">Pengumuman</span>
                        </a>
                    )}
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/kalender-akademik' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/kalender-akademik">
                            <i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Kalender Akademik</span>
                        </a>
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/pengelolaan-sarana-prasarana' ? 'active' : ''}`}>
                    {role === 'sarpras' && (
                        <a className="sidebar-link" href="/pengelolaan-sarana-prasarana">
                            <i className="align-middle" data-feather="file-text"></i> <span className="align-middle">Pengelolaan SarPras</span>
                        </a>
                    )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
