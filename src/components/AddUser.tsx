import { useState } from "react";
import {
  Button,
  Chip,
  Divider,
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#28282a",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  color: "white",
};

const inputStyle = {
  input: {
    color: "white",
  },
  label: {
    color: "white",
  },
  "& .MuiInputLabel-animated": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
};

const orgOptions = ["SpaceX", "SIO", "1 ROPs", "Dunder Mifflin"];

export default function addUser() {
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (field: string, value: string) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log({ newUser });
    handleClose();
  };

  console.log('newUser', newUser);

  //password field
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordMatch = password === confirmPassword || confirm;

  // console.log("confirmed password", showConfirmPassword);

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
              onChange={(e) => handleChange("firstName", e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <TextField
              label="Last Name"
              value={newUser.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <TextField
              label="Email"
              value={newUser.email}
              onChange={(e) => handleChange("email", e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <FormControl fullWidth>
              <InputLabel sx={{ color: "white" }}> Organization</InputLabel>
              <Select
                value={newUser.organization}
                onChange={(e) => handleChange("organization", e.target.value)}
                input={<Input sx={{ color: "white" }} />}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#28282a",
                      color: "white",
                    },
                  },
                }}
              >
                {orgOptions.map((org) => (
                  <MenuItem sx={{ color: "white" }} key={org} value={org}>
                    {org}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider>
              <Chip
                label="Create Password"
                size="small"
                sx={{ color: "white" }}
              />
            </Divider>

            <FormControl fullWidth variant="outlined" margin="normal">
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                sx={inputStyle}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: "white" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <OutlinedInput
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                sx={inputStyle}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      sx={{ color: "white" }}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                }
              />
              {!passwordMatch && (
                <FormHelperText sx={{ color: "red" }}>
                  Passwords do not match.
                </FormHelperText>
              )}
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
