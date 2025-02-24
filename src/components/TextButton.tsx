export default function TextButton({text}:{text:string}){
    return (
        <button className="text-black-theme-white text-lg border-[1px] rounded-[100px]  pb-[10px] pt-[10px] pl-[20px] pr-[20px] hover:bg-black-theme-white hover:text-black-theme-black cursor-pointer transition ">{text}</button>
    )   

}