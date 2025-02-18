import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAdminStatsQuery } from '../../../../../redux/features/stats/statsApi';
import AdminStats from './AdminStats';
import AdminStatsChart from '../AdminStatsChart';

function AdminDmain() {
    const { user } = useSelector((state) => state.auth);
    const { data: stats, error, isLoading } = useGetAdminStatsQuery();
    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
    </div>

    if (!stats) return <div>No Stats found</div>

    if (error) return <div>Failed to load stats!</div>
    return (
        <div className='p-6'>

            <div>
                <h1 className='text-2xl font-semibold mb-4'>Admin Dashboard</h1>
                <p className='text-gray-500'>Hello, <strong>{user?.username}</strong> Welcome To Admin Dashboard</p>

                <AdminStats stats={stats}></AdminStats>
                <AdminStatsChart stats={stats}></AdminStatsChart>
            </div>
        </div>
    )
}

export default AdminDmain