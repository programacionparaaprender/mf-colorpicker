import React, { useState } from 'react';

import './ColorPicker.css'
import useColors from '../hooks/useColors';

const ColorPicker = ({ color, colorListado, handleChangeColor, handleSubmitSaveColor}) => {
 return (
    <form onSubmit={handleSubmitSaveColor}>
      <input 
        value={color}
        type="color" 
        onChange={handleChangeColor}
        className="form-control colorPicker"
        title="Seleccione un color..." />
        <div className="text-center">
            <h2 className="mt-3 fw-bolder">
            <div id="colorBolita" className="textoColorpicker"></div>
            {color}
          </h2>
          <button type="submit" className="btn btn-success">
            Guardar color
          </button>
          
        </div>
    </form>
  )
}

export default ColorPicker;