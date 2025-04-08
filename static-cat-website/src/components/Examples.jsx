import { CAT_EXAMPLES } from "../data.jsx";
import Tab from "./Tab.jsx";

import { useState } from 'react';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("tabItem1");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <Tab
          isSelected={selectedTopic === "tabItem1"}
          onSelect={() => handleSelect("tabItem1")}
        >
          Horizontal Spin
        </Tab>
        <Tab
          isSelected={selectedTopic === "tabItem2"}
          onSelect={() => handleSelect("tabItem2")}
        >
          Uzumaki Spin
        </Tab>
        <Tab
          isSelected={selectedTopic === "tabItem3"}
          onSelect={() => handleSelect("tabItem3")}
        >
          Chaotic Spin
        </Tab>
        <Tab
          isSelected={selectedTopic === "tabItem4"}
          onSelect={() => handleSelect("tabItem4")}
        >
          Spin 2D
        </Tab>
      </menu>
      <div id="tab-content">
        <h3>{CAT_EXAMPLES[selectedTopic].title}</h3>
        <p>{CAT_EXAMPLES[selectedTopic].description}</p>
      </div>
    </section>
  );
}