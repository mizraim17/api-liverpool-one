import React from 'react';
import {Navbar,NavItem,Icon} from 'react-materialize'

const NavbarMain= () => {
  return(
    <>
      <Navbar
        brand={
          <a href="/" left>
         Liverpool
          </a>
        }
        className="color-liv1"
        alignLinks="right"   left>

        <NavItem href="/addProduct">
          Agregar productos
        </NavItem>
        <NavItem href="/listProduct">
          Mostrar Productos
        </NavItem>
      </Navbar>
    </>
  )
}

export default NavbarMain
