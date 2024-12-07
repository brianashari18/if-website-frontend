const BASE_URL = 'http://localhost:8080/api';

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const fetchTp = (tpId) => {
    return fetch(`${BASE_URL}/tps/${tpId}`)
        .then(handleResponse)
        .catch((error) => {
            throw error;
        });
};

const createTp = (tpData) => {
    return fetch(`${BASE_URL}/tps`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tpData),
    })
        .then(handleResponse)
        .catch((error) => {
            throw error;
        });
};

const deleteTp = (tpId) => {
    return fetch(`${BASE_URL}/tps/${tpId}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error deleting post');
            }
        })
        .catch((error) => {
            throw error;
        });
};

const patchTp = (tpId, tpData) => {
    return fetch(`${BASE_URL}/tps/${tpId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tpData),
    })
        .then(handleResponse)
        .catch((error) => {
            throw error;
        });
};

export default {
    fetchTp,
    createTp,
    deleteTp,
    patchTp,
}