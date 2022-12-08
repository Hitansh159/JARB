import React, { useEffect, useState } from "react";
import TextFields from "./TextFields";
import TextArea from "./TextArea";
import AddButton from "./AddButton";
import DeleteIcon from '@mui/icons-material/Delete';
import SelectCardIcon from "./SelectCardIcon";
import { Editor, EditorState, convertToRaw, ContentState } from 'draft-js';

const cardCss = {
  borderRadius: "5px",
  backgroundColor: "inherit",
  display: "flex",
  alignItems: "center",
  width: "100%"
}

const buttonCss = { display: "flex", alignItems: "center", borderRadius: "5px", padding: "10px", backgroundColor: "inherit" }

function Card({ title, cardData, setCardData, addCard, removeCard }) {

  const [cardStyle, setCardStyle] = useState({...cardCss, backgroundColor:cardData.selected?"#00ff005c":"inherit"});
  const [addButtonStyle, setAddButtonStyle] = useState(buttonCss);


  const changeStyle = (oldStyle, change, styleSetter) => {
    let newStyle = { ...oldStyle, ...change };
    styleSetter(newStyle);
  }

  const updateData = (data, isFields) => {
    let newCardData = { ...cardData };
    if (isFields)
      newCardData.fields = data;
    else
      newCardData.description = data;
    setCardData(newCardData);
  }

  const selectCard = () => {
    let newCardData = { ...cardData };
    newCardData.selected = !newCardData.selected;
    setCardData(newCardData);
    if(newCardData.selected){
      changeStyle(cardStyle, {backgroundColor:"#00ff005c"}, setCardStyle)
    }
    else{
      changeStyle(cardStyle, { backgroundColor: "inherit" }, setCardStyle)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <div style={cardStyle}>
        <div>
          <SelectCardIcon
            selectCard={()=> selectCard()}
            selected={cardData.selected}
          />
        </div>
        <div style={{ width: "100%" }}>
          <TextFields cardData={cardData.fields} setCardData={(data) => updateData(data, true)} />
          {
            cardData.description !== undefined
            &&
            <TextArea
              description={cardData.description}
              setDescription={(data) => updateData(data, false)}
              label={title + " Description: "}
            />
          }
        </div>
        <div>
          <DeleteIcon
            onClick={removeCard}
            onMouseEnter={() => changeStyle(cardStyle, { backgroundColor: "#FF00005c" }, setCardStyle)}
            onMouseLeave={() => changeStyle(cardStyle, { backgroundColor: cardData.selected?"#00ff005c":"inherit" }, setCardStyle)} />
        </div>
      </div>
      <div
        style={addButtonStyle}
        onMouseEnter={() => changeStyle(addButtonStyle, { backgroundColor: "#00ff005c" }, setAddButtonStyle)}
        onMouseLeave={() => changeStyle(addButtonStyle, { backgroundColor: "inherit" }, setAddButtonStyle)}
        onClick={addCard}
      >
        <AddButton /> Add more {title}
      </div>
    </div>
  )
}

export default Card;