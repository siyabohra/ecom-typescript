import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../img/images.png';
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";


function Header() {
    return (
        <>
            <div className="navbar bg-light  m-0  ">
                <Navbar className=" container-fluid">
                    <img src={logo} className='logo ' />

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex gap-4">
                            <Nav.Link className=' fs-5 italic fst-italic fw-bold '>Home</Nav.Link>
                            <NavDropdown title="All Products" id="basic-nav-dropdown" className='fs-5 italic fst-italic fw-bold'>
                                <NavDropdown.Item >Men's Clothing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Women's Clothing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Electronics</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Jewelry</NavDropdown.Item>
                            </NavDropdown>
                            <input type="text" placeholder='Search Categories' className='search-input' />

                        </Nav>
                        <div className='icons d-flex gap-5 mt-3 '>
                            <div>
                                <CgProfile className='profile fs-2 mt-' /><br/>
                                <p className='text-center fw-bold profile-text'>user</p>
                            </div>
                            <div>   
                                 <FaCartShopping className='cart fs-3 mt-1' /><br/>
                                 <p className='text-center fw-bold cart-text '>My cart</p>
                            </div>

                        </div>

                    </Navbar.Collapse>



                </Navbar>
            </div>

        </>
    )
}

export default Header