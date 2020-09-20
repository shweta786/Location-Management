import React, { PureComponent } from 'react';

export default class FacilityTime extends PureComponent {

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
        checkedEle: {
            sun: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
        }
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

    // for handling input checkbox
    updateChecks = (key, value) => {
        let dupCheckedEle = JSON.parse(JSON.stringify(this.state.checkedEle));
        dupCheckedEle[key] = value;
        this.setState({
            checkedEle: dupCheckedEle
        });
    }

    // to update state's facility time when text changes
    handleTextChange = (day, param, event) => {
        let ftDup = JSON.parse(JSON.stringify(this.state.facilityTime));
        ftDup[day][param].val = event && event.target ? event.target.value : event;
        this.setState({
            facilityTime: ftDup
        });
    }

    // Check and ensures required format
    checkFormat = (day, param) => {
        let val = this.state.facilityTime[day][param].val;

        // No action on empty value
        if (val === '')
            return;
        let splitVal = val.split(':');

        if (!splitVal || splitVal.length > 2) {
            alert('invalid value');
            this.handleTextChange(day, param, '');
            return;
        }

        let num1 = Number.parseInt(splitVal[0]);
        if (isNaN(num1) || num1 > 23) {
            alert('invalid value');
            this.handleTextChange(day, param, '');
            return;
        }

        let num2 = Number.parseInt(splitVal[1]);
        if ((splitVal[1] && isNaN(num2)) || num2 > 59) {
            alert('invalid value');
            this.handleTextChange(day, param, '');
            return;
        }

        if (num1 > 12) {
            let ftDup = JSON.parse(JSON.stringify(this.state.facilityTime));
            ftDup[day][param].val = (num1 - 12).toString() + ':' + (num2 ? num2 : '00');
            ftDup[day][param].am = false;
            ftDup[day][param].pm = true;
            this.setState({
                facilityTime: ftDup
            });
        } else if (num1 === 12) {
            let ftDup = JSON.parse(JSON.stringify(this.state.facilityTime));
            ftDup[day][param].val = '12:' + (num2 ? num2 : '00');
            ftDup[day][param].am = false;
            ftDup[day][param].pm = true;
            this.setState({
                facilityTime: ftDup
            });
        } else if (num1 === 0) {
            let ftDup = JSON.parse(JSON.stringify(this.state.facilityTime));
            ftDup[day][param].val = '12:' + (num2 ? num2 : '00');
            ftDup[day][param].am = true;
            ftDup[day][param].pm = false;
            this.setState({
                facilityTime: ftDup
            });
        } else {
            let ftDup = JSON.parse(JSON.stringify(this.state.facilityTime));
            ftDup[day][param].val = num1.toString() + ':' + (num2 ? num2 : '00');
            ftDup[day][param].am = true;
            ftDup[day][param].pm = false;
            this.setState({
                facilityTime: ftDup
            });
        }
    }

    // To handle apply to all checked click
    applyToAllChecked = (day) => {
        let dupFacilityTime = JSON.parse(JSON.stringify(this.state.facilityTime));
        let toCopy = JSON.parse(JSON.stringify(this.state.facilityTime[day]));
        for (let key in this.state.checkedEle) {
            if (this.state.checkedEle[key] === true) {
                dupFacilityTime[key] = toCopy;
            }
        }
        this.setState({
            facilityTime: dupFacilityTime
        });
    }

    render() {
        return (
            <div className='add-loc fac-time'>
                <span className='heading'>Facility Times</span>(HH:MM)
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
                        <input type='checkbox' checked={this.state.checkedEle.sun} id='sun'
                            onChange={() => { this.updateChecks('sun', !this.state.checkedEle.sun) }}>
                        </input>
                        <label htmlFor='sun'>Sun</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.sun.from.val}
                            onChange={($event) => { this.handleTextChange('sun', 'from', $event) }}
                            onBlur={() => { this.checkFormat('sun', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.sun.to.val}
                            onChange={($event) => { this.handleTextChange('sun', 'to', $event) }}
                            onBlur={() => { this.checkFormat('sun', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['sun']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['sun']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('sun') }}>
                            Apply to all checked
                        </button>
                    </div>
                </div>

                {/* FOR MONDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.checkedEle.mon} id='mon'
                            onChange={() => { this.updateChecks('mon', !this.state.checkedEle.mon) }}>
                        </input>
                        <label htmlFor='mon'>Mon</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.mon.from.val}
                            onChange={($event) => { this.handleTextChange('mon', 'from', $event) }}
                            onBlur={() => { this.checkFormat('mon', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.mon.to.val}
                            onChange={($event) => { this.handleTextChange('mon', 'to', $event) }}
                            onBlur={() => { this.checkFormat('mon', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['mon']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['mon']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('mon') }}>
                            Apply to all checked
                        </button>
                    </div>
                </div>

                {/* FOR TUESDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.checkedEle.tue} id='tue'
                            onChange={() => { this.updateChecks('tue', !this.state.checkedEle.tue) }}>
                        </input>
                        <label htmlFor='tue'>Tue</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.tue.from.val}
                            onChange={($event) => { this.handleTextChange('tue', 'from', $event) }}
                            onBlur={() => { this.checkFormat('tue', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.tue.to.val}
                            onChange={($event) => { this.handleTextChange('tue', 'to', $event) }}
                            onBlur={() => { this.checkFormat('tue', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['tue']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['tue']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('tue') }}>
                            Apply to all checked
                            </button>
                    </div>
                </div>

                {/* FOR WEDNESDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.checkedEle.wed} id='wed'
                            onChange={() => { this.updateChecks('wed', !this.state.checkedEle.wed) }}>
                        </input>
                        <label htmlFor='wed'>Wed</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.wed.from.val}
                            onChange={($event) => { this.handleTextChange('wed', 'from', $event) }}
                            onBlur={() => { this.checkFormat('wed', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.wed.to.val}
                            onChange={($event) => { this.handleTextChange('wed', 'to', $event) }}
                            onBlur={() => { this.checkFormat('wed', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['wed']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['wed']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('wed') }}>
                            Apply to all checked
                        </button>
                    </div>
                </div>

                {/* FOR THURSDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.checkedEle.thu} id='thu'
                            onChange={() => { this.updateChecks('thu', !this.state.checkedEle.thu) }}>
                        </input>
                        <label htmlFor='thu'>Thu</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.thu.from.val}
                            onChange={($event) => { this.handleTextChange('thu', 'from', $event) }}
                            onBlur={() => { this.checkFormat('thu', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.thu.to.val}
                            onChange={($event) => { this.handleTextChange('thu', 'to', $event) }}
                            onBlur={() => { this.checkFormat('thu', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['thu']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['thu']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('thu') }}>
                            Apply to all checked
                        </button>
                    </div>
                </div>

                {/* FOR FRIDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.checkedEle.fri} id='fri'
                            onChange={() => { this.updateChecks('fri', !this.state.checkedEle.fri) }}>
                        </input>
                        <label htmlFor='fri'>Fri</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.fri.from.val}
                            onChange={($event) => { this.handleTextChange('fri', 'from', $event) }}
                            onBlur={() => { this.checkFormat('fri', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.fri.to.val}
                            onChange={($event) => { this.handleTextChange('fri', 'to', $event) }}
                            onBlur={() => { this.checkFormat('fri', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['fri']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['fri']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('fri') }}>
                            Apply to all checked
                        </button>
                    </div>
                </div>

                {/* FOR SATURDAY */}
                <div className='row'>
                    <div className='col s5'>
                        <input type='checkbox' checked={this.state.checkedEle.sat} id='sat'
                            onChange={() => { this.updateChecks('sat', !this.state.checkedEle.sat) }}>
                        </input>
                        <label htmlFor='sat'>Sat</label>
                        <input className='time-input m-30' type='text'
                            value={this.state.facilityTime.sat.from.val}
                            onChange={($event) => { this.handleTextChange('sat', 'from', $event) }}
                            onBlur={() => { this.checkFormat('sat', 'from') }}>
                        </input>
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
                        <input className='time-input' type='text'
                            value={this.state.facilityTime.sat.to.val}
                            onChange={($event) => { this.handleTextChange('sat', 'to', $event) }}
                            onBlur={() => { this.checkFormat('sat', 'to') }}>
                        </input>
                        <div className='ib-display m-8'>
                            <span className={this.state.facilityTime['sat']['to']['am']
                                ? 'ib-display am format-selected'
                                : 'ib-display am'}>AM</span>
                            <span className={this.state.facilityTime['sat']['to']['pm']
                                ? 'ib-display pm format-selected'
                                : 'ib-display pm'}>PM</span>
                        </div>
                        <button className='btn btn-light ib-display' onClick={() => { this.applyToAllChecked('sat') }}>
                            Apply to all checked
                        </button>
                    </div>
                </div>

                <div className='action'>
                    <button onClick={this.props.closeModal} className='btn btn-danger'>Cancel</button>
                    <button onClick={() => { this.props.saveFacilityTime(this.state.facilityTime) }}
                        className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}
