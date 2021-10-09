import React from 'react';
import RocketInfo from './RocketInfo';
import Loading from '../Utils/Loading/Loading';
import { useRocketInfoQuery } from '../../generated/graphql'

const RocketInfoContainer = (id) =>{

    const {data,error,loading} = useRocketInfoQuery({variables: {id : `${id}`}});

    if(error){
        return <div>There was an error</div>
    }

    if(loading){
        return <Loading />
    }

    if(data){
        return <RocketInfo data={data} />
    }


}


export default RocketInfoContainer;