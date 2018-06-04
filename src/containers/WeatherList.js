import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td style={{width: 280, height: 256}}>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color={"red"} />
                        <SparklinesBars />
                    </Sparklines>
                </td>
                <td style={{width: 280, height: 256}}>
                    <Sparklines height={120} width={180} data={pressure}>
                        <SparklinesLine color={"green"} />
                        <SparklinesBars />
                    </Sparklines>
                </td>
            </tr>
        )
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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