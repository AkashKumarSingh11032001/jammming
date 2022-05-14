import React from 'react';

const accessToken = "";

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken;
        }
    }

}

export default Spotify;