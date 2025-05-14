// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
  } from '@google/genai';

    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
      responseMimeType: 'text/plain',
    };
    const model1 = 'gemini-2.5-pro-preview-05-06';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `INSERT_INPUT_HERE`,
          },
        ],
      },
    ];
  
    export const responseChat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
          {
            role: "user",
            parts: [{ text: "Hello" }],
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
          },
        ],
      });


   export const codeChat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
            {
                role: 'user',
                parts: [
                  {
                    text: `Create a todo app without src folder: Generate a Project in React. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed. The output should use Tailwind CSS for styling, 
          without any third-party dependencies or libraries, except for icons from the lucide-react library, which should only be used when necessary. Available icons include: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, and ArrowRight. For example, you can import an icon as import { Heart } from "lucide-react" and use it in JSX as <Heart className="" />.
          also you can use date-fns for date format and react-chartjs-2 chart, graph library
          
          Return the response in JSON format with the following schema:
          {
            "projectTitle": "",
            "explanation": "",
            "files": {
              "/App.js": {
                "code": ""
              },
              ...
            },
            "generatedFiles": []
          }
          
          Here is the reformatted and improved version of your prompt:
          
          Generate a programming code structure for a React project using Vite. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed. The output should use Tailwind CSS for styling, without any third-party dependencies or libraries, except for icons from the lucide-react library, which should only be used when necessary. Available icons include: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, and ArrowRight. For example, you can import an icon as import { Heart } from "lucide-react" and use it in JSX as <Heart className="" />.
          
          Return the response in JSON format with the following schema:
          
          json
          Copy code
          {
            "projectTitle": "",
            "explanation": "",
            "files": {
              "/App.js": {
                "code": ""
              },
              ...
            },
            "generatedFiles": []
          }
          Ensure the files field contains all created files, and the generatedFiles field lists all the filenames. Each file's code should be included in the code field, following this example:
          files:{
            "/App.js": {
              "code": "import React from 'react';\\nimport './styles.css';\\nexport default function App() {\\n  return (\\n    <div className='p-4 bg-gray-100 text-center'>\\n      <h1 className='text-2xl font-bold text-blue-500'>Hello, Tailwind CSS with Sandpack!</h1>\\n      <p className='mt-2 text-gray-700'>This is a live code editor.</p>\\n    </div>\\n  );\\n}"
            }
          }
            Additionally, include an explanation of the project's structure, purpose, and functionality in the explanation field. Make the response concise and clear in one paragraph.
            - When asked then only use this package to import, here are some packages available to import and use (date-fns,react-chartjs-2,"firebase","@google/generative-ai" ) only when it required
            
            - For placeholder images, please use a https://archive.org/download/placeholder-image/placeholder-image.jpg
            -Add Emoji icons whenever needed to give good user experinence
            - all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.
          
          - By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.
          
          - Use icons from lucide-react for logos.
          
          - Use stock photos from unsplash where appropriate, only valid URLs you know exist. Do not download the images, only link to them in image tags.
            `,
                  },
                ],
              },
              {
                role: 'model',
                parts: [
                  {
                    text: `The user wants a React project structure for a Todo App.
          The project should be initialized using Vite but the output should not include Vite-specific configurations like \`vite.config.js\` or \`index.html\` in the main \`files\` structure, as the prompt asks for a project *without* a \`src\` folder and focuses on the React components.
          It should use Tailwind CSS for styling.
          No third-party libraries except \`lucide-react\` for icons (from a specific list) and potentially \`date-fns\` or \`react-chartjs-2\` if explicitly required (which they are not for a basic todo app).
          Components should be organized in folders with \`.js\` extensions.
          The final output must be a JSON object with \`projectTitle\`, \`explanation\`, \`files\` (containing file paths and code), and \`generatedFiles\` (list of file paths).
          The explanation should be concise (one paragraph).
          Use placeholder image if needed.
          Use emoji icons for better UX.
          Designs should be beautiful and production-worthy.
          Use \`lucide-react\` icons for logos if applicable.
          Use Unsplash images if appropriate.
          
          Plan:
          1.  **Project Title:** "React Todo App"
          2.  **Explanation:** Describe the basic structure: \`App.js\` as the main container, \`components\` folder for reusable UI elements (\`Header\`, \`TodoList\`, \`TodoItem\`, \`AddTodoForm\`). It uses React state for managing todos and Tailwind CSS for styling. Lucide icons are used for actions like add, delete, edit.
          3.  **File Structure:**
              *   \`/App.js\`: Main application component, manages todo state, renders other components.
              *   \`/index.css\`: Tailwind CSS setup.
              *   \`/components/Header.js\`: Simple header component.
              *   \`/components/TodoList.js\`: Renders the list of \`TodoItem\` components.
              *   \`/components/TodoItem.js\`: Represents a single todo item with view, edit, delete functionality.
              *   \`/components/AddTodoForm.js\`: Form to add new todos.
          4.  **Code Implementation:**
              *   \`App.js\`: Use \`useState\` to manage the list of todos. Implement functions to add, delete, toggle completion, and edit todos. Pass these functions down as props.
              *   \`Header.js\`: Display the app title, potentially using a \`Check\` or similar icon.
              *   \`TodoList.js\`: Map over the todos array and render \`TodoItem\` for each.
              *   \`TodoItem.js\`: Display todo text, completion status (checkbox/button), edit button (\`Edit\` icon), and delete button (\`Trash\` icon). Handle editing state locally.
              *   \`AddTodoForm.js\`: Use \`useState\` for input field. Handle form submission to call the \`addTodo\` function from \`App.js\`. Use \`Plus\` icon for the add button.
              *   \`index.css\`: Include Tailwind directives (\`@tailwind base; @tailwind components; @tailwind utilities;\`).
          5.  **Styling:** Apply Tailwind classes for a modern, clean look. Focus on layout, spacing, typography, and visual cues for actions.
          6.  **Icons:** Use \`Trash\`, \`Edit\`, \`Plus\`, \`Check\` from \`lucide-react\`.
          7.  **JSON Output:** Format everything according to the specified schema. List all created files in \`generatedFiles\`.
          
          Refinement:
          *   No \`src\` folder: Place \`App.js\`, \`index.css\`, and the \`components\` folder directly in the root.
          *   Vite context: Although the prompt mentions Vite, the output structure doesn't need Vite config files. The explanation can briefly mention it's suitable for a Vite setup.
          *   Production-worthy design: Use appropriate padding, margins, colors, hover effects, and responsive design principles with Tailwind.
          *   Emoji usage: Integrate emojis subtly, perhaps in the header or as status indicators.
          *   Date-fns/Chartjs: Not needed for this basic todo app.
          
          Let's start creating the file content.
          *   \`index.css\`: Standard Tailwind setup.
          *   \`Header.js\`: Simple centered header.
          *   \`AddTodoForm.js\`: Input field and add button.
          *   \`TodoItem.js\`: Display text, checkbox, edit/delete buttons. Implement inline editing.
          *   \`TodoList.js\`: Container for \`TodoItem\`s.
          *   \`App.js\`: Main logic, state management (\`useState\`), CRUD functions.`,
                  },
                  {
                    text: `\`\`\`json
          {
            "projectTitle": "React Todo App",
            "explanation": "This project implements a functional Todo application using React and Tailwind CSS. The structure includes a main App component (\`App.js\`) that manages the state and logic for todos (adding, deleting, toggling completion, editing). Todos are displayed using \`TodoList\` and \`TodoItem\` components, while new todos are added via the \`AddTodoForm\`. Components are organized within a \`components\` folder. Styling is handled exclusively by Tailwind CSS, and icons from \`lucide-react\` are used for actions like adding, editing, and deleting tasks, providing a clean and modern user interface suitable for a Vite-based setup.",
            "files": {
              "/App.js": {
                "code": "import React, { useState, useEffect } from 'react';\\nimport Header from './components/Header';\\nimport AddTodoForm from './components/AddTodoForm';\\nimport TodoList from './components/TodoList';\\nimport './index.css';\\n\\nexport default function App() {\\n  // Load todos from localStorage or initialize as empty array\\n  const initialTodos = () => {\\n    const savedTodos = localStorage.getItem('todos');\\n    return savedTodos ? JSON.parse(savedTodos) : [];\\n  };\\n\\n  const [todos, setTodos] = useState(initialTodos);\\n\\n  // Save todos to localStorage whenever they change\\n  useEffect(() => {\\n    localStorage.setItem('todos', JSON.stringify(todos));\\n  }, [todos]);\\n\\n  const addTodo = (text) => {\\n    const newTodo = {\\n      id: Date.now(), // Simple unique ID\\n      text: text,\\n      completed: false,\\n    };\\n    setTodos([...todos, newTodo]);\\n  };\\n\\n  const toggleComplete = (id) => {\\n    setTodos(\\n      todos.map((todo) =>\\n        todo.id === id ? { ...todo, completed: !todo.completed } : todo\\n      )\\n    );\\n  };\\n\\n  const deleteTodo = (id) => {\\n    setTodos(todos.filter((todo) => todo.id !== id));\\n  };\\n\\n  const editTodo = (id, newText) => {\\n    setTodos(\\n      todos.map((todo) =>\\n        todo.id === id ? { ...todo, text: newText } : todo\\n      )\\n    );\\n  };\\n\\n  return (\\n    <div className='min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-4 font-sans'>\\n      <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6'>\\n        <Header />\\n        <AddTodoForm onAdd={addTodo} />\\n        <TodoList\\n          todos={todos}\\n          onToggleComplete={toggleComplete}\\n          onDelete={deleteTodo}\\n          onEdit={editTodo}\\n        />\\n        {todos.length === 0 && (\\n            <p className=\\"text-center text-gray-500 mt-6\\">✨ Your todo list is empty! Add a task above. ✨</p>\\n        )}\\n      </div>\\n       <footer className=\\"text-center mt-8 text-gray-500 text-sm\\">\\n        Made with ❤️ using React & Tailwind CSS.\\n      </footer>\\n    </div>\\n  );\\n}"
              },
              "/index.css": {
                "code": "@tailwind base;\\n@tailwind components;\\n@tailwind utilities;\\n\\nbody {\\n  @apply font-sans antialiased;\\n}"
              },
              "/components/Header.js": {
                "code": "import React from 'react';\\nimport { Check } from 'lucide-react'; // Example icon usage for logo/title\\n\\nexport default function Header() {\\n  return (\\n    <header className='mb-6 text-center'>\\n      <h1 className='text-4xl font-bold text-gray-800 flex items-center justify-center space-x-2'>\\n        <Check className='w-8 h-8 text-purple-600' />\\n        <span>Todo App ✔️</span>\\n      </h1>\\n      <p className='text-gray-500 mt-2'>Organize your tasks efficiently!</p>\\n    </header>\\n  );\\n}"
              },
              "/components/AddTodoForm.js": {
                "code": "import React, { useState } from 'react';\\nimport { Plus } from 'lucide-react';\\n\\nexport default function AddTodoForm({ onAdd }) {\\n  const [text, setText] = useState('');\\n\\n  const handleSubmit = (e) => {\\n    e.preventDefault();\\n    if (!text.trim()) return; // Don't add empty todos\\n    onAdd(text);\\n    setText(''); // Clear input after adding\\n  };\\n\\n  return (\\n    <form onSubmit={handleSubmit} className='flex items-center mb-6 gap-2'>\\n      <input\\n        type='text'\\n        value={text}\\n        onChange={(e) => setText(e.target.value)}\\n        placeholder='📝 Add a new task...' // Emoji added\\n        className='flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200'\\n      />\\n      <button\\n        type='submit'\\n        className='bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition duration-200 flex items-center justify-center shadow hover:shadow-md disabled:opacity-50'\\n        disabled={!text.trim()} // Disable button if input is empty\\n      >\\n        <Plus className='w-5 h-5' />\\n      </button>\\n    </form>\\n  );\\n}"
              },
              "/components/TodoList.js": {
                "code": "import React from 'react';\\nimport TodoItem from './TodoItem';\\n\\nexport default function TodoList({ todos, onToggleComplete, onDelete, onEdit }) {\\n  return (\\n    <ul className='space-y-3'>\\n      {todos.map((todo) => (\\n        <TodoItem\\n          key={todo.id}\\n          todo={todo}\\n          onToggleComplete={onToggleComplete}\\n          onDelete={onDelete}\\n          onEdit={onEdit}\\n        />\\n      ))}\\n    </ul>\\n  );\\n}"
              },
              "/components/TodoItem.js": {
                "code": "import React, { useState, useRef, useEffect } from 'react';\\nimport { Trash, Edit, Check, X } from 'lucide-react';\\n\\nexport default function TodoItem({ todo, onToggleComplete, onDelete, onEdit }) {\\n  const [isEditing, setIsEditing] = useState(false);\\n  const [editText, setEditText] = useState(todo.text);\\n  const inputRef = useRef(null);\\n\\n  // Focus input when editing starts\\n  useEffect(() => {\\n    if (isEditing && inputRef.current) {\\n      inputRef.current.focus();\\n      // Select text in input\\n      inputRef.current.select();\\n    }\\n  }, [isEditing]);\\n\\n  const handleEdit = () => {\\n    setIsEditing(true);\\n  };\\n\\n  const handleSave = () => {\\n    if (editText.trim()) {\\n      onEdit(todo.id, editText.trim());\\n      setIsEditing(false);\\n    } else {\\n      // Optionally handle empty edit attempt, e.g., revert or show message\\n       setEditText(todo.text); // Revert to original text if empty\\n       setIsEditing(false);\\n    }\\n  };\\n\\n  const handleCancel = () => {\\n    setEditText(todo.text); // Revert changes\\n    setIsEditing(false);\\n  };\\n\\n  const handleInputChange = (e) => {\\n    setEditText(e.target.value);\\n  };\\n\\n   const handleKeyDown = (e) => {\\n    if (e.key === 'Enter') {\\n      handleSave();\\n    } else if (e.key === 'Escape') {\\n      handleCancel();\\n    }\\n  };\\n\\n  return (\\n    <li className='flex items-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group'>\\n      <input\\n        type='checkbox'\\n        checked={todo.completed}\\n        onChange={() => onToggleComplete(todo.id)}\\n        className='mr-3 h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer'\\n      />\\n      {isEditing ? (\\n        <input\\n          ref={inputRef}\\n          type='text'\\n          value={editText}\\n          onChange={handleInputChange}\\n          onKeyDown={handleKeyDown}\\n          onBlur={handleCancel} // Cancel edit if input loses focus without saving\\n          className='flex-grow p-1 border border-purple-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500'\\n        />\\n      ) : (\\n        <span\\n          className={\`flex-grow cursor-pointer \${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}\`}\\n          onClick={() => !todo.completed && handleEdit()} // Allow editing only if not completed, or handle differently\\n        >\\n          {todo.text}\\n        </span>\\n      )}\\n      <div className='ml-auto flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>\\n        {isEditing ? (\\n          <>\\n            <button\\n              onClick={handleSave}\\n              className='text-green-500 hover:text-green-700 p-1 rounded hover:bg-green-100 transition-colors'\\n              aria-label=\\"Save task\\"\\n            >\\n              <Check className='w-5 h-5' />\\n            </button>\\n            <button\\n              onClick={handleCancel}\\n              className='text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-100 transition-colors'\\n               aria-label=\\"Cancel edit\\"\\n            >\\n              <X className='w-5 h-5' />\\n            </button>\\n          </>\\n        ) : (\\n          <>\\n             {!todo.completed && (\\n                <button\\n                    onClick={handleEdit}\\n                    className='text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-100 transition-colors'\\n                    aria-label=\\"Edit task\\"\\n                >\\n                    <Edit className='w-5 h-5' />\\n                </button>\\n             )}\\n            <button\\n              onClick={() => onDelete(todo.id)}\\n              className='text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-100 transition-colors'\\n               aria-label=\\"Delete task\\"\\n            >\\n              <Trash className='w-5 h-5' />\\n            </button>\\n          </>\\n        )}\\n      </div>\\n    </li>\\n  );\\n}"
              }
            },
            "generatedFiles": [
              "/App.js",
              "/index.css",
              "/components/Header.js",
              "/components/AddTodoForm.js",
              "/components/TodoList.js",
              "/components/TodoItem.js"
            ]
          }
          \`\`\``,
                  },
                ],
              },
        ],
        config: {
          tools: [{codeExecution:{}}],
        }
      });
      
    /*
    for await (const chunk of response) {
      console.log(chunk.text);
    }
      */
 
  