const ColorBlock = ({ tone, hex, selectedCol, setSelectedCol, setNoColor }) => {
  if (tone === undefined) return (
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
        border: selectedCol.tone === tone && selectedCol.hex === hex
          ? '2px solid black'
          : 'none',
      }}
      onClick={() => {
        setSelectedCol({ tone: tone, hex: hex });
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