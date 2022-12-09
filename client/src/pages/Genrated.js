import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import { Box, Button, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Section from '../components/Section';
import { BASE_INFO, DEFAULT_SECTIONS } from '../utils/constant';
import { useLocation } from 'react-router-dom';

function SocialLink({ Icon, label, id, link, updateLink }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id={id} label={label} variant="standard" value={link} onChange={(e) => { updateLink(e.target.value) }} />
        </Box>
    );
}

function GenratedPage() {

    let location = useLocation();

    console.log(location.state.sections)
    return (
        <div style={{ margin: "2% 10%" }}>
            <center>
                <h1> {location.state.baseInfo.name} </h1>
                <Mail />{location.state.baseInfo.emailId + " "}
                <GitHub /> {location.state.baseInfo.githubId + " "}
                <LinkedIn />{location.state.baseInfo.linkedinId + " "}
            </center>
            {
                location.state.sections.map(element =>

                    <div>
                        <h2>{element.title}</h2>
                        {
                            element.cards.map(cardData => {
                                if (cardData.selected)
                                    return (<div>
                                        <div>
                                            {
                                                Object.keys(cardData.fields).map(field => {
                                                    return (<div>{cardData.fields[field]}</div>)
                                                })
                                            }
                                        </div>
                                        <pre>
                                            {cardData.description}
                                        </pre>
                                    </div>)
                            }

                            )
                        }
                    </div>
                )
            }
            {/* {
        sections.map((ele, id) => {
          return (
            <Section
              key={"section" + id}
              title={ele.title}
              textFieldProps={Object.keys(ele.fields[0])}
              index={id}
              sections={sections}
              setSections={setSections} />
          );
        })
      }
      <Button variant="contained" color="success" onClick={() => setOpen(true)}>
        genrate
      </Button>
      {
        open && <pre>
          {JSON.stringify(baseInfo, null, 2)}
          <br />
          {JSON.stringify(sections, null, 2)}
        </pre>
      } */}
        </div>
    )
}

export default GenratedPage;