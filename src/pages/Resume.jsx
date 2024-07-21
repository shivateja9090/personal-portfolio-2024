import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import pdf from "../assets/Shiva_Gajendrula_Resume.pdf#toolbar=0";
import '../styles/Home.css'
const Resume = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          padding={2}
          spacing={5}
          justifyContent="center"
          alignItems="center"
          marginBottom={2}
        >
          <Grid item>
            <Button style={{backgroundColor: '#21325e',fontFamily:'Arial, Helvetica, sans-serif'}}
              variant="contained"
              color="primary"
              href={pdf}
              target="_blank"
              endIcon={<ArrowDownwardIcon />}
            >
              Download CV
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={10}>
          <div className="embed-responsive" style={{ height: "112vh" }}>
        <embed 
          // src={pdf}
          src={`${pdf}#toolbar=0`}
          type="application/pdf"
          width="100%"
          height="100%"
        />
</div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;
