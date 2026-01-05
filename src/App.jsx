import React from "react";

import { Dock, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, TextWindow, ImageWindow } from "#windows";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextWindow />
      <ImageWindow />
    </main>
  );
};

export default App;
