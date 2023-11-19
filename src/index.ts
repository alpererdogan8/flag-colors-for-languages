#!/usr/bin/env node
type HEXCODE<T extends string> = `#${T}`;
const SoftwareColors: Readonly<Record<string, HEXCODE<string>>> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  HTML: "#E34C26",
  CSS: "#E34C26",
  React: "#149ECA",
  Vue: "#41B883",
  Angular: "#CB27BB",
  Ruby: "#178600",
  Python: "#3572A5",
  Shell: "#89E051",
  DockerFile: "#384D54",
  C_Sharp: "#178600",
  C_Plus_Plus: "#F34B7D",
  Java: "#178600",
};
export default SoftwareColors;
