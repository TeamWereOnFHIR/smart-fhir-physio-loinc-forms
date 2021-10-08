import { useSelector } from "react-redux";

const FormPanel = ({ panel }) => {
  // Form Data State
  const loincForm = useSelector((state) => state.loincForm);
  // Panel parameters
  const panelLinkId = panel.id;
  const panelTitle = panel.title;
  const panelId = panel.panelId;
  // const panelItems = loincForm.filter((x) => x.something === panelLinkId);

  return (
    <div id={panelId}>
      <h1 className="block text-gray-700 font-bold mb-2 text-xl">
        {panelTitle}
      </h1>
      {/* {panelItems.map((item) => {
        // Helper functions here.
      })} */}
      <span>WE ARE IN FORMPANEL.</span>
    </div>
  );
};

export default FormPanel;
