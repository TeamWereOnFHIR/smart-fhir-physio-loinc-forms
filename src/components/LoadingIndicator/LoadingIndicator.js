import "./LoadingIndicator.css";

/**
 * App loading indicator, shown when some loading flag is true.
 *
 * Usage: <LoadingIndicator display="Loading..." />
 *
 * Customised original implementation from: https://tailwindcomponents.com/component/animated-ellipsis
 */
const LoadingIndicator = ({ text }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center loader-transparency">
        <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
          <div className="loader-dots block relative w-20 h-5 mt-2">
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-yellow-500"></div>
          </div>
          <div className="text-gray-500 text-xs font-light mt-2 text-center">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
