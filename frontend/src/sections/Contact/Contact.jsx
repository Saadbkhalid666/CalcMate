import { useState } from "react";
import "@fontsource/lobster";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      toast.error("Name is required!");
    } else if (!email.trim()) {
      toast.error("Email is required!");
    } else if (!email.includes("@") || !email.endsWith("@gmail.com")) {
      toast.error("Please enter a valid Gmail address (e.g. name@gmail.com).");
    } else if (!subject.trim()) {
      toast.error("Please select a subject.");
    } else if (!message.trim()) {
      toast.error("Please enter your message.");
    } else {
      try {
        const form = new FormData();
        form.append("name", name);
        form.append("email", email);
        form.append("subj", subject);
        form.append("message", message);

        const res = await axios.post("http://127.0.0.1:8000/api/contact", form);
        console.log("Response");

        if (res.data.status === "success") {
          toast.success("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }else{
          toast.error(`Something Went Wrong: ${res.data.message}`)
        }
      } catch (err) {
        toast.error("Network Error");
        console.log(err);
      }
    }
  };

  return (
    <section id="contact" className="mt-[10%] bg-[#3190ce] py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center items-center bg-blue-400 mx-auto p-6 rounded-lg shadow-2xl w-[90%] max-w-md"
        >
          <h1
            style={{ fontFamily: "Lobster" }}
            className="text-4xl py-2 font-bold uppercase text-white"
          >
            Let's Connect
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-white text-black placeholder:text-[#666] rounded-md focus:outline-none border-b-2 border-transparent hover:border-[#3190ce] transition duration-200"
          />

          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-white text-black placeholder:text-[#666] rounded-md focus:outline-none border-b-2 border-transparent hover:border-[#3190ce] transition duration-200"
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 bg-white text-black placeholder:text-[#666] rounded-md focus:outline-none border-b-2 border-transparent hover:border-[#3190ce] transition duration-200"
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="feedback">Feedback</option>
            <option value="support">General Support</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Describe your issue, suggestion, or feedback here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-white text-black placeholder:text-[#666] rounded-md focus:outline-none border-b-2 border-transparent hover:border-[#3190ce] transition duration-200"
          ></textarea>

          <button
            type="submit"
            className="relative overflow-hidden group px-6 py-2 rounded-md font-semibold bg-white text-[#3190ce] transition duration-200 border-none z-10"
          >
            <span className="relative z-20 transition duration-300 group-hover:text-white">
              Submit
            </span>
            <span className="absolute inset-0 bg-[#3190ce] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out z-10"></span>
          </button>
        </form>
      </div>
    </section>
  );
};
