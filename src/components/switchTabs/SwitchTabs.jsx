import React from "react";
import { useState } from "react";
import "./style.scss"
const SwitchTabs=({ data, ontaTabeChange })=> {
  const [selectedtab, setselectedtab] = useState(0);
  const [left, setleft] = useState(0);

  const activTab = (tab, index) => {
    setleft(index * 100);
    setTimeout(() => {
      setselectedtab(index);
    }, 300);
    ontaTabeChange(tab, index);
  };
  return <div className="switchCahngingTabs">

      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedtab === index ? "active" : ""}`}
            onClick={() => activTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
}

export default SwitchTabs;
