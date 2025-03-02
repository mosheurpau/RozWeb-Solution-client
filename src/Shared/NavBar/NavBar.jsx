import { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/RozWeb-Solutions.png';
import { RxCross1 } from 'react-icons/rx';
import { RiMenu2Fill } from 'react-icons/ri';
// import useUsers from '../../pages/hooks/useUsers';
import useNews from '../../pages/hooks/useNews';

const NavBar = () => {
  // const [userInfo] = useUsers();
  const { user, logOut } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [news] = useNews();
  const drawerRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log('User logged out successfully');
      })
      .catch((error) => {
        // An error happened.
        console.error('Logout error:', error);
      });
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderNewsCards = () => {
    if (searchQuery && filteredNews.length > 0) {
      return (
        <div className="news-cards !bg-black text-white mt-16 p-2 mb-2 grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-20">
          {filteredNews.map((item) => (
            <div key={item._id} className=" rounded-xl shadow-xl">
              <Link to={`/news/${item._id}`} className="text-blue-500 ">
                {/* <div>

                </div>
                <div className="p-4">
                  <h2 className="card-title text-[#6582F6]">{item.title}</h2>

                  <p className="text-white">{item.body1}</p>
                </div> */}

                <div className="card lg:card-side bg-base-100 shadow-xl border-2 rounded-full border-white">
                  <figure>
                    <img
                      className="w-full h-full"
                      src={item.img}
                      alt="item.title"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="text-white">{item.body1}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    } else if (searchQuery && filteredNews.length === 0) {
      return (
        <div className="mt-16 p-4">
          <p className="text-center">No news found matching your query.</p>
        </div>
      );
    } else {
      return null;
    }
  };

  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className={activeLink === '/' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          Home
        </Link>
      </li>

      {/* {userInfo.isAdmin === 'true' && (
        <li className="sm:flex-1 bg-black z-50">
          <ul className="menu menu-horizontal px-0">
            <li>
              <details>
                <summary className="font-bold p-0">Admin</summary>
                <ul className=" text-white rounded-t-none bg-red-500 w-64 p-2 sm:ps-24 md:ps-0">
                  <li>
                    <Link
                      to="/addNews"
                      className={
                        activeLink === '/addNews' ? 'text-[#6582F6]' : ''
                      }
                      onClick={() => setIsDrawerOpen(false)}>
                      Add News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/deleteNews"
                      className={
                        activeLink === '/deleteNews' ? 'text-[#6582F6]' : ''
                      }
                      onClick={() => setIsDrawerOpen(false)}>
                      Delete News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addVideo"
                      className={
                        activeLink === '/addVideo' ? 'text-[#6582F6]' : ''
                      }
                      onClick={() => setIsDrawerOpen(false)}>
                      Add Video
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/deleteVideo"
                      className={
                        activeLink === '/deleteVideo' ? 'text-[#6582F6]' : ''
                      }
                      onClick={() => setIsDrawerOpen(false)}>
                      Delete Video
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </li>
      )} */}
      {/* 
      <li>
        <Link
          to="/travel"
          className={activeLink === '/travel' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          Travel
        </Link>
      </li>
      <li>
        <Link
          to="/videos"
          className={activeLink === '/videos' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          Videos
        </Link>
      </li>

      <li>
        <Link
          to="sports"
          className={activeLink === '/sports' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          Sports
        </Link>
      </li> */}

      <li className="sm:flex-1">
        <ul className="menu menu-horizontal px-1">
          <>
            <li className="z-50 bg-black">
              <details>
                <summary className="font-bold p-0 bg-black">WHAT WE DO</summary>
                <ul className="bg-black text-white rounded-t-none w-64 p-2 border-2">
                  <>
                    <li>
                      <Link
                        to="/ecommerce"
                        className={
                          activeLink === '/ecommerce' ? 'text-[#6582F6]' : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        ECOMMERCE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web-development"
                        className={
                          activeLink === '/web-development'
                            ? 'text-[#6582F6]'
                            : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        WEB DEVELOPMENT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web-design"
                        className={
                          activeLink === '/web-design' ? 'text-[#6582F6]' : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        WEB DESIGN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mobile-app"
                        className={
                          activeLink === '/mobile-app' ? 'text-[#6582F6]' : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        MOBILE APP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/maintenance-support"
                        className={
                          activeLink === '/maintenance-support'
                            ? 'text-[#6582F6]'
                            : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        MAINTENANCE & SUPPORT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/desktop-application"
                        className={
                          activeLink === '/desktop-application'
                            ? 'text-[#6582F6]'
                            : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        DESKTOP APPLICATION
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/graphics-design"
                        className={
                          activeLink === '/graphics-design'
                            ? 'text-[#6582F6]'
                            : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        GRAPHICS DESIGN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/digital-marketing"
                        className={
                          activeLink === '/digital-marketing'
                            ? 'text-[#6582F6]'
                            : ''
                        }
                        onClick={() => setIsDrawerOpen(false)}>
                        DIGITAL MARKETING
                      </Link>
                    </li>
                  </>
                </ul>
              </details>
            </li>
          </>
        </ul>
      </li>
      <li>
        <Link
          to="/projects"
          className={activeLink === '/projects' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          OUR PROJECTS
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={activeLink === '/about' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          MEET THE TEAM
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={activeLink === '/contact' ? 'text-[#6582F6]' : ''}
          onClick={() => setIsDrawerOpen(false)}>
          CONTACT US
        </Link>
      </li>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 z-50">
          {user?.displayName ? (
            <>
              <li className="z-10 bg-black">
                <details>
                  <summary className="font-bold p-0">
                    Name: {user?.displayName || 'Username'}{' '}
                  </summary>
                  <ul className="bg-black text-white rounded-t-none  ">
                    {user ? (
                      <>
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="btn btn-ghost pb-3 m-0">
                            Log Out
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/login"
                            onClick={() => setIsDrawerOpen(false)}>
                            Login
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </details>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={() => setIsDrawerOpen(false)}>
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );

  // Handle click outside the drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="bg-[#070709] text-white">
        <nav className="navbar  px-4 py-3 flex items-center justify-between">
          <div className="">
            <button
              className="lg:hidden text-white"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <RiMenu2Fill className="text-2xl hover:text-[#6582F6]" />
            </button>
            <Link to="/" className="text-2xl font-bold ms-4">
              <img src={logo} alt="Logo" className="h-auto w-24  rounded " />
            </Link>
          </div>

          <ul className="hidden lg:flex space-x-8">{navOptions}</ul>

          <div className="flex items-center justify-center">
            <div className="relative">
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                style={{ fontFamily: 'Dancing Script' }}
                type="text"
                className="disabled pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search News"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div
            ref={drawerRef}
            className="fixed inset-y-0 left-0 max-w-xs w-full bg-black text-white p-8 ">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-auto w-40 m-0 -ml-4 rounded"
              />
            </Link>
            <button
              className="absolute top-0 right-0 mt-12 mr-4 text-white"
              onClick={() => setIsDrawerOpen(false)}>
              <RxCross1 className="text-4xl bg-gray-900 rounded-full p-2 w-12 h-12 text-red-700 hover:text-white" />
            </button>
            <ul className="space-y-4 ">{navOptions}</ul>
          </div>
        </div>
      )}

      {renderNewsCards()}
    </>
  );
};

export default NavBar;
