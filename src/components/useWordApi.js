import { useState } from "react";
import axios from "axios";

const useWordAPI = () => {
    // Presenting data
   const [wordData, setWordData] = useState(null);


   // Checking loading stage
   const [isLoading, setIsLoading] = useState(false);
   // Checking error stage
   const [isError, setIsError] = useState(null);

   
   const fetchSearchedWordData = async (word) => {
       try {
           setIsLoading(true);
           const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
           const fetchdata = res.data;
           setWordData(fetchdata);
           setIsLoading(false);
       } catch (error) {
        setIsError('No Results', error)
        setIsLoading(false)
        console.log('No Results', error );
 
       }
   }

   const fetchSound = async () => {
    try {
        setIsLoading(true);
        const res = await axios.get(`https://api.dictionaryapi.dev/media/pronunciations/en/pen.mp3`)
        const fetchdata = res.data;
        setWordData(fetchdata);
        setIsLoading(false);
    } catch (error) {
     setIsError('No Results', error)
     setIsLoading(false)
     console.log('No Results', error );

    }
}



   
   return {isLoading, wordData,fetchSearchedWordData, isError, fetchSound}
}

export default useWordAPI;