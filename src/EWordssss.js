import React, { useState, useEffect } from 'react'
import {ethers} from "ethers"

// import Eword from './artifacts/contracts/Eword.sol/Eword.json'
// import EwordContract from './utils/EWordContract.json'
////import EWordContract from './utils/EWordContract.json'
import EWordEngContract from './artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'

import { Container, Form } from 'semantic-ui-react'

//import { create as ipfsHttpClient } from 'ipfs-http-client';

//////import { Network, Alchemy } from 'alchemy-sdk';


//import { loadEWord } from './interact';


//alchemy

// const settings = {
//     apiKey: "gDpJAQB45zHfsl9wQW3acVBU_dUOycJX",
//     network: Network.MATIC_MAINNET,
// };

// const alchemy = new Alchemy(settings);


//alchemy

// const projectId = "2GXCN4RVu5oOwOwAw77zytYHevQ";
// // const projectSecret = "73218477da4f55465286ea74021256f8"
// const projectSecret = "e1c92e31182812e4b7a923ab54f586df"
// const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;

// const client = ipfsHttpClient({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   headers: {
//     authorization: auth,
//   },
// });



// 0x58Fc0f0421203218EA9Cb55C743Dd2A82f6218C5
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// const ewordAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"//
// 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
// const ewordAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3" ////
///////const ewordAddress = "0x047F65031c8aBf370FDBfEf667B0b1fd702F09Ef"
//const ewordAddress = "0x58Fc0f0421203218EA9Cb55C743Dd2A82f6218C5"

// const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const ewordEngContract = "0x9EBD79915dA3aCa29139e61Fa46d5fE604576729"



function EWordssss() {

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

    const engw = {

        data: setData
    };

    // useEffect(() => {
    //     getRandomInt();
    // },[data])

    // useEffect({

    // },[data])

    // useEffect(() => {

    //     fetchEngWord()

    // },[data], [fetchEngWord])

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



    // async function loadEWord() {
       
    //   const eword = await loadEWord();
    //   console.log(eword);
    // }

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

    // async function fetchEngWord({data_random}) {

    //     const data = data_random;

    //     console.log("data_", data);
    // }



    // const fetchEngWord = ({data_random}) => {

    //     const data = data_random;

    //      console.log("data_", data);
    // }

    // const fetchEngWord = ({data_random}) => {

    //     console.log("data_random", data_random);

    //    // setData(2);
    //     console.log("fetchWord", data);
    // }






    // function fetchEngWord() {
    //    // console.log("data_random", data_random);

    //    // setData(2);
    //     console.log("fetchWord", data);
    // }










    //  const submitEWord = () => {
        // async function submitEWord() {
//    submitEWord = async ()  => {


    // async function saveEWordToIpfs() {
    //     /* save post metadata to ipfs */
    //     try {
    //       console.log("ipfs", eword.engword)
    //       console.log("ipfs", eword.plword)
    //       const added = await client.add(JSON.stringify(eword))
    //       console.log("addedd", added.path)
    //       console.log("addedd", added.path)
    //       return added.path
    //     } catch (err) {
    //       console.log('error: ', err)
    //     }
    //   }



     // const handleSubmitEngWord = async (e) => {

    //    const handleEngWord = () => {
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






                getEWord(dataa);
              
             // getEWord(datacount);


           // fetchEWords()
          } else {
            console.log("No");
          }



       }


        const handleSubmitEngWord = (e) => {
        e.preventDefault();

      //  getRandomInt();
        console.log("engW-----", engW);

       const engw =  sessionStorage.getItem('engw');
       console.log("s-engw", engw);

        // console.log("handleSubmitEngWord_engW", engW);
        // console.log("handleSubmitEngWord_plW", plW);
        // console.log(engWToCheck);
       // const setengtocheck = console.log(e.target.value)
        const setengtocheck = e.target.value;
      console.log("setengtocheck", setengtocheck);
        // setEngWToCheck(setengtocheck)
       // setEngWToCheck(e.target.value)

       // console.log("setengtocheck-engWToCheck", engWToCheck);

        if (setengtocheck == engw) {
            console.log("Ok");
        } else {
            console.log("No");
        }

        // if (engWToCheck == engW ) {
        //     console.log("OK");
        // } else {
        //     console.log("No");
        // }



    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(engWord)
        console.log(engWordExplained)
        console.log(engWordPronounciation)
        // console.log(plWord)







        

        // const eword = {
        //     engword: engWord,
        //     plword: plWord
        // };

        const eword = {
          engword: engWord,
          engword_explained: engWordExplained,
          engword_pronounciation: engWordPronounciation
      };



        //  try {
        //     console.log("ipfs", eword.engword)
        //     console.log("ipfs", eword.plword)
        //     const added = await client.add(JSON.stringify(eword))
        //     console.log("addedd", added.path)
        //     console.log("addedd", added.path)
        //     console.log("ipfs", added.path);
        //   } catch (err) {
        //     console.log('error: ', err)
        //   }
        // }












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
            const transaction = await contract.addEWord(eword.engword, eword.engword_explained, eword.engword_pronounciation)

        
            // console.log("transaction", transaction);
            console.log("transaction", transaction.data);

            fetchEWords();
            fetchEngWord();
        }
        // ///////////





        // try {

        //     if (!typeof window.ethereum !== 'undefined') {
        //         await requestAccount()
        //         const provider = new ethers.providers.Web3Provider(window.ethereum)
        //         const signer = provider.getSigner()
        //         const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
        //         const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
            
        //         console.log("transaction", transaction);
        //     }
    
            
        // } catch (error) {
            
        // }


        // try {
            
        //     const { ethereum } = window

        //     if ( ethereum ) {
        //         const provider = new ethers.providers.Web3Provider(ethereum)
        //         const signer = provider.getSigner()
        //         const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)

        //         const eword = await contract.createEWord(eword.engWord, eword.plWord)

        //         console.log("eword", eword);
    


        //     } else {

        //     }

        // } catch (error) {
            
        // }


        const { ethereum } = window;
    }

    // function getRandomInt(min, max) {
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

      const fetchEngWord = ( data ) => {

       
       // engw.setData(2);

       // setData(2);

        console.log("data__", data);

        // const getengword = getEWord();
        const getengword = getEWord(data);

        console.log("getEWord", getengword);
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






    
    //    const data_random = getRandomInt();


    //  console.log("data-random", data_random);



   

    return (
    

        <dev>
            
            <form onSubmit={handleSubmit}>
                {plW}

                             {/* <input onChange = { (e) => handle(e)} id="engword" value = {eword.engword} placeholder='engword' type="text"/>
                <input onChange = { (e) => handle(e)} id="plword" value = {eword.plword} placeholder='plword' type="text" /> */}
         
         
         
                 {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='plword' type="text" />
                <input value = {plW} type="text" /> */}

                {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='engword_explained' type="text" />
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='engword_pronouciation' type="text" /> */}

                <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword'  type="text"/>
                <input onChange = { (e) => setEngWordExplained(e.target.value)} id="engword_explaned" value = {engWordExplained} placeholder='engword_explained' type="text" />
                <input onChange = { (e) => setEngWordPronounciation(e.target.value)} id="engword_pronounciation" value = {engWordPronounciation} placeholder='engword_pronouciation' type="text" />


                <input value = {plW} type="text" />


                {/* <button onClick={submitEWord()}>Submit</button> */}
                {/* <button onClick={submitEWord}>Submit</button> */}
                <button>Submit</button>

                {plW}



            </form>

            {engW}
            <p></p>
            {engWExplained}

            {/* <form onSubmit={handleSubmitEngWord}> */}
         
            {/* <form>
                {engW}
                {plW}

                <input onChange = { handleEngWord } id="engWToCheck" value = {engWToCheck} placeholder='engWToCheck' type="text" />

                <button>Submit</button>

                {plW}

            </form> */}





<div className='engwtocheck'>
      lkajsdlkfajsssssss

            <form >
                {plW}
                { sessionStorage.getItem('plw') }

                 {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='plword' type="text" /> */}

                {/* <input onChange = { (e) => setEngWToCheck(e.target.value)} id="engWToCheck" value = {engWToCheck} placeholder='engWToCheck' type="text"/> */}
                <input onChange = { handleEngWord } id="engWToCheck" value = {engWToCheck} placeholder='engWToCheck' style={{ width: "500px"}}type="text"/>



                {/* <button>Submit</button> */}

                {plW}



            </form>
</div>

 
        </dev>
        
    );
}

export default EWordssss;