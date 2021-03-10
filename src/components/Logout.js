import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  const [redirectToMain, setRedirectToMain] = useState(false);

  useEffect(() => {
    const requestUrl =
      "https://express-musicards-test.herokuapp.com/users/logout";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    fetch(requestUrl, requestOptions).then((response) => {
      if (response.status === 200) {
        setRedirectToMain(true);
      }
    });
  }, []);

  return <div>{redirectToMain && <Redirect to="/" />}</div>;
}

export default Logout;
