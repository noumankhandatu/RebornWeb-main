'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { parseCookies,getCookie,setCookie } from 'nookies';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [accessToken, setAccessToken] = useState(null);


    const refreshAccessToken = async () => {
        try {
            const apiUrl = process.env.API_URL;
            const cookies = parseCookies();
            const refreshToken =  cookies?.refresh_token;
    
            const response = await axios.post(`${apiUrl}/auth/refresh-token`, {
                refresh_token: refreshToken
                
            });
    
            if (response.status === 200) {
                const newAccessToken = response.data.data?.access_token;
                console.log("Token refresh")
                setCookie(null, 'access_token', newAccessToken, {
                    maxAge: 12 * 60 * 60, // 12 hours expiration
                    path: '/',
                    sameSite: 'lax',
                    httpOnly: false
                });
                return true;
            } else {
                // Handle refresh token failure
                return false;
            }
        } catch (error) {
            console.error('Error refreshing access token:', error);
            return false;
        }
    };
    
    const cookies = parseCookies();
    const storedAccessToken = cookies?.access_token;
    useEffect(() => {
       
        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
    }, [storedAccessToken]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                
                if (!accessToken ) {
                    // If access token doesn't exist, do nothing
                    return;
                }

                const apiUrl = process.env.API_URL;

                // Fetch user data using access token
                const authenticatedResponse = await axios.get(`${apiUrl}/user`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if(authenticatedResponse.status === 400){
                    const tokenRefreshed = await refreshAccessToken();
                    // console.log(authenticatedResponse.status)
                }

                if (authenticatedResponse.status === 200) {
                    // Save user data to state
                    setUserData(authenticatedResponse.data);
                    // console.log(authenticatedResponse.data) 
                } else {
                    // Handle error response
                    // console.error('Request failed');
                }
            } catch (error) {
                // Handle error
                console.error('Request failed:', error.message);
            }
        };

        fetchUserData();
    }, [accessToken]); // Fetch user data whenever access token changes


// console.log(userData) 

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

// Usage in your components remains the same as mentioned in the previous response
