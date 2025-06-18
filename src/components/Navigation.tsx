import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            freecommunication
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
