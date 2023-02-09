export default function Input({ id, type="text", label=false, style, onChange, value }){
  return(
    <>
      {label?(<label htmlFor={id} className="mr-2 min-w-[80px]">{id+":"} </label>):null}
      <input 
        id={id}
        type={type}  
        placeholder={id}
        value={value}
        onChange={onChange}
        className={`w-full p-2 px-5 border leading-loose hover:border-slate-700 transition rounded-xl placeholder:text-sm ${style}`}
      />
    </>
  )
}