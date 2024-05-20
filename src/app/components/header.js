import Image from "next/image";
import logo from '@/app/images/logo.png'; 

const header = () => {
  return ( 
    <div>
      <div className="logo"><Image src={logo} alt="ed" /></div>
    </div>
  )
}

export default header
