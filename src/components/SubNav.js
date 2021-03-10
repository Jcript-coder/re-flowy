import {useState} from "react";

const SubNav = (props) => {
    const [triggerNav,setTrigger]=useState("navactive side");
    const [actionNav,setAction]=useState("navdisabled side");
    const [loggerNav,setLogger]=useState("navdisabled side");
   // console.log(triggerNav);
console.log(props);
    const handleClick=(e)=>{
        e.preventDefault();
        e.stopPropagation();

       // console.log("event created");
       // console.log(e.target.id);
        switch(e.target.id){
            case "triggers":
                props.setTriggers(true);
                setTrigger("navactive side");
                setAction("navdisabled side");
                setLogger("navdisabled side");
                props.setActions(false);
                props.setLoggers(false);
                break;

                case "actions":
                props.setActions(true);
                setTrigger("navdisabled side");
                setAction("navactive side");
                setLogger("navdisabled side");
                props.setTriggers(false);
                props.setLoggers(false);
                break;

                case "loggers":
                props.setLoggers(true);
                setTrigger("navdisabled side");
                setAction("navdisabled side");
                setLogger("navactive side");
                props.setActions(false);
                props.setTriggers(false);
                break;

        }
        
    }

return(
    <>
    <div id="subnav" onClick={handleClick}>
      <div id="triggers" className={triggerNav} >
        Triggers
      </div>
      <div id="actions" className={actionNav}>
        Actions
      </div>
      <div id="loggers" className={loggerNav}>
        Loggers
      </div>
    </div>
    </>
)
}

export default SubNav;