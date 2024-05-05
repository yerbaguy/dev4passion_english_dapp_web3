import React, { useState, useEffect } from 'react'

import {ethers} from "ethers"

import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'

import { Container, Form } from 'semantic-ui-react'

import { Timeline } from 'react-twitter-widgets'


// const ewordEngContract = "0x9EBD79915dA3aCa29139e61Fa46d5fE604576729"
// const ewordEngContract = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"


// const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function Words() {

  const[query, setQuery] = useState('')
  const[wordid, setWordId] = useState(0)

  // const [data, setData] = useState('');
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [engword, setEngword] = useState([{
    id: 1,
    engword_explained: "kind"
  }]);

  const mixed_arrays = data1.concat(engword);

  // useEffect(()=>{

  //   getEWords();
  // },[])

  useEffect(()=>{

   // getEngWords();
   //fetchEWords();
   fetchEWords1();
  },[])


 
  async function fetchEWords1() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // const contract = new ethers.Contract(ewordAddress, Eword.abi, provider)
        // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, provider)
        const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, provider)
        try {
        //   const data = await contract.greet()
        // const data = await contract.fetchEWords() //
        const data = await contract.getEWords1(1)

        //setData(data);
        setData1([...data, data])
        console.log(data);
        

        const data_count = data.length;

           console.log("data_count", data_count);

         ///// datacount = data_count;

          // setData(data);
         ///// setData(data_count);

         // setGreetingValue(data)

             
              
             
            // console.log('data[0]: ', data[0])
           /////  console.log('data[0]: ', data_count)
            // setEWordsCount(data)
           ///// setEWordsCount(data_count)
           ///// console.log('ewordsCount: ', datacount)



           ////////////
          //   const datta = datacount;
          //   console.log("data_data", datacount)
          //   getEWord(datacount);
     
          //  const min = Math.ceil(1);
          //    // max = Math.floor(data.length);
          //  const max = Math.floor(datta);
         
          //    // return Math.floor(Math.random() * (max - min) + min);
          //    const dataa =  Math.floor(Math.random() * (max - min) + min);
          //    console.log("randommmmmm_int", dataa)

          //     localStorage.setItem("datacount", JSON.stringify(dataa))
          //    // localStorage.setItem("datacount", data)
          //    const dataaccountls = localStorage.getItem("datacount");
          //    console.log("dataacountls", dataaccountls);



          //    ewordscount = dataa;
          //    setEWordsCount(dataa)
          //    console.log("ewordscount", ewordscount)
             ///////////








        // console.log('data: ', data[0][1]) - kind


        // console.log('data: ', data[0][1])
        // console.log('data: ', data[0][2])
        // console.log('data: ', data[1][1])
        // console.log('data: ', data[1][2])


        ///// console.log('data: ', data[0][0].engWord)
        } catch (err) {
          console.log('Error: ', err)
        }
      }
}
  

  async function fetchEWords() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // const contract = new ethers.Contract(ewordAddress, Eword.abi, provider)
        // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, provider)
        const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, provider)
        try {
        //   const data = await contract.greet()
        // const data = await contract.fetchEWords() //
        const data = await contract.getEWords()

        //setData(data);
        setData([...data, data])
        console.log(data);
        

        const data_count = data.length;

           console.log("data_count", data_count);

         ///// datacount = data_count;

          // setData(data);
         ///// setData(data_count);

         // setGreetingValue(data)

             
              
             
            // console.log('data[0]: ', data[0])
           /////  console.log('data[0]: ', data_count)
            // setEWordsCount(data)
           ///// setEWordsCount(data_count)
           ///// console.log('ewordsCount: ', datacount)



           ////////////
          //   const datta = datacount;
          //   console.log("data_data", datacount)
          //   getEWord(datacount);
     
          //  const min = Math.ceil(1);
          //    // max = Math.floor(data.length);
          //  const max = Math.floor(datta);
         
          //    // return Math.floor(Math.random() * (max - min) + min);
          //    const dataa =  Math.floor(Math.random() * (max - min) + min);
          //    console.log("randommmmmm_int", dataa)

          //     localStorage.setItem("datacount", JSON.stringify(dataa))
          //    // localStorage.setItem("datacount", data)
          //    const dataaccountls = localStorage.getItem("datacount");
          //    console.log("dataacountls", dataaccountls);



          //    ewordscount = dataa;
          //    setEWordsCount(dataa)
          //    console.log("ewordscount", ewordscount)
             ///////////








        // console.log('data: ', data[0][1]) - kind


        // console.log('data: ', data[0][1])
        // console.log('data: ', data[0][2])
        // console.log('data: ', data[1][1])
        // console.log('data: ', data[1][2])


        ///// console.log('data: ', data[0][0].engWord)
        } catch (err) {
          console.log('Error: ', err)
        }
      }
}




  const handleSearch = (e) => {

    setQuery(e.target.value)
    setWordId(0);
    console.log("query", query);

  }

  const handleEngWord = (engword_explained) => {
    console.log(engword_explained);
  }

  return (


   <div>
    {
      data.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ) )
    }

    {
      data1.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ))

    }

    {/* {
      mixed_arrays.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ))
    } */}

   {
      mixed_arrays.map( (item) => (
        // <h4>{item.engword_explained}</h4>
        <button onClick={()=> handleEngWord(item.engword_explained)}>{item.engword_explained}</button>
      ))
    }
   </div>

   





    // <>
    // <input type="text" onChange={handleSearch}></input>
    // </>
  )
}

export default Words
