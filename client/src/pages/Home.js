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
import { Button } from '../Components/Button';

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
    <div style={{ margin: "5px" }}>
      Your content:
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
};

function Section({ title, textFieldProps }) {
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
    { id: "companyName1", label: "Company Name" },
    { id: "companyLocation1", label: "Company Location" },
    { id: "companyRole1", label: "Company Role" },
    { id: "companyDuration1", label: "Company Duration" }
  ]

  var project = [
    { id: "projectName1", label: "Prject Name" },
    { id: "PrjectTech1", label: "Prject Tech" },
    { id: "projectDuration1", label: "Start Date-End Date" }
  ]

  var education = [
    { id: "instituteName1", label: "Institude Name" },
    { id: "instituteLocation1", label: "Institude Location" },
    { id: "instituteRole1", label: "Role" },
    { id: "instituteDuration1", label: "Start Date-End Date" }
  ]
  var cocurricular = [
    { id: "cactivity1", label: "Activity 1" },
    { id: "cactivity2", label: "Activity 2" },
    { id: "cactivity3", label: "Activity 3" },
    { id: "cactivity4", label: "Activity 4" }
  ]
  var educextracurricular = [
    { id: "eactivity1", label: "Activity 1" },
    { id: "eactivity2", label: "Activity 2" },
    { id: "eactivity3", label: "Activity 3" },
    { id: "eactivity4", label: "Activity 4" }
  ]
  
  return (
    <>

      <div style={{ margin: "100px 10%" }}>
        <h1> My Resume </h1>
        <TextField id="fullName" label="Full Name" variant="outlined" />
        <Box sx={{ my: 2.5 }}>
          <SocialLink Icon={GitHub} label="Github ID" id="githubId" />
          <SocialLink Icon={LinkedIn} label="Linkedin ID" id="LinkedinId" />
          <SocialLink Icon={Mail} label="Email ID" id="emailId" />
        </Box>
        
          <Divider variant="inset" />
          <Box>
            <h3>Expirence</h3>
            <ResumeInput textFieldProps={expirences} />
          </Box>
        
        <TextArea />
        
        <Divider variant="inset" />
        <Box>
          <h3>Project</h3>

          <ResumeInput textFieldProps={project} />
          <TextArea />
        </Box>

        <Divider variant="inset" />
        <Box>
          <h3>Education</h3>

          <ResumeInput textFieldProps={education} />
          <TextArea />
        </Box>
        <Divider variant="inset" />
        <Box>
          <h3>Co-Curricular</h3>

          <ResumeInput textFieldProps={cocurricular} />

        </Box>
        
        <Box>
          <h3>Extra Curricular</h3>

          <ResumeInput textFieldProps={educextracurricular} />

        </Box>
      </div>
    </>
  )
}

export default HomePage;