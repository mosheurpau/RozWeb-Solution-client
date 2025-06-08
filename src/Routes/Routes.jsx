import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Reset from '../pages/Reset/Reset';
import NotFound from '../Shared/NotFound/NotFound';
// import Event from "../pages/Event/Event";
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import BookingTable from '../pages/BookingTable/BookingTable';
import AdminRoute from './AdminRoute';
import Bangladesh from '../pages/Bangladesh/Bangladesh';
import Business from '../pages/Business/Business';
import GlobalNew from '../pages/GlobalNew/GlobalNew';
import CommunityWell from '../pages/CommunityWell/CommunityWell';
import CommunityNews from '../pages/CommunityNews/CommunityNews';
import Sports from '../pages/Sports/Sports';
import AddNews from '../pages/AddNews/AddNews';
import Travel from '../pages/Travel/Travel';
import NewsDetail from '../pages/NewsDetail/NewsDetail';
import Videos from '../pages/Videos/Videos';
import AddVideo from '../pages/AddVideo/AddVideo';
import DeleteVideo from '../pages/DeleteVideo/DeleteVideo';
import DeleteNews from '../pages/DeleteNews/DeleteNews';
import WebDevelopment from '../pages/WebDevelopment/WebDevelopment';
import RecentCaseStudies from '../pages/RecentCaseStudies/RecentCaseStudies';
import Ecommerce from '../pages/Ecommerce/Ecommerce';
import WebDesign from '../pages/WebDesign/WebDesign';
import MobileApp from '../pages/MobileApp/MobileApp';
import Maintenance from '../pages/Maintenance/Maintenance';
import DesktopApp from '../pages/DesktopApp/DesktopApp';
import GraphicsDesign from '../pages/GraphicsDesign/GraphicsDesign';
import DigitalMarketing from '../pages/DigitalMarketing/DigitalMarketing';
import UiUxDesign from '../pages/UiUxDesign/UiUxDesign';
import Dashboard from '../pages/Dashbord/Dashbord';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'bangladesh-porikroma',
        element: <Bangladesh></Bangladesh>,
      },
      {
        path: 'business-and-economics',
        element: <Business></Business>,
      },
      {
        path: 'global-news',
        element: <GlobalNew></GlobalNew>,
      },
      {
        path: 'community-well-being',
        element: <CommunityWell></CommunityWell>,
      },
      {
        path: 'community-news',
        element: <CommunityNews></CommunityNews>,
      },
      {
        path: 'sports',
        element: <Sports></Sports>,
      },
      {
        path: 'travel',
        element: <Travel></Travel>,
      },
      {
        path: 'videos',
        element: <Videos></Videos>,
      },
      {
        path: 'addVideo',
        element: (
          <AdminRoute>
            <AddVideo></AddVideo>
          </AdminRoute>
        ),
      },
      {
        path: 'deleteVideo',
        element: (
          <AdminRoute>
            <DeleteVideo></DeleteVideo>
          </AdminRoute>
        ),
      },

      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'addNews',
        element: (
          <AdminRoute>
            <AddNews></AddNews>
          </AdminRoute>
        ),
      },
      {
        path: 'deleteNews',
        element: (
          <AdminRoute>
            <DeleteNews></DeleteNews>
          </AdminRoute>
        ),
      },
      {
        path: '/news/:id',
        element: <NewsDetail></NewsDetail>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'work',
        element: <RecentCaseStudies></RecentCaseStudies>,
      },
      {
        path: 'ecommerce',
        element: <Ecommerce></Ecommerce>,
      },
      {
        path: 'web-design',
        element: <WebDesign></WebDesign>,
      },
      {
        path: 'mobile-app',
        element: <MobileApp></MobileApp>,
      },
      {
        path: 'maintenance-support',
        element: <Maintenance></Maintenance>,
      },
      {
        path: 'desktop-application',
        element: <DesktopApp></DesktopApp>,
      },
      {
        path: 'graphics-design',
        element: <GraphicsDesign></GraphicsDesign>,
      },
      {
        path: 'ux-ui-design',
        element: <UiUxDesign></UiUxDesign>,
      },
      {
        path: 'digital-marketing',
        element: <DigitalMarketing></DigitalMarketing>,
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'reset',
        element: <Reset></Reset>,
      },
      {
        path: 'web-development',
        element: <WebDevelopment></WebDevelopment>,
      },
      {
        path: 'dashbord',
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: 'bookingTable',
        element: (
          <AdminRoute>
            <BookingTable></BookingTable>
          </AdminRoute>
        ),
      },

      // {
      //   path: "profile",
      //   element: (
      //     <PrivateRoute>
      //       <Profile></Profile>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: '*',
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
