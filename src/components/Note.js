import React from 'react';

import './Note.css';
import { deleteNote, updateNote } from '../services/api'

class Note extends React.Component{

    handleDelete = async () => {
        if(window.confirm('Voulez vous vraiment supprimer')) {
            await deleteNote(this.props.note.id)
        }
    }

    handleEdit = async () => {
        this.props.setNoteToEdit(this.props.note)
        this.props.openModal()
    }

    toggleFavorite = async () => {
        const note = {
            ... this.props.note,
            isFavorite: !this.props.note.isFavorite
        }
        await updateNote(note)
    }

    render(){
        if(!this.props.note){
        return(
            <p>Pas de donnée</p>
        )
            }
            return(
            <div>
                <h2 className='title'> {this.props.note.title} </h2>
                <p className='content'> {this.props.note.content}</p>
                <button onClick={this.handleEdit}> ✏️ </button>
                <button onClick={this.toggleFavorite}> {this.props.note.isFavorite ? '❤️' : '🤍'}</button>
                <button onClick={this.handleDelete}>🗑</button>
            </div>
            
        )
    }
}

export default Note