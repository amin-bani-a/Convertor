import React from "react";

export default function CurrencyRow() {
  return (
    <div>
      <input type="number" className="input" />
      <select>
        <option value={"euro"}>Euro</option>
      </select>
    </div>
  );
}
