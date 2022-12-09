import React from "react"
import { useState } from "react";
import { Backdrop, Box, Typography, Fade, Modal, TextField, Button, Switch, FormControlLabel } from "@mui/material";


function SectionModal(props) {
    if (props.varient == "edit")
        return (<SectionEditModal {...props} />)
    else
        return (<SectionAddModal {...props} />);
}


function SectionAddModal({ sectionAdder, open, setOpen }) {
    const [fieldCount, setFieldCount] = useState(0);
    const [fields, setFields] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(true);

    const clickHandler = (e) => {
        if (fieldCount < 0 || fieldCount > 5)
            return;
        var incorrectInput = false;
        if (isNaN(fieldCount))
            incorrectInput = true;
        var fieldsLabel = [];
        fields.forEach((element, id) => {
            if (element === "")
                incorrectInput = true;
            fieldsLabel.push(element);
        })
        if (incorrectInput) {
            alert("incorrect input");
            return;
        }

        sectionAdder(title, fieldsLabel, description);
        setOpen(false);
    }

    // TODO: put debouncer
    const fieldCountHandler = (e) => {
        if (e.target.value > 5)
            e.target.value = 5;
        setFieldCount(e.target.value);
        setFields(Array.from({ length: e.target.value }, (e, i) => ""))
    }

    const fieldLabelInputHandler = (e, i) => {
        var newFieldLabels = [...fields]
        newFieldLabels[i] = e;
        setFields(newFieldLabels);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        backgroundColor: "white",
        p: 4,
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => { setOpen(false) }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        New Section
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            label="Section Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ marginBottom: "5px" }} />
                        <TextField
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            onChange={fieldCountHandler}
                            value={fieldCount}
                            helperText="Max 5"
                            label="Number of Fields in section" />
                        <br />
                        Add description section
                        <Switch onChange={() => { setDescription(!description) }} defaultChecked />
                        <br />
                        Enter name of fields:<br />
                        {
                            Array.from(
                                { length: fieldCount },
                                (ele, i) => {
                                    return (
                                        <TextField
                                            label="Field title"
                                            value={fields[i]}
                                            onChange={(e) => fieldLabelInputHandler(e.target.value, i)} />)
                                }
                            )
                        }

                    </Typography>

                    <Button variant="contained" color="success" onClick={clickHandler}>
                        Create
                    </Button>
                </Box>
            </Fade>
        </Modal>
    )
}

function SectionEditModal({ open, setOpen, section, editHandler }) {
    const [title, setTitle] = useState(section.title);
    const [fieldCount, setFieldCount] = useState(Object.keys(section.cards[0].fields).length);
    const [fields, setFields] = useState(Object.keys(section.cards[0].fields));
    const [description, setDescription] = useState(section.cards[0].description !== undefined);

    const clickHandler = (e) => {
        if (fieldCount < 0 || fieldCount > 5)
            return;
        var fieldsLabel = [];
        fields.forEach((element, id) => {
            fieldsLabel.push(element);
        })
        editHandler(title, fieldsLabel, description);
        setOpen(false);
    }

    // TODO: put debouncer
    const fieldCountHandler = (e) => {
        if (e.target.value > 5)
            e.target.value = 5;
        setFieldCount(e.target.value);
        setFields(Array.from({ length: e.target.value }, (e, i) => ""))
    }

    const fieldLabelInputHandler = (e, i) => {
        var newFieldLabels = [...fields]
        newFieldLabels[i] = e;
        setFields(newFieldLabels);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        backgroundColor: "white",
        p: 4,
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => { setOpen(false) }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Edit Section
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            label="Section Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ marginBottom: "5px" }} />
                        <TextField
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            onChange={fieldCountHandler}
                            value={fieldCount}
                            helperText="Max 5"
                            label="Number of Fields in section"
                        />
                        <br />

                        Add description section: 
                        <Switch onChange={() => { setDescription(!description) }} checked={description} />
                        <br />
                        Edit fields label:<br />
                        {
                            Object.keys(fields)
                                .map(i =>
                                    <TextField
                                        label="Field title"
                                        value={fields[i]}
                                        onChange={(e) => fieldLabelInputHandler(e.target.value, i)} />
                                )
                        }

                    </Typography>

                    <Button variant="contained" color="success" onClick={clickHandler}>
                        Edit
                    </Button>
                </Box>
            </Fade>
        </Modal>
    )
}

export default SectionModal;