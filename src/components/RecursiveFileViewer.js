import {useState} from 'react';
import { ReactComponent as NewFileIcon } from '../assets/new-file.svg';
import { ReactComponent as NewFolderIcon } from '../assets/new-folder.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as RenameIcon } from '../assets/rename.svg';
import RecursiveFileViewerCss from './css/RecursiveFileViewer.css';

function RecursiveFileViewer({parent}) {
    const [expanded, setExpanded] = useState({});
    const [hovered, setHovered] = useState({});
    const clickHandler = (idx) => {
        setExpanded({...expanded, [idx]: !expanded[idx]});
    }
    const mouseHandler = (idx, e) => {
        // e.stopPropagation();
        setHovered({...hovered, [idx]: !hovered[idx]});
    }
    const deleteHandler = (idx) => {
        parent.splice(idx,1);
        setHovered({...hovered, [idx]: false});
    }
    const renameHandler = () => {
        //TODO
    }
    return (
        <div>
            {
                parent.map((child, idx) => {
                    return (<div key={child.name}>
                        {child.isFolder ?
                            <div
                                className='list-item-folder'
                                onMouseEnter={(e) => mouseHandler(idx, e)}
                                onMouseLeave={(e) => mouseHandler(idx, e)}
                            >
                                <NewFolderIcon className='icons'/>
                                <span className='list-item-text'>{child.name}</span>
                                {
                                    hovered[idx] ?
                                        <span>
                                            <span onClick={() => renameHandler(idx)}><RenameIcon className='hover-icons'/></span>
                                            <span onClick={() => deleteHandler(idx)}><DeleteIcon className='hover-icons'/></span>
                                            <span><NewFileIcon className='hover-icons'/></span>
                                            <span><NewFolderIcon className='hover-icons'/></span>
                                        </span>:
                                        <span></span>
                                }
                            </div>
                            // <button onClick={() => clickHandler(idx)}>{child.name}</button>
                            :
                            <div
                                className='list-item-file'
                                onMouseEnter={(e) => mouseHandler(idx, e)}
                                onMouseLeave={(e) => mouseHandler(idx, e)}
                            >
                                <NewFileIcon className='icons'/>
                                <span className='list-item-text'>{child.name}</span>
                                {
                                    hovered[idx] ?
                                        <span>
                                            <span onClick={() => renameHandler(idx)}><RenameIcon className='hover-icons'/></span>
                                            <span onClick={() => deleteHandler(idx)}><DeleteIcon className='hover-icons'/></span>
                                        </span>:
                                        <span></span>
                                }
                            </div>
                        }
                        {child.children && expanded[idx]?
                            <div style={{paddingLeft: '10px'}}>
                                <RecursiveFileViewer parent={child.children}/>
                            </div>
                            :
                            <div/>}
                    </div>)
                })
            }
        </div>
    );
}

export default RecursiveFileViewer;