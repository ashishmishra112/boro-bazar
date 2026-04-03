import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="relative border bg-linear-to-r from-blue-200 via-pink-50 to-blue-200  px-6 lg:p-10 min-h-screen">
      <div className=" grid grid-cols-1 lg:grid-cols-2 pt-10 lg:p-10 place-items-center">
        <div className="border-none  lg:rounded-l-4xl text-center lg:text-left bg-white p-6 lg:p-10 lg:pr-55 lg:ml-58 flex flex-col gap-2 lg:gap-4 lg:h-140">
          <h2 className="font-montserrat text-2xl lg:text-4xl font-bold">Get in <span className="text-[#dd5471]">Touch</span> </h2>
          <span className="font-montserrat text-sm lg:text-base">Contact us by filling out the form below <br/> Thankyou</span>
          <form action="" className="font-montserrat flex flex-col gap-4 lg:gap-4">
            <input className="border border-gray-200 pl-6 p-2 w-80 lg:w-100" type="text" id="name" placeholder="Name*" required/>
            <input className="border border-gray-200 pl-6 p-2 w-80 lg:w-100" type="email" id="email" placeholder="Email"  required/>
            <input className="border border-gray-200 pl-6 p-2 w-80 lg:w-100" type="tel" id="ph" placeholder="Phone number*"  required/>
            
            {/* <input className="border border-gray-200 pl-6 w-100 text-black" type="text" id="option" placeholder="How did you find us?" required/> */}
            <select className="border border-gray-200 pl-6 p-2 w-80 lg:w-100 text-black" required >
            <option value="clue">How did you find us?</option>
            <option value="instagram">Twitter(X)</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            </select>
            <button type="submit" className=" border bg-[#dd5471] text-white p-2 w-80 lg:w-100">Send</button>
            <div className="font-montserrat flex gap-10 lg:gap-14 justify-center">
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs lg:text-base font-semibold">PHONE</span>
                <MdOutlineLocalPhone className="w-10 h-6 lg:w-20 lg:h-7"/>
                <p className="text-xs lg:text-base text-[#dd5471]">9129889006</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs lg:text-base font-semibold">FAX</span>
                <MdOutlineFax className="w-10 h-6 lg:w-20 lg:h-8"/>
                <p className="text-xs lg:text-base text-[#dd5471]">9129889006</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xs lg:text-base font-semibold">EMAIL</span>
                <MdOutlineEmail className="w-10 h-6 lg:w-20 lg:h-8"/>
                <p className="text-xs lg:text-base text-[#dd5471]">info@gmail.com</p>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:absolute lg:left-165 w-90 h-75 md:h-95 lg:h-120 lg:w-110 p-4 lg:p-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.2757374872476!2d77.1030103050649!3d28.43278779077166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f54f16ced07%3A0xb22fdbe424a0242b!2sSector%2054%20Chowk!5e0!3m2!1sen!2sin!4v1773394716577!5m2!1sen!2sin" className="w-full h-full border-none rounded-2xl lg:rounded-none" style={{ border: 0 }} loading="lazy"></iframe>
        </div> 
        <div className="hidden lg:block border-none lg:rounded-r-4xl bg-[#183a4a] p-6 px-34 lg:p-50 lg:h-140 lg:mr-20">

        </div>
      </div>
   </div>

   
   </> 
  );
}
