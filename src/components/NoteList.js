import React from 'react'
import Note from './Note'
import './Note.css'

class NoteList extends React.Component{
    render(){
        if(!this.props.notes || this.props.notes.length < 1) {
            return(
                <p>Aucune notes</p>
            )
        }
        return (
            <div className='body'>
                {this.props.notes.map((note) => {
                    return(
                        <Note {... this.props} key={note._id} note={note} />
                    )
                })}
            </div>
        )
    }
}

export default NoteList