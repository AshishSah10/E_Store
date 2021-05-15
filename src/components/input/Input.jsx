const Input = ({children={},type="text", name, value, onMouseLeave=() => {}, onChange=() => {}, onFocus= () => {}, placeholder="", onBlur=()=>{}}) => {
    return (
        <div onMouseLeave={onMouseLeave}>
            <input type={type} className="search-input" name={name} placeholder={placeholder}  onFocus={onFocus} value={value} onChange={onChange} />
            {children}
        </div>
        )
}

export default Input;