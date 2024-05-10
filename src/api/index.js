export const getUser = async (id) => {
    try {
        const response = await fetch(`https://p12-sportify-back.onrender.com/user/${id}`);
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}

export const getActivity = async (id) => {
    try {
        const response = await fetch(`https://p12-sportify-back.onrender.com/user/${id}/activity`);
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}

export const getPerformance = async (id) => {
    try {
        const response = await fetch(`https://p12-sportify-back.onrender.com/user/${id}/performance`);
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}

export const getSessions = async (id) => {
    try {
        const response = await fetch(`https://p12-sportify-back.onrender.com/user/${id}/average-sessions`);
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}


