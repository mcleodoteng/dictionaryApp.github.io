import {CiSearch} from 'react-icons/ci'
import { useState } from 'react';
import useWordAPI from './useWordApi';
import { Body1 } from './Body1';
import LoadingPage from './LoadingPage'
import ErrorPage from './ErrorPage';


export const Search = () => {
  
  // {wordInfo, setWords}
  const{isLoading, wordData,fetchSearchedWordData, isError} = useWordAPI()
  const [wordInfo, setWords] = useState('')
  const Handlechange =(e) => {
    setWords(e.target.value);
    console.log(wordInfo)
  }
  const submitHandle = (e) => {
    e.preventDefault();
    if(wordInfo != '') {
      console.log(wordInfo);
      fetchSearchedWordData(wordInfo);
      setWords('');
      
    }else{
      alert('Plear enter word');

    }
  }
  console.log(wordData)

  

  return (
    <>
        <div className='flex justify-between bg-[#dfdfdf] mt-7 w-[98%]  rounded-[20px] px-5 py-2'>
          <form className='flex justify-between w-[98%]' onSubmit={submitHandle}>
            <input id='write' type="text" placeholder="Search for any word..." value={wordInfo}  onChange={Handlechange} className= "bg-[#dfdfdf] outline-none h-10 text-sm md:text-sm lg:text-sm lg:h-11 xl:text-lg xl:h-12 text-black"/>
            <button onClick={submitHandle}><CiSearch className='text-2xl mt-2 font-bold text-[#a42c8c]'/></button>
            {/* <img src={search} alt="Logo" width={24} height={24} className='xl:w-[32px] lg:w-[30px] md:w-[27px]' /> */}
          </form>
            
        </div>
        {isLoading && <LoadingPage/>}
        {
          wordData && <Body1 wordData= {wordData}/>
        }
        {isError && <ErrorPage/>}

        
    </>
    
  )

}
