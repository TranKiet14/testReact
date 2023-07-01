function Content(props){
    // let classActive="";
    // if(a.active) classActive="box--active";
    const {text,active,number} = props;
    return (
        <>
            <div className={"box "+ (active ? "box--active": "")}>
                {text}-{number}
            </div>
        </>
    )
}
export default Content