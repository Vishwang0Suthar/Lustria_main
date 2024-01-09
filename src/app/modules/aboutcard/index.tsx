import React from 'react';
import Image from 'next/image';
import Aboutcard1 from '../../modules/aboutcard1/index';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import pic1 from '../../../../public/about_image/vishwang.jpg';
import pic2 from '../../../../public/about_image/aryan.jpg';
import pic3 from '../../../../public/about_image/shaurya.jpg';
import pic4 from '../../../../public/about_image/parth.jpg';
import pic5 from '../../../../public/about_image/priyansh.jpg';
import pic6 from '../../../../public/about_image/vasu.jpg';
import pic7 from '../../../../public/about_image/arya.jpg';


const About = () => {
  const members = [
    { name: 'Vishwang Suthar', photo: pic1, instagram: 'vishwang._.suthar', github: 'Vishwang0suthar ', linkedin: 'vishwang-suthar-062b39233/' },
    { name: 'Rathod Aryan', photo: pic2, instagram: 'ar.yan21_', github: 'Aryanrathod21', linkedin: 'aryan-rathod-a8140b233/' },
    { name: 'Shaurya Joshi', photo: pic3, instagram: 'shaurya_7134', github: 'shauryajoshi13052004', linkedin: 'shaurya-joshi-540687264/' },
    { name: 'Labkamana Parth', photo: pic4, instagram: 'parth_8832', github: 'patelparth112', linkedin: 'labkamana-parth-a93a452a3/' },
    { name: 'Chaudhary Priyansh', photo: pic5, instagram: 'priyansh_590', github: 'priyansh0355', linkedin: 'priyansh-chaudhary-420064258/' },
    { name: 'Solanki Vasu', photo: pic6, instagram: 'v_a_s_u_2_7', github: 'vasu2709', linkedin: 'vasu-solanki-51a81629a/' },
    { name: 'Aria Sharma', photo: pic7, instagram: 'ariasharma7', github: 'ariasharma', linkedin: 'aria-sharma-673b03221/' },
  ];

  return (
    <div className='flex flex-col lg:flex-row pt-10 pb-10 md:items-center'>
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-[#777777] text-center mb-8">
          We are a group of passionate developers who love to create amazing web applications using the latest technologies. We are always eager to learn new skills and take on new challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-5  ">
 

          {/* First Row (4 boxes) */}
          {members.slice(0, 4).map((member, index) => (
          
<div key={index} className="bg-transparent relative border-[3px] border-transparent hover:border-gray-500 duration-300 p-4 flex overflow-hidden items-center group pt-10 flex-col rounded-lg" >

  <Image
    src={member.photo}
    alt={`Image of ${member.name}`}
    width={250}
    height={250}
    className="mx-auto object-cover rounded-full mb-4"
  />
  {/* Add the rotate effect for the bottom shape */}
  <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 z-10 opacity-0 translate-y-10 group-hover:-translate-y-0 group-hover:opacity-100 duration-300 rotate-6 group-hover:rotate-0 ' viewBox="0 0 1440 320">
    <path fill="#86A062" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
  <h2 className="text-2xl font-bold text-center">{member.name}</h2><br />
  <div className='text-[#777777] group-hover:text-[#7fa15a]'>Full Stack Devloper</div>
  <div className="flex w-[80%] justify-evenly py-8 pt-10 opacity-0 duration-700 z-0 translate-y-10 group-hover:-translate-y-6 group-hover:opacity-100 text-3xl space-x-0">
    <a className='transition-transform transform hover:scale-[1.3] duration-300 text-red-500' href={`https://www.instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer"> <FaInstagram/></a>
    <a className='transition-transform transform hover:scale-[1.3] duration-500 text-black' href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">  <FaGithub/></a>

    <a className='transition-transform transform hover:scale-[1.3] duration-700 text-blue-500' href={`https://www.linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">  <FaLinkedin/></a>
  </div>
</div>
            
          ))}
        </div>
        {/* Second Row (3 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24 lg:px-56 ">
          {members.slice(4, 7).map((member, index) => (
            <div key={index} className="bg-transparent relative border-[3px] border-transparent hover:border-gray-500 duration-300 p-4 flex overflow-hidden items-center group pt-10 flex-col rounded-lg ">
              <Image
                src={member.photo}
                alt={`Image of ${member.name}`}
                width={250}
                height={250}
                className="mx-auto object-cover rounded-full mb-4"
              />
              {/* Add the rotate effect for the bottom shape */}
              <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 z-10 opacity-0 translate-y-10 group-hover:-translate-y-0 group-hover:opacity-100 duration-300 rotate-6 group-hover:rotate-0 ' viewBox="0 0 1440 320">
                <path fill="#86A062" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              <h2 className="text-2xl font-bold text-center">{member.name}</h2><br />
              <div className='text-[#777777] group-hover:text-[#7fa15a]'>Full Stack Devloper</div>

              <div className="flex w-[80%] justify-evenly py-10 opacity-0 duration-700 z-0 translate-y-10 group-hover:-translate-y-6 group-hover:opacity-100 text-3xl space-x-0">
                <a className='transition-transform transform hover:scale-[1.3] duration-300 text-red-500' href={`https://www.instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer">  <FaInstagram/></a>
                <a className='transition-transform transform hover:scale-[1.3] duration-500 text-black' href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">  <FaGithub/></a>
                <a className='transition-transform transform hover:scale-[1.3] duration-700 text-blue-500' href={`https://www.linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">  <FaLinkedin/></a>
              </div>
            </div>
          ))}
        </div>
       
        
          </div>
        </div>
      );
    };

    export default About;






          





