import React from 'react';

import './Note.css';

class Note extends React.Component{
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
            </div>
            
        )
    }
}

export default Note