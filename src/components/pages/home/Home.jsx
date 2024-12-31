

import TrendingProducts from '../Shop/TrendingProducts'
import Banner from './Banner'
import Categories from './Categories'
import DealsSection from './DealsSection'
import HeroSection from './HeroSection'

const Home = () => {
  return (
 <>
 <Banner></Banner>
 <Categories></Categories>
 <HeroSection></HeroSection>
 <TrendingProducts></TrendingProducts>
 <DealsSection></DealsSection>

 </>
  )
}

export default Home