import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {


  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BeInfomed</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li key='business' className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li key='entertainment'  className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li key='general'  className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
        <li key='health'  className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li key='science' className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li key='sports' className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li key='technology' className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
    
    </div>
  </div>
</nav>
        
      </div>
    )
  }

export default NavBar
