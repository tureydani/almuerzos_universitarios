import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Menu from './components/Menu'
import Carousel from './components/Carousel'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const WHATSAPP_NUMBER = '59169536433'

const menuItems = [
  {
    id: 'silpancho',
    name: 'Silpancho cochabambino',
    price: 'Bs 18',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pique',
    name: 'Pique macho universitario',
    price: 'Bs 22',
    image:
      'https://images.unsplash.com/photo-1604908176997-431dc5a4a589?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sopa',
    name: 'Sopa de mani nutritiva',
    price: 'Bs 16',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sajta',
    name: 'Sajta de pollo casera',
    price: 'Bs 19',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tranca',
    name: 'Tranca de res con ensalada',
    price: 'Bs 20',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ensalada',
    name: 'Bowl saludable de temporada',
    price: 'Bs 17',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
]

const carouselItems = [
  {
    title: 'Menu del dia con sabor cochala',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Comida casera lista para la U',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Opciones nutritivas y economicas',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80',
  },
]

const problems = [
  {
    title: 'Mala alimentacion en estudiantes',
    description: 'Saltan comidas o comen rapido sin nutrientes reales.',
  },
  {
    title: 'Falta de tiempo',
    description: 'Clases, tareas y transporte dejan poco margen para cocinar.',
  },
  {
    title: 'Bajos ingresos',
    description: 'El presupuesto alcanza, pero la comida saludable suele ser cara.',
  },
  {
    title: 'Consumo de comida chatarra',
    description: 'Opciones rapidas que afectan energia y concentracion.',
  },
]

const benefits = [
  'Ahorro de tiempo en el dia a dia',
  'Bajo costo con porciones completas',
  'Mejor energia y rendimiento academico',
]

function App() {
  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      <main>
        <Hero whatsappNumber={WHATSAPP_NUMBER} />
        <Problem items={problems} />
        <Solution benefits={benefits} />
        <Menu items={menuItems} whatsappNumber={WHATSAPP_NUMBER} />
        <Carousel items={carouselItems} />
        <About />
        <Contact whatsappNumber={WHATSAPP_NUMBER} />
      </main>
      <Footer />
    </div>
  )
}

export default App
