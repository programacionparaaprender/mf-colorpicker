import React from 'react'

const getColors = () => {
  return JSON.parse(localStorage.getItem('colors')) || [];
}

export const getLastColors = () => {
    const listColor = getColors();
    return listColor[0] || "#732812";
}

export default getColors;