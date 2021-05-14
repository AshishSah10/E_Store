const Input = ({type="text", name, value, onChange=() => {}, onFocus= () => {}, placeholder=""}) => {
    return (
        <input type={type} className="search-input" name={name} placeholder={placeholder} onFocus={onFocus} value={value} onChange={onChange} />
    )
}

export default Input;