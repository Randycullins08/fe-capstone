export default function DisplayWeather(props) {
  const { data } = props;
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <div>
          <div className="maincard">
            <h2>
              {data.name} , {data.sys.country}. Current Temp:
            </h2>
            <h1>
              {data.main.temp}
              <sup>o</sup>F
            </h1>
          </div>
        </div>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}
