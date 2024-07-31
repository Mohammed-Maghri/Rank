import React from "react";

export function apifunction(api){
    fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }.then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error(error);
        })
    })
};