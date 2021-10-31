import React from "react";
import { Container, Image, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/UseAuth";
import "./LogIn.css";

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.form || "/home";
  
    const { signInUsingGoogle, isLoading, user } = useAuth();
    if (isLoading) {
      return (
        <Container>
          <Spinner
            animation="border"
            role="status"
            className="justufy-content-center"
          ></Spinner>
        </Container>
      );
    }
    return (
      <div>
        <Container>
          {user.email ? (
            history.push(url.pathname)
          ) : (
            <div>
              <Button varient="primary" onClick={signInUsingGoogle}>
                Google login
              </Button>
            </div>
          )}
        </Container>
      </div>
    );
  };

export default LogIn;
