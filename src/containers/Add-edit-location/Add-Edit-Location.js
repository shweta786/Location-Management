import React, { Component } from 'react';
import styles from './Add-Edit-Location.module.css';

export default class AddEditLocation extends Component {

    location = {};

    componentDidMount() {
        console.log('ComponentDidMount');
        if (this.props.location && this.props.locationId) {
            this.location = this.props.location;
        }
    }

    render() {
        return (
            <div className='row add-loc'>
                <span className={styles.text}>{this.location.locationId ? 'Edit' : 'Add'} Location</span>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loc-name" type="text" className="validate"
                                value={this.location.locationName}></input>
                            <label htmlFor="loc-name">Location Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="address-1" type="text" className="validate"></input>
                            <label htmlFor="address-1">Address Line 1</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="suite" type="text" className="validate"></input>
                            <label htmlFor="suite">Suite No.</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="address-2" type="password" className="validate"></input>
                            <label htmlFor="address-2">Address Line 2</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="city" type="password" className="validate"></input>
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="state" type="password" className="validate"></input>
                            <label htmlFor="state">State</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="zip" type="password" className="validate"></input>
                            <label htmlFor="zip">Zip Code</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="phone" type="password" className="validate"></input>
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="zone" type="password" className="validate"></input>
                            <label htmlFor="zone">Time Zone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="time" type="text" className="validate"></input>
                            <label htmlFor="time">Facility Time</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="pool" type="text" className="validate"></input>
                            <label htmlFor="pool">Appointment Pool</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}