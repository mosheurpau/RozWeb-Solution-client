import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
// import Gallery from "../Gallery/Gallery";
// import News from '../News/News';
import RecentWork from '../../RecentWork/RecentWork';
import CallToAction from '../../CallToAction/CallToAction';
import ContactForm from '../../ContactForm/ContactForm';
// import Video from '../Video/Video';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentWork></RecentWork>
      <CallToAction></CallToAction>
      <Services></Services>
      <ContactForm></ContactForm>
      {/* <Video></Video> */}
      {/* <Outdoor></Outdoor> */}
      {/* <News></News> */}
      {/* <ReviewDisplay></ReviewDisplay> */}
    </div>
  );
};

export default Home;
