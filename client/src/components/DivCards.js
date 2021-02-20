import React from 'react';
 
//function DivCards(props) {
const DivCards = (props) => (
//return (
 
 
    <div>
    <section class = "DivCards">
        <div class="card">
                <div class="card-img-overlay">
                    <h4 class="card-title">{props.name}</h4>
                    <p class="card-text">Address: {props.address}, Latitude: {props.lat}, Longitude: {props.lng}, Difficulty level: {props.difficulty}</p>
                </div>
        </div>
 
    </section>
    <br />  <br />   <br />   <br />
    </div>
    //)
    )
 
    export default DivCards;
 
