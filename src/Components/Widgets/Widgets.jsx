
const Widgets = ({icon, text, matrixs}) => {
  return (
    <div style={{border: '0.7px solid #ddd', borderRadius: 8, padding: '0.8rem', flex: 1}} className='flex flex-justify-between'>
      <div>
        {icon}
      </div>
      <div >
        <p style={{fontSize: '0.94rem', color: '#737373', fontWeight: 500}}>{text}</p>
        <h2 style={{fontSize: '2rem', color: '#737373', fontWeight:600}}>{matrixs}</h2>
      </div>
    </div>
  )
}

export default Widgets;