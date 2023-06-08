import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const renderGreeting = () => {
    let greeting = "";
    if (nationality === "en") {
      greeting = "Hello";
    } else if (nationality === "de") {
      greeting = "Hallo";
    } else if (nationality === "fr") {
      greeting = "Bonjour";
    }
    return greeting;
  };

  const renderEmailStatus = () => {
    const isValidEmail = validateEmail(email);
    return isValidEmail ? "Valid email" : "Invalid email";
  };

  const renderPasswordStatus = () => {
    const isStrongPassword = validatePassword(password);
    return isStrongPassword ? "Strong password" : "Weak password";
  };

  const handleSignup = () => {
    if (validateEmail(email) && validatePassword(password)) {
      alert("Signup successful!");
    } else {
      alert("Please enter a valid email and a strong password.");
    }
  };

  return (
    <div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={validateEmail(email) ? "valid" : "invalid"}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={validatePassword(password) ? "valid" : "invalid"}
        />
      </div>
      <div>
        <label>Nationality:</label>
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>
      <p>{renderGreeting()}</p>
      <p>Your email is {email}</p>
      <p>{renderEmailStatus()}</p>
      <p>{renderPasswordStatus()}</p>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
