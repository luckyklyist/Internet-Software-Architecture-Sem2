async function logJSONData() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=06ce344a70cddd88228d608a37707d38");
  const jsonData = await response.json();
  return jsonData;
}

export default logJSONData;

// calling the func in the same file
// (async () => {
//     const data = await logJSONData();
//     console.log(data);
// })();

