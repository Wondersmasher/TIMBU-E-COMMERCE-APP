import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import collections, { getCollections } from '../assets/collections';
const Collections = [
    {
        id: "1",
        name: "All",
        link: "/all"
    },
    {
        id: "2",
        name: "T-Shirts",
        link: "/tshirts"
    },
    {
        id: "3",
        name: "Hoodies",
        link: "/hoodies"
    },
    {
        id: "4",
        name: "Sweat-Shirts",
        link: "/sweatshirts"
    },
]

const Collection = () => {
    // const [filter, setFilter] = useState(Collections)
    // const filteredCollections = collections.filter((collections) =>{
    //     if(filter === "All"){
    //         return collections
    //     } return collections.name === filter

    // })
    // useEffect(() => {
    //     const getCollections = async () => {
    //       try {
    //         const response = await axios.get(
    //           "/products?organization_id=1fc83c22f15b403486e21c41e0447ea5&reverse_sort=false&page=0&size=10&Appid=4GUPFVSXQNV4YGU&Apikey=11572620f54d416ea88ac68a5ee6052b20240712143453664117"
    //         );
    //         console.log(response, "from response")
    //         return response;
    //       } catch {
    //         console.log("error");
    //       }
    //     };
    //     getCollections()
    //   }, []);
    
   
  return (
    <div className='md:px-24 px-6'>
        <h1 className='text-center font-extrabold md:text-4xl '>Discover Our Exclusive Collection</h1>
        <p className='text-center py-2 md:text-base  text-sm'>Shop the latest trends and find your perfect match</p>
        <ul className=' md:px-24 py-2 md:gap-14 flex gap-4 font-extrabold justify-center items-center'>
            {
                Collections.map((collection) => (
                    <li key={collection.id} className='hover:font-extrabold'  >
                        <NavLink to={collection.link}>{collection.name}</NavLink>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Collection
