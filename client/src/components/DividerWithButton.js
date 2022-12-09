import React from "react"
import { Chip, Divider } from "@mui/material";
import { useState } from "react";
import AddButton from "./AddButton";
import SectionModal from "./SectionModal";

function DividerWithButton({sectionAdder}) {
    const [enter, setEnter] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div 
            onMouseEnter={(e) => { setEnter(true) }} 
            onMouseLeave={() => { setEnter(false) }} 
            style={{ 
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                minHeight: "40px"}}
            >
            <div>
            <Divider variant="middle">
                {enter && <Chip icon={<AddButton />} onClick={() => setOpen(true)} label="add section" style={{ padding: "5px" }} />}
            </Divider>
            </div>
            <SectionModal varient="new" sectionAdder={sectionAdder} open={open} setOpen={setOpen}/>
        </div>
    );
}

export default DividerWithButton;