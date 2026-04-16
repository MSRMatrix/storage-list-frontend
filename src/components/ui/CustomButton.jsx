const CustomButton = ({type, text, onClickFuntion}) => {
    return(
        <button type={type} onClick={onClickFuntion} >
            {text}
        </button>
        
    )
}

export default CustomButton;