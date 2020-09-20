import React, { Component } from 'react';
import editSrc from '../../assets/edit_icon.png';
import deleteSrc from '../../assets/delete_icon.png';
import { AccessDB } from 'react-indexed-db';
import Aux from '../../hoc/Auxilliary'

export default class LocationListing extends Component {

    render() {
        return (
            <Aux>
                <div className='row loc-list'>
                    <div className='col s1'>
                        <div className='indexing'><span>{this.props.index + 1}</span></div>
                    </div>
                    <div className='col s3 tl'>
                        {this.props.location.locationName}
                    </div>
                    <div className='col s4 tl'>
                        {this.props.location.address1},{this.props.location.address2},
                        {this.props.location.city},{this.props.location.state}, US
                    </div>
                    <div className='col s3'>
                        {this.props.location.phone}
                    </div>
                    <div className='col s1'>
                        <img src={editSrc} alt='Edit' onClick={() => { this.props.onEditClick(this.props.location) }}>
                        </img>

                        <AccessDB objectStore="locations">
                            {({ deleteRecord }) => {
                                const handleDeleteClick = () => {
                                    var r = window.confirm("Are you sure you want to delete this location");
                                    if (r === true) {
                                        deleteRecord(this.props.location.locationId).then(event => {
                                            console.log('Deleted');
                                        });
                                    }
                                };
                                return <img src={deleteSrc} alt='Delete' onClick={handleDeleteClick}></img>
                            }}
                        </AccessDB>
                    </div>
                </div>
            </Aux>
        );
    }

}