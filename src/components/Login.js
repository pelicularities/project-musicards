import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  formSpacing: {
    marginBottom: "1rem",
  },
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToMain, setRedirectToMain] = useState(false);
  const classes = useStyles();

  const handleSubmit = async () => {
    const requestUrl =
      "https://express-musicards-test.herokuapp.com/users/login";
    const requestBody = {
      username: username,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    const response = await fetch(requestUrl, requestOptions);
    console.log(response);
    console.log(response.status);
    if (response.status === 200) {
      console.log("successful login");
      setRedirectToMain(true);
    } else {
      console.log("invalid credentials");
    }
  };

  return (
    <div>
      {redirectToMain && <Redirect to="/" />}
      <h2>User Login</h2>
      <form>
        <div>
          <TextField
            label="Username"
            autoComplete="username"
            variant="outlined"
            className={classes.formSpacing}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            autoComplete="new-password"
            variant="outlined"
            className={classes.formSpacing}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
