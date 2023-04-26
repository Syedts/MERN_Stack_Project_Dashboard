import { CssBaseline, ThemeProvider, } from "@mui/material";  
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { themeSettings } from "theme";  

import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";




function App() {
//  <Route element={<Layout/>}>   this code means that every page will have a Navbar and a side bar
/*
  <Route path="/" element={<Navigate to="/dashboard" replace />}/>
      <Route path="/dashboard" element={<Dashboard />}/>

      explaination: If we go to default homepage we are gonnna be navigating to the dashboard route 
*/
  const mode = useSelector((state)=> state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout/>}>  
      <Route path="/" element={<Navigate to="/dashboard" replace />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
        </Route>


      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
