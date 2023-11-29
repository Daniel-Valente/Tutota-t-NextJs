import React from 'react';
import Image from 'next/image';

import { SendButton } from '../send-button';

export const NewComment = () => {
  return (
    <div className='flex mt-2 justify-between'>
    <div className="avatar">
        <div className="w-10 h-10 rounded-full ring">
            <Image
                src='/images/cucei-mobile.png'
                alt='avatar'
                width={500}
                height={500}
            />
        </div>
    </div>

    <input type="text" placeholder="Type here" className="input input-bordered ml-5 h-10 w-full mr-5" />
    <SendButton />
</div>
  );
};
