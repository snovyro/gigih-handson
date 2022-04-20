import React from "react";

export default function FormComp({ onSubmit, onChange }) {
  return (
    <>
      <form action="#" onSubmit={onSubmit}>
        <input
          name="search"
          autoComplete="off"
          id="search"
          type="text"
          onChange={onChange}
        />
        <button>Cari</button>
      </form>
    </>
  );
}
