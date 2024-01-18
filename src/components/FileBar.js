import {useState} from 'react';
import NewFile from './NewFile';
import NewFolder from './NewFolder';
import { ReactComponent as NewFileIcon } from '../assets/new-file.svg';
import { ReactComponent as NewFolderIcon } from '../assets/new-folder.svg';
import { ReactComponent as CollapseIcon } from '../assets/collapse.svg';
import { ReactComponent as ExpandIcon } from '../assets/expand.svg';
import FileBarCss from './css/FileBar.css';
import RecursiveFileViewer from "./RecursiveFileViewer";

function FileBar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isNewFileButtonClicked, setIsNewFileButtonClicked] = useState(false);
    const [isNewFolderButtonClicked, setIsNewFolderButtonClicked] = useState(false);
    const [data, setData] = useState([]);

    const newFileClickHandler = () => {
        if(isCollapsed)
            setIsCollapsed(false);
        setIsNewFileButtonClicked(!isNewFileButtonClicked);
    }
    const newFolderClickHandler = () => {
        if(isCollapsed)
            setIsCollapsed(false);
        setIsNewFolderButtonClicked(!isNewFolderButtonClicked);
    }

    return(
        <div className='root'>
            <div className='bar'>
            <span onClick={() => setIsCollapsed(!isCollapsed)}>
                {
                    isCollapsed ?
                        <ExpandIcon className='expand'/> : <CollapseIcon className='collapse'/>
                }
            </span>
            <span className='text'>File Explorer</span>
            <span className='icons-panel'>
                <span onClick={newFileClickHandler}><NewFileIcon className='icons'/></span>
                <span onClick={newFolderClickHandler}><NewFolderIcon className='icons'/></span>
            </span>
            </div>
            {
                isCollapsed ?
                    <div></div>:
                    <div>
                        <RecursiveFileViewer parent={data}/>
                    </div>
            }
            {
                isNewFileButtonClicked ?
                    <div><NewFile setIsNewFileButtonClicked={setIsNewFileButtonClicked} data={data}/></div>:
                    <div></div>
            }
            {
                isNewFolderButtonClicked ?
                    <div><NewFolder setIsNewFolderButtonClicked={setIsNewFolderButtonClicked} data={data}/></div>:
                    <div></div>
            }
        </div>
    )
}
export default FileBar;