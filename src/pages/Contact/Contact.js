import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!name.trim() || !email.trim() || !msg.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (name.length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (msg.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("https://my-portfolio-1-hhrd.onrender.com/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Send email error:", error);
      toast.error("Server error! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
        
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <LightSpeed>
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </LightSpeed>
              </div>
            </div>
          </div>

         
          <div className="col-lg-6 col-md-6">
            <Rotate>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 style={{ color: "#138781" }}>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/abhishek-kumar-7147b4254/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/abhishekkumarme"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.instagram.com/abhishek.suryabanshi_/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsInstagram color="#E1306C" size={30} className="ms-2" />

                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div className="row px-3">
                    <textarea
                      name="msg"
                      rows="4"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>

                  {/* Submit */}
                  <div className="row px-3">
                    <button
                      className="button"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "SEND MESSAGE"}
                    </button>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
