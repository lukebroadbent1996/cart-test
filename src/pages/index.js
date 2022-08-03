import React, {useState} from 'react'
import Hero from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import data from '../components/InfoSection/data'

import Footer from '../components/Footer'
import Basket from '../components/Basket/basket'

const Home = ()=>{
const [isOpen, setIsOpen] = useState(false)
const toggle = ()=>{
    setIsOpen(!isOpen)
}

const {products} = data;
const [cartItems, setCartItems] = useState([]);
const onAdd = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist){
        setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1} : x))
    } else {
        setCartItems([...cartItems, {...product, qty: 1}])
    }
}
const onRemove = (product)=>{
    const exist = cartItems.find((x)=> x.id === product.id)
    if(exist.qty === 1){
        setCartItems(cartItems.filter((x)=> x.id !== product.id))
    }else{
        setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
}
return(
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> 
        <Hero />
        <div className='row'>
        <InfoSection onAdd={onAdd} products={products}/>
        <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
        </div>
        <Footer />
    </>
)
}
export default Home;