import React, { Component } from "react";

function Card(props) {

    return (
        <div className="card">
            <h2 className="card-title-roll">{props.title}</h2>
            <p className="card-name-roll"><strong className="bold-margin">нори:</strong>{props.nori}</p>
            <p className="card-name-roll"><strong className="bold-margin">рис:</strong>{props.rice}</p>
            <p className="card-name-roll"><strong className="bold-margin">сыр:</strong>{props.cheese}</p>
            <p className="card-name-roll"><strong className="bold-margin">томат:</strong>{props.tomate}</p>
            <p className="card-name-roll"><strong className="bold-margin">огурец:</strong>{props.cucumber}</p>
            <p className="card-name-roll"><strong className="bold-margin">курица:</strong>{props.chiken}</p>
            <p className="card-name-roll"><strong className="bold-margin">лосось терияки:</strong>{props.lococb_teriyaki}</p>
            <p className="card-name-roll"><strong className="bold-margin">авокадо:</strong>{props.avocado}</p>
            <p className="card-name-roll"><strong className="bold-margin">салат:</strong>{props.salat}</p>
            <p className="card-name-roll"><strong className="bold-margin">перец:</strong>{props.perec}</p>
        </div>
    )
}

export default Card


