import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import { menuCategories } from './data/menu'

const WHATSAPP_NUMBER = '78300532'

const heroSlides = [
  {
    title: 'Desayunos que reconfortan',
    description: 'Opciones suaves para empezar tu dia con energia.',
    image: '/images/desayunos/desayunos.png',
  },
  {
    title: 'Almuerzos frescos y caseros',
    description: 'Sabores saludables listos para disfrutar.',
    image: '/images/almuerzos/almuerzos.png',
  },
  {
  title: 'Viandas listas para llevar',
  description: 'Equilibradas, practicas y pensadas para tu ritmo.',
  image: '/images/viandas/viandas.png',
},
  {
    title: 'Postres ligeros y felices',
    description: 'Un cierre dulce y equilibrado para tu jornada.',
    image: '/images/postres/postres.png',
  },
  
]

function App() {
  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      <main>
        <Home
          whatsappNumber={WHATSAPP_NUMBER}
          heroSlides={heroSlides}
          categories={menuCategories}
        />
        <Menu categories={menuCategories} whatsappNumber={WHATSAPP_NUMBER} />
        <FinalCta whatsappNumber={WHATSAPP_NUMBER} />
      </main>
      <Footer />
    </div>
  )
}

export default App
