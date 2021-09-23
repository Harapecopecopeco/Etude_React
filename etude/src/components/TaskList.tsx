import React from "react";
import TaskItem from "./TaskItem";
import {Task} from "./Types";

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {

    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? {...task, done: !task.done}
                : t
        ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }
}
