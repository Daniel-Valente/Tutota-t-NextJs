import Image from 'next/image';
import React from 'react'

export const Member = () => {
  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse mt-2">
      <div className="avatar">
        <div className="w-12">
          <Image
            src='/images/Imagen1.png'
            alt='avatar'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <Image
            src='/images/Imagen1.png'
            alt='avatar'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <Image
            src='/images/Imagen1.png'
            alt='avatar'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="w-12 bg-neutral text-neutral-content">
          <span>+99</span>
        </div>
      </div>
    </div>
  )
};
