import React, { useState, useEffect } from 'react'


import {ethers} from "ethers"

import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'

import { Container, Form } from 'semantic-ui-react'

import { Timeline } from 'react-twitter-widgets'


// const ewordEngContract = "0x9EBD79915dA3aCa29139e61Fa46d5fE604576729"
// const ewordEngContract = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"


function Learn() {

  const [engWord, setEngWord] = useState('')
  const [engWordExplained, setEngWordExplained] = useState('')
  const [engWordPronounciation, setEngWordPronounciation] = useState('')

  const [plWord, setPlWord] = useState('')
  // const [engW, setEngW] = useState('')
  // const [plW, setplW] = useState('')

  // const [engW, setEngW] = useState([])
  const [engW, setEngW] = useState('')
  
  // const [engWExplained, setEngWExplained] = useState('')
  const [engWExplained, setEngWExplained] = useState([])
  
  const [plW, setplW] = useState([])

   
   
   const [engWToCheck, setEngWToCheck] = useState('')
  // const [engWToCheck, setEngWToCheck] = useState([])
  // const [data, setData] = useState('')
  //const [data, setData] = useState(1)
  const [data, setData] = useState([])

  const [ewordsCount, setEWordsCount] = useState(0)

  // const [listOfEngWords, setListOfEngWords] = useState([
  //   {
  //     id: 1,
  //     engword_explained: 'kind'
  //   },

  //   {
  //     id: 2,
  //     engword_explained: 'hardly'
  //   },

  //   {
  //     id: 3,
  //     engword_explained: 'least'
  //   },

  //   {
  //     id: 4,
  //     engword_explained: 'particular'
  //   },


  // ]);

    const [listOfEngWords, setListOfEngWords] = useState([]);
  // const [listOfEngWords, setListOfEngWords] = useState('');
  //const [listOfEngWords, setListOfEngWords] = useState();

  // const merged_arrays = listOfEngWords.concat(engWExplained);
  const merged_arrays = [...engWExplained, ...listOfEngWords];

  let ewordscount
  let datacount = 1



  useEffect(() => {
    // setData(data)

     // loadEWord();

      fetchEWords();
     getListOfEngWords(1);

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





    async function getListOfEngWords(fetchewords_data_count) {
      //  const getAddedEngWord = async() => {

          console.log("getAddedEngWord", fetchewords_data_count);

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
           //////const wordid = data;
           const wordid = 1;
           // const transaction = await contract.getEngWord(wordid)
           // const transaction = await contract.getEngWord(wordid)
           // getEngWordEngExplainedAndPronounciation
           // const transaction = await contract.getEngWordPlWord(wordid)
          //  const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
          
          // const transaction = await contract.getAddedEngWordEngExplainedAndPronounciation(wordid);
          const transaction = await contract.getListOfFiveWords(wordid);


       
           // console.log("transaction", transaction);
           // console.log("transaction", transaction.data);
          // setData(transaction)
           // console.log("transaction", transaction);
          
          
           ////// console.log("transaction_get_list_of_eng_words", transaction[0]); here
         
           ////setEnglishWord(transaction[0]);
           ////setEngWord("")
         
           // const engW = transaction[0];
          
           // sessionStorage.setItem('engw', transaction[0]);
          
            ///////////////// setEngW(transaction[0])
           ////////////////// console.log("engWlskdjfl", engW);

          //  console.log("transaction_get_list_of_eng_words", transaction[1]);
          console.log("transaction_get_list_of_eng_words", transaction);
           ////setEnglishWordPronounciation(transaction[1]);
           ////setEngWordPronounciation("")

            //  setListOfEngWords([...listOfEngWords, transaction[1]]);
             setListOfEngWords([...listOfEngWords, transaction[1]]);
            // setListOfEngWords([...listOfEngWords, transaction]);
            //const transaction1 = transaction[1];
           //setListOfEngWords(transaction[1]);



          // setListOfEngWords([...listOfEngWords, transaction]);

           ////console.log("transaction_get_added_eng_word", transaction[2]);
           ////setEnglishWordExplained(transaction[2]);
           ////setEngWordExplained("")


           ////// setEngWExplained(transaction[1])


           // sessionStorage.setItem('plw', transaction[1]);
           // // const plW = transaction[1];
           // setplW(transaction[1]);
           // console.log("plW", plW);

           // console.log("data", data);


           ////console.log("transaction", transaction[2]);


           return transaction;

          //// fetchEWords();


         //  fetchEngWord();
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
              getEWord(datacount);
       
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

     console.log("getEWordtransaction", transaction[1]);

    //  setEngWExplained(transaction[1])
    // setEngWExplained([...engWExplained, transaction[1]]);
    setEngWExplained([...engWExplained, transaction[1]]);


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


    /////////
    const listofengw = listOfEngWords.map( listofengwords => {
      <h1>{ listofengwords.engword_explained}</h1>
    })
    /////////

    // const handleEWord = ({engword_explained}) => {

    //     console.log("engword_explained", engword_explained);
    // }

    const handleEWord = (engword_explained) => {

      console.log("engword_explained", engword_explained);
  }



  return (
    <div className='learn'>

      

    <html>
    </html>

    {/* <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: '4passionDev'
    }}
    options={{
      height: '400'
    }}
    
    /> */}



        <h1>Learn</h1>

        <div className='engwtocheck'>

      <div>
        {/* { listofengw} */}

        {
          merged_arrays.map( (items) => (
            <button >{items.engword_explained}</button>

          ))
        }



        {
          listOfEngWords.map( (listofengwords) => ( 
            // <h7>{listofengwords.engword_explained}</h7>
            // <p>{listofengwords.engword_explained}</p>
            // <button>{listofengwords.engword_explained}</button>
            <button onClick={(e)=> handleEWord(listofengwords.engword_explained)}>{listofengwords.engword_explained}</button>
          ))
        }

      {/* {

listOfEngWords.map(
  listofengwords => {
    <h1>{listofengwords.engword_explained}</h1>
  }
)
                } */}
      </div>


      

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
  // listOfEngWords.map(
  //   listofengwords => {
  //     <h1>{listofengwords.engword_explained}</h1>
  //   }
  // )
}

export default Learn
