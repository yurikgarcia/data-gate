import { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';


const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#28282a',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  color: 'white',
};

const inputStyle = {
  input: {
    color: 'white',
  },
  label: {
    color: 'white',
  },
  '& .MuiInputLabel-animated': {
    color: 'white',
    },
  }



const orgOptions = [
  'SpaceX',
  'SIO',
  '1 ROPs',
  'Dunder Mifflin',
];

export default function addUser() {
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
  });


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (field: string, value: string) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  }

  const handleSubmit = () => {
    console.log({ newUser });
    handleClose();
  };

  // console.log('newUser', newUser);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Create New User
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Create New User!!!
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              value={newUser.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <TextField
              label="Last Name"
              value={newUser.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <FormControl fullWidth>
              <InputLabel> Organization</InputLabel>
              <Select
                value={newUser.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                input={<Input />}
              >
                {orgOptions.map((org) => (
                  <MenuItem key={org} value={org}>
                    {org}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}