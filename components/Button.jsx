import React from 'react'

const Button = ({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
  }) => {
  return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
  )
}

export default Button