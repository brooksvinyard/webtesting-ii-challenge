import React from 'react';
export default function Display(props) {
    return (
        <>
            <div>Balls: {props.balls}</div>
            <div>Strikes: {props.strikes}</div>
        </>
    )
  }