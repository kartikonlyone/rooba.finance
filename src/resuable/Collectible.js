import React from 'react'
import collectible from '@/app/images/collectible.png';
import Image from 'next/image';

const Collectible = () => {
  return ( 
    <>
      <div className='collectible_single'>
                        <div className='collectible_head'>
                          <p>2024</p>
                          <p>By Pablo</p>
                        </div>
                        <h6>Collectible Name </h6>
                        <Image src={collectible} alt="Artist 1"/>
                      </div>
    </>
  )
}

export default Collectible
