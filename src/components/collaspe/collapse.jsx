import React, { useState } from 'react';
import './collapse.css';

const arrowSvgUp = `
  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z" fill="white"/>
  </svg>
`;

const arrowSvgDown = `
  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7897 13.4979C11.4591 14.1674 12.5462 14.1674 13.2157 13.4979L23.4979 3.21571C24.1674 2.54628 24.1674 1.45916 23.4979 0.789732C22.8285 0.120308 21.7414 0.120308 21.072 0.789732L12 9.86165L2.92804 0.794642C2.25862 0.125218 1.17148 0.125218 0.502064 0.794642C-0.167355 1.46406 -0.167355 2.55119 0.502064 3.22062L10.7843 13.5033L10.7897 13.4979Z" fill="white"/>
  </svg>
`;

export default function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [arrowIcon, setArrowIcon] = useState(arrowSvgDown);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
    setArrowIcon(isCollapsed ? arrowSvgUp : arrowSvgDown);
  }

  return (
    <div className="collapse">
      <button className="collapseButton" onClick={toggleCollapse}>
        <span>{props.title}</span>
        <span dangerouslySetInnerHTML={{ __html: arrowIcon }} />
      </button>
      {!isCollapsed && <div className="collapseContent">{props.children}</div>}
    </div>
  );
}
