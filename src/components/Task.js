import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-gray-300 w-full h-16 my-6 cursor-pointer ${
        task.reminder ? 'border-l-4 border-green-700' : ''
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className=" flex justify-between mx-4 pt-2">
        {task.text}{' '}
        <FaTimes
          className="mt-2"
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={onDelete}
        />
      </h3>
      <p className="mx-4 text-sm">{task.day}</p>
    </div>
  )
}

export default Task
