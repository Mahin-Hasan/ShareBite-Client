import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { useTable } from "react-table";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { motion } from 'framer-motion';

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    // a state to set change in data
    const [addedFoods, setAddedFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = `https://sharebite-server.onrender.com/foods?userEmail=${user.email}`
    useEffect(() => {
        document.title = "Manage Food"
    }, [])
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setAddedFoods(res.data);
                setLoading(true);
            })
    }, [url])

    const data = React.useMemo(() => addedFoods, [addedFoods]);
    const columns = React.useMemo(() => [
        {
            Header: "Delete",
            accessor: "delete",
            Cell: ({ row }) => (
                <div>
                    <button onClick={() => handleDelete(row.original._id)} className="btn btn-sm sm:btn-md btn-circle btn-outline hover:bg-red-600 border-2 hover:border-none font-bold text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            ),
        },
        {
            Header: "Food Image",
            accessor: "foodImage",
            Cell: ({ value }) => (
                <div className="flex justify-center ">
                    <img src={value} className="w-14 sm:w-20 h-14 sm:h-20 rounded-lg p-1" />
                </div>
            ),
        },
        {
            Header: "Food Name",
            accessor: "foodName",
            Cell: ({ value }) => (
                <div className="flex justify-center ">
                    <p className="custom-font tracking-wider text-sm sm:text-xl italic font-semibold text-sky-700">{value}</p>
                </div>
            ),
        },
        {
            Header: "Expire Date",
            accessor: "expiredDateTime",
            Cell: ({ value }) => (
                <div className="flex justify-center ">
                    <p className="text-sm sm:text-lg italic font-semibold text-blue-700">{value}</p>
                </div>
            ),
        },
        {
            Header: "Actions",
            accessor: "actions",
            Cell: ({ row }) => (
                <div className="flex flex-col gap-1">
                    <Link to={`/editFood/${row.original._id}`}>
                        <button className="btn btn-sm text-sm sm:text-lg btn-primary hover:bg-indigo-800 text-white  px-2"><LiaEditSolid />
                        </button>
                    </Link>
                    <Link to={`/manage/${row.original._id}`}>
                        <button className="btn btn-sm text-sm sm:text-lg bg-teal-500 hover:bg-teal-800 text-white px-2"><IoMdSettings />
                        </button>
                    </Link>
                </div>
            ),
        },
    ], [addedFoods])


    const handleDelete = id => {
        console.log(addedFoods);
        console.log('clicked', id);
        const remaining = addedFoods.filter(food => food._id !== id);
        console.log('remainingActual', remaining);
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
                fetch(`https://sharebite-server.onrender.com/foods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added food has been deleted.",
                                icon: "success"
                            })
                            const remaining = addedFoods.filter(food => food._id !== id);
                            console.log('remainingActual', remaining);
                            setAddedFoods(remaining);
                            console.log(addedFoods);
                        }
                    })
            }
        });
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <div className="container mx-auto text-gray-800 py-10">
                {/* trying to implement react tbale */}
                <h1 className="mb-6 text-center text-yellow-700 custom-font text-5xl italic">My Added Foods</h1>
                <div className="relative">
                    <h2 className="text-xl absolute left-1/2 transform -translate-x-1/2 top-16 font-semibold">{addedFoods.length === 0 && (
                        <p>No Added Food</p>
                    )}</h2>
                </div>
                <div className="px-2 sm:px-12 md:px-24 lg:px-44">
                    <div className="overflow-x-auto rounded-md">
                        {
                            loading ? (
                                <table className="min-w-full text-xs" {...getTableProps()}>
                                    <thead className="rounded-t-lg bg-amber-300">
                                        {headerGroups.map(headerGroup => (
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map(column => (
                                                    <th className="p-2 font-sans sm:text-base" {...column.getHeaderProps()}>
                                                        {column.render('Header')}
                                                    </th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>

                                    <tbody {...getTableBodyProps()}>
                                        {rows.map(row => {
                                            prepareRow(row);
                                            return (
                                                <tr className="text-center border-b-2 border-opacity-70 border-amber-300 bg-amber-50" {...row.getRowProps()}>
                                                    {row.cells.map(cell => (
                                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="flex justify-center items-center h-24">
                                    <span className="loading loading-dots loading-lg text-blue-600"></span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ManageFood;