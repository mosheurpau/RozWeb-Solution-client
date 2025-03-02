function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-sm">
          {/* Left Side */}
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold">RozWeb Solution</p>
            <p className="text-sm">YOUR NEXT DEVELOPMENT PARTNER</p>
          </div>

          {/* Center Side */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Case Studies
            </a>
            <a href="#" className="hover:underline">
              What We Do
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
          <div>
            {/* First column */}
            <p>
              Unit 3 First Floor, 483 Coventry Road, Birmingham, United Kingdom,
              B10 0JS
            </p>
            <p className="text-[#6582F6]">
              {' '}
              <a href="https://www.google.com/maps/place/Small+Heath+Business+Centre/@52.4696093,-1.8583278,3a,75y,190.12h,106.26t/data=!3m7!1e1!3m5!1syrMGxqY2S6OmcQWwGV48ig!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-16.264454732703754%26panoid%3DyrMGxqY2S6OmcQWwGV48ig%26yaw%3D190.11976370780877!7i16384!8i8192!4m20!1m13!4m12!1m4!2m2!1d-1.878049!2d52.4503581!4e1!1m6!1m2!1s0x4870bba51bbd2c2d:0x7591428cc9408666!2sSmall+Heath+Business+Centre,+510+Coventry+Rd,+Small+Heath,+Birmingham+B10+0UN!2m2!1d-1.8571775!2d52.4693223!3m5!1s0x4870bba51bbd2c2d:0x7591428cc9408666!8m2!3d52.4693223!4d-1.8571775!16s%2Fg%2F1td_4mfs?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
                → Find us on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Address and Legal */}
        <div className="mt-12 text-sm">
          {' '}
          {/* Removed text-center and md:text-left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p>&copy; RozWeb Solution. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="text-left md:text-right">
              <p>
                <span className="mr-2 md:mr-4">COMPANY NO. 16145561 </span>
                <a href="#" className="hover:underline mx-4">
                  TERMS & CONDITIONS
                </a>{' '}
                <a href="#" className="hover:underline">
                  PRIVACY POLICY
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center my-2">
          Designed and developed by{' '}
          <a
            href="https://www.linkedin.com/in/mosheurrahman29/"
            className="text-[#6582F6] hover:underline hover:font-bold">
            Mosheur Rahman
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
