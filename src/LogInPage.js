import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import { Box} from "@mui/material"


const CssTextField = styled(TextField)({
  display: 'flex',
  width: '500px',
  height: 48,
  margin: '30px',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  '&/MuiInput-underline': 'black',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'green',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const SubmitCustonBotton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30',
});

const BackGroundBox = styled(Box)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 5,
  borderRadius: 99,
  padding: 6,
  alignItems: 'center',
  alignSelf: 'center',
  margin: 50
})

 export default function LogInPage(){
  return (
    <BackGroundBox>
      <form>
        <div>
        <CssTextField
          label="Full Name..." id="custom-css-outlined-input"/>
        </div>
        <div>
        <CssTextField
          label="Email Address..." id="custom-css-outlined-input"/>
        </div>
        <div>
        <CssTextField
          label="Password..." id="custom-css-outlined-input"/>
        </div>
        <div>
        <CssTextField
          label="Phone Number..." id="custom-css-outlined-input"/>
        </div>
        <div>
          <SubmitCustonBotton>
            Log In!
          </SubmitCustonBotton>
        </div>
      </form>
    </BackGroundBox>
  )
}
