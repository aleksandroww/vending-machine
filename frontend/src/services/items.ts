const BACKEND_URL = 'http://localhost:3003';

export const getItems = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/items`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
