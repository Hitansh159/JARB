import React from "react";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextFields from '../components/TextFields';
import TextArea from '../components/TextArea';
import DividerWithButton from '../components/DividerWithButton';
import { Box, Alert } from "@mui/material";

import SectionModal from "./SectionModal";
import Card from "./Card";
import AddButton from "./AddButton";
import Cards from "./Cards";

// TODO: start GENRATE part  
function Section({ title, index, sections, setSections }) {
    const [sectionStyle, setSectionStyle] = useState({ display: "flex", alignItems: "center", backgroundColor: "white" });
    const [open, setOpen] = useState(false);

    const styleChange = (changes) => {
        var newStyle = { ...sectionStyle, ...changes };
        setSectionStyle(newStyle);
    }
    // TODO: rewrite
    const editHandler = (title, fields, description) => {
        var newSections = [...sections];
        let newSection = { title: title, cards: [] };
        newSections[index].cards.forEach((ele, i) => {
            var card = {"fields":{}};
            fields.forEach((label, idl) => {
                if (ele.fields[label])
                    card.fields[label] = ele.fields[label];
                else
                    card.fields[label] = ""
            })
            if(description)
                card["description"] = newSections[index].cards[newSection.cards.length].description || "";
            newSection.cards.push(card);
        })
        newSections.splice(index, 1, newSection);
        console.log(newSections);
        setSections(newSections);
    }
    const updateSection = (index, data) => {
        var newSection = [...sections]
        newSection[index] = data;
        setSections(newSection);
    }

    return (
        <div style={sectionStyle}>
            <Box style={{ width: "100%", padding: "10px" }}>
                <DividerWithButton sectionAdder={(title, fields, description) => sectionAdder(sections, setSections, index, title, fields, description)} />
                <Box>
                    <h3>{title}</h3>
                    <Cards 
                    title={title} 
                    sectionData={sections[index]} 
                    setSectionData={(newSectionData) => updateSection(index, newSectionData)} />

                </Box>
            </Box>
            <div>
                <EditIcon
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => styleChange({ backgroundColor: "#EEEEEE" })}
                    onMouseLeave={() => styleChange({ backgroundColor: "white" })}
                />
                <DeleteIcon
                    onClick={(e) => { sectionRemover(index, sections, setSections) }}
                    onMouseEnter={() => styleChange({ backgroundColor: "#FF00005c" })}
                    onMouseLeave={() => styleChange({ backgroundColor: "white" })} />
                {
                    open &&
                    <SectionModal
                        varient="edit"
                        open={open}
                        setOpen={setOpen}
                        section={sections[index]}
                        editHandler={editHandler} />}
            </div>
        </div>
    );
}

function sectionRemover(sectionId, sections, setSections) {
    var temp = [...sections];
    temp.splice(sectionId, 1);
    setSections(temp);
}

function sectionAdder(sections, setSections, index, title, fieldNames, description) {
    var temp = [...sections]
    var newObject = { "title": title, "cards": [{"fields":{}}] }
    if(description)
        newObject.cards[0]["description"] = ""
    fieldNames.forEach((element, id) => {
        newObject["cards"][0]["fields"][element] = "";
    });
    temp.splice(index, 0, newObject);
    setSections(temp);
}

export default Section;