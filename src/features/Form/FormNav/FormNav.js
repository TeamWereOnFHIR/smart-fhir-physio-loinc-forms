import { Panels } from "../formConstants";

const formNavStyles = {
  font: "text-sm font-bold sm:text-base lg:uppercase",
  navFlex: "w-full flex items-center py-2 my-2 mx-4 justify-start",
  active:
    "text-green-500 transition-colors duration-200 bg-gradient-to-r from-white to-green-100 border-r-4 border-green-500",
  inactive: "text-gray-500 transition-colors duration-200 hover:text-green-500",
  cursor: "cursor-pointer",
};

/**
 * Form navigation that allows switching between form panels.
 *
 * Renders active state to show user which form they are viewing.
 *
 * @param handleSelect - function from parent that updates selected panel.
 * @param activeSelect - current active selection.
 */
const FormNav = ({ handleSelect, activeSelect }) => {
  const formPanels = Panels;

  const isActive = (id) => id === activeSelect;

  return (
    <>
      <div className="bg-white w-4/12 rounded-2xl h-96 mr-1 shadow-md pr-4 pb-6 sm:px-6 lg:px-8 sm:text-base">
        <div className="flex items-center justify-center pt-4">
          <div className="lg:uppercase text-green-400 font-semibold sm:text-base lg: 3xl">
            Form Panels
          </div>
        </div>
        {/* Map Navigation in render */}
        <nav className="lg:mt-6">
          {Object.keys(formPanels).map((panel) => {
            return (
              <a
                key={formPanels[panel].id}
                id={formPanels[panel].id}
                className={`${formNavStyles.font} ${formNavStyles.navFlex} ${
                  formNavStyles.cursor
                } ${
                  isActive(formPanels[panel].selectId)
                    ? formNavStyles.active
                    : formNavStyles.inactive
                }`}
                onClick={(e) => handleSelect(e)}
              >
                {formPanels[panel].title}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default FormNav;
