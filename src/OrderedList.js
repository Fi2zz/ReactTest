import React from "react";

export function OrderedList({ children }) {
  return <ol>{children}</ol>;
}

export const OrderedListItem = ({ children }) => {
  return <li className="text-white"> {children}</li>;
};
