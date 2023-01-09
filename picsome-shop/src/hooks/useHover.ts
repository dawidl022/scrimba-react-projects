import React, { useEffect, useRef, useState } from "react";

type Hoverable<T extends HTMLElement> = [
  isHovered: boolean,
  hoverableRef: React.RefObject<T>
];

const useHover = <T extends HTMLElement>(): Hoverable<T> => {
  const [isHovered, setHovered] = useState(false);
  const hoverable = useRef<T>(null);

  const activate = () => setHovered(true);
  const deactivate = () => setHovered(false);

  const listeners = {
    focus: activate,
    mouseenter: activate,
    blur: deactivate,
    mouseleave: deactivate,
  };

  useEffect(() => {
    const hoverableNode = hoverable.current;

    for (const [event, handler] of Object.entries(listeners)) {
      hoverableNode?.addEventListener(event, handler);
    }

    return () => {
      for (const [event, handler] of Object.entries(listeners)) {
        hoverableNode?.removeEventListener(event, handler);
      }
    };
  }, []);

  return [isHovered, hoverable];
};

export default useHover;
