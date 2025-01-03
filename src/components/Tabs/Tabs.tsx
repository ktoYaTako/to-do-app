import React from "react";
import classes from "./Tabs.module.css";

interface Tab {
  id: number;
  title: string;
}

interface TabsProps {
  activeTabId: number;
  setActiveTabId: (id: number) => void;
}

const tabList: Tab[] = [
  { id: 0, title: "ТЕКУЩИЕ ДЕЛА" },
  { id: 1, title: "ВСЕ ДЕЛА" },
  { id: 2, title: "ВЫПОЛНЕННЫЕ ДЕЛА" },
];

const Tabs: React.FC<TabsProps> = ({ activeTabId, setActiveTabId }) => {
  return (
    <div className={classes.tab}>
      {tabList.map((tab) => (
        <button
          onClick={() => setActiveTabId(tab.id)}
          className={`${classes.tablinks} ${
            tab.id === activeTabId ? classes.active : ""
          }`}
          key={tab.id}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
