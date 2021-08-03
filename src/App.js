import './main.css';
import { useState, useEffect } from 'react'
import Arrow from './assets/icon-arrow-down.svg'
import Egg from './assets/desktop/image-transform.jpg'
import Cup from './assets/desktop/image-stand-out.jpg'
import Bottles from './assets/desktop/image-gallery-milkbottles.jpg'
import Orange from './assets/desktop/image-gallery-orange.jpg'
import Cone from './assets/desktop/image-gallery-cone.jpg'
import Cubes from './assets/desktop/image-gallery-sugarcubes.jpg'
import Emily from './assets/image-emily.jpg'
import Thomas from './assets/image-thomas.jpg'
import Jennie from './assets/image-jennie.jpg'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'


const App = () => {
const [nav, setnav] = useState(['About', 'Service', 'Projects'])
const [graphic, setgraphic] = useState([
  { title: 'Graphic Design', cont: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures client's attention.", classname: 'apple text-green-900'},
  { title: 'Photography', cont: 'Increase your credibility by getting the most stunning high-quality photos that improve your business image.', classname: 'orange text-blue-900'}
])
const [avatar, setavatar] = useState([
  { img: Jennie , name: 'Jennie F.', cont: 'Incredible end result! Our sales increased over 400% when we worked with sunnyside. Highly recommended!', title: 'Buisness Owner' },
  { img: Thomas , name: 'Thomas S.', cont: "sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.", title: 'Cheif Operating Officer' },
  { img: Emily , name: 'Emily R.', cont: 'We put our trust and they delivered, making sure our needs were met and deadlines were always hit.', title: 'Marketing Director' }
])
const [images, setimages] = useState([Bottles, Orange, Cone, Cubes])
const [mobleNav, setmobleNav] = useState('-top-full')
const showNav = () => {
  mobleNav === 'top-0' ? setmobleNav('-top-full') : setmobleNav('top-0')
}

 useEffect(() =>  { setmobleNav('-top-full') }, [])

  return ( 
    <>
     <div className="font-Barlow grid grid-cols-4 overflow-hidden">
       <div className="first-grid  h-screen col-span-4 pt-5 lg:pt-10">
         <div className="nav flex overflow-hidden  mx-5 lg:mx-0 justify-between">
           <div className="text-white font-bold lg:text-xl ml-5  lg:ml-10">
             sunnyside
           </div>
           <div className="lg:flex  justify-around lg:pr-10">
             { nav.map((nav, index) => (
                 <div className=" hidden lg:block font-base lg:mr-5 transition ease-linear duration-300  hover:bg-white hover:bg-opacity-30 font-Barlow py-2 cursor-pointer  px-4 rounded-full  lg:text-sm text-white" key={index} >{ nav }</div>
             )) }
                 <div className=" hidden lg:block font-base lg:mr-5 transition-all ease-in-out duration-500 font-bold bg-white hover:bg-opacity-30 font-Fraunces py-2 cursor-pointer  px-4 rounded-full  lg:text-sm text-blue-400 hover:text-white"  >CONTACT</div>
                 <FaBars onClick={ showNav } className="lg:hidden  text-white text-lg" />
           </div>
         </div>
         <div className="relative overflow-hidden w-11/12 mx-auto">
         <div className={`bg-white absolute ${ mobleNav } transition ease-out duration-500  z-10  min-h-60 pb-5 w-full`}>
           <div className="dis"></div>
           {nav.map((item, index) => (
             <div key={index} className="text-center font-semibold  text-gray-400 font-Barlow mt-5">{ item }</div>
           ))}
             <div className="text-center  mt-5 font-serif font-bold ">
               <span className="px-5 py-2  rounded-full bg-yellow-400">CONTACT</span>
             </div>
         </div>
         
          <div className="text-center font-serif text-4xl  lg:text-5xl mt-20 text-white font-bold">WE ARE CREATIVES
          <img src={Arrow} alt="" className="mx-auto mt-10 animate-bounce" />
          </div>
          </div>
       
       </div>
       <img src={ Egg } alt='egg' className=" md:hidden col-span-4 object-cover" />
        <div className=" col-span-4 text-center md:text-left md:col-span-2 bg-red-50 p-5 lg:p-28">
          <div className=" text-center text-3xl md:text-left md:text-4xl mt-10 lg:mt-16 pr-9 text-gray-800 font-bold font-serif">
            Transform your brand
          </div>
          <div className=" text-center md:text-left px-3 md:px-0  my-5 text-gray-500 text-sm font-medium">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visuals that do most of the marketing for you.
          </div>
          <span className="font-serif text-gray-800 transition ease-in-out duration-500   border-b-4 border-transparent rounded cursor-pointer hover:border-yellow-300  font-bold ">LEARN MORE</span>
          </div>
        <img src={ Egg } alt='egg' className=" hidden md:block col-span-4  md:col-span-2 object-cover" />
        <img src={ Cup } alt='cup' className="  col-span-4  md:col-span-2 object-cover" />
        <div className=" col-span-4 text-center md:text-left md:col-span-2 bg-red-50 p-5 lg:p-28">
          <div className=" text-center text-3xl md:text-left md:text-4xl mt-10 lg:mt-16 pr-9 text-gray-800 font-bold font-serif">
            Stand out to the right audience
          </div>
          <div className=" my-5 text-gray-500 text-sm font-medium">
            Using a collaborative formula of designers, researchers,photographer, videographers, and copywriters, we'll build and extend your brand in digital places.
          </div>
          <span className="font-serif text-gray-800 transition ease-in-out duration-500   border-b-4 border-transparent rounded cursor-pointer hover:border-red-500  font-bold ">LEARN MORE</span>
          </div>
         { graphic.map((item, index) => (
           <div className={` col-span-4 md:col-span-2  ${item.classname} `} key={index}>
             <div className="absolute  bottom-0 px-2 py-10 lg:p-20">
               <div className="text-3xl font-bold font-serif">{ item.title }</div>
               <div className="text-sm">{ item.cont }</div>
             </div>
           </div>
         )) }
         <div className="col-span-4 pb-20 lg:pb-40 bg-red-50 grid grid-cols-3 gap-6">
           <div className="col-span-3  text-center text-xl text-gray-500 my-10 md:my-20 font-serif font-bold">CLIENT TESTIMONIALS</div>
           { avatar.map((item, index) => (
             <div key={ index } className=" col-span-4 md:col-span-1">
               <img src={item.img} alt={ item.name} className="mx-auto h-20 w-20 lg:h-28 lg:w-28 rounded-full" />
               <div className="text-center px-20 md:px-8  text-xs lg:text-sm text-gray-500 lg:px-16 my-10 font-medium">{ item.cont }</div>
               <div className="font-serif font-bold text-gray-800 text-lg text-center">{ item.name }</div>
               <div className=" text-xs text-gray-400 text-center">{ item.title }</div>
             </div>
           )) }
         </div>
         { images.map((doc, index) => (
             <img className=" col-span-2 lg:col-span-1" src={doc} key={index} alt={index} />
           )) }
           <div className="h-80 bg-blue-300 col-span-4">
             <div className="text-center  mt-14 text-4xl text-green-800 font-Barlow font-bold">sunnyside</div>
             <div className="text-center mt-6  font-Barlow  font-medium">
               <span className=" cursor-pointer text-sm lg:text-base hover:text-white transition ease-linear duration-300 text-green-700">About</span>
               <span className=" cursor-pointer text-sm lg:text-base hover:text-white transition ease-linear duration-300 text-green-700 mx-10">Services</span>
               <span className=" cursor-pointer text-sm lg:text-base hover:text-white transition ease-linear duration-300 text-green-700">Projects</span>
             </div>
             <div className="text-center flex justify-center  mt-20  font-Barlow  font-medium">
               <FaFacebook className=" mx-3 md:text-lg  cursor-pointer hover:text-white transition ease-linear duration-300 text-green-700" />
               <FaInstagram className=" mx-3 md:text-lg cursor-pointer hover:text-white transition ease-linear duration-300 text-green-700" />
               <FaTwitter className=" mx-3 md:text-lg cursor-pointer hover:text-white transition ease-linear duration-300 text-green-700 " />
               <FaPinterestP className=" mx-3 md:text-lg  cursor-pointer hover:text-white transition ease-linear duration-300 text-green-700" />
             </div>
           </div>
     </div>
    </>
   );
}
 
export default App; 