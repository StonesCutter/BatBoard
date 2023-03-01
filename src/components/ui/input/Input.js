import './input.css';
import React from "react";
import PropTypes from 'prop-types';

function Input (props) {

    function callback(e){
        props.callbackInput(e)
    }

    return (
       <input 
            className={props.cssStyleInput}
            name={props.nameInput}
            placeholder={props.placeholderInput}
            type={props.typeInput}
            value={props.valueInput}
            label={props.labelInput}
            onChange={callback}
            onClick={props.onClickInput}
            min={props.minInput}
            max={props.maxInput}
       />
    )

}

Input.defaultProps = {
    cssStyle:'defaultInput',
    name:'default',
    placeholder:'default',
    type: 'text',
    label: 'default'
};

Input.propTypes = {
    cssStyle:PropTypes.string,
    name:PropTypes.string,
    placeholder:PropTypes.string,
    type:PropTypes.string,
    label:PropTypes.string,
    onChange:PropTypes.func,
    onClickInput:PropTypes.func,
    min:PropTypes.number,
    max:PropTypes.number
};

export default Input;