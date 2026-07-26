import { Plus, Trash2 } from "lucide-react";

const ProjectForm = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      link: "",
      description: "",
    };

    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Projects
          </h3>

          <p className="text-sm text-gray-500">
            Add your project details
          </p>
        </div>

        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-[#0077b6]/10 text-[#0077b6] rounded-lg hover:bg-[#0077b6]/20 transition-colors"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4">
        {data.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-4"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-800">
                Project #{index + 1}
              </h4>

              <button
                className="text-red-500 hover:text-red-700 transition-colors"
                onClick={() => removeProject(index)}
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                value={project.name || ""}
                onChange={(e) =>
                  updateProject(index, "name", e.target.value)
                }
                type="text"
                placeholder="Project Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
              />

              <input
                value={project.type || ""}
                onChange={(e) =>
                  updateProject(index, "type", e.target.value)
                }
                type="text"
                placeholder="Project Type"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
              />
            </div>

            <input
              value={project.link || ""}
              onChange={(e) =>
                updateProject(index, "link", e.target.value)
              }
              type="text"
              placeholder="Project Link"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>

              <textarea
                value={project.description || ""}
                onChange={(e) =>
                  updateProject(index, "description", e.target.value)
                }
                rows={4}
                placeholder="Describe your project..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
              />
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No projects added yet.</p>
          <p className="text-sm">
            Click "Add Project" to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;