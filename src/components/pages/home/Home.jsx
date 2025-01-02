

import Blogs from '../blogs/Blogs'
import TrendingProducts from '../Shop/TrendingProducts'
import Banner from './Banner'
import Categories from './Categories'
import DealsSection from './DealsSection'
import HeroSection from './HeroSection'
import PromoBanner from './PromoBanner'

const Home = () => {
  return (
 <>
 <Banner></Banner>
 <Categories></Categories>
 <HeroSection></HeroSection>
 <TrendingProducts></TrendingProducts>
 <DealsSection></DealsSection>
 <PromoBanner></PromoBanner>
 <Blogs></Blogs>

 </>
  )
}

export default Home