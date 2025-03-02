import Slider from 'react-slick';
import gm1 from '../../../assets/images/item5.jpg';
import gm2 from '../../../assets/images/item2.jpg';
import gm3 from '../../../assets/images/item6.jpg';
import gm4 from '../../../assets/images/item9.jpg';
import gm5 from '../../../assets/images/item10.jpg';
import gm8 from '../../../assets/images/item12.jpg';
import gm10 from '../../../assets/images/item14.jpg';
import gm11 from '../../../assets/images/item16.jpg';
import gm12 from '../../../assets/images/item17.jpg';
import gm13 from '../../../assets/images/item20.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const banners = [
    { img: gm1, id: '65773ba93b909f159ca5069f' },
    { img: gm2, id: '6575d088940f36296fe63056' },
    { img: gm3, id: '336575c55f940f36296fe6304e' },
    { img: gm4, id: '6580433221110d13edfb5477' },
    { img: gm5, id: '6575c41d940f36296fe6304d' },
    { img: gm8, id: '6575d22b940f36296fe63057' },
    { img: gm10, id: '6577421f3b909f159ca506a4' },
    { img: gm11, id: '6577421f3b909f159ca506a4' },
    { img: gm12, id: '6577421f3b909f159ca506a4' },
    { img: gm13, id: '6577421f3b909f159ca506a4' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // screens less than 1024px wide (laptop)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // screens less than 600px wide (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-16 md:px-2 mx-2 mb-2 mt-28">
      <h2
        style={{ fontFamily: 'Dancing Script, cursive' }}
        className="lg:text-5xl text-4xl text-center font-bold mt-10 pb-10 text-[#6582F6]">
        Most Popular Foods Dishes
      </h2>
      <div className="mx-6">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="mx-auto">
              <figure className="mx-auto">
                <img
                  className="md:h-80 h-80 md:w-72 w-72 mx-auto object-cover object-center hover:scale-110 hover:duration-200 hover:shadow-2xl"
                  src={banner.img}
                  alt="Products"
                />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
