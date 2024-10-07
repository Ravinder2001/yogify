"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import Swal from "sweetalert2";

function LoginBox() {
  const router = useRouter();

  const [values, setValues] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // Clear error on input change
  };

  const validate = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    // Validate username
    if (values.username.length < 6) {
      newErrors.username = "Username must be at least 6 characters long";
      valid = false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,20}$/; // At least one letter, one number, 8-20 characters
    if (!passwordRegex.test(values.password)) {
      newErrors.password = "Password must be 8-20 characters long and contain at least one letter and one number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (!validate()) return; // Validate before submission

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Invalid username or password",
        });
        return;
      }

      router.push("/admin/dashboard");
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main_box}>
        <div className={styles.heading}>Admin Login</div>
        <div className={styles.box}>
          <div className={styles.label}>User Id</div>
          <input type="text" value={values.username} onChange={handleChange} name="username" className={styles.input} />
          {errors.username && <div className={styles.error}>{errors.username}</div>}
        </div>
        <div className={styles.box}>
          <div className={styles.label}>Password</div>
          <input type="password" value={values.password} onChange={handleChange} name="password" className={styles.input} />
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>
        <div className={styles.btn} onClick={handleSubmit}>
          {loading ? "loading..." : "Submit"}
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
