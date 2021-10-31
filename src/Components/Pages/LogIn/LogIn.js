import React from "react";
import { Container, Image, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useAuth from "../../Hooks/UseAuth";
import Register from "../Register/Register";
import "./LogIn.css";

const LogIn = () => {
  const { signInUsingGoogle, user, logOut, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Container>
        <Spinner
          animation="border"
          role="status"
          className="justufy-content-center"
        >
          <span>Loading...</span>
        </Spinner>
      </Container>
    );
  }
  return (
    <div>
      <Container>
        {user.email ? (
          <div>
            <Image fluid src={user.photoURL} />
            <h2>Welcome {user.displayName}</h2>
            <Button variant="danger" onClick={logOut}>
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Register></Register>
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
