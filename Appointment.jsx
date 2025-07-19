import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Box,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const specialties = [
  "Cardiologist",
  "Orthopedic Surgeon",
  "Pediatrician",
  "Neurologist",
  "Oncologist",
  "Dermatologist",
  "General Physician",
];

export default function Appointment() {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    date: "",
    specialty: "",
  });

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Booked:", appointmentData);
    alert("Appointment successfully booked!");
    setAppointmentData({
      name: "",
      email: "",
      date: "",
      specialty: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center" mb={3}>
          <EventAvailableIcon sx={{ fontSize: 40, color: "primary.main" }} />
          <Typography variant="h5" fontWeight="bold" mt={1}>
            Book an Appointment
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Choose your preferred doctor and time slot.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                required
                value={appointmentData.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                type="email"
                required
                value={appointmentData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Preferred Date"
                name="date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={appointmentData.date}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                select
                label="Specialized Doctor"
                name="specialty"
                fullWidth
                required
                value={appointmentData.specialty}
                onChange={handleChange}
              >
                {specialties.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
