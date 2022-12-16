import React, {useState} from 'react';
import classes from "./ProfileInfo.module.css";

function ProfileStatusHook(props) {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    function activateEditMode() {
        setEditMode(true);
    }

    function deactivateEditMode() {
        setEditMode(false);
        props.updateStatus(status);
    }

    function onChangeStatus(e) {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode &&
                <div>
                        <span onDoubleClick={activateEditMode}
                              className={classes.status}><p>{props.status || 'No status'}</p></span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusHook;