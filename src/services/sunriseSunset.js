import React, { Component } from 'react';
import './sunriseSunset.css';
import logo from './logo-v1_62x47.svg';

class SunriseSunset extends Component {
  constructor(props) {
    super(props);
    this.state ={myData: {}, mySunrise: '' ,mySunset: '', myDayLength: ''};
  }
  componentDidMount() {
    
    fetch('https://api.sunrise-sunset.org/json?lat=45.501689&lng=-73.567256&date=today')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((json) => {
        this.setState({
          myData: json
        })
      }).then(() => {
        this.setState({
          mySunrise: this.state.myData.results.sunrise,
          mySunset: this.state.myData.results.sunset,
          myDayLength: this.state.myData.results.day_length
        })
      });

    

  };
      convertToUTCLocalDate(dateToConvert, isAM){
        
        var changedHour = "";
        var firstDigit;
        if (isAM){
            firstDigit = dateToConvert.slice(0, 1);
            firstDigit = parseInt(firstDigit) - 4;
            changedHour =  firstDigit + dateToConvert.slice(1, 7) + ' AM';
        }
        else{
           firstDigit = dateToConvert.slice(0, 2);
           firstDigit = parseInt(firstDigit) - 4;
           changedHour =  firstDigit + dateToConvert.slice(2, 8) + ' PM';
        }
        return changedHour; 

      }
  render() {
    //c'ant work with objects inside render
    return (
    <div className="App-sunrise">
        <div className="App-sunrise-logo">
          <img src={logo} className="App-sunrise" alt="sun"/>
        </div>
        
        <div className="App-sunrise-data">
           <div><b>Lever:</b> {this.convertToUTCLocalDate(this.state.mySunrise, true)} </div>
           <div><b>Coucher:</b> {this.convertToUTCLocalDate(this.state.mySunset, false)} </div>
           <div><b> Durée: </b>{this.state.myDayLength} </div>
      </div>
        
      </div>
      );
  }
  
}

export default SunriseSunset;