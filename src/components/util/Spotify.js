import React from 'react';

const clientId = "5da05ad2a9e946bfa3fe7e62dd54f97c";
const redirectUri = "http://localhost:3000";
let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken;
        }
        //  check for access tiken match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // grab new access token when it get expires
            window.setTimeout(() => accessToken = "",expiresIn*1000);
            window.history.pushState('Access Token', null, '/');
        }
        else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
        }
    },
    search(term) {
        const accessToken = Spotify.getAccessToken(term);
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`)
    }


}

export default Spotify;