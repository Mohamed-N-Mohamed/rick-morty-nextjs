import React from "react";
import Image from "next/image";

const Characters = ({ characters }) => {
  return (
    <div className='max-w-3xl mx-auto py-4'>
      <div className='all-chars'>
        {characters.map(({ id, name, image }) => (
          <div className='character' key={id}>
            <div className='character-image'>
              {/* <Image src={image} width={500} height={500} /> */}
              <img src={image} alt='' />
            </div>
            <div className='character-name'>
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
