import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchInfo from './LaunchInfo';

const LaunchContainerDetails = (flight_number) => {

    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: flight_number } });

    if (loading) {
        return <div>Data is Loading</div>
    }

    if (error) {
        return <div>Error</div>
    }

    if (!data) {
        return <div>Please seleact a mission</div>
    }

    if (data) {
        return <LaunchInfo data={data} />
    }
}

export default LaunchContainerDetails;