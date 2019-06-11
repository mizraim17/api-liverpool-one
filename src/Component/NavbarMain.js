import React from 'react';
import {Navbar,NavItem} from 'react-materialize'

const NavbarMain= () => {
  return(
    <>
      <Navbar   alignLinks="right" className="color-liv1">
        <NavItem href="/addProduct">
          Agregrar productos
        </NavItem>
        <NavItem href="/listProduct">
          Mostrar Productos
        </NavItem>
      </Navbar>
    </>
  )
}

export default NavbarMain
