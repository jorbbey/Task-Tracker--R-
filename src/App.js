/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Animations from "./components/Animations";
import Footer from "./components/Footer";

const App = () => {
  const [addTaskTab, setAddTastTab] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
 const fetchTasks = async () => {
   const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks`);
   console.log("Response:", res);
   const data = await res.json();
   console.log("Data is: ", data);
   setTasks(data);
 };


  // Fetch task by id for reminder toggle
  const fetchTask = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async (task) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="w-full flex justify-center items-center bg-red-200">
      <div className="w-[95%] md:w-[90%] bg-white h-auto my-32 rounded-xl">
        <Header
          title="Goal Guru"
          addTaskTab={addTaskTab}
          onAdd={() => setAddTastTab(!addTaskTab)}
        />
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="h-auto w-[95%] md:w-[40%]">
            {addTaskTab ? "" : <Animations />}
            {addTaskTab && <AddTask onAdd={addTask} />}
          </div>
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            <p className="text-gray-400 my-16 mx-16">
              Click the button above to add a task
            </p>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
