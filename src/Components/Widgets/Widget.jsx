import React from 'react'

const Widget = ({icon, text, matrixs, amount}) => {
  return (
    <div
      style={{
        border: "0.7px solid #ddd",
        borderRadius: 8,
        padding: "1.5rem",
        width: '21.6rem',
        gap: '92px',
        flex: 1,
        justifyContent:'space-evenly'
      }}
      className="flex flex-align"
    >
      <div>{icon}</div>
      <div>
        <p style={{ fontSize: "1rem", color: "#000000", fontWeight: '600' }}>{text}</p>
        <h2 style={{ fontSize: "2rem", color: "#000000", fontWeight: '600' }}>{matrixs}</h2>
        {amount && (
          <p style={{fontSize: '0.94rem', color: '#000000', fontWeight: '600'}}>Total:{`$${amount}`}</p>
        )}
      </div>
    </div>
  );
}

export default Widget