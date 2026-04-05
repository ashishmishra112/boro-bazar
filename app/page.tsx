'user client'
import ContactForm from "./components/ContactForm"
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center border bg-linear-to-r from-blue-200 via-pink-50 to-blue-200  px-6 min-h-screen">
         <ContactForm/>
      </div>


    </>
  );
}
