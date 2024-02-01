import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const CustomnavBar = () => {
 
  

  return (
    <div>
      <Navbar color="dark"
                dark
                expand="md"
                className="px-5">
        <NavbarBrand href="/"><b>QuadB TECH</b></NavbarBrand>
      </Navbar>
    </div>
  );
}

export default CustomnavBar;