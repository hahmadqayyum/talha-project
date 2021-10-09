import React from 'react'
import {useLaunchesQuery} from '../../generated/graphql'
import Loading from '../Utils/Loading/Loading';
import Launch from './Launch'

const LaunchContainer = () =>{
    const {data,error,loading} = useLaunchesQuery();

    if(loading){
        return <Loading />
    }

    if(error || !data){
        return <div>Error</div>
    }

    if(data){
        return <Launch data={data} />
    }

}

export default LaunchContainer