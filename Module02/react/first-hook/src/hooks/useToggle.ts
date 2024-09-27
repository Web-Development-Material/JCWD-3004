import { useState } from "react";

export function useToggle(initialState: boolean = false) {
  const [trigger, setTrigger] = useState<boolean>(initialState);

  function toggle() {
    setTrigger(!trigger);
  }

  return { trigger, toggle };
}
