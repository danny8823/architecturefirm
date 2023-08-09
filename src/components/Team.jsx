import React from "react";
import { Card } from "react-bootstrap";
import ceo from '../images/ceo.jpg'
import chieft from '../images/chiefarchitect.jpg'
import { team_cards } from "./constants";
export const Team = () => {
    return (
        <div className = 'team-container'>
            <h1>Meet the team</h1>
            <div className = 'card-container' >
                {team_cards.map((info) => (
                    <Card className = 'team-card'>
                    <Card.Img variant ="top" src = {info.image}/>
                    <Card.Body>
                        <Card.Title>{info.name}</Card.Title>
                        <Card.Text>
                            {info.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    )
}