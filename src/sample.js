import React from 'react'

export const Sample = () => {
    let color = ["red","green","blue","white"];

    const changeColors = colors => {
        colors[3] = "black";
        return colors;
    }

    const handleClick = () => {
        console.log("New Color", changeColors(color));
        console.log("Old Colors", color);
    }
  return (
    <div>
        <button onClick={() => handleClick()}>Get New Colors</button>
    </div>
  )
}
