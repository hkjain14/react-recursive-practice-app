import { ReactComponent as NewFolderIcon } from '../assets/new-folder.svg';
import {useState} from 'react';

function NewFolder({setIsNewFolderButtonClicked, data}) {
    const [folderName, setFolderName] = useState('');
    const keyDownHandler = (e) => {
        if(e.key === 'Enter') {
            const entry = {
                isFolder: true,
                name: folderName,
                children: [],
            };
            data.push(entry);
            setIsNewFolderButtonClicked(false);
        }
    }
    const changeHandler = (e) => {
        setFolderName(e.target.value)
    }
    return(
        <div>
            <NewFolderIcon className='icons'/>
            <input
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
            />
        </div>
    )
}
export default NewFolder;