

export default function NeonText({ text }: { text: string }) {
    return (
        <p className="text-2xl text-black-theme-white font-semibold justify-center" style={{ textShadow: '0px -2px 5.8px #FFA981, 0px 4px 7px #727FF1' }}
        >{text}</p>
    );
}