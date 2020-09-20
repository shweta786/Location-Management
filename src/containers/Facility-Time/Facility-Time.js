import React, { Component } from 'react';

export default class FacilityTime extends Component {

    state = {
        facilityTime: {
            sun: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            },
            mon: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            },
            tue: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            },
            wed: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            },
            thu: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            },
            fri: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            },
            sat: {
                from: { val: '', am: true, pm: false },
                to: { val: '', am: false, pm: true }
            }
        },
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
    }

    componentDidMount() {
        if (this.props.facilityTime) {
            this.setState({ facilityTime: this.props.facilityTime });

        } else {
            this.setState({
                facilityTime: {
                    sun: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    },
                    mon: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    },
                    tue: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    },
                    wed: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    },
                    thu: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    },
                    fri: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    },
                    sat: {
                        from: { val: '', am: true, pm: false },
                        to: { val: '', am: false, pm: true }
                    }
                }
            });
        }
    }

    updateChecks = (key, value) => {
        console.log('HIIIIIII')
        this.setState({ [key]: value });
    }

    render() {
        return (
            <div className='add-loc fac-time'>
                <span className='heading'>Facility Times</span>
                <div className='row'>
                    <div className='col s5'>
                        From
                    </div>
                    <div className='col s7'>
                        To
                    </div>
                </div>

                {/* FOR SUNDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.sun} id='sun'
                            onChange={() => { this.updateChecks('sun', !this.state.sun) }}>
                        </input>
                        <label htmlFor='sun'>Sun</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['sun']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['sun']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['sun']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['sun']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                {/* FOR MONDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.mon} id='mon'
                            onChange={() => { this.updateChecks('mon', !this.state.mon) }}>
                        </input>
                        <label htmlFor='mon'>Mon</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['mon']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'} >AM</span>
                            <span className={this.state.facilityTime['mon']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['mon']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['mon']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                {/* FOR TUESDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.tue} id='tue'
                            onChange={() => { this.updateChecks('tue', !this.state.tue) }}>
                        </input>
                        <label htmlFor='tue'>Tue</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['tue']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['tue']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['tue']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['tue']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                {/* FOR WEDNESDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.wed} id='wed'
                            onChange={() => { this.updateChecks('wed', !this.state.wed) }}>
                        </input>
                        <label htmlFor='wed'>Wed</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['wed']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['wed']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['wed']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['wed']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                {/* FOR THURSDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.thu} id='thu'
                            onChange={() => { this.updateChecks('thu', !this.state.thu) }}>
                        </input>
                        <label htmlFor='thu'>Thu</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['thu']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['thu']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['thu']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['thu']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                {/* FOR FRIDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.fri} id='fri'
                            onChange={() => { this.updateChecks('fri', !this.state.fri) }}>
                        </input>
                        <label htmlFor='fri'>Fri</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['fri']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['fri']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['fri']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['fri']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                {/* FOR SATURDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.sat} id='sat'
                            onChange={() => { this.updateChecks('sat', !this.state.sat) }}>
                        </input>
                        <label htmlFor='sat'>Sat</label>
                        <input className='time-input m-30' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['sat']['from']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['sat']['from']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                    </div>
                    <div className='col s7'>
                        <input className='time-input' type='text'></input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['sat']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['sat']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display'>Apply to all checked</button>
                    </div>
                </div>

                <div className='action'>
                    <button onClick={this.props.closeModal} className='btn btn-danger'>Cancel</button>
                    <button onClick={() => { this.props.handleSave(this.state.location) }} className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}
