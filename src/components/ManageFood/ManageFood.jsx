import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { useTable } from "react-table";
import Swal from "sweetalert2";
// import * as React from "react";

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    // a state to set change in data
    const [addedFoods, setAddedFoods] = useState([]);

    const url = `http://localhost:5000/foods?userEmail=${user.email}`

    // console.log(url);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setAddedFoods(res.data);
            })
    }, [url])
    console.log(addedFoods);

    const data = React.useMemo(() => addedFoods, [addedFoods]);
    const columns = React.useMemo(() => [
        {
            Header: "ID",
            accessor: "_id",
        },
        {
            Header: "Food Name",
            accessor: "foodName",
        },
        // {
        //     Header: "Food Image",
        //     accessor: "foodImage",
        // },
        {
            Header: "Expire Date",
            accessor: "expiredDateTime",
        },
        {
            Header: "Actions",
            accessor: "actions",
            Cell: ({ row }) => (
                <div>
                    <button onClick={() => handleManage(row.original)}>Manage</button>
                    <button onClick={() => handleDelete(row.original._id)}>Delete</button>
                </div>
            ),
        },
    ], [])

    const handleManage = (food) => {
        // Add your manage logic here
        console.log("Managing food", food);
    };

    // const handleDelete1 = (foodId) => {
    //     // Add your delete logic here
    //     console.log("Deleting food with ID", foodId);
    //     const proceed = confirm('Are you sure you want to delete');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/foods/${foodId}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('Delete operation successful')
    //                     const remaining = addedFoods.filter(food => food._id !== foodId);
    //                     setAddedFoods(remaining)
    //                 }
    //             })
    //     }
    // };
    const handleDelete = _id => {
        console.log('clicked', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/foods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added car has been deleted.",
                                icon: "success"
                            })
                            const remaining = addedFoods.filter(food => food._id !== _id);
                            setAddedFoods(remaining);
                        }
                    })
            }
        });
    }

    // const table = useTable({ columns, data })
    // console.log(table);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div>
            <h1>this is manage my food</h1>
            {/* trying to implement react tbale */}
            <div className="container mx-auto">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>

        </div>
    );
};

export default ManageFood;