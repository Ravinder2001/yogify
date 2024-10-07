"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loading) return;
    setLoading(true);
    // Sending updated timings to the backend API
    const res = await axios.post("/api/lead", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    if (res?.status === 200) {
      Swal.fire({
        icon: "success",
        title: res?.data?.message,
      });
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.heading}>Inquiry Form</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />
        </div>

        <button type="submit" className={styles.submitBtn}>
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
