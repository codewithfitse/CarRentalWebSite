import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [users, setUsers] = useState([]);

  const [formUser, setFormUser] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  function handleClick(e) {
    e.preventDefault();

    if (formUser.firstName.length > 0) {
      const newUser = [...users, formUser];
      setUsers(newUser);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(newUser));
    }

    // console.log(formUser);
    // if ((firstName, email, phone, message)) {
    //   setFormUser({
    //     firstName: firstName,
    //     email: email,
    //     phone: phone,
    //     message: message,
    //   });
    //   setUsers({ ...users, ...formUser });
    //   localStorage.setItem("user", JSON.stringify(users));
    //   setFirstName("");
    //   setEmail("");
    //   setPhone("");
    //   setMessage("");

    //console.log(users);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
    console.log(formUser);
  };

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser > 0) {
      setUsers(getUser);
    }
  }, []);

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />

      <div className="py-[100px] px-[200px]">
        <div className="p-10 card">
          <h1 className="text-[40px] font-bold text-center font-mono">
            Contact Us Now❗
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex flex-col justify-between space-y-4">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formUser.firstName}
                  onChange={handleInput}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formUser.email}
                  onChange={handleInput}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formUser.phone}
                  onChange={handleInput}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Message(feedback)
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={formUser.message}
                  onChange={handleInput}
                  className="w-[80%] h-[100px] py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Message.."
                />
              </div>
            </div>

            <div className="mt-10">
              <button className="p-2 text-3xl text-black font-bold bg-[#16fe01] rounded-[10px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
