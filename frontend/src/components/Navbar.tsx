import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">RealFlow</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="/learning-center" className="text-gray-700 hover:text-blue-600">Learning Center</Link>
          <Link to="/client-portal" className="text-gray-700 hover:text-blue-600">Client Portal</Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          <Link
            to="/register"
            className="block py-2 mt-2 bg-blue-600 text-white text-center rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

