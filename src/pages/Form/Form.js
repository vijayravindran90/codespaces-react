import { useRef,useState } from "react";
import React from "react";

function Form() {
  const txtUsername = useRef();
  const txtPassword = useRef();

  const [setErrors] = useState("")

  const submit = (e) => {
    e.preventDefault();
    const username = txtUsername.current.value;
    const password = txtPassword.current.value;
   if(txtPassword.current.value===""){
      setErrors("Email address or phone number is required");
    }
    alert(`${username}, ${password}`);
    txtUsername.current.value = "";
    txtPassword.current.value = "";
    };
  return (
    <div className="login-form">
    <form onSubmit={submit}>
      <input
        ref={txtUsername}
        type="text"
        placeholder="Email or Phone number"
      /><br/>
      <input ref={txtPassword} type="text" placeholder="Password"/><br/>
      <button id="submit">Login</button><br/>
    </form><br/>
    </div>
  )
  };
export default Form;
