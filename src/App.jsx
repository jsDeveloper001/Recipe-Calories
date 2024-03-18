import './App.css'
import Header from './components/Header/Header'
import All_Recipes from './components/Our Recipes/All_Recipes'

const App = () => {


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <section>
        <div className='text-center mt-14 mb-8 p-1 lg:px-40'>
          <h2 className='text-lg md:text-2xl lg:text-5xl font-bold'>Our Recipes</h2>
          <p className='text-[10px] md:text-xs lg:text-base font-normal text-[#150B2B99] mt-8'>Explore our rich array of recipes, offering tantalizing dishes to suit every palate. From comforting classics to exotic flavors, embark on a culinary journey with us.</p>
        </div>
        <div>
          <All_Recipes></All_Recipes>
        </div>
      </section>
    </div>
  )
}

export default App
