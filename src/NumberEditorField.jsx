import React from 'react';

const NumberEditorField = (props) => {
    return (
        <input type="number" className='wider'
            id="num"
            value={props.value}
            onChange={(event) => { props.valueChanged(+event.target.value); }}
        />
    );
}

export default NumberEditorField;
