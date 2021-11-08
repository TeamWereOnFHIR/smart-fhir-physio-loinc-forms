import { Disclosure } from "@headlessui/react";
import logo from "../../assets/logo.png";

/**
 * Top level banner for application.
 *
 * Can add navigation if requried.
 */
const NavBanner = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-green-500 shadow-xl">
        {({ open }) => (
          <>
            <div className="max-w-8xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center pl-40">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img className="object-contain h-16 pb-2" src={logo} />
                  </div>
                  <h1 className="font-mono font-bold text-4xl text-green-900 .tracking-widest pl-3">
                    Phizzforms
                  </h1>
                  <p className=".tracking-tighter pl-60 pt-10 text-gray-200">
                    UI: American Physical Therapy Association LOINC Form
                    [76453-0]
                  </p>
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
