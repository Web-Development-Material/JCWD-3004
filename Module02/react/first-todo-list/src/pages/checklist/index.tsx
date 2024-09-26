import React, { useState } from 'react';
import Layout from "../../components/tailwind/Layout"
import Swal from 'sweetalert2';

// Chore interface for TypeScript
interface Chore {
    id: number;
    task: string;
    completed: boolean;
}

const ChoreList: React.FC = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  const [newChore, setNewChore] = useState<string>('');
  const [doneCount, setDoneCount] = useState<number>(0);

  // Handler for adding a new chore
  const addChore = () => {
    if (newChore.trim()) {
      const newTask: Chore = {
        id: Date.now(),
        task: newChore,
        completed: false,
      };
      setChores([...chores, newTask]);
      setNewChore(''); // Clear the input after adding
    }
  };

  // SweetAlert notification for task completion or undo
  const showCompletionAlert = (chore: Chore) => {
    Swal.fire({
      icon: chore.completed ? 'success' : 'info',
      title: chore.completed ? 'Task completed!' : 'Task undone!',
      text: chore.completed ? `"${chore.task}" has been marked as done.` : `"${chore.task}" is now undone.`,
      timer: 1500,
      showConfirmButton: false
    });
  };

  // SweetAlert notification for task deletion
  const showDeletionAlert = (chore: Chore) => {
    Swal.fire({
      icon: 'warning',
      title: 'Task deleted',
      text: `"${chore.task}" has been deleted.`,
      timer: 1500,
      showConfirmButton: false
    });
  };

  // Handler for toggling the completed status of a chore
  const toggleChoreCompletion = (id: number) => {
    const updatedChores = chores.map((chore) =>
      chore.id === id ? { ...chore, completed: !chore.completed } : chore
    );
    const toggledChore = updatedChores.find((chore) => chore.id === id);
    if (toggledChore) {
      showCompletionAlert(toggledChore);  // Show SweetAlert notification
    }
    setChores(updatedChores);
    setDoneCount(updatedChores.filter((chore) => chore.completed).length);
  };

  // Handler for deleting a chore
  const deleteChore = (id: number) => {
    const deletedChore = chores.find((chore) => chore.id === id);
    const updatedChores = chores.filter((chore) => chore.id !== id);
    if (deletedChore) {
      showDeletionAlert(deletedChore);  // Show SweetAlert notification
    }
    setChores(updatedChores);
    setDoneCount(updatedChores.filter((chore) => chore.completed).length);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl text-white font-bold mb-4">Aufgabenlistengenerator</h2>
        
        <ul className="w-full max-w-md">
          {chores.map((chore) => (
            <li 
              key={chore.id} 
              className="flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={chore.completed}
                  onChange={() => toggleChoreCompletion(chore.id)}
                  className="form-checkbox h-5 w-5"
                />
                <span 
                  className={`text-lg ${chore.completed ? 'line-through' : ''}`}
                >
                  {chore.task}
                </span>
              </div>
        
              <button 
                className="text-red-500 hover:text-red-700" 
                onClick={() => deleteChore(chore.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>

        <div className="text-xl mb-4 font-semibold">Aufgaben erledigt: {doneCount}</div>

        <div className="flex flex-col items-center w-full max-w-md space-y-4">
          <input
            type="text"
            value={newChore}
            onChange={(e) => setNewChore(e.target.value)}
            placeholder="Fügen Sie eine Aufgabe hinzu!"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <button 
            onClick={addChore} 
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            HINZUFÜGEN
          </button>
        </div>
      </div>
    </Layout>
  );
};
// semangat adit dari rizki
export default ChoreList;