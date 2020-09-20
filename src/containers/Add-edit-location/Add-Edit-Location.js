import React, { Component } from 'react';
import styles from './Add-Edit-Location.module.css';

export default class AddEditLocation extends Component {

    location = {};

    componentDidMount() {
        console.log('ComponentDidMount');
        if (this.props.location && this.props.location.locationId) {
            this.location = this.props.location;
        } else {
            this.location = {};
        }
    }

    onChangeHandler() { }

    render() {
        return (
            <div className='row add-loc'>
                <span className={styles.text}>{this.location.locationId ? 'Edit' : 'Add'} Location</span>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loc-name" type="text" className="validate"
                                value={this.location.locationName || ''}
                                onChange={this.onChangeHandler}></input>
                            <label htmlFor="loc-name" className={this.location.locationName ? 'active' : ''}>
                                Location Name
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="address-1" type="text" className="validate"></input>
                            <label htmlFor="address-1" className={this.location.locationName ? 'active' : ''}>
                                Address Line 1
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="suite" type="text" className="validate"></input>
                            <label htmlFor="suite" className={this.location.locationName ? 'active' : ''}>
                                Suite No.
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="address-2" type="password" className="validate"></input>
                            <label htmlFor="address-2" className={this.location.locationName ? 'active' : ''}>
                                Address Line 2
                            </label>
                        </div>
                        <div className="input-field col s3">
                            <input id="city" type="password" className="validate"></input>
                            <label htmlFor="city" className={this.location.locationName ? 'active' : ''}>
                                City
                            </label>
                        </div>
                        <div className="input-field col s3">
                            <input id="state" type="password" className="validate"></input>
                            <label htmlFor="state" className={this.location.locationName ? 'active' : ''}>
                                State
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="zip" type="password" className="validate"></input>
                            <label htmlFor="zip" className={this.location.locationName ? 'active' : ''}>
                                Zip Code
                            </label>
                        </div>
                        <div className="input-field col s3">
                            <input id="phone" type="password" className="validate"></input>
                            <label htmlFor="phone" className={this.location.locationName ? 'active' : ''}>
                                Phone Number
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="zone" type="password" className="validate"></input>
                            <label htmlFor="zone" className={this.location.locationName ? 'active' : ''}>
                                Time Zone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="time" type="text" className="validate"></input>
                            <label htmlFor="time" className={this.location.locationName ? 'active' : ''}>
                                Facility Time
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="pool" type="text" className="validate"></input>
                            <label htmlFor="pool" className={this.location.locationName ? 'active' : ''}>
                                Appointment Pool
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}