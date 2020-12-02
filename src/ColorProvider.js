import React, {useState, useContext } from 'react'
import data from './components/data'

const ColorContext = React.createContext({});
export const useColors=()=>useContext(ColorContext)

export default function ColorProvider({ children }){
const [colors,setColors]=useState(data);
const addColor=(title,color)=>{
const newColors=[
    {
        id:Math.random(),
        color:color,
        title:title,
        rating:3
    },
    ...colors,
];
setColors(newColors);
}

const rateColor=(id,rating)=>{
    console.log('id'+id+' ,rating'+rating)
const newColors=colors.map(c=>c.id!==id?c:{
    ...c,
    rating,
});
setColors(newColors);
}

const removeColor = (id) => {
    const newColors = colors.filter(c => c.id !== id);
    setColors(newColors);
  };
    return (
        <ColorContext.Provider value={{colors,addColor,removeColor,rateColor}}>
        {children}
        </ColorContext.Provider>
    )

}