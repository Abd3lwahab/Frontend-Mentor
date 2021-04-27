import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import close from '../../assets/images/icon-close.svg'
import hamburger from '../../assets/images/icon-hamburger.svg'
import Button from '../Button'
import NavItem from './NavItem'

const Navbar = () => {
  const [navList, setNavList] = useState([
    {
      title: 'Product',
      drobdownItems: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
      isOpened: false,
    },
    {
      title: 'Company',
      drobdownItems: ['About', 'Team', 'Blog', 'Careers'],
      isOpened: false,
    },
    {
      title: 'Connect',
      drobdownItems: ['Contact', 'Newsteller', 'LinkedIn'],
      isOpened: false,
    },
  ])

  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const clickHandler = (title) => {
    setNavList([
      ...navList.map((item) =>
        item.title === title
          ? { ...item, isOpened: !item.isOpened }
          : { ...item, isOpened: false }
      ),
    ])
  }

  return (
    <div className="navbar-wrapper">
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <div className="mobile-menu-trigger" onClick={() => setIsMobileMenu(!isMobileMenu)}>
        {isMobileMenu ? (
          <img src={close} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </div>
      <div className="nav-list-wrapper" style={{ display: isMobileMenu ? 'flex' : null }}>
        <ul className="nav-list">
          {navList.map((item, i) => (
            <NavItem
              item={item}
              onClick={clickHandler}
              key={i}
              isMobileMenu={isMobileMenu}
            />
          ))}
        </ul>
        <div className="nav-btns">
          <Button text="Login" />
          <Button text="Sign Up" isCTA isWide />
        </div>
      </div>
    </div>
  )
}

export default Navbar
