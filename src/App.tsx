import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Appbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#18181b",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
