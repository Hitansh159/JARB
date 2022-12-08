import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import { Box, Button, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Section from '../components/Section';
import { BASE_INFO, DEFAULT_SECTIONS } from '../utils/constant'
import { useNavigate } from 'react-router-dom';

function SocialLink({ Icon, label, id, link, updateLink }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id={id} label={label} variant="standard" value={link} onChange={(e) => { updateLink(e.target.value) }} />
    </Box>
  );
}

function HomePage() {
  const [baseInfo, setBaseInfo] = useState(BASE_INFO);
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [open, setOpen] = useState(false);

  const updateBaseInfo = (key, value) => {
    var newBaseInfo = { ...baseInfo };
    newBaseInfo[key] = value;
    setBaseInfo(newBaseInfo);
  }

  const navigate = useNavigate();
  const toGenrated = () => {
    navigate('/generated', { state: { "baseInfo": baseInfo, "sections": sections } });
  };

  const uploadState = async (e) => {
    e.target.files[0].text()
      .then(text => {
        let json = JSON.parse(text);
        setBaseInfo(json.baseInfo);
        setSections(json.sections);
      })
      .then(
        e.target.value = ""
      )
      .catch(err => { console.log(err); alert("error occured") })
  }

  const downloadState = () => {
    let data = new Blob([JSON.stringify({ "baseInfo": baseInfo, "sections": sections })], { type: 'text/csv' });
    let url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `ResumeData.json`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);

  }

  return (
    <div style={{ margin: "2% 10%" }}>
      <h1> My Resume </h1>
      <TextField id="fullName" label="Full Name" variant="outlined" value={baseInfo["name"]} onChange={(e) => updateBaseInfo("name", e.target.value)} />
      <Box sx={{ my: 2.5 }}>
        <SocialLink Icon={GitHub} label="Github ID" id="githubId" link={baseInfo["githubId"]} updateLink={(link) => updateBaseInfo("githubId", link)} />
        <SocialLink Icon={LinkedIn} label="Linkedin ID" id="LinkedinId" link={baseInfo["linkedinId"]} updateLink={(link) => updateBaseInfo("linkedinId", link)} />
        <SocialLink Icon={Mail} label="Email ID" id="emailId" link={baseInfo["emailId"]} updateLink={(link) => updateBaseInfo("emailId", link)} />
      </Box>

      {
        sections.map((ele, id) => {
          return (
            <Section
              key={"section" + id}
              title={ele.title}
              index={id}
              sections={sections}
              setSections={setSections} />
          );
        })
      }
      <div style={{ position: "sticky", bottom: "10px", zIndex: "3", display: "flex", alignItems: "center", backgroundColor: "#c4c4c4", gap: "20px", padding: "10px" }}>
        <Button variant="contained" color="success" onClick={() => toGenrated()}>
          genrate
        </Button>
        <Button variant="contained" color="primary" onClick={() => downloadState()}>
          Download Data
        </Button>
        <input type="file" onChange={uploadState} />
      </div>
      {
        <pre>

          {"baseInfo:" + JSON.stringify(baseInfo, null, 2)}
          <br />
          {"\nsections:" + JSON.stringify(sections, null, 2)}
        </pre>
      }
    </div>
  )
}

export default HomePage;