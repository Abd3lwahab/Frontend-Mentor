import '../../assets/scss/intro.scss'
import Button from '../Button'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className="top-section-wrapper">
      <div className="container">
        <div className="intro-wrapper">
          <Navbar />
          <div className="intro-content">
            <h1 className="main-title">A modern publishing platform</h1>
            <h4 className="main-slag">Grow your audience and build your online brand</h4>
            <div>
              <Button text="Start for Free" isCTA />
              <Button text="Learn More" isOutline />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
