import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const history = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    history("/");
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = { username, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    history.push("/");
  };
  return (
    <div className="container">
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="librarian">Librarian</option>
          </select>
        </label>
        <button onClick={handleLogin}>Login</button>
        &nbsp;
        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Login;
