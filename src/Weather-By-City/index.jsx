import React, { useState } from 'react';
import './weather.css';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import CircularProgress from '@material-ui/core/CircularProgress';

const WeatherByCity = () => {
  const [city, setCity] = useState('Visakhaptnam');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      console.log(`Searching for weather in ${city}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ marginLeft: '10px', color: '#FF8C00', flex: '1' }}>
          <h1 style={{ fontSize: '30px', marginBottom: 0 }}>Weather in your city</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flex: '3', marginLeft: '30px', position: 'relative' }}>
          <input
            type="text"
            placeholder="Enter city"
            style={{ width: '100%', padding: '9px', boxSizing: 'border-box', fontSize: '16px', border: '1px solid #FF8C00', marginTop: '24px', maxWidth: '250px' }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
            <button onClick={handleSearch} className='search'>
              <HelpOutlineSharpIcon style={{ fontSize: '18px', marginRight: '5px', marginBottom: '-4px' }} />
              Search
            </button>
            {loading && <CircularProgress size={30} style={{ marginLeft: '10px', color: 'black', marginBottom: '-20px' }} />}
          </div>
        </div>
      </div>

      <div className="weather-tables-container">
      <div className="weather-table">
          <table className="weather-table">
            <tbody>
              <tr className="header-row">
                <td colSpan="2" className="header-cell">Date: DD:MM:YYYY</td>
              </tr>
              <tr className="header-row-two">
                <td colSpan="2" className="header-cell">Temperature</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Min</td>
                <td className="data-cell">Max</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">xx.xx</td>
                <td className="data-cell">xx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Pressure</td>
                <td className="data-cell">xxxx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Humidity</td>
                <td className="data-cell">xx.xx</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="weather-table">
          <table className="weather-table">
            <tbody>
              <tr className="header-row">
                <td colSpan="2" className="header-cell">Date: DD:MM:YYYY</td>
              </tr>
              <tr className="header-row-two">
                <td colSpan="2" className="header-cell">Temperature</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Min</td>
                <td className="data-cell">Max</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">xx.xx</td>
                <td className="data-cell">xx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Pressure</td>
                <td className="data-cell">xxxx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Humidity</td>
                <td className="data-cell">xx.xx</td>
              </tr>
            </tbody>
          </table>
        </div><div className="weather-table">
          <table className="weather-table">
            <tbody>
              <tr className="header-row">
                <td colSpan="2" className="header-cell">Date: DD:MM:YYYY</td>
              </tr>
              <tr className="header-row-two">
                <td colSpan="2" className="header-cell">Temperature</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Min</td>
                <td className="data-cell">Max</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">xx.xx</td>
                <td className="data-cell">xx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Pressure</td>
                <td className="data-cell">xxxx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Humidity</td>
                <td className="data-cell">xx.xx</td>
              </tr>
            </tbody>
          </table>
        </div><div className="weather-table">
          <table className="weather-table">
            <tbody>
              <tr className="header-row">
                <td colSpan="2" className="header-cell">Date: DD:MM:YYYY</td>
              </tr>
              <tr className="header-row-two">
                <td colSpan="2" className="header-cell">Temperature</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Min</td>
                <td className="data-cell">Max</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">xx.xx</td>
                <td className="data-cell">xx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Pressure</td>
                <td className="data-cell">xxxx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Humidity</td>
                <td className="data-cell">xx.xx</td>
              </tr>
            </tbody>
          </table>
        </div><div className="weather-table">
          <table className="weather-table">
            <tbody>
              <tr className="header-row">
                <td colSpan="2" className="header-cell">Date: DD:MM:YYYY</td>
              </tr>
              <tr className="header-row-two">
                <td colSpan="2" className="header-cell">Temperature</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Min</td>
                <td className="data-cell">Max</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">xx.xx</td>
                <td className="data-cell">xx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Pressure</td>
                <td className="data-cell">xxxx.xx</td>
              </tr>
              <tr className="data-row">
                <td className="data-cell">Humidity</td>
                <td className="data-cell">xx.xx</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeatherByCity;
