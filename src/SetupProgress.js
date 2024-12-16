

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPlus } from "react-icons/fa";
import './SetupProgress.css';


const SetupProgress = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    aboutUs: "",
    logo: null,
    banner: null,
    organizationType: "",
    industryType: "",
    teamSize: "",
    yearOfEstablishment: "",
    website: "",
    vision: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      youtube: "",
    },
    phone: "",
    email: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialLinkChange = (platform, value) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value },
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleNextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Final Data:", formData);
  };

  return (
    <div className="setup-progress">
      <h1>MyJob Setup Progress</h1>
      <div className="progress-indicator">Step {step} of 5</div>
      {step === 1 && (
        <div>
          <h2>Company Info</h2>
          <div>
            <label>Logo</label>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleFileUpload("logo", e.target.files[0])}
            />
          </div>
          <div>
            <label>Banner</label>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleFileUpload("banner", e.target.files[0])}
            />
          </div>
          <div>
            <label>Company Name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
            />
          </div>
          <div>
            <label>About Us</label>
            <textarea
              value={formData.aboutUs}
              onChange={(e) => handleChange("aboutUs", e.target.value)}
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Founding Info</h2>
          <div>
            <label>Organization Type</label>
            <input
              type="text"
              value={formData.organizationType}
              onChange={(e) => handleChange("organizationType", e.target.value)}
            />
          </div>
          <div>
            <label>Industry Type</label>
            <input
              type="text"
              value={formData.industryType}
              onChange={(e) => handleChange("industryType", e.target.value)}
            />
          </div>
          <div>
            <label>Team Size</label>
            <input
              type="text"
              value={formData.teamSize}
              onChange={(e) => handleChange("teamSize", e.target.value)}
            />
          </div>
          <div>
            <label>Year of Establishment</label>
            <input
              type="date"
              value={formData.yearOfEstablishment}
              onChange={(e) => handleChange("yearOfEstablishment", e.target.value)}
            />
          </div>
          <div>
            <label>Company Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>
          <div>
            <label>Company Vision</label>
            <textarea
              value={formData.vision}
              onChange={(e) => handleChange("vision", e.target.value)}
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Social Media Profiles</h2>
          <div>
            <label>
            <FaFacebook /> Facebook Profile Link
            </label>
            <input
              type="url"
              value={formData.socialLinks.facebook}
              onChange={(e) =>
                handleSocialLinkChange("facebook", e.target.value)
              }
            />
          </div>
          <div>
            <label>
            <FaTwitter /> Twitter Profile Link
            </label>
            <input
              type="url"
              value={formData.socialLinks.twitter}
              onChange={(e) =>
                handleSocialLinkChange("twitter", e.target.value)
              }
            />
          </div>
          <div>
            <label>
            <FaInstagram /> Instagram Profile Link
            </label>
            <input
              type="url"
              value={formData.socialLinks.instagram}
              onChange={(e) =>
                handleSocialLinkChange("instagram", e.target.value)
              }
            />
          </div>
          <div>
            <label>
            <FaYoutube /> YouTube Profile Link
            </label>
            <input
              type="url"
              value={formData.socialLinks.youtube}
              onChange={(e) =>
                handleSocialLinkChange("youtube", e.target.value)
              }
            />
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Contact Info</h2>
          <div>
            <label>Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>
      )}
      {step === 5 && (
        <div>
          <h2>Setup Complete</h2>
          <p>Congratulations! Your profile is 100% complete.</p>
          <button onClick={handleSubmit}>View Dashboard</button>
        </div>
      )}
      <div className="navigation-buttons">
        {step > 1 && <button onClick={handlePrevStep}>Previous</button>}
        {step < 5 && <button onClick={handleNextStep}>Save & Next</button>}
      </div>
    </div>
  );
};

export default SetupProgress;




