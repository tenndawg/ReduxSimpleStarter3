import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td style={{width: 280, height: 256}}><Chart data={temps} color="red" units="F" /></td>
                <td style={{width: 280, height: 256}}><Chart data={pressures} color="blue" units="hPa" /></td>
                <td style={{width: 280, height: 256}}><Chart data={humidities} color="green" units="%" /></td>
            </tr>
        )
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; //{ weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);