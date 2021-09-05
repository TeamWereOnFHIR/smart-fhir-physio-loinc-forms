import { buttonActionTypes, buttonColours } from "./buttonConstants";

/**
 * Primary and secondary styles for app buttons.
 *
 * Intensity of colours seems to work best when: #TODO: Experiment with this.
 * - bg-colour-xxx
 * - active:bg-color-(xxx+200)
 * - hover:bg-color-(xxx-100)
 * - border-color-(xxx+200)
 */
const primaryStyles = `bg-${buttonColours.primary}-500  active:bg-${buttonColours.primary}-700 
                        hover:bg-${buttonColours.primary}-400 hover:shadow-lg
                        text-white font-bold uppercase text-sm 
                        px-6 py-3 mr-1 mb-1 border-b-4 border-${buttonColours.primary}-700
                        rounded-md shadow focus:outline-none
                        ease-linear transition-all duration-300`;

const secondaryStyles = `bg-${buttonColours.secondary}-500  active:bg-${buttonColours.secondary}-700 
                          hover:bg-${buttonColours.secondary}-400 hover:shadow-lg
                          text-white font-bold uppercase text-sm 
                          px-6 py-3 mr-1 mb-1 border-b-4 border-${buttonColours.secondary}-700
                          rounded-md shadow focus:outline-none
                          ease-linear transition-all duration-300`;

const flatStyles = `bg-${buttonColours.flat}-500  active:bg-${buttonColours.flat}-700 
                      hover:bg-${buttonColours.flat}-400 hover:shadow-lg
                      text-white font-bold uppercase text-sm 
                      px-6 py-3 mr-1 mb-1
                      shadow focus:outline-none
                      ease-linear transition-all duration-300`;

const flatRounded = `bg-${buttonColours.flatRounded}-500  active:bg-${buttonColours.flatRounded}-700 
                      hover:bg-${buttonColours.flatRounded}-400 hover:shadow-lg
                      text-white font-bold uppercase text-sm 
                      px-6 py-3 mr-1 mb-1
                      rounded-md shadow focus:outline-none
                      ease-linear transition-all duration-300`;

const Button = (props) => {
  let actionType = props.actionType;
  const styles =
    actionType === buttonActionTypes.primary
      ? primaryStyles
      : actionType === buttonActionTypes.secondary
      ? secondaryStyles
      : actionType === buttonActionTypes.flat
      ? flatStyles
      : flatRounded;

  return (
    <button className={styles} type="button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: buttonActionTypes.primary,
};

export default Button;
