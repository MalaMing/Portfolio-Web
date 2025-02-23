const Links = [
    { text: "Home" },
    { text: "About" },
    { text: "Projects" },
    { text: "Contact" }
  ];
  
  export default function Navbar() {
    return (
      <nav className=" pr-[93px] pl-[93px] pb-[16px] pt-[16px] bg-black-theme-hoverWhereBlack shadow-md z-10 relative">
        <ul className="flex space-x-[20px] justify-end">
          {Links.map((link, index) => (
            <li
              key={index}
              className="text-black-theme-white hover:text-black-theme-hoverWhite transition"  
            >
              {link.text}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  