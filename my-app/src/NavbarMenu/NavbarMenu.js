import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="position-relative">
      <button
        className="btn btn-light fw-bold"
        style={{ fontSize: "1rem" }}
        onClick={() => setShowMenu(!showMenu)}
      >
        ChatAi
      </button>

      {showMenu && (
        <div
          className="bg-light border shadow-sm p-2 position-absolute mt-1"
          style={{ maxHeight: "200px", overflowY: "auto", zIndex: 1000 }}
        >
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            <li>
              <Link className="text-decoration-none" to="/home">🏠 Home</Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/">📝 Register</Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/history">📜 History</Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/about">📖 About</Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/chat">💬 Chat</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
