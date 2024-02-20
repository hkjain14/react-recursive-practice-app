import { ReactComponent as NewFolderIcon } from '../assets/new-folder.svg';
import {useState} from 'react';

function NewFolder({setIsNewFolderButtonClicked, data}) {
    const [folderName, setFolderName] = useState('');
    const keyDownHandler = (e) => {
        if(e.key === 'Enter') {
            setIsNewFolderButtonClicked(false);
            if(folderName) {
                const entry = {
                    isFolder: true,
                    name: folderName,
                    children: [],
                };
                data.push(entry);
            }
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