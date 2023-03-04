import { useState } from 'react'
import '../styles/Button.css'

function Button({ text }) {

  return (
    <div className="Button">
      { text }
    </div>
  )
}

export default Button
