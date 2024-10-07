"use client";
import React, { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField, Button, Typography, Box } from "@mui/material";
import dayjs from "dayjs"; // Import dayjs
import axios from "axios";
import Swal from "sweetalert2"; // For alerts
import styles from "./style.module.css";

function Page() {
  // State for morning, afternoon, and evening timings (from and to)
  const [morningFromTime, setMorningFromTime] = useState(dayjs().set("hour", 6).set("minute", 0)); // Default: 6:00 AM
  const [morningToTime, setMorningToTime] = useState(dayjs().set("hour", 7).set("minute", 0)); // Default: 7:00 AM

  const [afternoonFromTime, setAfternoonFromTime] = useState(dayjs().set("hour", 12).set("minute", 0)); // Default: 12:00 PM
  const [afternoonToTime, setAfternoonToTime] = useState(dayjs().set("hour", 13).set("minute", 0)); // Default: 1:00 PM

  const [eveningFromTime, setEveningFromTime] = useState(dayjs().set("hour", 18).set("minute", 0)); // Default: 6:00 PM
  const [eveningToTime, setEveningToTime] = useState(dayjs().set("hour", 19).set("minute", 0)); // Default: 7:00 PM

  // Fetch timings from the backend
  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const res = await axios.get("/api/timing");
        if (res?.status === 200 && res?.data?.data) {
          const timings = res.data.data;

          // Update state with fetched timings
          setMorningFromTime(dayjs(timings.morning_from_time, "HH:mm"));
          setMorningToTime(dayjs(timings.morning_to_time, "HH:mm"));
          setAfternoonFromTime(dayjs(timings.afternoon_from_time, "HH:mm"));
          setAfternoonToTime(dayjs(timings.afternoon_to_time, "HH:mm"));
          setEveningFromTime(dayjs(timings.evening_from_time, "HH:mm"));
          setEveningToTime(dayjs(timings.evening_to_time, "HH:mm"));
        }
      } catch (error) {
        console.error("Error fetching timings:", error);
      }
    };

    fetchTimings();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending updated timings to the backend API
    const res = await axios.post("/api/timing", {
      morning_from_time: morningFromTime.format("HH:mm"),
      morning_to_time: morningToTime.format("HH:mm"),
      afternoon_from_time: afternoonFromTime.format("HH:mm"),
      afternoon_to_time: afternoonToTime.format("HH:mm"),
      evening_from_time: eveningFromTime.format("HH:mm"),
      evening_to_time: eveningToTime.format("HH:mm"),
    });

    if (res?.status === 200) {
      Swal.fire({
        icon: "success",
        title: res?.data?.message,
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className={styles.container}>
        <Typography variant="h4" className={styles.title}>
          Edit Yoga Timings
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Morning Timing Fields */}
          <div className={styles.field}>
            <Typography variant="subtitle1">Morning Yoga Timing:</Typography>
            <div className={styles.timeField}>
              <TimePicker
                renderInput={(params) => <TextField {...params} />}
                label="From"
                value={morningFromTime}
                onChange={(newValue) => setMorningFromTime(newValue)}
                ampm={true}
              />
              <TimePicker
                renderInput={(params) => <TextField {...params} />}
                label="To"
                value={morningToTime}
                onChange={(newValue) => setMorningToTime(newValue)}
                ampm={true}
              />
            </div>
          </div>

          {/* Afternoon Timing Fields */}
          <div className={styles.field}>
            <Typography variant="subtitle1">Afternoon Yoga Timing:</Typography>
            <div className={styles.timeField}>
              <TimePicker
                renderInput={(params) => <TextField {...params} />}
                label="From"
                value={afternoonFromTime}
                onChange={(newValue) => setAfternoonFromTime(newValue)}
                ampm={true}
              />
              <TimePicker
                renderInput={(params) => <TextField {...params} />}
                label="To"
                value={afternoonToTime}
                onChange={(newValue) => setAfternoonToTime(newValue)}
                ampm={true}
              />
            </div>
          </div>

          {/* Evening Timing Fields */}
          <div className={styles.field}>
            <Typography variant="subtitle1">Evening Yoga Timing:</Typography>
            <div className={styles.timeField}>
              <TimePicker
                renderInput={(params) => <TextField {...params} />}
                label="From"
                value={eveningFromTime}
                onChange={(newValue) => setEveningFromTime(newValue)}
                ampm={true}
              />
              <TimePicker
                renderInput={(params) => <TextField {...params} />}
                label="To"
                value={eveningToTime}
                onChange={(newValue) => setEveningToTime(newValue)}
                ampm={true}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="contained" className={styles.submitButton}>
            Update Timings
          </Button>
        </form>
      </Box>
    </LocalizationProvider>
  );
}

export default Page;
