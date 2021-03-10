import {useState} from "react";
import SubNav from "./SubNav";


const Search = () => (
  <>
    <div id="search">
      <img src="assets/search.svg" />
      <input type="text" placeholder="Search blocks" />
    </div>
  </>
);

const LeftCard = () => {
    const [actions,setActions]=useState(false);
    const [triggers,setTriggers]=useState(true);
    const [loggers,setLoggers]=useState(false);
        //console.log(triggerNav);
  return (
    <>
      <div id="leftcard">
            <div id="closecard">
            <img src="assets/closeleft.svg" />
            </div>
            <p id="header">Blocks</p>
            <Search />
            <SubNav setActions={setActions} setTriggers={setTriggers}
                setLoggers={setLoggers}
            />
            <BlockList actions={actions} triggers={triggers} loggers={loggers}/>
            <Footer />
      </div>
    </>
  );
};




const BlockList = (props) => {
    console.log(props.actions);
  const BlockElement = () => {
    console.log(props);
  
    if (props.triggers === true) {
      return (
        <>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={1}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme img"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/eye.svg" alt="eye.svg" />
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">New visitor</p>
                <p className="blockdesc">
                  Triggers when somebody visits a specified page
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={2}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/action.svg" alt="action.svg" />
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Action is performed</p>
                <p className="blockdesc">
                  Triggers when somebody performs a specified action
                </p>
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={3}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/time.svg" alt="time.svg" />
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Time has passed</p>
                <p className="blockdesc">
                  Triggers after a specified amount of time
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={4}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/error.svg" alt="error.svg"/>
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Error prompt</p>
                <p className="blockdesc">
                  Triggers when a specified error happens
                </p>{" "}
              </div>
            </div>
          </div>
        </>
      );
    } else if (props.actions === true) {
      return (
        <>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={5}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/database.svg" alt="database.svg"/>
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">New database entry</p>
                <p className="blockdesc">
                  Adds a new entry to a specified database
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={6}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme" />
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/database.svg" alt="database.svg" />
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Update database</p>
                <p className="blockdesc">
                  Edits and deletes database entries and properties
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={7}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/action.svg" alt="actions"/>
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Perform an action</p>
                <p className="blockdesc">
                  Performs or edits a specified action
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={8}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/twitter.svg" alt="twitter.svg"/>
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Make a tweet</p>
                <p className="blockdesc">
                  Makes a tweet with a specified query
                </p>{" "}
              </div>
            </div>
          </div>
        </>
      );
    } else if (props.loggers === true) {
      return (
        <>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={9}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/log.svg" />
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Add new log entry</p>
                <p className="blockdesc">
                  Adds a new log entry to this project
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={10}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grabme.svg"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/log.svg" alt="logo.svg"/>
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Update logs</p>
                <p className="blockdesc">
                  Edits and deletes log entries in this project
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="blockelem create-flowy noselect">
            <input
              type="hidden"
              name="blockelemtype"
              className="blockelemtype"
              defaultValue={11}
            />
            <div className="grabme">
              <img src="assets/grabme.svg" alt="grab"/>
            </div>
            <div className="blockin">
              {" "}
              <div className="blockico">
                <span />
                <img src="assets/error.svg" alt="error"/>
              </div>
              <div className="blocktext">
                {" "}
                <p className="blocktitle">Prompt an error</p>
                <p className="blockdesc">Triggers a specified error</p>{" "}
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div id="blocklist">
      <BlockElement />
    </div>
  );
};

const Footer=()=>{
    return (
        <div id="footer">
  <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
  <span>·</span>
  <a href="https://twitter.com/alyssaxuu/status/1199724989353730048" target="_blank">Twitter</a>
  <span>·</span>
  <a href="https://alyssax.com" target="_blank"><p>Made with</p><img src="assets/heart.svg" /><p>by</p> Alyssa X</a>
</div>

    )
}
export default LeftCard;
