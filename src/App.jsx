import React, { useEffect, useState } from "react";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [city, setCity] = useState("New Delhi");
  const [data, setData] = useState(null);

  const URL = `https://api.weatherapi.com/v1/current.json?key=44d99ced9fe54d11a7f85339241907&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  const mapSrc = data
    ? `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224346.32835516133!2d${data.location.lon}!3d${data.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721460856963!5m2!1sen!2sin`
    : `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224346.32835516133!2d77.20898509999999!3d28.5273522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721460856963!5m2!1sen!2sin`;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 border-b-2 lg:flex-row bg-zinc-800">
        <div className="w-full m-10 lg:w-1/2 lg:mb-0 lg:mr-10">
          {data && (
            <Temperature
              setCity={setCity}
              stats={{
                temp: data.current.temp_c,
                condition: data.current.condition.text,
                isDay: data.current.is_day,
                location: data.location.name,
                time: data.location.localtime,
              }}
            />
          )}
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="mb-4 text-lg text-white md:text-xl lg:text-2xl">
            Today's Forecasts
          </h2>
          {data && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <Forecast
                stats={{
                  title: "Wind Status",
                  value: data.current.wind_mph,
                  unit: "mph",
                  direction: data.current.wind_dir,
                }}
              />
              <Forecast
                stats={{
                  title: "Humidity",
                  value: data.current.humidity,
                  unit: "%",
                }}
              />
              <Forecast
                stats={{
                  title: "Visibility",
                  value: data.current.vis_miles,
                  unit: "miles",
                }}
              />
              <Forecast
                stats={{
                  title: "Air Pressure",
                  value: data.current.pressure_mb,
                  unit: "mb",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <iframe
        src={mapSrc}
        className="w-full h-60"
        allowFullScreen
        loading="lazy"
        style={{ border: "0" }}
      ></iframe>
      <Footer />
    </>
  );
};

export default App;
