
import Image from "next/image";

export default function Page() {
  return (
    <div className="">

      <div>
        <div>
          Hi, I'm <span>Phunyisa</span>
        </div>
        <div className="flex flex-col ">
          <Image
            src="/images/profile.png"
            width={500}
            height={500}
            alt=""
          />
          <p>I’m a computer science student at Kasetsart University with a passion for UI design and front-end development.</p>
        </div>
        <div>
          <div>let's get intouch</div>
          <div>
            <button> Download Resume </button>
            <button> Download CV </button>
          </div>
        </div>
      </div>
    </div>
  );
}
