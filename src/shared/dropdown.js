import React from 'react'

const Dropdown = (props) => {
    const { value, data, placeholder, ...rest } = props
    return (
        <div>
            <select value={value}{...rest}>
                <option value="">{placeholder}</option>
                {
                    data.map((each, index) => {
                        return (
                            <option value={each.value} key={index}>{each.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
export default Dropdown;
