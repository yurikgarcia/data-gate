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


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    navigate("/home"); // Redirect to home after login
    // TODO: Hook into auth system here (Supabase, API call, etc.)
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
