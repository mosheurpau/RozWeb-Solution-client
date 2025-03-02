import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import backgroundImg from '../../../assets/images/background.jpg';
import outdoors from '../../../assets/images/outdoor.jpg';
import events from '../../../assets/images/event.jpg';
import celebration from '../../../assets/images/celebrations.jpg';
import wedoing from '../../../assets/images/wedoings.jpg';
import decorations from '../../../assets/images/decoration.png';

const Outdoor = () => {
  return (
    <ParallaxProvider>
      <div className="relative">
        <Parallax speed={-20} className="absolute inset-0">
          <img
            src={backgroundImg}
            alt="Al Faisal Restaurant Background"
            className="w-full h-full object-cover fixed bg-fixed"
          />
        </Parallax>

        {/* Second parallax layer with a different speed */}
        <Parallax speed={20} className="absolute inset-0">
          <div className="w-full h-full"></div>
        </Parallax>

        <div className="relative z-10 text-white">
          <div className="container pt-0 md:px-16 md:pb-16 mx-auto">
            <img
              className="w-full mx-auto"
              src={decorations}
              alt="Al Faisal Restaurant decoration"
            />
            <div className="hero ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={outdoors}
                  alt="Al Faisal Restaurant"
                  className="max-w-sm rounded-lg shadow-2xl hover:scale-105 hover:duration-1000"
                />
                <div className="text-lg">
                  <h3
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                    className="text-5xl md:text-7xl font-bold mb-3 !capitalize text-[#6582F6]">
                    Outdoor
                  </h3>
                  <h5 className="uppercase text-2xl md:text-3xl mb-3 text-[#6582F6]">
                    CATERING
                  </h5>
                  <p className="mb-2">
                    Are you planning a party or function or at a special venue?
                  </p>
                  <p className="mb-2">
                    Let our specialist outside catering team take careof your
                    Christmas, Birthday Family Occasion, Office Party or
                    Corporate Business Event. We have a choice of set menu to
                    suit your special occasion.
                  </p>
                  <p className="mb-2">
                    Al Faisals has a professional catering team to cater for all
                    your needs. Please contact the duty manager to discuss your
                    specific requirements and tariff charges
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-0 md:p-16">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={events}
                  alt="Al Faisal Restaurant event"
                  className="max-w-sm rounded-lg shadow-2xl hover:scale-110 hover:duration-1000"
                />
                <div className="text-lg ">
                  <h3
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                    className="text-5xl md:text-7xl font-bold mb-3 !capitalize text-[#6582F6]">
                    Events
                  </h3>
                  <h5 className="uppercase text-2xl md:text-3xl mb-3 text-[#6582F6]">
                    Corporate
                  </h5>
                  <p className="mb-2">
                    Corporate sales presentations, business meetings or simply
                    rewarding your staff for their hard work throughout the
                    year, Al Faisals is the perfect place to hold your event.
                  </p>
                  <p className="mb-2">
                    Ask our restaurant manager for more details
                  </p>
                  <p className="mb-2">call 0121 449 5695</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-0 md:p-16">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={celebration}
                  alt="Al Faisal Restaurant celebration"
                  className="max-w-sm rounded-lg shadow-2xl hover:scale-110 hover:duration-1000"
                />
                <div className="text-lg">
                  <h3
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                    className="text-5xl md:text-7xl font-bold mb-3 !capitalize text-[#6582F6]">
                    Celebrations
                  </h3>
                  <p className="mb-2">
                    Our restaurant manager will be more than happy to show you
                    our superb function rooms ideal for anything from a small
                    birthday party to a larger family wedding.
                  </p>
                  <p className="mb-2">
                    If you require further information please ask to see the
                    restaurant manager
                  </p>

                  <p
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                    className="text-lg md:text-xl mb-2 text-[#6582F6]">
                    Functions Rooms
                  </p>
                  <p className="mb-2">
                    Available for meetings & special occasions, please discuss
                    you requirements with the duty manager or contact us
                  </p>
                  <p
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                    className="text-lg md:text-xl mb-2 text-[#6582F6]">
                    Gift Vouchers
                  </p>
                  <p className="mb-2">
                    The perfect presents for family, friends or staff. Al
                    Faisals - make it a gift to remember
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-0 md:p-16">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={wedoing}
                  alt="Al Faisal Restaurant"
                  className="max-w-sm rounded-lg shadow-2xl hover:scale-110 hover:duration-1000"
                />
                <div className="text-lg ">
                  <h3
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                    className="text-5xl md:text-7xl font-bold mb-3 !capitalize text-[#6582F6]">
                    Wedoings
                  </h3>

                  <p className="mb-2">
                    For your big day we can cater for all your wedding
                    requirements. Al Faisals is the Number 1 in Birmingham to
                    hold your big day wedding event.
                  </p>
                  <p className="mb-2">
                    Ask our restaurant manager for more details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Outdoor;
