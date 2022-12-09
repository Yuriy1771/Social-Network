import React from 'react';
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
    }

    onChangeStatus(e) {
        let text = e.target.value;
        this.props.updateStatus(text);
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}
                              className={classes.status}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                               onChange={this.onChangeStatus.bind(this)} value={this.props.newTextStatus}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;