import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyBook} from '../redux';

function HookBookContainer () {

    const textStyle = {
        backgroundColor : '#f4f4f4',
        color : '#555555'
    }

    const btnStyle = {
        backgroundColor : '#000',
        color : '#fff',
        border : '3px red solid',
        borderRadius : '10px'
    }

    const numberOfBook = useSelector ( state => state.numberOfBook);
    const dispatch = useDispatch();
    return (
        <>
           <h2>Hook Book Container</h2>
    <h3 style={textStyle}>Number Of Book - {numberOfBook}</h3>
    <button style={btnStyle} onClick={()=>dispatch(buyBook())}>Buy Book</button>
        </>
    )
}
export default HookBookContainer;