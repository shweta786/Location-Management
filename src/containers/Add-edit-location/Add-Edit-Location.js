import React, { Component } from 'react';
import styles from './Add-Edit-Location.module.css';

export default class AddEditLocation extends Component {

    location = {};

    componentDidMount() {
        if (this.props.location && this.props.location.locationId) {
            this.location = this.props.location;
        } else {
            this.location = {};
        }
    }

    onChangeHandler(event, fieldName) {
        this.location[fieldName] = event.target.value;
    }

    render() {
        return (
            <div className='row add-loc'>
                <span className={styles.text}>{this.location.locationId ? 'Edit' : 'Add'} Location</span>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loc-name" className="validate" value={this.location.locationName || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'locationName') }}></input>
                            <label htmlFor="loc-name"
                                className={this.location.locationName ? 'active required' : 'required'}>
                                Location Name <span className='required'>*</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="address-1" className="validate" value={this.location.address1 || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'address1') }}>
                            </input>
                            <label htmlFor="address-1" className={this.location.address1 ? 'active' : ''}>
                                Address Line 1
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="suite" className="validate" value={this.location.suite || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'suite') }}>
                            </input>
                            <label htmlFor="suite" className={this.location.suite ? 'active' : ''}>
                                Suite No.
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="address-2" className="validate" value={this.location.address2 || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'address2') }}>
                            </input>
                            <label htmlFor="address-2" className={this.location.address2 ? 'active' : ''}>
                                Address Line 2
                            </label>
                        </div>
                        <div className="input-field col s3">
                            <input id="city" className="validate" value={this.location.city || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'city') }}>
                            </input>
                            <label htmlFor="city" className={this.location.city ? 'active' : ''}>
                                City
                            </label>
                        </div>
                        <div className="input-field col s3">
                            <select id="state" className='browser-default' value={this.location.state || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'state') }}>
                                <option value="">Choose State</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District Of Columbia">District Of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </select>
                            <label htmlFor="state" className='active'>
                                State
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="zip" type="number" className="validate"
                                value={this.location.zipCode || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'zipCode') }}>
                            </input>
                            <label htmlFor="zip" className={this.location.zipCode ? 'active' : ''}>
                                Zip Code
                            </label>
                        </div>
                        <div className="input-field col s3">
                            <input id="phone" type="number" className="validate"
                                value={this.location.phone || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'phone') }}>
                            </input>
                            <label htmlFor="phone" className={this.location.phone ? 'active' : ''}>
                                Phone Number
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <select id='zone' className='browser-default' value={this.location.timeZone || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'timeZone') }}>
                                <option value="">Choose Time Zone</option>
                                <option value="Central Daylight(GMT-5)">Central Daylight(GMT-5)</option>
                                <option value="Mountain Daylight(GMT-6)">Mountain Daylight(GMT-6)</option>
                                <option value="Mountain Standard(GMT-7)">Mountain Standard(GMT-7)</option>
                                <option value="Pacific Daylight(GMT-8)">Pacific Daylight(GMT-8)</option>
                                <option value="Alaska Daylight(GMT-9)">Alaska Daylight(GMT-9)</option>
                                <option value="Hawaii-Aleutian Standard(GMT-10)">Hawaii-Aleutian Standard(GMT-10)</option>
                            </select>
                            <label htmlFor="zone" className='active'>
                                Time Zone
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="time" className="validate" value={this.location.facilityTime || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'facilityTime') }}>
                            </input>
                            <label htmlFor="time" className={this.location.facilityTime ? 'active' : ''}>
                                Facility Time
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="pool" className="validate" value={this.location.appointment || ''}
                                onChange={($event) => { this.onChangeHandler($event, 'appointment') }}>
                            </input>
                            <label htmlFor="pool" className={this.location.appointment ? 'active' : ''}>
                                Appointment Pool
                            </label>
                        </div>
                    </div>
                </form>
                <div className='action'>
                    <button onClick={this.props.handleClose} className='btn btn-danger'>Cancel</button>
                    <button onClick={() => { this.props.handleSave(this.location) }} className='btn btn-primary'
                        disabled={!this.location || !this.location.locationName ||
                            this.location.locationName.trim() === ''}>
                        Save
                    </button>
                </div>
            </div>
        )
    }

}