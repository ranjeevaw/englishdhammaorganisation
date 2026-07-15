import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "iruehquh9817987";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (
      username === ADMIN_USERNAME &&
      password === ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("isAdmin", "true");
      navigate("/alms-calendar");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "60px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
      }}
    >
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <div style={{ color: "red", marginBottom: 10 }}>
          {error}
        </div>
      )}

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}