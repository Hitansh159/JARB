import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SelectCardIcon({ selected, selectCard }) {


  if (selected)
    return (<CheckCircleIcon onClick={selectCard}/>)
  else
    return (<CheckCircleOutlineIcon onClick={selectCard}/>)

};


export default SelectCardIcon;