import React from "react";

export default function Button(props) {
  const { text } = props;
  return (
    <div>
      <button type="button">{text}</button>
    </div>
  );
}
