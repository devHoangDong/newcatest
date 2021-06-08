import React from 'react'
import PropTypes from 'prop-types'


MySelect.propTypes = {
    list: PropTypes.arrayOf().isRequired,
    name: PropTypes.string,
    id: PropTypes.string,
}

export default function MySelect({ list, name, id, setSelect }) {

    const setValue = (e) => {
        const value = e.currentTarget.value;
        setSelect(value)
    }
    const handleList = (list) => {
        return list.map(e => (<option value={`'${e}'`} >{e}</option>))
    }
    return (
        <>
            <select defaultValue={`'${list[0]}'`} name={name} id={id} onChange={setValue}>
                {list ? handleList(list) : ''}
            </select>
        </>
    )
}




