import { PropTypes } from 'prop-types'
export const Body2 = ({wordData}) => {
  return (
    <>
        <div className="mt-8">
            <h1 className="float-left text-xl lg:text-xl xl:text-2xl text-[#838383] font-mono">Meaning</h1>
        </div>
        <br/> 
        <div className="float-left text-left mt-4 text-sm">
            <ul className="list-disc list-inside marker:text-[#A445ED]
             md:ml-12 lg:ml-14 xl:ml-14 md:w-[79%] lg:w-[80%] xl:w-[80%] md:list-outside md:text-sm lg:text-lg xl:text-xl">
                
                {/* <li>{wordData?.meaning.definition.definitions[0]}</li> */}
                <li className="mt-5">{wordData?.[0].meanings[0].definitions[0].definition}</li>
                <li className="mt-5">{wordData?.[0].meanings[0].definitions[1].definition}</li>
                <li className="mt-5">{wordData?.[0].meanings[0].definitions[2].definition}</li>
                <li className="mt-5">{wordData?.[0].meanings[0].definitions[3].definition}</li>
                <li className="mt-5">{wordData?.[0].meanings[0].definitions[4].definition}</li>
                <li className="mt-5">{wordData?.[0].meanings[0].definitions[5].definition}</li>
                
                
            </ul>
        </div>
        <div className="float-left mt-8 text-xl flex gap-10 xl:text-2xl">
            <h1 >Synonyms</h1>
            <h1 className="text-[#A445ED]">{wordData?.[0].meanings[0].synonyms[0]}</h1>
            <h1 className="text-[#A445ED]">{wordData?.[0].meanings[1].synonyms[0]}</h1>

        </div>
       {/* {wordData.map((wordData) => {})} */}
        
    </>
  )
}
Body2.propTypes = {
    wordData: PropTypes.any
  }