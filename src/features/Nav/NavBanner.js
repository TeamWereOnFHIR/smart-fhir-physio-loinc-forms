import { Disclosure } from "@headlessui/react";
import logo from "../../assets/logo.png";

const NavBanner = () => {
  const navItemCurrentClasses =
    "bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium";
  const navItemDefaultClasses =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <div>
      <Disclosure as="nav" className="bg-green-400 shadow-xl">
        {({ open }) => (
          <>
            <div className="max-w-7xl w-3/5 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="#e25822"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg> */}
                    {/* <Logo /> */}
                    {/* <img src={require=('../../assets/logo.svg').default} /> */}

                    <img className="object-contain h-14 pb-2" src={logo} />
                  </div>
                  <h1 className="font-bold text-2xl text-white .tracking-widest pl-2">
                    Phizzforms
                  </h1>
                  {/* Navigation - Currently not needed */}
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {/* {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={
                            item.current
                              ? navItemCurrentClasses
                              : navItemDefaultClasses
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavBanner;
