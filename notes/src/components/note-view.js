

//== NoteView ==================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
//import * as actions from '../actions';
import {withRouter} from 'react-router-dom';
import ActionBar from './action-bar.js';


//== Component =================================================================

class NoteView extends React.Component {

    //-- Lifecycle -----------------------------------

    //-- Rendering -----------------------------------
    render() {
        const id = this.props.match.params.id;
        let focusNote = this.props.notes.find(note => note._id === id);
        let editUrl = `/edit/${focusNote._id}`;
        // TO DO: what happens if the note no longer exists? (currently: crash)
        return (
            <React.Fragment>
                <ActionBar edit={editUrl} delete="/delete/me" />
                <h2 className="view-title">{focusNote.title}</h2>
                <p>{focusNote.textBody}</p>
            </React.Fragment>
        );
    }

    //-- Interaction ---------------------------------

    //-- Utility Methods -----------------------------
}
  
//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        notes: state.notes,
    };
}
NoteView = withRouter(connect(mapStateToProps, {
    //addNote: actions.addNote,
    //updateNote: actions.updateNote,
    //notReady: actions.notReady,
})(NoteView));

//-- Exporting -----------------------------------
export default NoteView;
