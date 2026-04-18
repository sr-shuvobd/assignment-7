import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 px-4">
      
      <div className="text-center space-y-6">

        {/* Big 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-primary animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved. 
          Don’t worry, let’s get you back on track.
        </p>

        {/* Button */}
        <Link to="/" className="btn btn-primary gap-2">
          <FaHome /> Go Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;