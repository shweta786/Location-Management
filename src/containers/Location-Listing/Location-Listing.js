import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary'

export default class LocationListing extends Component {


    render() {
        return (
            <Aux>
                <div className='row loc-list'>
                    <div className='col s1'>
                    </div>
                    <div className='col s3'>
                        {this.props.location.locationName}
                    </div>
                    <div className='col s3'>
                        {this.props.location.address1},{this.props.location.address2}
                    </div>
                    <div className='col s3'>
                        {this.props.location.phone}
                    </div>
                    <div className='col s2'>
                    </div>
                </div>
            </Aux>
        );
    }

}