import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

const Sidebar = () => {
    const location = useLocation();
    
    useEffect(() => {
        feather.replace(); // Replace the icons after component mounts
    }, []);

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="/dashboard">
                    <span className="align-middle">ExamBroadcastMessage</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Pages
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/dashboard">
                            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
                        </a>
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/kak' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/kak">
                            <i className="align-middle" data-feather="user"></i> <span className="align-middle">KAK</span>
                        </a>
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/program-kerja' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/program-kerja">
                            <i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Program Kerja</span>
                        </a>
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/pergerakan' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/pergerakan">
                            <i className="align-middle" data-feather="message-circle"></i> <span className="align-middle">Pergerakan</span>
                        </a>
                    </li>

                    <li className={`sidebar-item ${location.pathname === '/peminjaman-sarpras' ? 'active' : ''}`}>
                        <a className="sidebar-link" href="/peminjaman-sarpras">
                            <i className="align-middle" data-feather="bell"></i> <span className="align-middle">Peminjaman SarPras</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
