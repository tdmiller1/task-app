import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './Column.jsx';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`;

class App extends React.Component {
    state = initialData;

    createTask(task){
        var newId = task+Date.now()
        var oldTask = this.state.tasks[task]
        const newTask = {
            id: newId,
            content: this.state.tasks[task].content
        }
        const newTasks = Array.from(this.state.tasks);
        newTasks.push(newTask)
        this.setState({tasks: newTasks})
    }

    onDragStart = start => {
        const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
        this.setState({
            homeIndex,
        });
    }

    onDragUpdate = update => {
    }

    onDragEnd = result => {
        this.setState({
            homeIndex: null,
        });

        const {destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if(destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }
        
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];
        if(start === finish){
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
    
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
    
            this.setState(newState);
            return;
        }

       

        const startTaskIds = Array.from(start.taskIds);
        // if(source.droppableId === 'library'){
        //     var task = startTaskIds.splice(source.index, 1);
        //     this.createTask(task)
        // }
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id] : newStart,
                [newFinish.id] : newFinish,
            }
        }

        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
                <Container>
                    {this.state.columnOrder.map((columnId, index) => {
                            const column = this.state.columns[columnId];
                            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                            // const isDropDisabled = index < this.state.homeIndex || index > this.state.homeIndex + 1;
                            const isDropDisabled = false;
                            return <Column
                                key={column.id}
                                column={column}
                                tasks={tasks}
                                isDropDisabled={isDropDisabled} 
                            />
                        })
                    }
                </Container>
            </DragDropContext>
        );
        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));