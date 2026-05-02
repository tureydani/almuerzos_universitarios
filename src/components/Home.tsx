import About from './About'
import Differential from './Differential'
import Hero, { type HeroSlide } from './Hero'
import MenuPreview from './MenuPreview'
import ValueProps from './ValueProps'
import type { MenuCategory } from '../data/menu'

type HomeProps = {
  whatsappNumber: string
  heroSlides: HeroSlide[]
  categories: MenuCategory[]
}

export default function Home({ whatsappNumber, heroSlides, categories }: HomeProps) {
  return (
    <>
      <Hero whatsappNumber={whatsappNumber} slides={heroSlides} />
      <ValueProps />
      <About />
      <MenuPreview categories={categories} />
      <Differential />
    </>
  )
}
