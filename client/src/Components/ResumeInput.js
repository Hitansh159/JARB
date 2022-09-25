import React from 'react'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

import 'draft-js/dist/Draft.css';

function ResumeInput({ textFieldProps}) {
    return (
        
    
          <Box>
            {textFieldProps.map((element) => {
              return (
                  
              <TextField id={element.id} label={element.label} key={element.id} variant="standard" />
              
              );
            }
            )}
          </Box>
          
       
      );
}

export default ResumeInput