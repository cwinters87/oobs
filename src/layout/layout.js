import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </Helmet>
    <main>{children}</main>
  </div>
);

export default Layout;
