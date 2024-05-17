import React, { useState } from "react";

const Sidebar = (props) => {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const [active, setActive] = useState(0);
    const [sideBar,setSideBar] = useState(false)

    function sending(cat, index) {
        setActive(index); // Update active category
        props.sampleChanege(cat); // Call parent function with selected category
    }
   
     function changeCatBox(){

        if(!sideBar){
        setSideBar(true)
        }else{
            setSideBar(false)
        }
     }

   if(sideBar){
  return(
     <div className="menu-icon" onClick={changeCatBox}>
                <div className="top-menu" />
                <div className="top-menu" />
                <div className="top-menu" />
            </div>
  )
   }else{

    return (
        <aside className="sidebar">
        <div className="close-btn" onClick={changeCatBox}>×</div>
        <h2>Categories</h2>
        <ul>
            {categories.map((cat, index) => (
                <li
                    key={index}
                    className={active === index ? 'active' : ''}
                    onClick={() => sending(cat, index)}
                >
                    {cat}
                </li>
            ))}
        </ul>
    </aside>



    );

   }

   
};

export default Sidebar;
