import { Disclosure } from "@headlessui/react";
import { navigation } from "./navigation";

const NavBanner = () => {
  const navItemCurrentClasses =
    "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  const navItemDefaultClasses =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800 shadow-2xl">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <h1 className="font-bold text-2xl text-white .tracking-widest pl-2">
                    We're on FHIR
                  </h1>
                  {/* Navigation */}
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
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
                      ))}
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
