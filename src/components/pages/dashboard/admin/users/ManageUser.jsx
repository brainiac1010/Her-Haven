import React, { useState } from 'react';
import { useDeleteUserMutation, useGetUserQuery } from '../../../../../redux/features/auth/authApi';
import { Link } from 'react-router-dom';
import UpdateUserModal from './UpdateUserModal';

const ManageUser = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const { data: users = [], error, isLoading, refetch } = useGetUserQuery();
    console.log(users);

    const [deleteUser] = useDeleteUserMutation()
    const handleDelete = async (id) => {
        try {
            const response = await deleteUser(id).unwrap();
            alert("User delete successful!")
            refetch();
        } catch (error) {
            console.error("Failed to delete user ", error)
        }
    }


    const handleEdite = (user) => {
        setSelectedUser(user)
        setIsModalOpen(true)

    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)

    }
    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
                </div>
            )}

            {error && <div className="text-red-600 text-center">Error loading Users data...</div>}

            <section className="py-1 bg-blueGray-50">
                <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="rounded-t px-4 py-3 border-0 flex justify-between items-center">
                            <h3 className="font-semibold text-base text-blueGray-700">All Users</h3>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-xs font-bold uppercase transition-all duration-150">
                                Refresh
                            </button>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blueGray-50">
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">No.</th>

                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Email</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Role</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Edit</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.length > 0 ? (
                                        users.map((user, index) => (
                                            <tr key={user._id} className="border-t">
                                                <td className="px-6 py-4 text-xs">{index + 1}</td>

                                                <td className="px-6 py-4 text-xs">{user?.email || 'N/A'}</td>
                                                <td className="px-6 py-4 text-xs">{user?.role || 'User'}</td>
                                                <td className="px-6 py-4 text-xs">
                                                    <button
                                                        onClick={() => handleEdite(user)}
                                                        className='flex gap-1 items-center hover:text-red-500'>
                                                        <i className='ri-edit-2-line'></i>
                                                        Edit
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4 text-xs">
                                                    <button
                                                        onClick={() => handleDelete(user?._id)}
                                                        className="bg-red-600 px-2 py-1 text-white rounded">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-gray-500 py-4">No users found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {
                isModalOpen && <UpdateUserModal user={selectedUser} onClose={handleCloseModal} onRoleUpdate={refetch}></UpdateUserModal>
            }
        </>
    );
};

export default ManageUser;
