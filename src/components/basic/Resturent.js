import React, {useState} from "react";

import "./style.css"
import Menu from "./MenuApi.js"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar";
const uniqueList= 
[
    ...new Set(
    Menu.map((curElem) =>{
        return curElem.category;
    })
),
"All",
];
console.log(uniqueList);

const Resturent = () => {
    const [MenuData, setMenuData] = useState(Menu);
    const [ MenuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) =>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category===category;
        }
        );
        setMenuData(updatedList);
    };
    
    return (
        <>
    <Navbar filterItem ={filterItem }/>
        <MenuCard MenuData ={MenuData}/>   
        </>
    )
}

export default Resturent;
