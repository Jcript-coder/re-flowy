

import Arrow from './assets/arrow.svg';


const LeftSide =()=>{
    return(
        <div id="leftside">
                        <div id="details">
                            <div id="back">
                            <img src={Arrow}/>
                            </div>
                                    <div id="names">
                                        <p id="title">Your automation pipeline</p>
                                        <p id="subtitle">Marketing automation</p>
                                     </div>
                            </div>            
                    </div>
    )
}

const CenterSwitch=()=>{
    return(
        <div id="centerswitch">
        <div id="leftswitch">Diagram view</div>
        <div id="rightswitch">Code editor</div>
    </div>

    )
}

const ButtonRight=()=>{
    return(
        <div id="buttonsright">
                        <div id="discard">Discard</div>
                        <div id="publish">Publish to site</div>
                    </div>
    )
}
const Navigation=()=>{
    return (
        <>
            <div className="navigation">
                    <LeftSide />
                    <CenterSwitch />
                    <ButtonRight />
            </div>
        </>
    )
}

export default Navigation;