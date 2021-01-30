import { useEffect, useState } from "react";
import { Form, Map } from "./components";

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  const fetchIpInfo = (ipAddress) => {
    let url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFI_KEY}`;
    if (ipAddress !== null && ipAddress !== undefined) {
      url = `${url}&ipAddress=${ipAddress}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIpInfo(data))
      .catch((err) =>
        alert(`An error ocurred. Please enter a valid ip address.\n ${err}`)
      );
  };

  useEffect(() => {
    fetchIpInfo();
  }, []);

  return ipInfo?.ip ? (
    <div>
      <Form ipInfo={ipInfo} fetchIpInfo={fetchIpInfo}></Form>
      <Map ipInfo={ipInfo}></Map>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
