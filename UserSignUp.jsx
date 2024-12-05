import React from "react";

function Form() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    userName: "",
    email: "",
    address: "",
    phoneNumber: 0,
  });

  function handleChange(e) {
    //console.log(e.target.value);
    const { name, value, type } = e.target;
    setFormData((prevFormData) => {
      //console.log(name);
      return { ...prevFormData, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="FullNameInput"> Enter First Name: </label>
      <input
        className="textInput"
        id="FullNameInput"
        type="text"
        placeholder="Full Name"
        onChange={handleChange}
        name="FullName"
        value={formData.fullName}
      />

      <label htmlFor="userNameInput"> Enter Last Name: </label>
      <input
        className="textInput"
        id="userNameInput"
        type="text"
        placeholder="User Name"
        onChange={handleChange}
        name="userName"
        value={formData.userName}
      />

      <label htmlFor="emailInput"> Enter Your Email: </label>
      <input
        className="textInput"
        id="emailInput"
        type="email"
        placeholder="abc@email.com"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <label htmlFor="addressInput"> Enter Your Address: </label>
      <input
        className="textInput"
        id="addressInput"
        type="address"
        placeholder="2468 Street City State Zip-Code"
        onChange={handleChange}
        name="address"
        value={formData.address}
      />

      <label htmlFor="phoneNumberInput"> Enter Your Phone Number: </label>
      <input
        className="phoneNumberInput"
        id="phoneNumberInput"
        type="number"
        placeholder="123-456-7890"
        onChange={handleChange}
        name="phoneNumber"
        value={formData.phoneNumber}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;
