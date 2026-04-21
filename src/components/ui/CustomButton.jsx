const CustomButton = ({type, text, onClickFuntion, disabled}) => {
    return(
        <button type={type} onClick={onClickFuntion} disabled={disabled}>
            {text}
        </button>
        
    )
}

export default CustomButton;