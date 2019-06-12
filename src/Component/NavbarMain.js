import React from 'react';
import {Navbar,NavItem,Icon} from 'react-materialize'

const NavbarMain= () => {
  return(
    <>
      <Navbar
        brand={
          <a href="/">
          <Icon >
            home
          </Icon>
          </a>
        }
        alignLinks="right" className="color-liv1">
        <NavItem href="get-started.html">

        </NavItem>
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
