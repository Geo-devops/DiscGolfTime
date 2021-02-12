import { useState } from 'react';

export default function useToken() {
    
    const getToken = () => {
        // console.log('sessionStorage.length: ', sessionStorage.length);
        // Behold the code I'm most proud of ever. I wasn't able to use an optional chaining operator, so this resolved the issue:
        const  userToken2 = localStorage.length > 0 && JSON.parse(localStorage.getItem('token'))
      //  if (localStorage.length === 0) {
        //    return null
        //} else {
        //const tokenString = localStorage.getItem('token');
        // console.log('tokenString: ', tokenString)
        //const userToken = JSON.parse(tokenString);
        // console.log('userToken ', userToken);
        return userToken2 ? userToken2.token : null
        //}
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        console.log('USERTOKEN: ', userToken)
        const userTokenID = userToken.data.user._id
        // console.log('usertokenID: ', userTokenID)
        const objectToken = `{"token":"${userTokenID}"}`
        // console.log('objectToken: ', objectToken);
        const parsedToken = JSON.parse(objectToken)
        // console.log('parsedToken: ', parsedToken)
        localStorage.setItem('token', JSON.stringify(parsedToken));
        setToken(parsedToken.token);
    };
   
    return {
        setToken: saveToken,
        token
    }

}