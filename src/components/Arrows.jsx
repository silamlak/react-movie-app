import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const Arrow = ({
  children,
  disabled,
  onClick
})=> {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    items,
    scrollToItem,
    getItemElementById
  } = useContext(VisibilityContext);

  return (
    <Arrow
      disabled={!items.length}
      onClick={() => {
        if (isFirstItemVisible) {
          scrollToItem(getItemElementById(items[items.length - 1][0]));
        } else {
          scrollPrev();
        }
      }}
    >
      Left
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    items,
    scrollToItem,
    getItemElementById
  } = useContext(VisibilityContext);

  return (
    <Arrow
      disabled={!items.length}
      onClick={() => {
        if (isLastItemVisible) {
          scrollToItem(getItemElementById(items[0][0]));
        } else {
          scrollNext();
        }
      }}
    >
      Right
    </Arrow>
  );
}
