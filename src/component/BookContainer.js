import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../redux';

function BookContainer (props) {

    const [ number, setNumber ] = useState (1);

    const txtStyle = {
        backgroundColor : '#f4f4f4',
        color : '#555555'
    }
    const btnStyle = {
        backgroundColor : '#000',
        color : '#fff',
        border : '3px red solid',
        borderRadius : '10px'
    }
    const inputStyle = {
        border : '1px #555 solid',
        borderRadius : '7px'
    }
    return (
        <>
           <h2>Book Container</h2>
    <h3 style={txtStyle}>Number Book - {props.numberOfBook}</h3>
    <input style={inputStyle} type="text" value={number} onChange={ (e) => setNumber (e.target.value)}/>
    <button style={btnStyle} onClick={ () => props.buyBook(number)}>Buy {number} Book</button>
        </>
    )
}
const mapStatetoProps = (state) => {
    return {
        numberOfBook : state.numberOfBook
    }
} 
const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook : function (number) {
            dispatch (buyBook(number));
        }
    }
}
export default connect (mapStatetoProps, mapDispatchtoProps) (BookContainer);