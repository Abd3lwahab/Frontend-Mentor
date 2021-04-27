import '../../assets/scss/feature.scss'
import SingleFeature from './SingleFeature'
import { useMobileWidth } from '../../useMobileWidth'

const MegaFeature = ({ content }) => {
  const { hasHeader, header, imgDesktop, imgMobile, text, textFirst } = content
  const isMobileWidth = useMobileWidth()

  return (
    <div className="feature-section-wrapper">
      <div className="container">
        <div className="feature-inner">
          <h3 className="feature-header">{hasHeader && header}</h3>
          <div className={`feature-wrapper ${textFirst ? 'row' : 'row-reverse'}`}>
            <div className="feature-text">
              {text.map((item, i) => (
                <SingleFeature title={item.title} desc={item.desc} key={i} />
              ))}
            </div>
            <div className="feature-img">
              <img src={isMobileWidth ? imgMobile : imgDesktop} alt="feature-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaFeature
