
import TextButton from "@/components/TextButton";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-black-theme-black flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-black-theme-white text-5xl font-bold">
          Hi, I'm <span className="bg-gradient-to-r from-orange-300 via-rose-300 to-indigo-400 inline-block text-transparent bg-clip-text">Phunyisa</span>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <Image
            src="/images/profile.png"
            width={700}
            height={700}
            alt=""
          />
          <p className="text-2xl font-medium text-white opacity-65">I’m a computer science student at Kasetsart University with a passion for UI design and front-end development.</p>
        </div>
        <div>
          <div>let's get intouch</div>
          <div>
            <TextButton text="Download Resume"/>
            <TextButton text="DownloadCV"/>
          </div>
        </div>
      </div>
    </div>
  );
}
