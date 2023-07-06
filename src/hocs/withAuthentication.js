import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

const withAuthentication = (Component) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const verifyToken = async () => {
        const token = sessionStorage.getItem('token');
        
        if (!token) {
          // If no token is found, redirect to login
          navigate("/login");
          return;
        }
        
        try {
          const response = await fetch('http://localhost:3000/api/users/verify', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (!response.ok) {
            // If the token verification fails, log the user out
            sessionStorage.removeItem('token');
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }

      verifyToken();
    }, []);

    if (isLoading) {
      // You can render a loading screen here if you want
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
};

export default withAuthentication;