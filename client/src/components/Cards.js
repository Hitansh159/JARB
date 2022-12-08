import React, { useState } from "react";
import AddButton from "./AddButton";
import Card from "./Card";

function Cards({ title, sectionData, setSectionData }) {

    const addCard = (id) => {
        let newCardData = { ...sectionData };
        newCardData.cards.splice(id, 0, { ...sectionData.cards[id] });
        setSectionData(newCardData);
    }

    const removeCard = (id) => {
        if (sectionData.cards.length === 1)
            return;
        let newCardData = { ...sectionData };
        newCardData.cards.splice(id, 1);
        setSectionData(newCardData);
    }

    const updateCardData = (id, data) => {
        let newCardData = { ...sectionData };
        newCardData.cards[id] = data;
        setSectionData(newCardData);
    }
    return (
        <div>
            {
                sectionData.cards.map((ele, i) => {

                    return (
                        <Card
                            title={title}
                            cardData={ele}
                            setCardData={(data) => updateCardData(i, data)}
                            addCard={() => { addCard(i) }} 
                            removeCard={() => removeCard(i)}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;