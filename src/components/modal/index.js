import React from 'react';
import MaterialModal from '@material-ui/core/Modal';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Modal = (props) => {
    console.log(props);
    return (
        <div>
            <MaterialModal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
                onClose={props.handleClose}
            >
                <div className={'modal-container'}>
                    <h2 id="simple-modal-title">Migração Realizada</h2>
                    <p id="simple-modal-description">
                        A migração dos alunos foi realizada com sucesso !!
                    </p>
                    <ThumbUpIcon id={'icon'} ></ThumbUpIcon>
                    <Modal />
                </div>
            </MaterialModal>
        </div>
    );
}

export default Modal;