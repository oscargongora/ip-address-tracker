import "./IpDetails.css";

const IpDetails = ({ ipInfo }) => {
  return (
    <div id="ip-details">
      <div className="detail-card" id="ip-address">
        <h3>IP Address</h3>
        <p>{ipInfo.ip}</p>
      </div>
      <div className="separator"></div>
      <div className="detail-card" id="location-details">
        <h3>Location</h3>
        <p>
          {ipInfo.location.region}, {ipInfo.location.city}{" "}
          {ipInfo.location.postalCode}
        </p>
      </div>
      <div className="separator"></div>
      <div className="detail-card" id="timezone-details">
        <h3>timezone</h3>
        <p>{ipInfo.location.timezone}</p>
      </div>
      <div className="separator"></div>
      <div className="detail-card" id="isp-details">
        <h3>ISP</h3>
        <p>{ipInfo.isp}</p>
      </div>
    </div>
  );
};

export default IpDetails;
