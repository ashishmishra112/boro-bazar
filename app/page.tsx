
'user client'

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center border bg-linear-to-r from-blue-200 via-pink-50 to-blue-200  px-6 min-h-screen">
          <div className="lg:rounded-4xl rounded-2xl text-center lg:text-left bg-white lg:p-10 flex flex-col gap-2 lg:gap-4 py-6 px-4 ">
            <h2 className="font-montserrat text-2xl lg:text-4xl font-bold">Get in <span className="text-[#dd5471]">Touch</span> </h2>
            <span className="font-montserrat text-sm lg:text-base">Contact us by filling out the form below Thankyou</span>
            <form action="" className="font-montserrat flex flex-col gap-4 lg:gap-4">
             <div className="flex flex-col gap-1"> <label htmlFor="name">Full Name</label>
              <input className="border border-gray-200 pl-6 p-2 w-80 lg:w-100" id="name" placeholder="John Doe" required /></div>
               <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input className="border border-gray-200 pl-6 p-2 w-80 lg:w-100" id="email" placeholder="example@gmail.com" required /></div>
                <div className="flex flex-col gap-1">
              <label htmlFor="phone">Mobile Number</label>
              <input className="border border-gray-200 pl-6 p-2 w-80 lg:w-100"  id="phone" placeholder="+91-xxxxx-xxxxx" required /></div>

              {/* <select className="border border-gray-200 pl-6 p-2 w-80 lg:w-100 text-black" required >
                <option value="clue">How did you find us?</option>
                <option value="instagram">Twitter(X)</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
              </select> */}
               <div className="flex flex-col gap-1"><label>Message</label>  <textarea className="border border-gray-200 pl-6 p-2 w-80 lg:w-100" placeholder="Enter your Message"></textarea></div>
           
              <button type="submit" className=" border bg-[#dd5471] text-white p-2 w-80 lg:w-100 cursor-pointer">Send</button>
            </form>
            <div className="border border-slate-100 bg-slate-100 py-2 px-4 rounded-md">
              <div className="text-red-600">Error message</div>
            </div>
          </div>

      </div>


    </>
  );
}
