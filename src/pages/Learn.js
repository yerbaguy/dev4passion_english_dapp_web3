import React, { useState, useEffect } from 'react'

import {ethers} from "ethers"

import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'

import { Container, Form } from 'semantic-ui-react'

import { Timeline } from 'react-twitter-widgets'


// const ewordEngContract = "0x9EBD79915dA3aCa29139e61Fa46d5fE604576729"
// const ewordEngContract = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"


// const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function Learn() {

  const[query, setQuery] = useState('')
  const[wordid, setWordId] = useState(0)

  // const [data, setData] = useState('');
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  // const [engword, setEngword] = useState([{
  //   id: 1,
  //   engword_explained: "kind"
  // }]);
  const [engword, setEngword] = useState([]);

  // const mixed_arrays = data1.concat(engword);
  // mixed_arrays.sort();
  // mixed_arrays.reverse();

  // const [correctEngword_explained, setCorrectEngword_explained] = useState([
  //   {
  //     id: 1,
  //     engword_explained: "kind"
  //   }
  // ]);
  const [correctEngword_explained, setCorrectEngword_explained] = useState([]);

  const[randomWord, setRandomWord] = useState([]);
  // const mixed_arrays = data1.concat(correctEngword_explained);

  const mixed_arrays = [...data1, ...correctEngword_explained];


  // mixed_arrays.sort();
  // mixed_arrays.reverse();

  // useEffect(()=>{

  //   getEWords();
  // },[])

  useEffect(()=>{

   // getEngWords();
   //fetchEWords();
    fetchEWords1();
  //  mixed_arrays.sort();
  //  mixed_arrays.reverse();
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
        // const data = await contract.getEWords1(1)
        // const data = await contract.getEWords1(0)

        
        const data = await contract.getEWords1(0)
        console.log(data);

        console.log('datA01: ', data[0][1])
        console.log('datA02: ', data[0][2])
        console.log('datA03: ', data[0][3])
        console.log('data11: ', data[1][1])
        console.log('data12: ', data[1][2])

        //setData(data);
        // setData1(data.engword_explained);
        //  setData1([...data, data[1]])
        // setData1([...data, data[0]])
        // setData1([...data, data])


        setData1([...data, data])
        //setData1(data)
        // console.log(data);
        // console.log("fetchEWords1",data);
        console.log("fetchEWords1",data[2][2]);
        

        const data_count = data.length;
        localStorage.setItem("datacount", JSON.stringify(data_count))

        // getRandomInt(data_count);
         const get_rand_word = getRandomInt(data_count);
        // getRandomInt();
            console.log("get_rand_word", get_rand_word);

            localStorage.setItem("getrandomword", JSON.stringify(get_rand_word))
            console.log("getEWords1_get_rand_word", get_rand_word);
               // localStorage.setItem("datacount", data)
             ////  const getrandomword = localStorage.getItem("getrandomword");
             ////  console.log("getrandomword", getrandomword);
                getEWord(get_rand_word);
              //// getEWord();


          //  setRandomWord([...randomWord, get_rand_word]);
          //  console.log(randomWord);

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
  


async function requestAccount() {
  // await window.ethereum.request({ method: "eth_requestAccounts" })
 const windw_eth =  await window.ethereum.request({ method: "eth_requestAccounts" })
 console.log("window_eth", windw_eth);
}

 const getEWord = async(data) => {
//  const getEWord = async() => {

  ////const dataa = localStorage.getItem("dataa");
  ////console.log("getEWord_dataa", dataa);

  /////////
  if (!typeof window.ethereum !== 'undefined') {
     await requestAccount()
     const provider = new ethers.providers.Web3Provider(window.ethereum)
     const signer = provider.getSigner()
  
     const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)

     const wordid = data;

     const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
 
  
    //  setEngword([...engword, transaction[0]]);
    // setEngword(transaction[0]);
    //  console.log("transaction", transaction[0]);
    setEngword(transaction[0]);
     console.log("transaction", transaction[0]);
  
     // setEngW(transaction[0])
     // console.log("engW", engW);

     setCorrectEngword_explained([...correctEngword_explained, transaction[1]]);
     console.log("getEWordtransaction", transaction[1]);

  
     // setEngWExplained([...engWExplained, transaction[1]]);


  

     console.log("transaction", transaction[2]);


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

        //setData(data);
        // setData([...data, data])
        
        // setData(data)
         setData1(data)
        console.log(data);

        console.log('datA01: ', data[0][1])
        console.log('datA02: ', data[0][2])
        console.log('datA03: ', data[0][3])
        console.log('data11: ', data[1][1])
        console.log('data12: ', data[1][2])
        

        const data_count = data.length;
         

           console.log("data_count", data_count);
           const get_rand_word = getRandomInt(data_count);
           console.log("get_rand_word", get_rand_word);


           ////////////////////

          //  const data_count = data.length;
          //  localStorage.setItem("datacount", JSON.stringify(data_count))
   
          //  // getRandomInt(data_count);
          //   const get_rand_word = getRandomInt(data_count);
          //  // getRandomInt();
          //      console.log("get_rand_word", get_rand_word);
   
          //      localStorage.setItem("getrandomword", JSON.stringify(get_rand_word))
          //      console.log("getEWords1_get_rand_word", get_rand_word);
          //         // localStorage.setItem("datacount", data)
          //       ////  const getrandomword = localStorage.getItem("getrandomword");
          //       ////  console.log("getrandomword", getrandomword);
          //          getEWord(get_rand_word);



           ///////////////////








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

 const getRandomInt = ( random_digit) => {
 // const getRandomInt = () => {
 // let random_digit = 1;
  // const datacount = localStorage.getItem("datacount");
  //   console.log("random_digit", random_digit);
  //   console.log("random_digit_datacount", datacount);

   // random_digit = datacount;

    // const min = Math.ceil(1);
    const min = Math.ceil(0);
    // max = Math.floor(data.length);
  const max = Math.floor(random_digit);

    // return Math.floor(Math.random() * (max - min) + min);
    const dataa =  Math.floor(Math.random() * (max - min) + min);
    console.log("randommmmmm_int", dataa)
   //// localStorage.setItem("dataa", JSON.stringify(dataa))
   ////  const get_rand_word = localStorage.getItem("dataa");
   //// console.log("get_rand_word", get_rand_word);

    
    return dataa;
   // return random_digit;

}




  const handleSearch = (e) => {

    setQuery(e.target.value)
    setWordId(0);
    console.log("query", query);

  }

  const handleEngWord = (engword_explained) => {
    let getrandomword = localStorage.getItem("getrandomword");
        console.log("handleEngWord_engword_explained", engword_explained[3]);
        let engwordexplained = engword_explained[3];
        console.log("engwordexplained", engwordexplained);
       
        // setCorrectEngword_explained([...correctEngword_explained,engword_explained[0]]);
        // setCorrectEngword_explained([...correctEngword_explained,engword_explained[getrandomword][3]]);
        // setCorrectEngword_explained([...correctEngword_explained,engword_explained[3]]);
         console.log(engword_explained[3]===engwordexplained);
        // setCorrectEngword_explained([...correctEngword_explained,engword_explained[3]]);
        setCorrectEngword_explained([...correctEngword_explained,engwordexplained]);
        //setCorrectEngword_explained(engword_explained[3]);

        // console.log("data1----", data1[3][3]);
        console.log("data1----", data1[getrandomword][3]);

        //setCorrectEngword_explained(engword_explained[0]);
        // console.log("handleEngWord_correctEngword_explaned", correctEngword_explained[0]);
       // console.log("handleEngWord_correctEngword_explaned", engword_explained[getrandomword][3]);
    // let getrandomword = localStorage.getItem("getrandomword");
   // console.log("handleEngWord_getrandomword", getrandomword);
     //  console.log("correctEngword_explained", correctEngword_explained[0]);////////
  

    // if ( engword_explained === correctEngword_explained[0]) {
    //    console.log("OK")
    //    fetchEWords1();
    // } else {
    //   console.log("NO");
    // }

    // try engword_explained[3] == correctEngword_explained

  //   if ( engword_explained[3] == correctEngword_explained[0]) {
  //     console.log("OK")
  //     fetchEWords1();
  //  } else {
  //    console.log("NO");
  //  }
  // engword_explained[3]

//   if ( engword_explained[3] == correctEngword_explained) {
//     console.log("OK")
//     fetchEWords1();
//  } else {
//    console.log("NO");
//  }
//data1[getrandomword][3]
// if ( engword_explained[3] === engwordexplained) {
//   console.log("OK")
//   fetchEWords1();
// } else {
//  console.log("NO");
// }

if ( engword_explained[3] === data1[getrandomword][3]) {
  console.log("OK")
  fetchEWords1();
} else {
 console.log("NO");
}





   // console.log(engword_explained === correctEngword_explained);
    // const correctEngword_explained = correctEngword_explained[0];
  ///////  console.log("engword_explained",engword_explained);
    // const engword = engword_explained[getrandomword][3];
  
  
    // setCorrectEngword_explained(data1[getrandomword][getrandomword])
    // console.log("correct", correctEngword_explained);
    // console.log(data1[getrandomword][getrandomword]);
  
  
  
  
    // const engwordd = engword[getrandomword][3];
    // console.log("handleEngWord_engword", engwordd);
    // console.log("engword", engwordd);

    // console.log("correct", correctEngword_explained[0].engword_explained);
    // const correct = correctEngword_explained[0].engword_explained;
    // console.log("correct", correctEngword_explained[0]);
    // const correct = correctEngword_explained[0];
   
   ////// console.log("correct", correctEngword_explained);
    ////////////// const correct = correctEngword_explained;
   // const correct = data1[getrandomword][getrandomword];




   // const engwordexplained = engword_explained;
    
    //  console.log(engword === correct);
   // console.log(engword.localeCompare(correct));
        
   /////////////
  //  const engword = ""
  //        const correct = ""

  //     if ( engword == correct) {
  //       console.log("OK")
  //       fetchEWords1();



  //       // setEngword("");
        
  //       // setData1([...data1, ""]);
  //       // setCorrectEngword_explained([...setCorrectEngword_explained, ""]);
        
  //     } else {
  //       console.log("NO");
  //     }
///////////////


    // if (correctEngword_explained[0] === engword_explained) {
    //   console.log("OK")
    // } else {
    //   console.log("No");
    // }
   
    // if (correctEngword_explained === engword_explained) {
    //   console.log(correctEngword_explained===engword_explained);
    // } else {
    //   console.log(correctEngword_explained===engword_explained);
    // }

  }

  return (


   <div>
    <strong>{engword}</strong>


    {/* {
      data1.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ) )
    } */}


    
    {/* { //////ok
      data.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ) )
    }

    {
      data1.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ))

    } ////// */}
    
    {
      data1.map( (item) => (
        // <h4>{item.engword_explained}</h4>
        // <p onClick={()=> handleEngWord(item.engword_explained)}>{item.engword_explained}</p>
        <p onClick={()=> handleEngWord(item)}>{item.engword_explained}</p>

      ))

    } 



    {/* {
      mixed_arrays.map( (item) => (
        <h4>{item.engword_explained}</h4>
      ))
    } */}


   {/* {
      mixed_arrays.map( (item) => (
        // <h4>{item.engword_explained}</h4>
        <button onClick={()=> handleEngWord(item.engword_explained)}>{item.engword_explained}</button>
      ))
    } */}
   </div>

   





    // <>
    // <input type="text" onChange={handleSearch}></input>
    // </>
  )
}

export default Learn
