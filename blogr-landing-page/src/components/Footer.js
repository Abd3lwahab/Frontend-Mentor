import logo from '../assets/images/logo.svg'
import '../assets/scss/footer.scss'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-inner">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <div className="footer-lists">
            <ul>
              <li className="list-title">Product</li>
              <li>
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Marketplace</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Integrations</a>
              </li>
            </ul>
            <ul>
              <li className="list-title">Company</li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
            <ul>
              <li className="list-title">Connect</li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Newsletter</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
