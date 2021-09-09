import { useState } from "react";

export default function useNamesControl(passedNames) {
  const [names, setNames] = useState(passedNames);

  const deleteName = (input) => {
    let newNames = names.filter(name => name != input);
    setNames(newNames);
  };

  return [names, deleteName];
}
