import { infoBanner, warningBanner } from "./bannerTypes";

/**
 * Creates a message banner coloured depending on type of message.
 *
 * Usage:
 *  <MessageBanner type='info'>Text</MessageBanner>
 *  <MessageBanner type='warning'>Text</MessageBanner>
 *
 * Props:
 *  type (str) - string describing type of banner message.
 *  title (str) - title if applicable.
 *  children - children to render.
 *
 * @param props - react component props.
 */
const MessageBanner = (props) => {
  const type = props.type === "info" ? infoBanner : warningBanner;

  return (
    <div className="flex gap-4 bg-red-100 mt-4 p-4 rounded-md">
      <div className="w-max">
        <div
          className={`h-12 w-12 flex from-${type.colour}-100 to-${type.colour}-300 text-${type.colour}-700`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill={type.fill}
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-1 text-sm">
        <h6 className={`font-medium text-${type.colour}-900`}>{props.title}</h6>
        <p className={`text-${type.colour}-700 leading-tight`}>
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default MessageBanner;
