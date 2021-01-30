import "./Form.css";
import IconArrowSvg from "../images/icon-arrow.svg";
import IpDetails from "./IpDetails";

const Form = (props) => {
  const handleSubmitIpForm = (ev) => {
    if ((ev.type === "keypress" && ev.key === "Enter") || ev.type === "click") {
      const ip = document.getElementById("ip-input").value;
      props.fetchIpInfo(ip);
    }
  };

  return (
    <div id="ip-form">
      <h1>IP Address Tracker</h1>
      <div className="form-group">
        <input
          type="text"
          name="ip-input"
          id="ip-input"
          placeholder="Search for any IP address or domain"
          onKeyPress={handleSubmitIpForm}
          defaultValue={props.ipInfo.ip}
        />
        <button id="submit-ip-form" onClick={handleSubmitIpForm}>
          <img src={IconArrowSvg} alt="arrow" />
        </button>
      </div>
      <IpDetails ipInfo={props.ipInfo}></IpDetails>
    </div>
  );
};

export default Form;
