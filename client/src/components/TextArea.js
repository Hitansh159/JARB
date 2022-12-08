import React, { useEffect } from 'react';
import { Editor, EditorState, convertToRaw, ContentState } from 'draft-js';

import 'draft-js/dist/Draft.css';
import { useState } from 'react';
import { TextField } from '@mui/material';

// TODO: Make Editor with options
function TextArea({ description, label, setDescription }) {

  const updateHandler = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div style={{ margin: "15px" }}>
      {label} <br/>
      <TextField multiline value={description} onChange={updateHandler} style={{width:"40%"}} />
    </div>
  )
};


export default TextArea;