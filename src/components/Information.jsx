import { useState, useEffect } from "react";

export default function Information({ isSubmitted }) {
  const [information, setInformation] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setIsEditing(false);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="information-section">
      <h2>General Information</h2>
      {isEditing ? (
        <div className="input-container">
          <form
            className="general-form"
            id="general-form"
            onSubmit={(e) => {
              e.preventDefault();
              setIsEditing(false);
            }}
          >
            <div className="input-box">
              <label htmlFor="full-name">Name</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                value={information.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={information.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                value={information.phoneNumber}
                onChange={handleChange}
                placeholder="+91425235"
                required
              />
            </div>
            <button type="submit" form="general-form">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="info-container">
          <p>Name: {information.fullName}</p>
          <p>Email: {information.email}</p>
          <p>Phone: {information.phoneNumber}</p>
          {!isSubmitted && (
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
        </div>
      )}
    </section>
  );
}
