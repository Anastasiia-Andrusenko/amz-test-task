import React from 'react';
import { GrHome } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <NavLink to="/">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GrHome style={{fontSize: '30px', marginTop: '40px'}} /><br/>
          <span>go to Home page</span>
        </div>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;