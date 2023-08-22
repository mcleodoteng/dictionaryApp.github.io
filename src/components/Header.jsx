import logo from '../assets/dictionary-web-app/dictionary-web-app/assets/images/logo.svg'
import moon from '../assets/dictionary-web-app/dictionary-web-app/assets/images/icon-moon.svg'
import Toggle from './Toggle'


export const Header = () => {

    
  return (
    <>
        <div className='flex justify-between'>
            <img src={logo} alt="Logo" width={30} height={30} className='xl:w-[45px] lg:w-[40px] md:w-[35px]'/>
            <div className='flex gap-3 md:gap-5 lg:gap-7 md:mr-6 lg:mr-6 xl:mr-8'>
                <select className='text-[#A445ED] md:text-xl lg:text-2xl xl:text-3xl xl:tracking-widest'>
                    <option> Sans Serif  </option>
                    <option>Serif</option>
                    <option>Mono</option>
                </select>
                <p className='text-xl md:text-2xl lg:text-3xl lg:-mt-0.5 xl:text-4xl xl:-mt-0.5'>|</p>

                    <Toggle/>
                
                <img src={moon} alt="Logo" width={24} height={24} className='xl:w-[32px] lg:w-[30px] lg:h-[30px] md:w-[26px] md:h-[26px] xl:h-[32px] mr-3 -ml-5 ' />

            </div>
            
        </div>
    </>
    
  )
}
