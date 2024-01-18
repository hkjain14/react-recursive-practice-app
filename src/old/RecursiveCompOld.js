import {useState} from "react";
export default function RecursiveCompOld({parent}) {
    const [expanded, setExpanded] = useState({});
    const clickHandler = (name) => {
        setExpanded({...expanded, [name]: !expanded[name]});
    }
    return (
        <div>
            {
                parent.map((child) => {
                    return (<div key={child.name}>
                        {child.isFolder ?
                            <button onClick={() => clickHandler(child.name)}>{child.name}</button>:
                            <div>{child.name}</div>
                        }
                        {/*<div style={{display: !expanded[child.name] && 'none'}}>*/
                            /* If this is uncommented and condition removed from line 19, then expanded grandchildren remain expanded when grandparent is collapsed and expanded  */
                        }
                            {child.children && expanded[child.name]?
                                <div style={{paddingLeft: '10px'}}>
                                    <RecursiveCompOld parent={child.children}/>
                                </div>
                                :
                                <div/>}
                        {/*</div>*/}
                    </div>)
                })
            }
        </div>
    );
}