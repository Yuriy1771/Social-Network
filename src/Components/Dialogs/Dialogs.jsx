import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {useForm} from "react-hook-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let newMessageText = state.newMessageText;

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>
    ));

    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id}/>
    ));

    return (
        <div className={classes.dialogs}>
            <div className={classes.shadow}>
                <div className={classes.dialogsItems}>{dialogsElements}</div>
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    );
};

function AddMessageForm(props) {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm()

    function onSubmit(data) {
        props.addMessage(data)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea className={classes.textareaMessage} {...register('message', {required: 'error'})}></textarea>
            </div>
            <div>
                <button className={classes.btnSendMessage} disabled={!isValid}>Send</button>
            </div>
        </form>
    )
}

export default Dialogs;
