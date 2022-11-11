import React from 'react'
import { NavLink } from 'react-router-dom'
import {AdminNavbarContainer, AdminLinks, UserProfile} from "./components"
function AdminNavbar() {
  return (
    <AdminNavbarContainer>
        <AdminLinks>
            <NavLink to={''}>
            <i className="fa-solid fa-chart-line"></i> Dashboard
            </NavLink>
            <NavLink to={'inventory'}>
            <i className="fa-solid fa-cart-flatbed"></i> Inventory
            </NavLink>
            <NavLink to={''}>
            <i className="fa-solid fa-chart-pie"></i> Sales
            </NavLink>
            <NavLink to={''}>
            <i className="fa-solid fa-truck-fast"></i> Orders
            </NavLink>
        </AdminLinks>
        <UserProfile>
            <img src="/assets/arthur estrada profile.jpg" alt="" />
        </UserProfile>
    </AdminNavbarContainer>
  )
}

export default AdminNavbar