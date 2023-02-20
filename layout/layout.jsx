

export default function Layout({ children }){
  return(
    <div className="flex h-screen bg-blue-400">
      <div className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.cartoonImg}></div>
          <div className={style.cloud1}></div>
          <div className={style.cloud2}></div>
        </div>
        <div className={style.inputContainer}>
          {children}
        </div>
      </div>
    </div>
  )
}

const style = {
  container: "m-auto bg-slate-500 rounded-md w-3/5 h-5/6 grid lg:grid-cols-2",
  imageContainer: "bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md relative overflow-hidden hidden lg:block",
  inputContainer: "right flex flex-col justify-evenly bg-white",
  cartoonImg: "w-full h-full bg-[url('/../public/assets/img2.png')] absolute inset-0 bg-no-repeat bg-cover z-10 bg-[65%_60px]",
  cloud1: "w-[180px] h-[100px] bg-[url('/../public/assets/cloud_1.png')] absolute top-[65%] left-[10%] bg-no-repeat bg-contain z-20 translate-x-[290%] animate-cloud1",
  cloud2: "w-[180px] h-[100px] bg-[url('/../public/assets/cloud_2.png')] absolute top-[45%] right-0 bg-no-repeat bg-contain translate-x-[290%] animate-cloud2",
}