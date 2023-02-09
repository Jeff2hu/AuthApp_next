import Image from "next/image";
import aaa from "../public/assets/google.svg"

export default function Button({ children ,text, style, buttonType="normal", image, callBack, type="button" }){

  let buttonStyle;
  switch(buttonType){
    case "normal":
      buttonStyle = "to-white via-slate-400 from-black hover:text-slate-600"
      break;
    case "google":
      buttonStyle = "to-sky-300 via-yellow-400 from-red-300 hover:text-red-500"
      break;
    case "github":
      buttonStyle = "to-purple-300 via-purple-500 from-purple-900"
      break;
  }

  return(
    <button 
      className={`bg-gradient-to-r ${buttonStyle} bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl py-2 px-10 
        transition-all duration-300 font-bold flex gap-3 hover:drop-shadow-lg ${style}`}
      onClick={callBack}
      type={type}
    >
      {children}
      {text}
      {image?(<Image src={image.src} alt={image} height={image.h} width={image.w} />):null}
    </button>
  )
}