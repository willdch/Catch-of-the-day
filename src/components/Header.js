import React from "react";

// we swithed this from a full blown react component to a "stateless functional comonent". if a component only has a "render()" method and renders one RETRUN
// when using one retrun you don't even need to write return. This is callied an "Implicit return. it will return everything on one line.  There is no "THIS" in a statless component.  you will just use props.
const Header = props => (
  <header className="top">
  <h1>
    Catch
    <span className="ofThe">
      <span className="of">of</span>
      <span className="the">the</span>
    </span>
    Day
  </h1>
  <h3 className="tagline">
    <span>{props.tagline}</span>
  </h3>
</header>
);


export default Header;
