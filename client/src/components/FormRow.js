const FormRow = ({type, name, value, handleChange, labelText}) => {
    // labelText in case var in state has camelcase name but label show proper name
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>

            <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            className='form-input'
            />
        </div>
    )
}

export default FormRow
