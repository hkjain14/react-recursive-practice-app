import { ReactComponent as NewFileIcon } from '../assets/new-file.svg';
import {useState} from 'react';

function NewFile({setIsNewFileButtonClicked, data}) {
    const [fileName, setFileName] = useState('');
    const keyDownHandler = (e) => {
        if(e.key === 'Enter') {
            setIsNewFileButtonClicked(false);
            if(fileName) {
                const entry = {
                    isFolder: false,
                    name: fileName,
                };
                data.push(entry);
            }
        }
    }
    const changeHandler = (e) => {
        setFileName(e.target.value)
    }
    return(
        <div>
            <NewFileIcon className='icons'/>
            <input
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
            />
        </div>
    )
}
export default NewFile;