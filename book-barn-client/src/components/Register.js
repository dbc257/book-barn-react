import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({});
  // const[email, setEmail] = useState("")
  // const[password, setPassword] = useState("")

  function handleRegister(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegisterPost() {
    console.log(user);
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        name="usernameTextBox"
        onChange={handleRegister}
      ></input>
      <input
        type="password"
        placeholder="Password"
        name="passwordTextBox"
        onChange={handleRegister}
      ></input>
      <button onClick={handleRegisterPost}>Register</button>
    </div>
  );
}

export default Register;
