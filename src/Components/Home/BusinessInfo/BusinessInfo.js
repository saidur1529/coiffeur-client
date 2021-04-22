import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faBusinessTime, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faBusinessTime,
        background: 'primary'
    },
    {
        title: 'Visit Us',
        description: 'Near your Home',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+880 15156-87002',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="row d-flex justify-content-center">
            <div className="w-50 row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;