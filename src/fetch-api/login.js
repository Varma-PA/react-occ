var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append(
  "Authorization",
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwZTdkNDYyYy01ZDdmLTRlYzYtOGI0Zi1mNWU4MGE2NzMxNTEiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE2NDM3OTQ4ODAsImlhdCI6MTYxMjI1ODg4MH0=.4a3qjj395gSdR921dXWKlyFSYDomObUAWJxmNlHS+Tc="
);
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("X-PINGOTHER", "ccadmin-z96a.oracleoutsourcing.com");

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");

var requestOptions = {
  method: "POST",
  // headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

export default fetch(
  "https://ccadmin-z96a.oracleoutsourcing.com/ccadmin/v1/login",
  {
    ...requestOptions,
    headers: {
      "Access-Control-Allow-Origin":
        "https://ccadmin-z96a.oracleoutsourcing.com",
      // "X-PINGOTHER": "https://ccadmin-z96a.oracleoutsourcing.com",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiY2U3ZDg5MS1kYjk1LTQ2ZGYtODRmMS1lZmM5NjBjMTY0NDMiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE2NDE0NDkzMDMsImlhdCI6MTYwOTkxMzMwM30=.CUNyCXr9obyzIdkvL57yb/6hSCF4VICq4O7C0CxrWKo=",
      "Cache-Control": "no-cache",
    },
  }
)
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log("error", error));
