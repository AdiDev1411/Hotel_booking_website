import React, { useEffect, useState } from "react";

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Load contact submissions from localStorage
    const stored = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    setSubmissions(stored);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📩 Contact Form Submissions</h2>
      {submissions.length === 0 ? (
        <p style={styles.noData}>No messages submitted yet.</p>
      ) : (
        <div style={styles.list}>
          {submissions.map((item, index) => (
            <div key={index} style={styles.card}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Subject:</strong> {item.subject}</p>
              <p><strong>Message:</strong> {item.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  noData: {
    color: "#888",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default Admin;
