
import Image from 'next/image';
import index_1 from '@/app/images/index_1.png'
import sing from '@/app/images/sing.png'
import art from '@/app/images/art.png' 
const homepage = () => {
  return (
    <>
        <div className="container home">
    <div className="slide_left first_heading index_1"><h1> <span className="cstm_yellow">WE</span><span className="span_text text-right"> ORGANIZE THE</span> </h1></div>
    <div className="slide_left index_2"><h1><span className="cstm_yellow">CONNECTION </span> </h1></div>
    <div className="slide_right text-right cstm_width index_3"><h1><span className="span_text d-flex align-items-center">BETWEEN  <Image src={sing} alt="people"/>MUSIC</span> </h1></div>
    <div className="slide_right index_6 "><h1 className="flex justify-evenly"><span className="cstm_yellow">ARTIST</span> <div className="culture_text"><span className="span_text span_text_culture"> CULTURE</span> </div> </h1></div>
    <div className="slide_right text-right cstm_width index_7"><h1><span className="span_text d-flex align-items-center">ART <Image src={art} alt="people"/> & COLLECTIONS</span> </h1></div> 
    </div>
    </>
  )
}

export default homepage
