import React from 'react';
import Common from "./Common";
import use from "../images/p1.png";

export default function About() {
    return (
        <>
        <Common name="Welcome to About Page" 
                visit="/Contact"
                btname="About us"
                img={use}
                />
        </>
    )
} 
 