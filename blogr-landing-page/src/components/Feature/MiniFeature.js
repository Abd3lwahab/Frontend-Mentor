import SingleFeature from './SingleFeature'

const MiniFeature = ({ content }) => {
  const { title, desc, img } = content
  return (
    <div className="mini-feature-wrapper">
      <div className="container">
        <div className="mini-feature-inner row-reverse">
          <div className="mini-feature-text">
            <SingleFeature title={title} desc={desc} bigTitle />
          </div>
          <div className="mini-feature-img">
            <img src={img} alt="phone-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniFeature
