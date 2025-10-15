import React, { useState } from "react";
import "./NotifyForm.css";

const NotifySection = () => {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("⚠️ Please enter your name");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setMessage("⚠️ Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxzZi4yXfyixFJi7D01vlLGuKBwr8EqsITO7Vppn7sy_TGoVSfvprlUXUws2RPA3PXUjg/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            name,
            mobile,
            honeypot: "",
          }),
        }
      );

      const text = await res.text();

      if (text.includes("Success")) {
        setMessage("✅ Thanks! We'll notify you when we launch.");
      } else if (text.includes("Already registered")) {
        setMessage("📱 You’re already on the list!");
      } else {
        setMessage("⚠️ Something went wrong. Try again later.");
      }
    } catch (err) {
      setMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
      setMobile("");
      setName("");
    }
  };

  return (
    <section className="notify-section">
      <div className="notify-left">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
          alt="Coming Soon"
          className="notify-image"
        />
      </div>

      <div className="notify-right">
        <h1 className="notify-header"> We’re Launching Soon!</h1>
        <p className="notify-subtext">
          Stay updated! Enter your name and mobile number — we’ll notify you the moment we go live.
        </p>

        <form onSubmit={handleSubmit} className="notify-form">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
            required
          />

          <input type="text" name="honeypot" style={{ display: "none" }} />

          <button className="notify-btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Notify Me"}
          </button>
        </form>

        {message && <p className="notify-message">{message}</p>}
      </div>
    </section>
  );
};

export default NotifySection;
