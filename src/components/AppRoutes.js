<<<<<<< HEAD
import { Link } from "react-router-dom";

// Inside your NavItem component in AppLayout.js
function NavItem({ label, icon, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center text-sm text-gray-400 hover:text-blue-400"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
=======
import { Link } from "react-router-dom";

// Inside your NavItem component in AppLayout.js
function NavItem({ label, icon, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center text-sm text-gray-400 hover:text-blue-400"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
>>>>>>> 1ae45cf06474411b76d756dd99106c8f463d57e3
