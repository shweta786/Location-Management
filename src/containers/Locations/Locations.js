import React, { Component } from 'react'
import { AccessDB } from 'react-indexed-db';
import styles from './Locations.module.css'
import NoLocation from '../../components/No-Location/No-Location';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AddEditLocation from '../Add-edit-location/Add-Edit-Location';
import LocationListing from '../Location-Listing/Location-Listing'
import Aux from '../../hoc/Auxilliary'

class Locations extends Component {

    state = {
        locations: [],
        locationToEdit: {},
        showAddEditModal: false,
        showFacilityTimeModal: false
    }

    addEditLocationClickHandler = (location) => {
        this.setState({ showAddEditModal: true });
        if (location && location.locationId) {
            this.setState({ locationToEdit: location });
        }
    }

    closeAddEditModal = () => {
        this.setState({
            showAddEditModal: false,
        })
    }

    render() {
        return (
            <AccessDB objectStore="locations">
                {({ getAll }) => {
                    getAll().then(
                        locationFromDB => {
                            this.setState({ locations: locationFromDB });
                        },
                        error => {
                            console.log(error);
                        }
                    );
                    return (
                        <div className={styles.container}>

                            <Header onAddLocClick={this.addEditLocationClickHandler}></Header>
                            {
                                !this.state.locations || this.state.locations.length < 1
                                    ? <NoLocation></NoLocation>
                                    : <Aux>
                                        <div className='row loc-list'>
                                            <div className='col s1'>
                                            </div>
                                            <div className='col s3 tl'>
                                                <b>Location Name</b>
                                            </div>
                                            <div className='col s4 tl'>
                                                <b>Address</b>
                                            </div>
                                            <div className='col s3'>
                                                <b>Phone No.</b>
                                            </div>
                                            <div className='col s1'>
                                            </div>
                                        </div>
                                        {this.state.locations.map((loc, index) =>
                                            <LocationListing
                                                location={loc}
                                                index={index}
                                                key={loc.locationId}
                                                onEditClick={this.addEditLocationClickHandler} />
                                        )}
                                        <div className='row loc-list'>
                                            <span>
                                                Items Per Page 10
                                            </span>
                                        </div>

                                    </Aux>
                            }

                            <AccessDB objectStore="locations">
                                {!this.state.locationToEdit || !this.state.locationToEdit.locationId
                                    // ADD LOCATION CASE
                                    ? ({ add }) => {
                                        const saveLocationHandler = (locationToAdd) => {
                                            add({
                                                'locationName': 'locationName', 'address1': 'address1',
                                                'address2': 'address2', 'suite': 'suite',
                                                'city': 'city', 'state': 'state',
                                                'zipCode': '103044', 'phone': '2847894289',
                                                'timeZone': 'timeZone', 'facilityTime': 'facilityTime',
                                                'appointment': 'appointment'
                                            }).then(
                                                event => {
                                                    this.closeAddEditModal();
                                                    alert('Location Created successfully');
                                                    console.log('ID Generated: ', event);
                                                },
                                                error => {
                                                    alert('Error occurred while saving data in DB');
                                                    console.log(error);
                                                }
                                            );
                                        };

                                        return this.state.showAddEditModal ? <Modal
                                            handleSave={saveLocationHandler}
                                            handleClose={this.closeAddEditModal}
                                            show={this.state.showAddEditModal}>
                                            <AddEditLocation location={{}} />
                                        </Modal> : null
                                    }

                                    // EDIT LOCATION CASE
                                    : ({ update }) => {
                                        const saveLocationHandler = (locationToUpdate) => {
                                            update({
                                                'locationId': this.state.locationToEdit.locationId,
                                                'locationName': 'locationNameDUP', 'address1': 'address1DUP',
                                                'address2DUP': 'address2', 'suite': 'suiteDUP',
                                                'city': 'cityDUP', 'state': 'stateDUP',
                                                'zipCode': '10304400', 'phone': '284789428900',
                                                'timeZone': 'timeZoneDUP', 'facilityTime': 'facilityTimeDUP',
                                                'appointment': 'appointmentDUP'
                                            }).then(
                                                event => {
                                                    this.closeAddEditModal();
                                                    alert('Location Updated successfully');
                                                },
                                                error => {
                                                    alert('Error occurred while updating data in DB');
                                                    console.log(error);
                                                }
                                            );
                                        };

                                        return this.state.showAddEditModal ? <Modal
                                            handleSave={saveLocationHandler}
                                            handleClose={this.closeAddEditModal}
                                            show={this.state.showAddEditModal}>
                                            <AddEditLocation location={this.state.locationToEdit} />
                                        </Modal> : null
                                    }
                                }

                            </AccessDB>

                        </div>
                    );
                }
                }
            </AccessDB >
        );
    }
}

export default Locations;