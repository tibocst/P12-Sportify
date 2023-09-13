export const getUser = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}