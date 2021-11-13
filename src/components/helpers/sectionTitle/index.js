import './style.css' 


const SectionTitle = (props) => {
    return(
        <h2 className={"title text-center "+props.class}>{props.title}</h2>
    )
}  

export default  SectionTitle;