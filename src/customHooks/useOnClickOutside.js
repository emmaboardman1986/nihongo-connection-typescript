import { useEffect } from "react";

export const useOnClickOutside = (ref, handler, currentState) => {
  console.log("click");
  useEffect(() => {
    // if (!currentState.isDropDownExpanded) {
    //   return;
    // }
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener); // TODO: account for keyboard space and enter
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler, currentState]);
};
