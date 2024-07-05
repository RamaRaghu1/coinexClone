import { useContext ,useState} from "react";
import React from "react";
import { DataContext } from "../Context/dataContext";

const Table = () => {
  const data = useContext(DataContext);
const [active,setActive]=useState(0);
const [activeBar, setActiveBar]=useState(0)


//   console.log(`table ${JSON.stringify(data.data)}`)
  const newData=data.data

const buttons=["Trending Crypto", "Most Active", "Top Gainers", "Top Losers"]
  let usdtData = newData.filter((item) => item.secondcurrency === "usdt");


  let inrData = newData.filter((item) => item.secondcurrency === "inr");

  return (
    <div>
      <h2 className="font-font1 font-bold text-black">Top Trends</h2>
<button onClick={()=>setActive(1)} className="bg-dark ">INR</button>

<button onClick={()=>setActive(0)}>usdt</button>

<div>{buttons.map((item, index)=>
<button key={index} className={`text-sm mx-4 font-font1 bg-slate-100 p-2 rounded-md  w-36 gap-4 ${activeBar === index ? "text-dark border border-dark" : ""}`} onClick={()=>setActiveBar(index)}>{item}</button>
)} </div>


      <table className="">
        <thead>
          <tr>
            <td className="w-1/12 p-8 m-4">Pair</td>
            <td className="w-1/12 p-8 m-4">Last Price</td>
            <td className="w-1/12 p-8 m-4">24h Change</td>
            <td className="w-1/12 p-8 m-4">24h High</td>
            <td className="w-1/12 p-8 m-4">24h Low</td>
            <td className="w-1/12 p-8 m-4">24h Volume</td>
             <td className="w-1/12 p-8 m-4">Start Trade </td>
          
          </tr>
        </thead>

        
        <tbody>
          {inrData && (

            active == 1 ?
            (
               inrData.map((dt) => {
                    const isChangeHigher = dt.change >= 0 ? true : false;
                    return (
                      <tr>
                        <td className="w-3/12 p-8 m-4">
                          <p>
                            <img src={dt.logo} className="w-8 h-8 inline-block" />{" "}
                            {dt.pair.toUpperCase()}
                          </p>
                        </td>
                        <td className="w-2/12 p-8 m-4">{dt.lastprice.toFixed(2)}</td>
                        <td className={`w-1/12 p-8 m-4  ${isChangeHigher ? "text-green-500" : "text-red-500"}`}>{dt.change.toFixed(2)}%</td>
                        <td className="w-1/12 p-8 m-4">{dt.high}</td>
                        <td className="w-1/12 p-8 m-4">{dt.low}</td>
                        <td className="w-1/12 p-8 m-4">{dt.volume.toFixed(2)}</td>
                        <td className="w-2/12 p-4 ">
                          <button className="border border-blue-500 px-4 py-2 rounded-lg mx-2">
                            Trade
                          </button>
                        </td>
                      </tr>
                    );
                  })
            ):(
                usdtData.map((dt) => {
                    const isChangeHigher = dt.change >= 0 ? true : false;
                    return (
                      <tr>
                        <td className="w-3/12 p-8 m-4">
                          <p>
                            <img src={dt.logo} className="w-8 h-8 inline-block" />{" "}
                            {dt.pair.toUpperCase()}
                          </p>
                        </td>
                        <td className="w-2/12 p-8 m-4">{dt.lastprice.toFixed(2)}</td>
                        <td className={`w-1/12 p-8 m-4  ${isChangeHigher ? "text-green-500" : "text-red-500"}`}>{dt.change.toFixed(2)}%</td>
                        <td className="w-1/12 p-8 m-4">{dt.high}</td>
                        <td className="w-1/12 p-8 m-4">{dt.low}</td>
                        <td className="w-1/12 p-8 m-4">{dt.volume.toFixed(2)}</td>
                        <td className="w-2/12 p-4 ">
                          <button className="border border-blue-500 px-4 py-2 rounded-lg mx-2">
                            Trade
                          </button>
                        </td>
                      </tr>
                    );
                  })
            )
          )
           
            
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
