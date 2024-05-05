import React, { useState, useEffect } from 'react'


import {ethers} from "ethers"

import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'

import { Container, Form } from 'semantic-ui-react'

import { Timeline } from 'react-twitter-widgets'


// const ewordEngContract = "0x9EBD79915dA3aCa29139e61Fa46d5fE604576729"
// const ewordEngContract = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
const ewordEngContract = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"


function Learn() {

  const [engWord, setEngWord] = useState('')
  const [engWordExplained, setEngWordExplained] = useState('')
  const [engWordPronounciation, setEngWordPronounciation] = useState('')

  const [plWord, setPlWord] = useState('')
  // const [engW, setEngW] = useState('')
  // const [plW, setplW] = useState('')

  // const [engW, setEngW] = useState([])
  const [engW, setEngW] = useState('')
  const [engWExplained, setEngWExplained] = useState('')
  const [plW, setplW] = useState([])

   
   
   const [engWToCheck, setEngWToCheck] = useState('')
  // const [engWToCheck, setEngWToCheck] = useState([])
  // const [data, setData] = useState('')
  //const [data, setData] = useState(1)
  const [data, setData] = useState([])

  const [ewordsCount, setEWordsCount] = useState(0)

  let ewordscount
  let datacount = 1



  useEffect(() => {
    // setData(data)

     // loadEWord();

     fetchEWords();

    getRandomInt();

    // getEWord(0);

    // const dataaccountls = localStorage.getItem("datacount");
    const datacount = localStorage.getItem("datacount");
       getEWord(datacount);
 
    // setEWordsCount(data);
    
    

    // },[])
    //  },[], [ewordsCount])
    },[])


    async function requestAccount() {
      // await window.ethereum.request({ method: "eth_requestAccounts" })
     const windw_eth =  await window.ethereum.request({ method: "eth_requestAccounts" })
     console.log("window_eth", windw_eth);
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

          

          const data_count = data.length;

            datacount = data_count;

            // setData(data);
            setData(data_count);

           // setGreetingValue(data)

               
                
               
              // console.log('data[0]: ', data[0])
              console.log('data[0]: ', data_count)
              // setEWordsCount(data)
              setEWordsCount(data_count)
              console.log('ewordsCount: ', datacount)



              const datta = datacount;
              console.log("data_data", datacount)
       
             const min = Math.ceil(1);
               // max = Math.floor(data.length);
             const max = Math.floor(datta);
           
               // return Math.floor(Math.random() * (max - min) + min);
               const dataa =  Math.floor(Math.random() * (max - min) + min);
               console.log("randommmmmm_int", dataa)

                localStorage.setItem("datacount", JSON.stringify(dataa))
               // localStorage.setItem("datacount", data)
               const dataaccountls = localStorage.getItem("datacount");
               console.log("dataacountls", dataaccountls);



               ewordscount = dataa;
               setEWordsCount(dataa)
               console.log("ewordscount", ewordscount)








          // console.log('data: ', data[0][1]) - kind


          // console.log('data: ', data[0][1])
          // console.log('data: ', data[0][2])
          // console.log('data: ', data[1][1])
          // console.log('data: ', data[1][2])


         console.log('data: ', data[0][0].engWord)
          } catch (err) {
            console.log('Error: ', err)
          }
        }
  }

  function getRandomInt() {



    // min = Math.ceil(min);
    // max = Math.floor(max);

   // const data = 10;
   const data = datacount;
   console.log("data_data", datacount)

  const min = Math.ceil(1);
    // max = Math.floor(data.length);
  const max = Math.floor(data);

    // return Math.floor(Math.random() * (max - min) + min);
    const dataa =  Math.floor(Math.random() * (max - min) + min);
    console.log("random_int", dataa)
   // fetchEngWord(dataa);

  }


  const handleEngWord = async (e) => {

    //  console.log(e.target.value);

    setEngWToCheck(e.target.value);

    // console.log(e.target.value);
    // console.log(engWToCheck);

      const plw = sessionStorage.getItem('plw')
      console.log("s-plw", plw);

    const engw =  sessionStorage.getItem('engw');
     console.log("s-engw", engw);

     const engwtocheck = engWToCheck;

     
  //    console.log(engwtocheck === engw);

  // if (engWToCheck === engw) {
  //   console.log("Ok");
  //   getRandomInt();
  // } else {
  //   console.log("No");
  // }

  console.log(engwtocheck === engWExplained);

  if (engWToCheck === engWExplained) {
    console.log("Ok");

    setEngWToCheck("")
   //  getRandomInt();


  //  const datta = datacount;
  //  console.log("data_data", datacount)

  // const min = Math.ceil(1);
  //   // max = Math.floor(data.length);
  // const max = Math.floor(datta);

  //   // return Math.floor(Math.random() * (max - min) + min);
  //   const dataa =  Math.floor(Math.random() * (max - min) + min);
  //   console.log("randommmmmm_int", dataa)

          const datacount = localStorage.getItem("datacount")
        //  console.log("datacountttttt", datacount)
        //  localStorage.clear()



        //const datta = datacount;
        console.log("data_data_handle_eword", datacount)
        const datta = datacount;
 
       const min = Math.ceil(1);
         // max = Math.floor(data.length);
       const max = Math.floor(datacount);
     
         // return Math.floor(Math.random() * (max - min) + min);
         const dataa =  Math.floor(Math.random() * (max - min) + min);
          console.log("randommmmmm_int_handle_eword", dataa)
         //console.log("randommmmmm_int_handle_eword", datacount)

        //   localStorage.setItem("datacount", JSON.stringify(dataa))
        //  // localStorage.setItem("datacount", data)
        //  const dataaccountls = localStorage.getItem("datacount");
        //  console.log("dataacountls", dataaccountls);





///
       /////////////  getEWord(dataa);
            ///////
            
            

     // getEWord(datacount);


   // fetchEWords()
  } else {
    console.log("No");
  }



}

const getEWord = async(data) => {


  /////////
  if (!typeof window.ethereum !== 'undefined') {
     await requestAccount()
     const provider = new ethers.providers.Web3Provider(window.ethereum)
     const signer = provider.getSigner()
     // const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
     // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)
     const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)

     // const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
     // const transaction = await contract.createEWord(eword.engword, eword.plword) //
     // const transaction = await contract.addEWord(eword.engword, eword.plword)
   ////  const wordid = 0;
     const wordid = data;
     // const transaction = await contract.getEngWord(wordid)
     // const transaction = await contract.getEngWord(wordid)
     // getEngWordEngExplainedAndPronounciation
     // const transaction = await contract.getEngWordPlWord(wordid)
     const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
 
     // console.log("transaction", transaction);
     // console.log("transaction", transaction.data);
    // setData(transaction)
     // console.log("transaction", transaction);
     console.log("transaction", transaction[0]);
     // const engW = transaction[0];
    
     // sessionStorage.setItem('engw', transaction[0]);
      setEngW(transaction[0])
      console.log("engW", engW);

     console.log("transaction", transaction[1]);

     setEngWExplained(transaction[1])


     // sessionStorage.setItem('plw', transaction[1]);
     // // const plW = transaction[1];
     // setplW(transaction[1]);
     // console.log("plW", plW);

     // console.log("data", data);


     console.log("transaction", transaction[2]);


     return transaction;

    //// fetchEWords();


   //  fetchEngWord();
 }



}




  return (
    <div className='learn'>

    <html>
    </html>

    <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: '4passionDev'
    }}
    options={{
      height: '400'
    }}
    
    />



        <h1>Learn</h1>

        <div className='engwtocheck'>
      lkajsdlkfajsssssss

            <form >
                {plW}
                {engW}
                { sessionStorage.getItem('plw') }

                 {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='plword' type="text" /> */}

                {/* <input onChange = { (e) => setEngWToCheck(e.target.value)} id="engWToCheck" value = {engWToCheck} placeholder='engWToCheck' type="text"/> */}
                <input onChange = { handleEngWord } id="engWToCheck" value = {engWToCheck} placeholder='engWToCheck' style={{ width: "500px", textAlign: "center"}}type="text"/>



                {/* <button>Submit</button> */}

                {plW}
                {engWExplained}



            </form>
</div>

      
    </div>
  )
}

export default Learn
