
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartModal from './pages/Shop/CartModal'

import avatarImg from '../assets/avatar.png'
import { useLogoutUserMutation } from '../redux/features/auth/authApi'
import { logout } from '../redux/features/auth/authSlice'

const Navbar = () => {
  const products = useSelector((state) => state.cart.products)
  const [isCartOpen, setisCartOpen] = useState(false)
  const handleCartToggle = () => {
    setisCartOpen(!isCartOpen)
  }

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [logoutUser] = useLogoutUserMutation()
  const navigate = useNavigate()

  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  const adminDropDownMenus = [
    { label: 'Dashboard', path: '/dashboard/admin' },
    { label: 'Manage Items', path: '/dashboard/manage-products' },
    { label: 'All Orders', path: '/dashboard/manage-orders' },
    { label: 'Add Product', path: '/dashboard/add-product' },
  ]

  const userDropDownMenus = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Profile', path: '/dashboard/profile' },
    { label: 'Payments', path: '/dashboard/payments' },
    { label: 'Orders', path: '/dashboard/orders' },
  ]

  const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus]

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  // Mobile Navigation State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-nav fixed-nav-bar">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full justify-between items-center">
          {/* Desktop Links */}
          <ul className="nav__links">
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link"><Link to="/shop">Shop</Link></li>
            <li className="link"><Link to="/aboutUs">About Us</Link></li>
            <li className="link"><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Logo */}
          <div className="nav__logo">
            <Link to="/">HerHaven<span>.</span></Link>
          </div>

          {/* Desktop Icons */}
          <div className="nav__icons relative">
            <span>
              <Link to="/search">
                <i className="ri-search-line"></i>
              </Link>
            </span>

            <span>
              <button onClick={handleCartToggle} className="hover:text-primary">
                <i className="ri-shopping-bag-line"></i>
                <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">{products.length}</sup>
              </button>
            </span>

            <span>
              {
                user ? (
                  <>
                    <img
                      onClick={handleDropDownToggle}
                      src={user?.profileImage || avatarImg}
                      alt=""
                      className="size-6 rounded-full cursor-pointer"
                    />
                    {
                      isDropDownOpen && (
                        <div className="absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                          <ul className="font-medium space-y-4 p-2">
                            {dropdownMenus.map((menu, index) => (
                              <li key={index}>
                                <Link
                                  onClick={() => setIsDropDownOpen(false)}
                                  className="dropdown-items"
                                  to={menu.path}
                                >
                                  {menu.label}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link onClick={handleLogout} className="dropdown-items">Logout</Link>
                            </li>
                          </ul>
                        </div>
                      )
                    }
                  </>
                ) : (
                  <Link to="login">
                    <i className="ri-user-line"></i>
                  </Link>
                )
              }
            </span>
          </div>
        </div>

        {/* Mobile Navbar Header */}
        <div className="lg:hidden flex justify-between items-center w-full py-3">
          {/* Left: Hamburger */}
          <button onClick={handleMenuToggle} className="text-2xl">
            <i className="ri-menu-line"></i>
          </button>

          {/* Center: Logo */}
          <div className="text-xl font-bold">
            <Link to="/">HerHaven<span className="text-primary">.</span></Link>
          </div>

          {/* Right: Cart & User */}
          <div className="flex items-center gap-4 text-xl">
            <div className="nav__icons relative">
              <span>
                <Link to="/search">
                  <i className="ri-search-line"></i>
                </Link>
              </span>

              <span>
                <button onClick={handleCartToggle} className="hover:text-primary">
                  <i className="ri-shopping-bag-line"></i>
                  <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">{products.length}</sup>
                </button>
              </span>

              <span>
                {
                  user ? (
                    <>
                      <img
                        onClick={handleDropDownToggle}
                        src={user?.profileImage || avatarImg}
                        alt=""
                        className="size-6 rounded-full cursor-pointer"
                      />
                      {
                        isDropDownOpen && (
                          <div className="absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <ul className="font-medium space-y-4 p-2">
                              {dropdownMenus.map((menu, index) => (
                                <li key={index}>
                                  <Link
                                    onClick={() => setIsDropDownOpen(false)}
                                    className="dropdown-items"
                                    to={menu.path}
                                  >
                                    {menu.label}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <Link onClick={handleLogout} className="dropdown-items">Logout</Link>
                              </li>
                            </ul>
                          </div>
                        )
                      }
                    </>
                  ) : (
                    <Link to="login">
                      <i className="ri-user-line"></i>
                    </Link>
                  )
                }
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Close X Button */}
          <div className="flex justify-end p-4">
            <button onClick={handleMenuToggle} className="text-2xl">
              <i className="ri-close-line"></i>
            </button>
          </div>

          <ul className="px-6 space-y-4">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/aboutUs" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>

          </ul>
        </div>

      </nav>

      {/* Cart Modal */}
      {isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle} />}
    </header>
  )
}

export default Navbar