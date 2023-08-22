import play from '../assets/dictionary-web-app/dictionary-web-app/assets/images/icon-play.svg'
//import { Body2 } from './Body2'
// import { Body3 } from './Body3'
import { PropTypes } from 'prop-types'
import { Body2 } from './Body2'
import { Body3 } from './Body3'
import { useState, useEffect } from 'react'
import sound from '../assets/pop.mp3'
//import useWordAPI from './useWordApi'



export const Body1 = ({wordData}) => {

    const[value, setvalue] = useState(1)

    useEffect(() => {
        if(value % 2 === 0)
            playWord()
    },[value])

    function playWord() {
        const audio = new Audio(sound);
        audio.currentTime = 0;
        audio.play();
    }
  return (
    <>
        
        <div className="mt-8 flex justify-between">
            <div className="float-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">{wordData?.[0].word}</h1>
                <h2 className="float-left text-[#A445ED] text-xl md:text-3xl lg:text-3xl xl:text-4xl mt-1 lg:mt-4 xl:mt-5 md:mt-2">{wordData?.[0].phonetic}</h2>
            </div>

            <div>

                <img onClick={() => setvalue(value+1)} src={play} alt="Logo" width={48} height={48} className=' hover:fill-[#971ff3] md:w-[73px] xl:w-[90px] lg:w-[82px] md:mr-6 lg:mr-6 xl:mr-6 '/>
            </div>
            
        </div>
        <div className='mt-5 w-[96%] flex justify-between'>
            <h2 className='float-left text-xl md:text-xl lg:text-2xl xl:text-3xl xl:tracking-wider w-[13%] md:-ml-5 lg:-ml-4 xl:-ml-4 md:font-bold lg:font-bold xl:font-bold'>noun</h2>
            <hr className='text-xl w-[80%] mt-4 md:w-[90%] lg:w-[95%]'/>
        </div>
        <Body2 wordData={wordData}/>
        <Body3 wordData={wordData}/>

    </>
  )
  
}
    Body1.propTypes = {
    wordData: PropTypes.any
  }
