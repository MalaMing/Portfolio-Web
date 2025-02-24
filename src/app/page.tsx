
import NeonText from "@/components/NeonText";
import TextButton from "@/components/TextButton";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-black-theme-black flex flex-col items-center justify-center">
      
      <div className="flex flex-col justify-center items-center mt-[110px] mb-[110px] ml-[390px] mr-[390px] ">
        <div className="text-black-theme-white text-5xl font-bold ">
          Hi, I'm <span className="bg-gradient-to-r from-orange-300 via-rose-300 to-indigo-400 inline-block text-transparent bg-clip-text">Phunyisa</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-[80px]">
          <Image
            src="/images/profile.png"
            width={700}
            height={700}
            alt=""
          />
          <p className="text-2xl font-medium text-white opacity-65 mt-[5px] justify-center text-center">I’m a computer science student at Kasetsart University with a passion for UI design and front-end development.</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-[55px]">
          <NeonText text="let's get intouch"/>
          <div className="flex flex-row justify-center gap-[20px] mt-[40px]"> 
            <TextButton text="Download Resume"/>
            <TextButton text="DownloadCV"/>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}
