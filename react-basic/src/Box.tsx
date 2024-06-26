import React from "react";

interface props {
  heading: string;
}

export const Box = ({ heading }: props) => {
  return <div>{heading}</div>;
};
