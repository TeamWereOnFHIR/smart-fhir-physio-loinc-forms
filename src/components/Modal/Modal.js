import Button from "../Button/Button";

const styles = {
  main: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
  inner: "relative w-auto my-6 mx-auto max-w-3xl",
  content:
    "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
  header:
    "flex items-start justify-between p-5 border-b border-solid rounded-t",
  headerText: "text-3xl font-semibold",
  message: "relative p-6 flex-auto",
  messageText: "my-4 text-lg leading-relaxed",
  buttonRow:
    "flex items-center justify-end p-6 border-t border-solid rounded-b",
};

/**
 * Creates a modal that pops out when to show a notification or message after
 * an action is done.
 *
 * Upon clicking OK in the modal, will set state of modal to false (should be handled in parent).
 *
 * Usage:
 *  <Modal setModal={react state setter} headerText={heading string}>Message</MessageBanner>
 *
 * @param setModal - (fn) react state setter, sets false onClose in modal.
 * @param headerText - (str) title if applicable.
 * @param children - (str) children to render (i.e., a message).
 */
const Modal = ({ setModal, headerText, children }) => {
  /**
   * Closes modal by setting state in parent to not show (false).
   */
  const onClose = () => {
    setModal(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.content}>
          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.headerText}>{headerText}</h2>
          </div>
          {/* MESSAGE */}
          <div className={styles.message}>
            <p className={styles.messageText}>{children}</p>
          </div>
          {/* BUTTON ROW */}
          <div className={styles.buttonRow}>
            <Button buttonType="primary" handleClick={onClose}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
