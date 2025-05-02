import Image from 'next/image';

const Card = ({ nombre, descripcion, couleur, selectedCol, setSelectedCol, selectedProd, setSelectedProd }) => {
  if (nombre === undefined) return <div className='card'></div>

  return (
    <div
      className='card'
      style={
        selectedProd.nombre === nombre && selectedProd.descripcion === descripcion
          ? { border: '1px solid black', cursor: 'pointer'}
          : { border: 'none', cursor: 'pointer' }
      }
      onClick={() => {
        setSelectedProd({ nombre: nombre, descripcion: descripcion });
        setSelectedCol(couleur[0]);
      }}
    >
      <Image
        src='/lip$tick.png'
        width={50}
        height={50}
        alt='/head.png'
      />
      <div className='tonos'>{
        selectedProd.nombre === nombre && selectedProd.descripcion === descripcion
        ? selectedCol.tonos
        : couleur[0].tonos
        }
      </div>
      <div className='nombre'>{nombre}</div>
      <div className='descripcion'>{descripcion}</div>
      <div className='price'>$ 15,290</div>
    </div>
  );
}

export default Card;