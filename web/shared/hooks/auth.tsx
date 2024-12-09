'use client';
import { useEffect, useState } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(false);

    useEffect(() => {
        console.log(1);
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) setToken(true);
    });

    return token;
};

export default useAuth;
