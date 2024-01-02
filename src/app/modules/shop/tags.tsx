import Lable from '@/app/componenets/shop-label/lable';
import React from 'react';

const TagLink: React.FC = () => {
  return (
    <div className='container mt-12'>
        <Lable>Tags</Lable>
    <div className='tags flex flex-wrap '>

    <a
      href="#"
     className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
    >
        art,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
    
    >
        experiences,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
     
    >
      graphic,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
      
    >
      journal,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
     
    >
      lifestyle,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
      
    >
      philosophy,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
      
    >
      photo,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
      
    >
      travel,
    </a>
    <a
      href="#"
      className="tag-cloud-link tag-link-31 tag-link-position-1 text-md text-17 font-normal font text-gray-400 hover:text-black mr-1 mb-1 inline-block"
     
    >
      treval
    </a>
    </div>
    </div>
  );
};

export default TagLink;

