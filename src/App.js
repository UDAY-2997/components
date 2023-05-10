import './style/index.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Button from './components/Button';
import Footer from './components/Footer';
import Promotion from './components/Promotion';


function App () {
 let isLoggedIn = false;
 let title = "U-Dev"
 return (
  <>
  <Header />
  <div className='banner'>
  <Banner backgroundClass="banner">
    <h1><span className='dull'>Store.</span> The best way to buy the products you <span className='dull'>love.</span></h1>
    
    <Button isLoggedIn={!isLoggedIn} className="primary" />
    <Button isLoggedIn={isLoggedIn} className="secondary" />
  </Banner>
  </div>
  <Gallery />
  <div className='promotion'>
    <Promotion />
  </div>
  <Footer title = { title } />
  </>
 )
}

export default App


