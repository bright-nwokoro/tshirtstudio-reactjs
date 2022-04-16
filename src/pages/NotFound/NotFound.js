import React from "react";
import './NotFound.css'

function NotFound() {
  return (
    <>
      <div className="page gutters">
        <div className="page__errorTitle">
          <h1 className="page__errorTitle--h1">Error 404</h1>
          <h2 className="page__errorTitle--h2">Page Not Found</h2>
        </div>
        <div className="page__errorContent">
          <p></p>
          <p>
            Sorry but the page you were looking for doesn't exist. You can
            access the TShirt Studio home page <a href="/">here</a> or our
            entire site is just a few clicks away via the menus at the top of
            the page.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
