import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';
import ResumeInput from '../Components/ResumeInput';

function SocialLink({ Icon, label, id }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id={id} label={label} variant="standard" />
    </Box>
  );
}

// TODO: Make Editor with options 
const TextArea = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return (
    <div style={{margin: "5px"}}>
      Your content:
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
};

function Section({title, textFieldProps}){
  return (
    <Box>
    <Divider variant="inset" />
    <Box>
      <h3>{title}</h3>

      <Box>
        {textFieldProps.map((element) => {
          return (
          <TextField id={element.id} label={element.label} key={element.id} variant="standard" />
          );
        }
        )}
      </Box>
      <TextArea />
    </Box>
    </Box>
  );
}

// TODO: Devied in component 
// TODO: Style elements better
function HomePage() {

  var expirences = [
    {id:"companyName1", label:"Company Name"},
    {id:"companyLocation1", label:"Company Location"},
    {id:"companyRole1", label:"Company Role"},
    {id:"companyDuration1", label:"Company Duration"}
  ]

  return (
    <>
      
    <div style={{margin: "2% 10%"}}>
      <h1> My Resume </h1>
      <TextField id="fullName" label="Full Name" variant="outlined" />
      <Box sx={{ my: 2.5 }}>
        <SocialLink Icon={GitHub} label="Github ID" id="githubId" />
        <SocialLink Icon={LinkedIn} label="Linkedin ID" id="LinkedinId" />
        <SocialLink Icon={Mail} label="Email ID" id="emailId" />
      </Box>

      <ResumeInput title="Expirence" textFieldProps={expirences}/>
      <TextArea />
      <Divider variant="inset" />
      <Box>
        <h3>Project</h3>

        <Box>
          <TextField id="PrjectName1" label="Prject Name" variant="standard" />
          <TextField id="PrjectTech1" label="Prject Tech" variant="standard" />
          <TextField id="RoleDuration1" label="Start Date-End Date" variant="standard" />
        </Box>
        <TextArea />
      </Box>
      
      <Divider variant="inset" />
      <Box>
        <h3>Education</h3>

        <Box>
          <TextField id="InstitudeName1" label="Institude Name" variant="standard" />
          <TextField id="InstitudeLocation1" label="Institude Location" variant="standard" />
          <TextField id="InstitudeRole1" label="Role" variant="standard" />
          <TextField id="RoleDuration1" label="Start Date-End Date" variant="standard" />
        </Box>
        <TextArea />
      </Box>
    </div>
    </>
  )
}

export default HomePage;