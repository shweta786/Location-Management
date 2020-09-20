import React, { Component } from 'react'
import { AccessDB } from 'react-indexed-db';
import styles from './Locations.module.css'
import NoLocation from '../../components/No-Location/No-Location';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AddEditLocation from '../Add-edit-location/Add-Edit-Location';
import LocationListing from '../../components/Location-Listing/Location-Listing'
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
        } else {
            this.setState({ locationToEdit: {} });
        }
    }

    removeLocationFromList = (index) => {
        let locationDup = JSON.parse(JSON.stringify(this.state.locations));
        locationDup.splice(index, 1);
        this.setState({ locations: locationDup });
    }

    closeAddEditModal = () => {
        this.setState({
            showAddEditModal: false,
        })
    }

    shouldComponentUpdate(prevProp, prevState) {
        if (prevState.locations.length !== this.state.locations.length ||
            prevState.showAddEditModal !== this.state.showAddEditModal ||
            prevState.showFacilityTimeModal !== this.state.showFacilityTimeModal)
            return true;
        return false;
    }

    render() {
        return (
            <AccessDB objectStore="locations">
                {({ getAll }) => {
                    getAll().then(
                        locationFromDB => {
                            if (locationFromDB) {
                                locationFromDB = locationFromDB.sort(
                                    (a, b) => (a.locationName.toLowerCase() > b.locationName.toLowerCase()) ? 1 : -1);
                            }
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
                                                onEditClick={this.addEditLocationClickHandler}
                                                afterDelete={this.removeLocationFromList} />
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
                                                'locationName': locationToAdd.locationName,
                                                'address1': locationToAdd.address1,
                                                'address2': locationToAdd.address2,
                                                'suite': locationToAdd.suite,
                                                'city': locationToAdd.city,
                                                'state': locationToAdd.state,
                                                'zipCode': locationToAdd.zipCode,
                                                'phone': locationToAdd.phone,
                                                'timeZone': locationToAdd.timeZone,
                                                'facilityTime': locationToAdd.facilityTime,
                                                'appointment': locationToAdd.appointment
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

                                        return this.state.showAddEditModal ?
                                            <Modal>
                                                <AddEditLocation location={{}}
                                                    handleSave={saveLocationHandler}
                                                    handleClose={this.closeAddEditModal} />
                                            </Modal> : null
                                    }

                                    // EDIT LOCATION CASE
                                    : ({ update }) => {
                                        const saveLocationHandler = (locationToUpdate) => {
                                            update({
                                                'locationId': locationToUpdate.locationId,
                                                'locationName': locationToUpdate.locationName,
                                                'address1': locationToUpdate.address1,
                                                'address2': locationToUpdate.address2,
                                                'suite': locationToUpdate.suite,
                                                'city': locationToUpdate.city,
                                                'state': locationToUpdate.state,
                                                'zipCode': locationToUpdate.zipCode,
                                                'phone': locationToUpdate.phone,
                                                'timeZone': locationToUpdate.timeZone,
                                                'facilityTime': locationToUpdate.facilityTime,
                                                'appointment': locationToUpdate.appointment
                                            }).then(
                                                event => {
                                                    this.closeAddEditModal();
                                                    // alert('Location Updated successfully');
                                                },
                                                error => {
                                                    alert('Error occurred while updating data in DB');
                                                    console.log(error);
                                                }
                                            );
                                        };

                                        return this.state.showAddEditModal ?
                                            <Modal>
                                                <AddEditLocation location={this.state.locationToEdit}
                                                    handleSave={saveLocationHandler}
                                                    handleClose={this.closeAddEditModal} />
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