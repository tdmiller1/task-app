const initialData = {
    tasks: {
        'task-1': {id:'task-1', content: 'Take out the garbage', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-2': {id:'task-2', content: 'Sweep Floor', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-3': {id:'task-3', content: 'Watch TV', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-4': {id:'task-4', content: 'Play Video Games', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-5': {id:'task-5', content: 'Watch TV', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-6': {id:'task-6', content: 'Play Video Games', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-7': {id:'task-7', content: 'Watch TV', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-8': {id:'task-8', content: 'Play Video Games', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
        'task-9': {id:'task-9', content: 'Watch TV', audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
    },
    columns: {
        'library':{
            id:'library',
            title:'Library',
            taskIds:['task-1','task-2','task-3','task-4','task-5','task-6','task-7','task-8','task-9']
        },
        'column-1':{
            id:'column-1',
            title:'To do',
            taskIds:[]
        },
        'column-2':{
            id:'column-2',
            title:'In progress',
            taskIds:[]
        },
        'column-3':{
            id:'column-3',
            title:'Done',
            taskIds:[]
        }
    },
    columnOrder: ['library','column-1','column-2','column-3']
};

export default initialData;