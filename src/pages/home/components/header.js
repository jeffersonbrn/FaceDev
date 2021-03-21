import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <span>Facedev</span>
        </div>
        <div>
          <button>Novo Post</button>
          <span>imag1</span>
          <span>imag2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;