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
  console.log(url.pathname);
  
    const { signInUsingGoogle, logOut, isLoading, user } = useAuth();
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
            // <div>
            //   <Image fluid src={user.photoURL} />
            //   <h2>Welcome {user.displayName}</h2>
            //   <Button variant="danger" onClick={logOut}>
            //     Log Out
            //   </Button>
            // </div>
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
