import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Homepage from '@/app/components/homepage'
import Events from '@/app/components/events'

export default function Home() {
  return ( 
     <> 
     <Homepage/>
     <Events/>
     </>
  );
}
