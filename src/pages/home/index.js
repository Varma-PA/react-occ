import React, { useEffect, useState } from "react";
import axios from "axios";
import fetchLogin from "../../fetch-api/login";
import { fetchingTheSites } from "../../fetch-api/fetchsites";

function Home() {
  const [loginInfo, setLoginInfo] = useState();

  useEffect(() => {
    async function grabData() {
      // await fetchLogin.then((response) => console.log(response));

      await fetchingTheSites();

      //   console.log(result);
    }
    grabData();
  }, []);

  return (
    <div>
      <h2>This is a home page</h2>
      {console.log(loginInfo)}
    </div>
  );
}

export default Home;
