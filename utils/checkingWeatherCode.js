const codeList = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing Rime Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Dense Drizzle",
  56: "Light Freezing Drizzle",
  57: "Dense Freezing Drizzle",
  61: "Slight Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  66: "Light Freezing Rain Intensity",
  67: "Heavy Freezing Rain Intensity",
  71: "Slight Snow Fall",
  73: "Moderate Snow Fall",
  75: "Violent Snow Fall",
  77: "Snow grains",
  80: "Slight Rain Showers",
  81: "Slight Rain Showers",
  82: "Slight Rain Showers",
  85: "Slight Snow Showers",
  86: "Heavy Snow Showers",
  95: "Slight or Moderate Thunderstrom",
  96: "Thunderstorm with slighthail",
  99: "Thunderstorm with heavy hail",
};

module.exports.resultCode = (code) => {
  return codeList[code];
};
