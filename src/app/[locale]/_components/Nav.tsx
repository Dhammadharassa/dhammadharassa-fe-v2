import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

import Logo from "../../assets/imgs/ddLogo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslations();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = (newLanguage) => {
    if (newLanguage !== currentLanguage) {
      i18n.changeLanguage(newLanguage);
      setCurrentLanguage(newLanguage);
      localStorage.setItem("newLanguage", newLanguage);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-black">
      <div className="w-full px-2 lg:px-12">
        {/* Desktop Layout */}
        <div className="hidden lg:flex relative items-center h-20">
          {/* Logo in absolute center - desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-12" alt="Logo" />
            </Link>
          </div>
          
          {/* Left Section - with fixed width */}
          <div className="w-1/3">
            <nav className="flex items-center space-x-4">
              <Link
                to="/about"
                className="text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta"
              >
                {t('Navigation.AboutUs')}
              </Link>
              <Link
                to="/work"
                className="text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta"
              >
                {t('Navigation.Projects')}
              </Link>
              <Link
                to="/news"
                className="text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta"
              >
                {t('Navigation.News')}
              </Link>
              <Link
                to="/merch"
                className="text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta"
              >
                {t('Navigation.Merch')}
              </Link>
            </nav>
          </div>

          {/* Empty middle section - with fixed width to maintain space for logo */}
          <div className="w-1/3 flex justify-center">
            {/* Logo is positioned absolutely, this div just maintains space */}
          </div>

          {/* Right Section - with fixed width */}
          <div className="w-1/3 flex justify-end">
            <nav className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-text-md font-jakarta font-medium rounded-md text-gray-400 hover:text-black transition-colors duration-300"
              >
                {t('Navigation.Login')}
              </Link>
              <div className="changeLanguage flex items-center space-x-2 text-black group-hover:text-gray-300 text-md font-medium font-jakarta">
                <Globe className="h-6 w-6 text-black group" />
                <select
                  value={currentLanguage}
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                >
                  <option value="EN">EN</option>
                  <option value="ID">ID</option>
                </select>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between h-16 px-4">
          {/* Logo on side - mobile only */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-8" alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
       
          <div className="flex items-center justify-center border border-gray-950 rounded-full px-4 py-1 gap-3">
            <p className="font-jakarta text-md font-regular text-black pb-1">Menu</p>
            <button
              onClick={toggleMenu}
              className={`rounded-md text-black focus:outline-none transition-transform duration-250 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              <div className="relative top-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="24"
                  fill="none"
                  viewBox="0 0 33 24"
                  className="absolute top-0 left-0 transition-opacity duration-300"
                  style={{ opacity: isOpen ? 0 : 1 }}
                >
                  <path
                    fill="black"
                    fillRule="evenodd"
                    d="M.834 1.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="black"
                    fillRule="evenodd"
                    d="M.834 7.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="black"
                    fillRule="evenodd"
                    d="M.834 13.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transition-opacity duration-300"
                  style={{ opacity: isOpen ? 1 : 0 }}
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col justify-between min-h-screen bg-white text-black">
          <div className="px-4 pt-6 pb-3 space-y-6">
            <Link
              to="/about"
              className="block py-4 px-2 hover:bg-gray-200 rounded-sm text-xl  tracking-wider font-medium"
            >
              {t('Navigation.AboutUs')}
            </Link>
            <Link
              to="/work"
              className="block py-4 px-2 hover:bg-gray-200 rounded-sm text-xl  tracking-wider font-medium"
            >
              {t('Navigation.Projects')}
            </Link>
            <Link
              to="/news"
              className="block py-4 px-2 hover:bg-gray-200 rounded-sm text-xl  tracking-wider font-medium"
            >
              {t('Navigation.News')}
            </Link>
            <Link
              to="/merch"
              className="block py-4 px-2 hover:bg-gray-200 rounded-sm text-xl  tracking-wider font-medium"
            >
              {t('Navigation.Merch')}
            </Link>
            <div className="fixed bottom-5 w-full pr-8">
              <div className="flex justify-between w-full">
                <Link
                  to="/login"
                  className="block py-2 text-sm font-medium rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {t('Navigation.Login')}
                </Link>
                <div className="changeLanguage flex items-center space-x-2 text-black text-sm font-medium font-jakarta">
                  <Globe className="h-5 w-5 text-black group" />
                  <select
                    value={currentLanguage}
                    onChange={(e) => handleChangeLanguage(e.target.value)}
                  >
                    <option value="EN">EN</option>
                    <option value="ID">ID</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
