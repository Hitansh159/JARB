import React from 'react'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

import 'draft-js/dist/Draft.css';

function ResumeInput({title, textFieldProps}) {
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
          
        </Box>
        </Box>
      );
}

export default ResumeInput