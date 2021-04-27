import lightArrow from '../../assets/images/icon-arrow-light.svg'
import darkArrow from '../../assets/images/icon-arrow-dark.svg'

const NavItem = ({ item, onClick, isMobileMenu }) => {
  return (
    <li className={`nav-item${item.isOpened ? ' isOpened' : ''}`}>
      <div className="nav-item-title" onClick={() => onClick(item.title)}>
        <span>{item.title}</span>
        <img
          src={isMobileMenu ? darkArrow : lightArrow}
          alt="arrow"
          style={{
            marginBottom: '1px',
            transform: item.isOpened ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      {item.isOpened ? (
        <ul className="dropdown-menu">
          {item.drobdownItems.map((item, i) => (
            <li key={i} className="dropdown-menu-item">
              <a href={`/${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default NavItem
