import {AiFillAliwangwang} from "react-icons/ai";
function MainContent(){
    let name="Nguyen Van A";
    const css={
        // color: "red", 
        // background: "blue"
    }
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    Xin chào {name}!
                </div>
                <div className="test" style={css}>
                    Xin chào {name}!
                </div>
                <AiFillAliwangwang />
            </div>
        </>
    )
}

export default MainContent