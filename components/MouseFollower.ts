"use strict";

import { MousePosition, MouseSettings } from "@/types/mouseFollower";
import {
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
type defaultMousePropertiesType = { radius: number };
var jsxRuntime = require("react/jsx-runtime");

function FollowerDiv({
  pos,
  options,
}: {
  pos: MousePosition;
  options: MouseSettings;
}) {
  const calculatePosition = () => {
    if (options.customLocation != undefined) {
      return { x: options.customLocation.x, y: options.customLocation.y };
    } else if (options.customPosition != undefined) {
      const rect = options.customPosition.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - (options.radius ?? 0);
      const y = rect.top + rect.height / 2 - (options.radius ?? 0);
      return { x, y };
    } else {
      return { x: pos.x, y: pos.y };
    }
  };
  return jsxRuntime.jsx(motion.div, {
    initial: {
      x: pos.x,
      y: pos.y,
      scale: 0,
    },
    animate: {
      x: calculatePosition().x,
      y: calculatePosition().y,
      scale: options.scale || 1,
      rotate: options.rotate || 0,
    },
    exit: {
      x: pos.x,
      y: pos.y,
      scale: 0,
    },
    style: {
      backgroundColor: options.backgroundColor || "black",
      mixBlendMode: options.mixBlendMode || "initial",
      zIndex: options.zIndex || -5,
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "min-content",
      height: "min-content",
      borderRadius: "9999px",
      overflow: "hidden",
    },
    transition: {
      type: "tween",
      duration: options.followSpeed ? 0.3 / options.followSpeed : 0.3,
      ease: "circOut",
    },
    id: "mouse-follower",
    children: jsxRuntime.jsx("div", {
      style: {
        width: `${options.radius ? options.radius * 2 : 12}px`,
        height: `${options.radius ? options.radius * 2 : 12}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      },
      children: jsxRuntime.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        children: [
          options.text && !options.backgroundElement
            ? jsxRuntime.jsx("p", {
              style: {
                width: "85%",
                textAlign: "center",
                lineHeight: options.textLineHeight,
                letterSpacing: options.textLetterSpacing,
                fontFamily: options.textFontFamily,
                fontSize: options.textFontSize
                  ? options.textFontSize
                  : "12px",
                color: options.textColor ? options.textColor : "white",
              },
              children: options.text,
            })
            : null,
          options.backgroundElement ? options.backgroundElement : null,
        ],
      }),
    }),
  });
}

function FollowerInitialiserComponent({ options }: { options: MouseSettings }) {
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    const body = document.querySelector("body");
    body!.addEventListener("mouseleave", handleMouseLeave);
    body!.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      body!.removeEventListener("mouseleave", handleMouseLeave);
      body!.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
  useEffect(() => {
    const mouseMove = (event: any) => {
      setPos({
        x: event.clientX - (options.radius ?? 0),
        y: event.clientY - (options.radius ?? 0),
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [options === null || options === void 0 ? void 0 : options.radius]);
  return jsxRuntime.jsx(AnimatePresence, {
    mode: "wait",
    children:
      isHovering && options.visible !== false
        ? jsxRuntime.jsx(FollowerDiv, { options: options, pos: pos })
        : null,
  });
}

const defaultMouseProperties: defaultMousePropertiesType = {
  radius: 12 / 2,
};
const useStack = () => {
  const [stack, setStack] = useState<defaultMousePropertiesType[]>([
    defaultMouseProperties,
  ]);
  const push = (options: MouseSettings) => {
    setStack((prevStack) => {
      const item = Object.assign(
        Object.assign(
          Object.assign({}, defaultMouseProperties),
          prevStack[prevStack.length - 1]
        ),
        options
      );
      return [...prevStack, item];
    });
  };
  const pop = () => {
    let item = {};
    setStack((prevStack) => {
      item = prevStack.pop() ?? {};
      return [...prevStack];
    });
    return item;
  };
  const peek = () => {
    if (stack.length > 0) {
      return stack[stack.length - 1];
    }
    return defaultMouseProperties;
  };
  const isEmpty = () => {
    return stack.length === 0;
  };
  const clear = () => {
    setStack([]);
  };
  const size = () => {
    return stack.length;
  };
  const logStack = () => {
    console.log("logging all layers");
    stack.forEach((item, i) => {
      console.log(i, item);
    });
  };
  return {
    stack,
    push,
    pop,
    peek,
    isEmpty,
    clear,
    size,
    logStack,
  };
};

const MousePropertiesContext = createContext(null);
export const FollowerProvider = ({
  visible,
  children,
}: {
  visible?: boolean;
  children?: ReactNode;
}) => {
  const layerStack = useStack();
  const addLayer = (layerOptions: any) => {
    layerStack.push(layerOptions);
  };
  const removeLayer = () => {
    layerStack.pop();
  };
  const value = {
    addLayer,
    removeLayer,
    clearStack: layerStack.clear,
    logStack: layerStack.logStack,
    peekStack: layerStack.peek,
  };
  return jsxRuntime.jsxs(MousePropertiesContext.Provider, {
    value: value,
    children: [
      visible !== false
        ? jsxRuntime.jsx(FollowerInitialiserComponent, {
          options: layerStack.peek(),
        })
        : null,
      children,
    ],
  });
};
type UpdateFollowerType = {
  mouseOptions: MouseSettings;
  style?: CSSProperties;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  children?: ReactNode;
};
export function UpdateFollower({
  mouseOptions,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}: UpdateFollowerType) {
  const { addLayer, removeLayer } = useContext<any>(MousePropertiesContext);
  function handleMouseEnter() {
    addLayer(mouseOptions);
    if (onMouseEnter) {
      onMouseEnter();
    }
  }
  function handleMouseLeave() {
    removeLayer();
    if (onMouseLeave != null) {
      onMouseLeave();
    }
  }
  return jsxRuntime.jsx("div", {
    style: style,
    className: className,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: onClick,
    children: children,
  });
}

function useControlOptions() {
  const { addLayer, removeLayer, clearStack, logStack, peekStack } =
    useContext<any>(MousePropertiesContext);
  return {
    addOptionLayer: addLayer,
    removePreviousLayer: removeLayer,
    clearAllLayers: clearStack,
    logAllLayers: logStack,
    topMostLayer: peekStack,
  };
}
