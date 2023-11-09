import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

const PeminjamanSarpras = () => {
    const location = useLocation();
    
    useEffect(() => {
        feather.replace(); // Replace the icons after component mounts
    }, []);

    return (
        <main class="content">
        <div class="container-fluid p-0">

          <h1 class="h3 mb-3"><strong>Reminder</strong></h1>

          
        </div>
      </main>
    );
};

export default PeminjamanSarpras;
