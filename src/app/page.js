"use client";
import Image from "next/image";
import styles from "./page.module.css"
import Grid from '@mui/material/Grid'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { red, white } from '@mui/material/colors';
import { useEffect, useState } from 'react';


const useIsWebView = () => {
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isWebView = /wv/.test(userAgent) || /Android.*Version\/[0-9]+\.[0-9]+/.test(userAgent);
    setIsWebView(isWebView);
  }, []);

  return isWebView;
};

export default function Home() {
  const isWebView = useIsWebView();
  return (
    <main>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <MenuList> <MenuItem sx={{
            margin: 1,
            "&:hover":{
              backgroundColor: red[500],
              color: '#fff',
              borderRadius: 2,
              margin: 1,
            }
          }}>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem></MenuList>
         
        </Grid>
        <Grid item xs={10}>
          <Button variant="contained" color="primary" sx={{
            bgcolor: red[500],
            ":hover": {
              backgroundColor: red[200],
            }
          }} >
            Coba
          </Button>
          <div>
      {isWebView ? (
        <p>This is a WebView</p>
      ) : (
        <p>This is not a WebView</p>
      )}
    </div>
        </Grid>
      </Grid>
    </main>
  );
}
