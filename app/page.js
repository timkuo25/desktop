'use client'

import { useState } from "react";
import Image from 'next/image';
import Card from "./components/Card";
import ColorBlock from "./components/ColorBlock";
import data from "@/public/data";
import Select from "react-select";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState('Labiales');
  const [selectedSubCat, setSelectedSubCat] = useState('Rojos');
  const [selectedProd, setSelectedProd] = useState({ nombre: 'Concentré Total', descripcion: '10 beneficios en 1' });
  const [selectedCol, setSelectedCol] = useState({ tonos: 'ROUGE CORAIL', hex: '#bd233e'});
  const [cardNum, setCardNum] = useState(1);

  let catInfo;
  let subCatOptions;
  let subCatProd;
  let prodCol;

  if (selectedCat !== 'Looks') {
    catInfo = data.filter(item => item.categoria === selectedCat)[0].info;
    
    subCatOptions = catInfo.map(item => ({ value: item.subcategoria, label: item.subcategoria }));

    subCatProd = catInfo.filter(
      item => item.subcategoria === selectedSubCat
    )[0].productos;
    
    prodCol = subCatProd.filter( item =>
      item.nombre === selectedProd.nombre &&
      item.descripcion === selectedProd.descripcion
    )[0].couleur;
  }

  const toggleCat = (item) => {
    if (item.categoria === 'Looks'){
      setSelectedCat(item.categoria)
      return;
    }
    const subcatItem = data.filter(i => i.categoria === item.categoria)[0].info[0];
    const subcat = subcatItem.subcategoria;
    console.log(subcat);
    const subcatFirstProd = subcatItem.productos[1];

    setSelectedCat(item.categoria);
    setSelectedSubCat(subcat);
    setCardNum(1);
    setSelectedProd({ nombre: subcatFirstProd.nombre, descripcion: subcatFirstProd.descripcion });
    setSelectedCol({ tonos: subcatFirstProd.couleur[0].tonos, hex: subcatFirstProd.couleur[0].hex});
  }
  
  const toggleSubCat = option => {
    const subcatItem = catInfo.filter(i => i.subcategoria === option.value)[0];
    const subcatFirstProd = subcatItem.productos[1];
    
    setSelectedSubCat(option.value);
    setCardNum(1);
    setSelectedProd({ nombre: subcatFirstProd.nombre, descripcion: subcatFirstProd.descripcion });
    setSelectedCol({ tonos: subcatFirstProd.couleur[0].tonos, hex: subcatFirstProd.couleur[0].hex});
  }

  const toggleCard = (add) => {
    const len = subCatProd.length;
    if (add) {
      if (cardNum < len - 2)
      setCardNum(prev => prev + 1);
    } else {
      if (cardNum > 1)
      setCardNum(prev => prev - 1);
    }
  }

  const setNoColor = () => {
    setSelectedCol({ tonos: prodCol[0].tonos, hex: prodCol[0].tonos});
  }

  const customStyles = {
    control: provided => ({
      ...provided,
      fontFamily: 'Gotham',
      fontSize: '14px',
      height: '50px',
      width: '100%',
      borderColor: 'rgb(239, 239, 239)',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'rgb(239, 239, 239)',
      },
    }),

    menu: (base) => ({ ...base, width: '100%' }),

    option: (provided, { isSelected }) => ({
      ...provided,
      fontFamily: 'Gotham',
      fontSize: '14px',
      backgroundColor: "#FFF",
      borderBottom: '1px solid rgb(239, 239, 239)',
      width: '95%',
      padding: '15px 0px',
      margin: 'auto',

      color: isSelected ? "#614B79" : "#000",
      fontWeight: isSelected ? "bold" : "normal",
      cursor: 'pointer',
      ':active': {
        backgroundColor: 'FFF',
      },
    })
  }

  const IndicatorSeparator = () => null;
  const DropdownIndicator = () => 
    <Image
      src='/dropdown.png'
      alt='dropdown'
      width={22}
      height={22}
      style={{ marginRight: '15px', cursor: 'pointer' }}
    />

  return (
    <>
      <div className='top'>
        <header>
          <h2 className='title'>Maquillador virtual</h2>
          <Image
            className='lbel'
            src={`/lbel.png`}
            width={90}
            height={40}
            alt='lbel'
          />
          <button className='close'></button>
        </header>
        <nav className='category'>
          {data.map((item) => (
            <button 
              key={item.categoria}
              style={selectedCat === item.categoria ? {
                filter: 'invert(24%) sepia(38%) saturate(1000%) hue-rotate(206deg) brightness(0.75)',
                borderBottom: '2px solid black'
              } : {}}
              onClick={() => toggleCat(item)}
            >
              <Image
                key={item.categoria}
                src={`/category_icons/${item.categoria}.png`}
                alt={item.categoria}
                width={24}
                height={24}
              />
              <h3>{item.categoria}</h3>
            </button>
          ))}
        </nav>
      </div>
      <div className='showcase'>
        <div className='display'>
          <Image
            src='/head.png'
            width={452}
            height={550}
            alt='head'
          />
        </div>
        {
          selectedCat === 'Looks' ? null : 
          <div className='selection'>
            <Select
              options={subCatOptions}
              onChange={toggleSubCat}
              defaultValue={[subCatOptions[0]]}
              isSearchable={false}
              components={{ IndicatorSeparator, DropdownIndicator }}
              styles={customStyles}
              value={{ value: selectedSubCat, label: selectedSubCat }}
            />
            <div className='display-cards'>
              <button className='shift'
                style={{ 
                  backgroundImage: 'url("/shift_left.png")',
                  visibility: cardNum === 1 ? 'hidden' : 'visible'
                }}
                onClick={() => toggleCard(false)}>
              </button>
              <div className='card-holder'>
                {
                  subCatProd.filter((_, idx) => 
                    idx >= cardNum - 1 && idx <= cardNum + 1
                  ).map((item, idx) => (
                    <Card
                      key={idx}
                      nombre={item.nombre}
                      descripcion={item.descripcion}
                      couleur={item.couleur}
                      selectedCol={selectedCol}
                      selectedProd={selectedProd}
                      setSelectedProd={setSelectedProd}
                      setSelectedCol={setSelectedCol}
                    />
                  ))
                }
              </div>
              <button className='shift'
                style={{
                  backgroundImage: 'url("/shift_right.png")',
                  visibility: cardNum ===
                    data.filter(item => item.categoria === selectedCat)[0]
                    .info.filter(item => item.subcategoria === selectedSubCat)[0]
                    .productos.length - 2 ? 'hidden' : 'visible'
                }}
                onClick={() => toggleCard(true)}
              >
              </button>
            </div>
            <div className='color-container'>
              <ColorBlock
                setSelectedCol={setSelectedCol}
                setNoColor={setNoColor}
              />
              {prodCol.map((item, idx) => (
                <ColorBlock
                  key={idx}
                  tonos={item.tonos}
                  hex={item.hex}
                  selectedCol={selectedCol}
                  setSelectedCol={setSelectedCol}
                />
              ))}
            </div>
            <div className='submit-container'>
              <button className='submit'>Agregar a la bolsa</button>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Home;