import React, { Component } from 'react'
import EventsListContainer from "./EventsListContainer"
import { Link } from "react-router-dom"

export default class EventsList extends Component {
  render() {
    if (this.props.events) {
      const events = this.props.events.map(event => <li><Link to={`/events/${event.id}`}></Link></li>)
      return (
        <ul>
          {events}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}
