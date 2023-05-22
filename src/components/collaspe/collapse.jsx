import React, { useState } from 'react';
import './collapse.css';

export default function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        {isCollapsed ? 'Afficher' : 'Masquer'}
      </button>
      {!isCollapsed && <div className="collapse__content">{props.children}</div>}
    </div>
  );
}
