document.getElementById("searchBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Digite o nome de uma cidade!");
    return;
  }

  const apiKey = "f8cfdc0fd64ea422d83bdde70e7dc398"; // 🔑 coloque sua chave do Weatherstack
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(city)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("Erro: " + data.error.info);
      return;
    }

    document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").textContent = `🌡️ ${data.current.temperature}°C`;
    document.getElementById("desc").textContent = data.current.weather_descriptions[0];
    document.getElementById("icon").src = data.current.weather_icons[0];

    document.getElementById("weatherResult").style.display = "block";
  } catch (error) {
    console.error(error);
    alert("Erro ao buscar dados: " + error.message);
  }
});
