import { useState } from "react";
import axios from "axios";
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
import { useAppSelector } from "../store";

// === Interfaces ===
interface AddUserProps {
  onUserCreated: () => void;
}

// === Styles ===
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

export default function addUser({ onUserCreated }: AddUserProps) {
  const apiUrl = useAppSelector((state) => state.api.apiUrl);

  // console.log("apiUrl from add user", apiUrl);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    password: "",
    confirmPassword: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (field: string, value: string) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  };

  //password field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordMatch = newUser.password === newUser.confirmPassword;

  const createNewUser = async (): Promise<void> => {
    console.log("Creating new user:", newUser);
    try {
      const response = await axios.post(`${apiUrl}/newUser`, newUser);
      if (response.status >= 200 && response.status < 300) {
        console.log("User created:", response.data);
        onUserCreated(); // Call the function passed as a prop to refresh the user list
        handleClose();
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Something went wrong. Please try again");
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Create New User
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Join the Party!
          </Typography>
          <Stack spacing={2}>
            <TextField
              required
              label="First Name"
              value={newUser.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <TextField
              required
              label="Last Name"
              value={newUser.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              fullWidth
              sx={inputStyle}
            />
            <TextField
              required
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
                value={newUser.password}
                onChange={(e) => handleChange("password", e.target.value)}
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
                value={newUser.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
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

            <Button variant="contained" onClick={createNewUser}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
