const ColorBlock = ({ tonos, hex, selectedCol, setSelectedCol, setNoColor }) => {
  if (tonos === undefined) return (
    <div 
      className='color-block'
      style={{
        backgroundImage: 'url("/no_color.png")',
        backgroundSize: 'cover',
      }}
      onClick={() => {
        setNoColor();
      }}
    ></div>
  )

  return (
    <div 
      className='color-block'
      style={{
        border: selectedCol.tonos === tonos && selectedCol.hex === hex
          ? '1px solid black'
          : 'none',
      }}
      onClick={() => {
        setSelectedCol({ tonos: tonos, hex: hex });
      }}
    >
      <div 
        style={{ 
          backgroundColor: hex, 
          width: '100%',
          height: '100%',
        }}>  
      </div>
    </div>
  );
}

export default ColorBlock;