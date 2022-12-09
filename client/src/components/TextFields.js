import { TextField } from "@mui/material";
import React from "react";

function TextFields({cardData, setCardData}){
    const changeHandler = (id, value)=>{
        var newCardData = {...cardData};
        newCardData[id] = value;
        setCardData(newCardData);
    }

    return(
        <div style={{display:"flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {
                Object.keys(cardData).map((item, id)=>{
                    return (
                    <TextField 
                        key={`${item}${id}`} 
                        label={item} 
                        variant="standard" 
                        value={cardData[item]}
                        onChange={(e)=>changeHandler(item, e.target.value)}/>);
                })
            }
        </div>
    );
}

export default TextFields; 