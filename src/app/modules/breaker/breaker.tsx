import React from 'react';

const images = [
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/72104935_404361396911785_6698094569396402364_n-320x320.jpg',
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/71191444_717471262050377_2926479036723484306_n-320x320.jpg',
  
  
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/71520435_503621650479811_6144731710185852670_n-320x320.jpg',
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/72159216_2390318284629874_7785366938396028228_n-320x320.jpg',
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/72412849_975713072768802_1847570508515820672_n-320x320.jpg',
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/72549021_2493454494069934_4886361025237292902_n-320x320.jpg',
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/71291766_2452805048151863_1875578636483751447_n-320x320.jpg',
  'https://lustria.g5plus.net/wp-content/uploads/2022/01/70266283_514652149098545_458846681599063547_n-320x320.jpg',
];



const Breaker: React.FC = () => {
  return (
    <div className="container flex w-full object-fit max-w-fit  mt-8  bg-black  justify-center">
      <div className="grid w-full grid-cols-2 md:grid-cols-4 object-fit lg:grid-cols-8 ">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="bg-white h-autos w-full flex items-center justify-center "
            
          >
            <img src={imageSrc} alt={`Block ${index + 1}`} className="max-h-full max-w-full" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breaker;