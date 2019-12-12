import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';


const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: ${props => 
        props.isDragDisabled
         ? 'lightgrey'
         : props.isDragging
            ? 'lightgreen' 
            : 'white'};
`;
const Title = styled.h3`
    padding:8px;
`;
const TaskList = styled.div`
    padding:8px;
`;

export default class Task extends React.Component {
    onClick(audio){
        var audio = new Audio(audio);
        audio.play();
    }
    render() {
        const isDragDisabled = '';
        return (
            <Draggable 
            draggableId={this.props.task.id} 
            index={this.props.index}
            isDragDisabled={isDragDisabled}
            >
                {
                    (provided, snapshot) => (
                        <Container
                            onClick={() => this.onClick(this.props.task.audio)}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                        >
                            {this.props.task.content} : {this.props.task.id}
                        </Container>
                    )
                }
                
            </Draggable>
            
            )
    }
}