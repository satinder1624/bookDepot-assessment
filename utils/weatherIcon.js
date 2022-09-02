const setIcon = (code) => {
  let classForIcon = "";
  if (code === 0) {
    classForIcon = "fas fa-sun fa-2x clear-sun";
  } else if (code === 1 || code === 2) {
    classForIcon = "fas fa-cloud-sun fa-2x cloud-sun";
  } else if (code === 3) {
    classForIcon = "fas fa-cloud fa-2x cloud";
  } else if (code > 70 && code < 80) {
    classForIcon = "far fa-snowflake fa-2x";
  } else if (code > 90 && code < 100) {
    classForIcon = "fas fa-wind fa-2x";
  } else if (code === 51 || code === 56 || code === 61) {
    classForIcon = "fas fa-cloud-sun-rain fa-2x cloud-sun";
  } else if (
    code === 53 ||
    code === 55 ||
    code === 57 ||
    code === 63 ||
    code === 65 ||
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    classForIcon = "fas fa-cloud-showers-heavy fa-2x rain-icon-color";
  } else if (code === 45 || code === 48) {
    classForIcon = "fas fa-smog fa-2x";
  } else if (code === 85 || code === 86) {
    classForIcon = "fa-solid fa-2x fa-snowflake";
  }

  return classForIcon;
};

export default setIcon;
