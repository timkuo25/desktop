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
  const [selectedProd, setSelectedProd] = useState(
    { name: 'Concentré Total', description: '10 beneficios en 1' }
  );
  const [selectedCol, setSelectedCol] = useState(
    { tone: 'ROUGE CORAIL', hex: '#bd233e'}
  );
  const [cardNum, setCardNum] = useState(1);

  let catInfo;
  let subCatOptions;
  let subCatProd;
  let prodCol;

  if (selectedCat !== 'Looks') {
    catInfo = data.filter(item => item.category === selectedCat)[0].info;
    
    subCatOptions = catInfo.map(item =>
      ({ value: item.subcategory, label: item.subcategory })
    );

    subCatProd = catInfo.filter(
      item => item.subcategory === selectedSubCat
    )[0].products;
    
    prodCol = subCatProd.filter( item =>
      item.name === selectedProd.name &&
      item.description === selectedProd.description
    )[0].color;
  }

  const toggleCat = (item) => {
    if (item.category === 'Looks'){
      setSelectedCat(item.category)
      return;
    }
    const subcatItem = data.filter(i => i.category === item.category)[0].info[0];
    const subcat = subcatItem.subcategory;
    const subcatFirstProd = subcatItem.products[1];

    setSelectedCat(item.category);
    setSelectedSubCat(subcat);
    setCardNum(1);
    setSelectedProd({ name: subcatFirstProd.name, description: subcatFirstProd.description });
    setSelectedCol({ tone: subcatFirstProd.color[0].tone, hex: subcatFirstProd.color[0].hex});
  }
  
  const toggleSubCat = option => {
    const subcatItem = catInfo.filter(i => i.subcategory === option.value)[0];
    const subcatFirstProd = subcatItem.products[1];
    
    setSelectedSubCat(option.value);
    setCardNum(1);
    setSelectedProd({ name: subcatFirstProd.name, description: subcatFirstProd.description });
    setSelectedCol({ tone: subcatFirstProd.color[0].tone, hex: subcatFirstProd.color[0].hex});
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
    setSelectedCol({ tone: prodCol[0].tone, hex: ''});
  }

  const customStyles = {
    control: provided => ({
      ...provided,
      fontFamily: 'Gotham',
      fontSize: '14px',
      height: '50px',
      width: '100%',
      borderRadius: '0px',
      borderColor: 'rgb(239, 239, 239)',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'rgb(239, 239, 239)',
      },
    }),

    menu: (base) => ({ ...base, width: '100%' }),

    option: (provided, { isSelected, data, selectProps }) => ({
      ...provided,
      fontFamily: 'Gotham',
      fontSize: '14px',
      backgroundColor: "#FFF",
      borderBottom:
        selectProps.options[selectProps.options.length - 1].value === data.value 
        ? 'none' 
        :'1px solid rgb(239, 239, 239)',
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
          <Image
            className='close'
            src={`/close.png`}
            width={15}
            height={15}
            alt='close'
          />
        </header>
        <nav className='category'>
          {data.map((item) => (
            <button 
              key={item.category}
              style={selectedCat === item.category ? {
                filter: 'invert(24%) sepia(38%) saturate(1000%) hue-rotate(206deg) brightness(0.75)',
                borderBottom: '2px solid black'
              } : {}}
              onClick={() => toggleCat(item)}
            >
              <Image
                key={item.category}
                src={`/category_icons/${item.category}.png`}
                alt={item.category}
                width={24}
                height={24}
              />
              <h3>{item.category}</h3>
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
            <div className='selection-holder'>
              {
                selectedCat === 'Rubores' ? null :
                <Select
                  options={subCatOptions}
                  onChange={toggleSubCat}
                  defaultValue={[subCatOptions[0]]}
                  isSearchable={false}
                  components={{ IndicatorSeparator, DropdownIndicator }}
                  styles={customStyles}
                  value={{ value: selectedSubCat, label: selectedSubCat }}
                />
              }
            </div>
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
                      name={item.name}
                      description={item.description}
                      color={item.color}
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
                    subCatProd.length - 2 ? 'hidden' : 'visible'
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
                  tone={item.tone}
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