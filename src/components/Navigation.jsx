import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="text-blue-600 hover:text-blue-800">About</Link></li>
        <li><Link to="/experience" className="text-blue-600 hover:text-blue-800">Experience</Link></li>
        <li><Link to="/education" className="text-blue-600 hover:text-blue-800">Education</Link></li>
        <li><Link to="/skills" className="text-blue-600 hover:text-blue-800">Skills</Link></li>
        <li><Link to="/projects" className="text-blue-600 hover:text-blue-800">Projects</Link></li>
        <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;