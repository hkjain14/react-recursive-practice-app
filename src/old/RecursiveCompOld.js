import {useState} from "react";
import { ReactComponent as ExpandIcon } from './expand.svg';
import { ReactComponent as CollapseIcon } from './collapse.svg';
import { ReactComponent as FileIcon } from './file.svg';
import RecursiveCompOldCss from './RecursiveCompOld.css';

export default function RecursiveCompOld({parent}) {
    const [expanded, setExpanded] = useState({});

    function onClickHandler(idx) {
        setExpanded({...expanded, [idx]: !expanded[idx]});
    }

    return(
        <div>
            {
                parent.map((el, idx) => {
                    return (
                        <div key={idx}>
                            {
                                el.isFolder ?
                                    <span>
                                      <span>
                                          {
                                              !expanded[idx] ?
                                                  <ExpandIcon className='icons'
                                                          onClick={() => el.children && onClickHandler(idx)}/>
                                                  :
                                                  <CollapseIcon className='icons'
                                                            onClick={() => el.children && onClickHandler(idx)}/>
                                          }
                                          {el.name}
                                      </span>
                                        {
                                            expanded[idx] ?
                                                <div style={{paddingLeft: '10px'}}>
                                                    <RecursiveCompOld parent={el.children}/>
                                                </div>
                                                :
                                                <div/>
                                        }
                                    </span>
                                    :
                                    <span>
                                      <FileIcon className='icons'/>
                                        {el.name}
                                    </span>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}