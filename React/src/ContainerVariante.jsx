import { useState } from "react";

export function ContainerVariante({ title, children }) {
  const [collapse, setCollpase] = useState(false);

  function handleToggleCollapse() {
    setCollpase((t) => !t);
  }

  return (
    <div className="app">
      <div onClick={handleToggleCollapse} className="app-title">
        {title}
      </div>
      {
        <div className={!collapse ? "contentVariante" : "show-content"}>
          {children}
        </div>
      }
    </div>
  );
}

/* Piccola sperimentazione */
