import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className="flex relative bg-amber-50 flex-col justify-center items-center min-h-[calc(100vh-170px)] ">
            <Hero></Hero>
           {/* <img className="absolute border-0 w-full  " src={wave} alt="" /> */}


           <div className="flex justify-end w-full">
            <img className="absolute border-0 w-full  " src={wave} alt="" />
           </div>
        </div>
    );
};

export default Home;