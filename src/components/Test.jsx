import React, { useState, useEffect } from 'react';
import tpService from "../services/tp-service.jsx";

function Test() {
    const [tps, setTps] = useState(null);
    const [newTps, setNewTps] = useState({
        judul: "",
        subJudul: "",
        kategori: "",
        deskripsi: "",
        deadline: "2012-04-23T18:25:43.511Z"
    });
    const [updateTps, setUpdateTps] = useState({
        judul: "",
        subJudul: "",
        kategori: "",
        deskripsi: "",
        deadline: "2012-04-23T18:25:43.511Z"
    });
    const [tpToDelete, setTpToDelete] = useState(1);
    const [message, setMessage] = useState('');

    // Fetch tps (GET)
    useEffect(() => {
        tpService.fetchTp(2)
            .then((data) => setTps(data))
            .catch((error) => setMessage('Error fetching tps.'));
    }, []);

    // Handle POST request
    const handleCreateTp = () => {
        tpService.createTp({
            judul: newTps.judul,
            subJudul: newTps.subJudul,
            kategori: newTps.kategori,
            deskripsi: newTps.deskripsi,
            deadline: "2012-04-23T18:25:43.511Z"
        })
            .then((data) => {
                setMessage('Tp created!');
                setTps((prevTps) => [data, ...prevTps]);
            })
            .catch((error) => setMessage('Error creating tp.'));
    }

    // Handle DELETE request
    const handleDeleteTp = () => {
        tpService.deleteTp(tpToDelete)
            .then(() => {
                setMessage('Tp deleted!');
                setTps((prevTps) => prevTps.filter((tp) => tp.id !== tpToDelete));
            })
            .catch((error) => setMessage('Error deleting tp.'));
    };

    const handleUpdateTp = () => {
        tpService.patchTp(updateTps.id, {
            judul: updateTps.judul,
            subJudul: updateTps.subJudul,
            kategori: updateTps.kategori,
            deskripsi: updateTps.deskripsi,
            deadline: "2012-04-23T18:25:43.511Z"
        })
            .then((data) => {
                setMessage('Tp updated!');
                setTps((prevTps) =>
                    prevTps.map((tp) => (tp.id === data.id ? { ...tp, ...data } : tp))
                );
            })
            .catch((error) => setMessage('Error updating post.'));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">React Fetch Example: HTTP Methods</h1>

                {/* GET: List of Tps */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">GET: List of Tps</h2>
                    <ul className="space-y-3">
                        {tps.map((post) => (
                            <li key={post.id} className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
                                <h3 className="text-xl text-gray-800">{post.title}</h3>
                                <p className="text-gray-600">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* POST: Create New Tp */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">POST: Create New Tp</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newTps.title}
                        onChange={(e) => setNewTps({ ...newTps, title: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        placeholder="Body"
                        value={newTps.body}
                        onChange={(e) => setNewTps({ ...newTps, body: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                    <button
                        onClick={handleCreateTp}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
                    >
                        Create Tp
                    </button>
                </div>

                {/* PUT: Update Tp */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">PUT: Update Tp</h2>
                    <input
                        type="number"
                        placeholder="Tp ID"
                        value={updateTps.id}
                        onChange={(e) => setUpdateTps({ ...updateTps, id: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="New Title"
                        value={updateTps.title}
                        onChange={(e) => setUpdateTps({ ...updateTps, title: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        placeholder="New Body"
                        value={updateTps.body}
                        onChange={(e) => setUpdateTps({ ...updateTps, body: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                    <button
                        onClick={handleUpdateTp}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
                    >
                        Update Tp
                    </button>
                </div>

                {/* DELETE: Delete Tp */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">DELETE: Delete Tp</h2>
                    <input
                        type="number"
                        placeholder="Tp ID to delete"
                        value={tpToDelete}
                        onChange={(e) => setTpToDelete(e.target.value)}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handleDeleteTp}
                        className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                    >
                        Delete Tp
                    </button>
                </div>

                {/* PATCH: Patch Tp */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">PATCH: Patch Tp</h2>
                    <input
                        type="number"
                        placeholder="Tp ID"
                        value={updateTps.id}
                        onChange={(e) => setUpdateTps({ ...updateTps, id: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="New Title"
                        value={updateTps.title}
                        onChange={(e) => setUpdateTps({ ...updateTps, title: e.target.value })}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handlePatchTp}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
                    >
                        Patch Tp
                    </button>
                </div>

                {/* Status Message */}
                {message && (
                    <div className="p-4 mt-6 text-center text-lg text-green-600 bg-green-50 border border-green-200 rounded-lg">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Test;