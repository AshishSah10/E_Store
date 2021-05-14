const Button = ({value, onClick= () => {}, type="medium", varient="primary", disabled=false}) => {
    return(
        <button disabled={disabled} className={`app-button ${type} ${varient}`} onClick={onClick}>{value}</button>
    )
}

export default Button;