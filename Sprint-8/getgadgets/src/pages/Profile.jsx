import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    photo: ""
  });
  const [form, setForm] = useState(user);
  const [editingPassword, setEditingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const isAuth = localStorage.getItem("isAuth");

    if (!savedUser || isAuth !== "true") {
      navigate("/login");
    } else {
      setUser(savedUser);
      setForm(savedUser);
    }
  }, [navigate]);

  // Handle photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle updating profile info
  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Profile updated successfully!");
    setUser(form);
    setEditingPassword(false);
  };

  // Handle password change
  const handlePasswordChange = () => {
    if (newPassword.trim() === "") {
      alert("Enter a valid password!");
      return;
    }
    const updated = { ...form, password: newPassword };
    setForm(updated);
    localStorage.setItem("user", JSON.stringify(updated));
    alert("Password updated successfully!");
    setUser(updated);
    setEditingPassword(false);
    setNewPassword("");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <div className="profile-info">
        {/* Profile Photo */}
        <img
          src={form.photo || "https://via.placeholder.com/120"}
          alt="Profile"
          className="profile-photo"
        />

        {/* Info */}
        <div className="info-item"><strong>Username:</strong> {form.username}</div>
        <div className="info-item"><strong>Phone:</strong> {form.phone}</div>
        <div className="info-item"><strong>Email:</strong> {form.email}</div>

        {/* Photo upload */}
        <input type="file" accept="image/*" onChange={handlePhotoChange} />

        {/* Edit Password */}
        <div className="password-section">
          {editingPassword ? (
            <>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={handlePasswordChange}>Save Password</button>
              <button onClick={() => setEditingPassword(false)} className="cancel-btn">Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditingPassword(true)}>Edit Password</button>
          )}
        </div>

        {/* Save Profile Info */}
        <button className="update-btn" onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
}

export default Profile;
