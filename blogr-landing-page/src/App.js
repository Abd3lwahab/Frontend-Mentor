import './assets/scss/style.scss'
import HeroSection from './components/Intro/HeroSection'
import MegaFeature from './components/Feature/MegaFeature'
import MiniFeature from './components/Feature/MiniFeature'
import Footer from './components/Footer'
import { FeatureContentOne, FeatureContentTwo, MiniFeatureContent } from './Data'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <MegaFeature content={FeatureContentOne} />
      <MiniFeature content={MiniFeatureContent} />
      <MegaFeature content={FeatureContentTwo} />
      <Footer />
    </div>
  )
}

export default App
