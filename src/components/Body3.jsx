import { PropTypes } from 'prop-types'

export const Body3 = ({wordData}) => {
  return (
    <>
    <p className="text-white">.</p>
       <div className='mt-16 w-[96%] flex justify-between'>
            <h2 className='float-left text-xl md:text-xl lg:text-2xl xl:text-3xl xl:tracking-wider w-[13%] md:-ml-5 lg:-ml-4 xl:-ml-4 md:font-bold lg:font-bold xl:font-bold'>{wordData?.[0].meanings[1].partOfSpeech}</h2>
            <hr className='text-xl w-[80%] mt-4 md:w-[90%] lg:w-[90%]'/>
        </div>
        <div className="mt-8">
            <h1 className="float-left text-xl lg:text-2xl xl:text-3xl text-[#838383] font-mono">Meaning</h1>
        </div>
        <div className="float-left text-left mt-4 text-lg ">
            <ul className="list-disc list-inside marker:text-[#A445ED] md:-ml-14 lg:-ml-14 xl:-ml-20 md:mt-6 lg:mt-10 xl:mt-10 xl:text-2xl lg:text-xl">
                <li>{wordData?.[0].meanings[1].definitions[0].definition}</li>
                <li className="mt-4 list-none w-[94%] mx-auto text-[#838383] md:w-full lg:w-full md:ml-5 lg:ml-5 ">“{wordData?.[0].meanings[1].definitions[0].example}”</li>
                <li className='mt-8'>{wordData?.[0].meanings[1].definitions[1].definition}</li>
                <li className="mt-4 list-none w-[94%] mx-auto text-[#838383] md:w-full lg:w-full md:ml-5 lg:ml-5 ">“{wordData?.[0].meanings[1].definitions[1].example}”</li>
            </ul>
        </div>
        <br/>
        <hr className="w-[100%] mt-40 md:mt-36 lg:mt-36"/>
        <div className="mt-7 float-left md:flex md:gap-6 lg:flex lg:gap-6 lg:text-xl xl:text-2xl">
            <h1 className="text-[#838383] text-lg float-left lg:text-xl xl:text-2xl">Source</h1>
            <h1 className="text-lg lg:text-xl xl:text-2xl">https://en.wiktionary.org/wiki/keyboard</h1>
            <br/><br/><br/>
        </div>
    </>
  )
}
Body3.propTypes = {
    wordData: PropTypes.any
}