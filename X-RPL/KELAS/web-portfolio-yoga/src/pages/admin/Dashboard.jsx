import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchContacts();
        fetchServices();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await api.get('/admin/contacts');
            setMessages(res.data);
        } catch(e) { console.error(e) }
    };

    const fetchServices = async () => {
        try {
            const res = await api.get('/public-data');
            setServices(res.data.services);
        } catch(e) { console.error(e) }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    };

    const deleteMessage = async (id) => {
        if(confirm('Delete message?')) {
            await api.delete(`/admin/contacts/${id}`);
            fetchContacts();
        }
    };

    return (
        <div className="flex h-screen bg-zinc-100">
            {/* Sidebar */}
            <div className="w-64 bg-zinc-900 text-white flex flex-col">
                <div className="p-6">
                    <h2 className="text-2xl font-bold">Admin Panel</h2>
                    <p className="text-zinc-400 text-sm mt-2">{user?.email}</p>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <a href="#" className="block px-4 py-2 bg-zinc-800 rounded-lg text-white">Dashboard</a>
                    <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-lg text-zinc-300">Manage My Bio</a>
                    <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-lg text-zinc-300">Testimonials</a>
                    <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-lg text-zinc-300">Company Profile</a>
                </nav>
                <div className="p-4">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-400 hover:bg-zinc-800 rounded-lg">Logout</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-zinc-900">Dashboard Overview</h1>
                    </div>
                </header>
                <main className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Stats Cards */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
                            <h3 className="text-lg font-medium text-zinc-500">Total My Bio</h3>
                            <p className="text-3xl font-bold text-zinc-900 mt-2">{services.length}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
                            <h3 className="text-lg font-medium text-zinc-500">New Messages</h3>
                            <p className="text-3xl font-bold text-zinc-900 mt-2">{messages.length}</p>
                        </div>
                    </div>

                    {/* Messages Table */}
                    <div className="bg-white shadow-sm border border-zinc-200 rounded-lg overflow-hidden">
                        <div className="px-6 py-5 border-b border-zinc-200">
                            <h3 className="text-lg font-medium leading-6 text-zinc-900">Recent Messages</h3>
                        </div>
                        <ul className="divide-y divide-zinc-200">
                            {messages.map((msg) => (
                                <li key={msg.id} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-blue-600 truncate">{msg.name} ({msg.email})</p>
                                            <p className="mt-2 text-sm text-zinc-500">{msg.message}</p>
                                        </div>
                                        <button onClick={() => deleteMessage(msg.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Delete</button>
                                    </div>
                                </li>
                            ))}
                            {messages.length === 0 && (
                                <li className="p-6 text-center text-zinc-500">No messages found.</li>
                            )}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
