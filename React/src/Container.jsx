import { useState } from "react";

export function Container({ title, children }) {
  const [collapse, setCollpase] = useState(false);

  function handleToggleCollapse() {
    setCollpase((t) => !t);
  }

  return (
    <div className="app">
      <div onClick={handleToggleCollapse} className="app-title">
        {title}
      </div>
      {collapse && <div className="content">{children}</div>}
    </div>
  );
}

/* 
Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border.
Add a title prop that will contain the title value to be displayed 
before the children.
Make the container collapsible, so that when the title is clicked 
the children are either hidden of shown again.
Use the useState hook to keep track of the collapsed state. */
