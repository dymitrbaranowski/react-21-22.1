import React, { Children } from 'react';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <p>{React.Children.count(children)}</p>
      {children}
    </div>
  );
}

export default Section;
