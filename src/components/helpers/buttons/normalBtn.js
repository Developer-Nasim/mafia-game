function NormalButton(props) {
    return (
        <button type="button" className={"block_btn "+props.className}><img className="notSelect" src={props.background} alt="" />{props.title}</button> 
    )
}

export default NormalButton;