import { useState } from 'react';

export default function useToken() {
    
    const getToken = () => {
        console.log('sessionStorage.length: ', sessionStorage.length);
        // Behold the code I'm most proud of ever. I wasn't able to use an optional chaining operator, so this resolved the issue:
        if (sessionStorage.length === 0) {
            return null
        } else {
        const tokenString = sessionStorage.getItem('token');
        console.log('tokenString: ', tokenString)
        const userToken = JSON.parse(tokenString);
        console.log('userToken ', userToken);
        return userToken.token
        }
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        const userTokenID = userToken.data.user._id
        console.log('usertokenID: ', userTokenID)
        const objectToken = `{"token":"${userTokenID}"}`
        console.log('objectToken: ', objectToken);
        const parsedToken = JSON.parse(objectToken)
        console.log('parsedToken: ', parsedToken)
        sessionStorage.setItem('token', JSON.stringify(parsedToken));
        setToken(parsedToken.token);
    };
   
    return {
        setToken: saveToken,
        token
    }

}