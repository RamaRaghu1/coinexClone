import React,{useContext} from 'react'
import Marquee from "react-fast-marquee";
import { DataContext } from '../Context/dataContext';



const Marqueee = () => {

    const data = useContext(DataContext);
 


  return (

    <Marquee className='bg-light h-20' >
    

      {data && data.data.map((dt) => {
       
          let isChangeGreater = dt.change >= 0 ? true : false;
        return (

          <div className='flex mx-8'>
            <img className='w-8 h-8 m-auto ' src={dt.logo} />
            <div className='p-4'>
              <p className='font-bold'>{dt.firstcurrency_name.toUpperCase()} ({dt.firstcurrency.toUpperCase()}) </p>
              <p><span className='text-blue-600'>{dt.lastprice}</span> | <span className={`${isChangeGreater ? "text-green-500" : "text-red-500"
                }`}>{dt.change}% </span></p>
            </div>
          </div>

        )
      })}

    </Marquee>

  )
}

export default Marqueee
