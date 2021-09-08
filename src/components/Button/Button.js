import { buttonColours, buttonTypes } from "./buttonConstants";

/**
 * Primary and secondary styles for app buttons.
 */
const primaryStyles = `bg-${buttonColours.primary}-800  active:bg-${buttonColours.primary}-600 border
                        hover:bg-${buttonColours.primary}-500 hover:shadow-lg
                        text-${buttonColours.secondary}-200 font-bold uppercase text-sm 
                        px-6 py-3 mr-1 mb-1
                        rounded-md shadow focus:outline-none
                        ease-linear transition-all duration-100`;

const secondaryStyles = `bg-${buttonColours.secondary}-400 active:bg-${buttonColours.secondary}-600 border
                          hover:bg-${buttonColours.secondary}-500 hover:shadow-lg
                          text-${buttonColours.secondary}-900 font-bold uppercase text-sm 
                          px-6 py-3 mr-1 mb-1
                          rounded-md shadow focus:outline-none
                          ease-linear transition-all duration-100`;

/**
 * Generic app button. Can be set to primary or secondary.
 *
 * Usage:
 *  <Button buttonType={type} onClick={func}>Button Text</Button>
 *
 * Props:
 *  buttonType - buttonTypes.primary || buttonTypes.secondary
 *  handleClick - function to call on click
 *  children - children that is rendered by button.
 *
 * @param props - React props access.
 * @returns
 */
const Button = (props) => {
  const styles =
    props.buttonType === buttonTypes.primary ? primaryStyles : secondaryStyles;

  return (
    <button className={styles} type="button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: buttonTypes.primary,
};

export default Button;
