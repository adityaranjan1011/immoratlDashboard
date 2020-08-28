import React, { Component } from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";

class Login extends Component {
  loginCredential;

  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      password: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({
      userEmail: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  /* eslint-disable */
  handleSubmit = (event) => {
    const { userEmail, password } = this.state;

    if (
      userEmail === "kishor.pant@immortal-technologies.com" &&
      password === "1234"
    ) {
      this.props.history.push("/dashboard", { userEmail: userEmail });

      this.setState({
        userEmail: "",
        password: "",
      });
    } else {
      alert("wrong credential");
    }
    //   const option = {

    //     url: "http://localhost:3000/",
    //     method:'POST',
    //     user:{
    //       userEmail: userEmail,
    //       password: password,
    //     }
    //   }

    //  axios(option)
    //     .then(response => {
    //       console.log("response",response);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });

    event.preventDefault();
  };

  componentDidMount() {
    this.loginCredential = JSON.parse(localStorage.getItem("users"));

    if (localStorage.getItem("users")) {
      this.setState({
        userEmail: this.loginCredential.userEmail,
        password: this.loginCredential.password,
      });
    } else {
      this.setState({
        userEmail: "",
        password: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("users", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="Login">
        <section>
          <form
            className="login-form"
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <span className="heading"> Login at Webscout</span>

            <div className="input-container">
              <div className="uname-box">
                <label>Email</label>
                <div>
                  <input
                    type="email"
                    name="useremail"
                    value={this.state.userEmail}
                    onChange={this.onChangeEmail}
                    className="uname"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="passwrd-box">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    className="passwrd"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="login-footer">
              <div className="btn">
                <span className="login-footer-text"> Forgot Password ?</span>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#20232A", color: "white" }}
                >
                  LOGIN
                </Button>
              </div>
              <span className="login-footer-text">
                {" "}
                New at WebScout? Register
              </span>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
