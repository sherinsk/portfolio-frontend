import React from 'react';

const projects = [
  {
    id: 1,
    description: 'Project 1 Description',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    description: 'Project 2 Description',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    description: 'Project 3 Description',
    image: 'https://via.placeholder.com/150',
  },
  // Add more projects as needed
];

const ProjectList = () => {
  return (
    <div className="container mx-auto p-8 mb-[175px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Project List</h1>
        <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-4 px-10 rounded">
          Add Project
        </button>
      </div>
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-md font-medium text-black-500 uppercase tracking-wider">ID</th>
            <th className="py-3 px-6 text-center text-md font-medium text-black-500 uppercase tracking-wider">Image</th>
            <th className="py-3 px-6 mx-auto text-left text-md font-medium text-black-500 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{project.id}</td>
              <td className="py-4 px-6 whitespace-nowrap flex justify-center">
                <img src={project.image} alt={`Project ${project.id}`} className="w-20 h-20 object-cover rounded-md" />
              </td>
              <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-600">{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
