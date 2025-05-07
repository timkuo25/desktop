import Image from 'next/image';

const Card = ({ name, description, color, selectedCol, setSelectedCol, selectedProd, setSelectedProd }) => {
  if (name === undefined) return <div className='card' style={{ cursor: 'default' }}></div>

  return (
    <div
      className='card'
      style={
        selectedProd.name === name && selectedProd.description === description
          ? { border: '1px solid black' }
          : { border: '1px solid rgb(0, 0, 0, 0)' }
      }
      onClick={() => {
        setSelectedProd({ name: name, description: description });
        setSelectedCol(color[0]);
      }}
    >
      <Image
        src='/lip$tick.png'
        width={50}
        height={50}
        alt='/head.png'
      />
      <div className='tone'>{
        selectedProd.name === name && selectedProd.description === description
        ? selectedCol.tone
        : color[0].tone
        }
      </div>
      <div className='name'>{name}</div>
      <div className='description'>{description}</div>
      <div className='price'>$ 15,290</div>
    </div>
  );
}

export default Card;