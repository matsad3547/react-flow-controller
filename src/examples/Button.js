import React from 'react'

const Button = ({
  color,
  label,
  background,
  onClick,
}) => (
  <button type="button" style={getStyles(color, background)} onClick={onClick}>{label}</button>
)

const getStyles = (color, background) => ({
  padding: '1em',
  color,
  background,
})

export default Button
