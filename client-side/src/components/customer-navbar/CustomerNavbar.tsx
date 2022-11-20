import { NavLink } from 'react-router-dom'
import { Cart, CustomerLinks, CustomerNavbarContainer, Photo, PhotoBorder, User, UserProfile } from './components'

function CustomerNavbar() {
    return (
        <CustomerNavbarContainer>
            <CustomerLinks>
                <NavLink to={''}> <i className="fa-solid fa-house"></i> Home</NavLink>
                <NavLink to={'store'}><i className="fa-solid fa-store"></i> Store</NavLink>
                <NavLink to={'purchases'}><i className="fa-solid fa-bag-shopping"></i> Purchases</NavLink>
            </CustomerLinks>
            <UserProfile>
                <Cart>
                    <i className="fa-solid fa-cart-shopping carticon"></i> 
                    <span className='title'>Cart</span> 
                    <span className='cart__number'>5</span>
                </Cart>
                <User>
                <PhotoBorder>
                    <Photo src="/assets/arthur estrada profile.jpg" />
                </PhotoBorder>
                <span className='icon-container'><i className="fa-solid fa-bars-staggered"></i></span>
            </User>
            </UserProfile>
        </CustomerNavbarContainer>
    )
}

export default CustomerNavbar