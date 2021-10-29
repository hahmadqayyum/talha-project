import React from 'react'
import { useShipsQuery } from '../../generated/graphql'
import Loading from '../Utils/Loading/Loading';
import Ships from './Ships';


export default function ShipContainer(params) {
    const { data, loading, error } = useShipsQuery();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>There was an error</div>
    }

    if (data) {
        return <Ships data={data} />
    }

}