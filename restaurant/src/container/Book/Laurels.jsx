import axios from 'axios';
import React from 'react';
import './Laurels.css'

class Book extends React.Component {
  constructor(){
  super()
  this.state = {firstname:'', 
    lastname:'',
    email:'',
    phone:'',
    numberofguests:'1',
    bookingdate:'2022-11-21',
    bookingtime:'none'
  } 
  this.changefirstname=this.changefirstname.bind(this)
  this.changelastname=this.changelastname.bind(this)
  this.changeemail=this.changeemail.bind(this)
  this.changephone=this.changephone.bind(this)
  this.changenumberofguests=this.changenumberofguests.bind(this)
  this.changedate=this.changedate.bind(this)
  this.changetime=this.changetime.bind(this)
  this.onSubmit=this.onSubmit.bind(this)
  }
  changefirstname(event){
    this.setState({
      firstname:event.target.value
    })
  }
  changelastname(event){
    this.setState({
      lastname:event.target.value
    })
  }
  changeemail(event){
    this.setState({
      email:event.target.value
    })
  }
  changephone(event){
    this.setState({
      phone:event.target.value
    })
  }
  changenumberofguests(event){
    this.setState({
      numberofguests:event.target.value
    })
  }
  changedate(event){
    this.setState({
      bookingdate:event.target.value
    })
  }
  changetime(event){
    this.setState({
      bookingtime:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    const booked={
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      phone:this.state.phone,
      numberofguests:this.state.numberofguests,
      bookingdate:this.state.bookingdate,
      bookingtime:this.state.bookingtime
    }
    axios.post('http://localhost:4000/app/book',booked)
    .then(response=>console.log(response.data))
    alert("Your booking has been confirmed")
    window.location='/'
  }
  
  render() { 
    return (<div className='app-container-div'>
      <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Enter Your Details to book a table </h1>
    </div>
      <div className='form-div'>
        <form onSubmit={this.onSubmit}>
          <label for="fname">First Name </label>
          <input type="text" placeholder="First Name" id="fname"onChange={this.changefirstname} value={this.state.firstname}required/><br/>
          <label for="lname">Last Name </label>
          <input type="text" placeholder="Last Name" id="lname "onChange={this.changelastname} value={this.state.lastname}required/><br/>
          <label for="email">Email </label>
          <input type="email" placeholder="Email" id="email" onChange={this.changeemail} value={this.state.email}required/><br/>
          <label for="phone">Phone </label>
          <input type="tel" placeholder="Phone Number" id="phone" onChange={this.changephone} value={this.state.phone} pattern="[0-9]{10}"required/><br/>
          <label for="guests">Number of guests </label>
          <input type="number" id="guests"onChange={this.changenumberofguests} value={this.state.numberofguests} min='1' max='20'/><br/>
          <label for="date">Date </label>
          <input type="date" id="date" onChange={this.changedate} value={this.state.bookingdate} min="2022-11-21" max="2022-12-20" required/><br/>
          <label for="time">Time </label>
          <select name="time" id="time" onChange={this.changetime} value={this.state.bookingtime} required >
            <option value="none" selected disabled hidden>Select time</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
          <br/>
          <div className='book_custom__button'>
          <input type="submit"  value="Confirm your booking!"/>
          </div>
        </form>
      </div>

    </div>);
  }
}

export default Book;