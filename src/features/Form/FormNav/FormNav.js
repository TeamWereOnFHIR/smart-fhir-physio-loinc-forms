import { Panels } from "../formConstants";

const formNavStyles = {
  font: "text-sm font-bold uppercase",
  navFlex: "w-full flex items-center py-2 my-2 mx-4 justify-start",
  active:
    "text-green-500 transition-colors duration-200 bg-gradient-to-r from-white to-green-100 border-r-4 border-green-500",
  inactive: "text-gray-500 transition-colors duration-200 hover:text-green-500",
  cursor: "cursor-pointer",
};

const FormNav = ({ handleSelect, activeSelect }) => {
  const formPanels = Panels;

  const isActive = (id) => id === activeSelect;

  return (
    <>
      <div className="bg-white w-3/12 rounded-2xl shadow-md pr-4 pt-6 pb-6">
        <div className="flex items-center justify-center pt-4">
          <h2 className="uppercase text-xl text-green-400 font-semibold">
            Form Panels
          </h2>
        </div>
        {/* Map Navigation in render */}
        <nav className="mt-6">
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
