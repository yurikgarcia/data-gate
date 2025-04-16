import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const apiUrl = useAppSelector((state) => state.api.apiUrl);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  console.log("apiUrl from func", apiUrl);
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
  if (!response.ok) {
    throw new Error("Login failed");
  }
  const data = await response.json();
  console.log("Login successful:", data);
  // TODO: Store token / user info in state or Redux
  // navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error);
      // TODO: Show error to user
    }
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            required
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            required
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
