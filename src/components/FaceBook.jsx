import { useState } from "react";
import profiles from "../data/berlin.json";

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const renderProfile = (profile) => {
    const profileStyle = {
      backgroundColor:
        profile.country === selectedCountry ? "blue" : "transparent",
    };

    return (
      <div
        key={profile.firstName + profile.lastName}
        className="profile"
        style={profileStyle}
      >
        <img src={profile.img} alt={profile.firstName} />
        <div className="profile-details">
          <p>
            <strong>First Name: </strong>
            {profile.firstName}
          </p>
          <p>
            <strong>Last Name: </strong>
            {profile.lastName}
          </p>
          <p>
            <strong>Country: </strong>
            {profile.country}
          </p>
          <p>
            <strong>Type: </strong>
            {profile.isStudent ? "Student" : "Teacher"}
          </p>
        </div>
      </div>
    );
  };

  const getCountries = () => {
    const countries = Array.from(
      new Set(profiles.map((profile) => profile.country))
    );
    return countries;
  };

  return (
    <div>
      <div className="country-buttons">
        {getCountries().map((country) => (
          <button key={country} onClick={() => handleCountryClick(country)}>
            {country}
          </button>
        ))}
      </div>
      <div className="profiles">
        {profiles.map((profile) => renderProfile(profile))}
      </div>
    </div>
  );
};

export default FaceBook;
