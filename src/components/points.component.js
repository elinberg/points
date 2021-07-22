import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Transformer from './assets/transformer';

const Points = props => {
    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get('https://7jnlhc0616.api.quickmocker.com/transactions', {
            headers: {
                'Authorization': 'Apikey 1c35565e7226ccec84e773a6d3b890a9dc17d99f82ea4151d074802c2ccec132'
            }
        })
        .then(res => {
            //console.log("RESPONSE", res)
            let transformer = new Transformer();
            let dataset = transformer.getPoints(res.data)
            setData(
                dataset
            )

        })

        return () => {
            console.log("Cleanup")
            setData([])
        }

    }, [])

    const columns = [
        {
            name: 'User',
            selector: row => row.user,
            sortable: true,
            left: true,
        },
        {
            name: 'Month',
            selector: row => row.month,
            sortable: true,
            left: true,
        },
        {
            name: 'Points',
            selector: row => row.points,
            sortable: true,
            left: true,
        }
    ];



    return (


        <DataTable
            title="Award Points"
            columns={columns}
            data={data.table}
        />


    )



}
export default Points