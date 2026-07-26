import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { dummyResumeData } from "../../assets/assets";
import {
  LoaderCircleIcon,
  FilePenLineIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  UploadCloud,
  XIcon,
} from "lucide-react";
import api from "../configs/api.js";
import toast from "react-hot-toast";
import pdfToText from "react-pdftotext";

const Dashboard = () => {
  const navigate = useNavigate()
  const colors = [
    "#f8f9fa"
  ];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");

  const { user, token } = useSelector((state) => state.auth);

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token },
      });
      setAllResumes(data.resumes);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const createResume = async (e) => {
    try {
      e.preventDefault();
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: token } }
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const resumeText = await pdfToText(resume);
      const { data } = await api.post(
        "/api/ai/upload-resume",
        { title, resumeText },
        { headers: { Authorization: token } }
      );
      setTitle("");
      setResume(null);
      setShowUploadResume(false);
      navigate(`/app/builder/${data.resumeId}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
    setIsLoading(false);
  };

  const editTitle = async (e) => {
    try {
      e.preventDefault();

      if (confirm) {
        const { data } = await api.put(
          "/api/resumes/update",
          { resumeId: editResumeId, resumeData: { title } },
          {
            headers: { Authorization: token },
          }
        );
        setAllResumes(
          allResumes.filter((resume) =>
            resume._id !== editResumeId ? { ...resume, title } : resume
          )
        );
        loadAllResumes();
        setTitle("");
        setEditResumeId("");
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this resume"
      );

      if (confirm) {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
          headers: { Authorization: token },
        });
        setAllResumes(allResumes.filter((resume) => resume._id !== resumeId));
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Welcome */}
        <p className="text-2xl font-semibold mb-6 bg-linear-to-r from-[#00b4d8] to-[#00b4d8] bg-clip-text text-transparent sm:hidden">
          Hi, Sumit Mali
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap">
          {/* Create Resume */}
          <button
            onClick={() => setShowCreateResume(true)}
           className="
            w-full sm:max-w-36 h-48
            flex flex-col items-center justify-center
            rounded-xl gap-3

            bg-[#0077b6]/20
            backdrop-blur-md

            border border-dashed
            border-[#48cae4]/40

            text-slate-300

            hover:border-[#48cae4]
            hover:bg-[#0077b6]/40
            hover:shadow-[0_0_25px_rgba(72,202,228,0.35)]

            transition-all duration-300
            cursor-pointer group
            "
          >
            <PlusIcon className="
            size-11 p-2.5 rounded-full
            bg-linear-to-br
            from-[#48cae4]
            to-[#0077b6]

            text-white

            group-hover:scale-110
            transition
            "/>

            <p className="text-sm group-hover:text-[#48cae4] transition">
              Create Resume
            </p>
          </button>

          {/* Upload Resume */}
          <button
            onClick={() => setShowUploadResume(true)}
           className="
            w-full sm:max-w-36 h-48
            flex flex-col items-center justify-center
            rounded-xl gap-3

            bg-[#0077b6]/20
            backdrop-blur-md

            border border-dashed
            border-[#48cae4]/40

            text-slate-300

            hover:border-[#48cae4]
            hover:bg-[#0077b6]/40
            hover:shadow-[0_0_25px_rgba(72,202,228,0.35)]

            transition-all duration-300
            cursor-pointer group
            "
          >
            <UploadCloudIcon className="
            size-11 p-2.5 rounded-full
            bg-linear-to-br
            from-[#48cae4]
            to-[#0077b6]

            text-white

            group-hover:scale-110
            transition
            " />

            <p className="text-sm group-hover:text-[#48cae4] transition">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Resume Cards */}
       <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
  {allResumes.map((resume, index) => {

    return (
      <button
        onClick={() => {
          navigate(`/app/builder/${resume._id}`);
        }}
        key={index}
        className="
          relative
          w-full sm:max-w-36
          h-48

          rounded-xl

          bg-linear-to-br
          from-white
          to-[#e8f7fc]

          border
          border-[#48cae4]/30

          shadow-sm

          flex flex-col
          items-center
          justify-center

          gap-3

          hover:scale-[1.03]

          hover:border-[#0077b6]/40

          hover:shadow-[0_8px_25px_rgba(0,119,182,0.15)]

          transition-all
          duration-300

          cursor-pointer

          group
        "
      >

        {/* Action Icons */}
        <div
          onClick={(e)=>e.stopPropagation()}
          className="
            absolute top-2 right-2
            hidden group-hover:flex
            gap-1
          "
        >

          <TrashIcon
            onClick={()=>deleteResume(resume._id)}
            className="
              size-7
              p-1.5

              rounded-lg

              text-gray-500

              hover:bg-red-100
              hover:text-red-500

              transition-all
            "
          />


          <FilePenLineIcon
            onClick={()=>{
              setEditResumeId(resume._id);
              setTitle(resume.title);
            }}
            className="
              size-7
              p-1.5

              rounded-lg

              text-gray-500

              hover:bg-[#48cae4]/20
              hover:text-[#0077b6]

              transition-all
            "
          />

        </div>



        {/* Resume Icon */}
        <FilePenLineIcon
          className="
            size-8

            text-[#0077b6]

            transition-transform
            duration-300

            group-hover:scale-110
          "
        />



        {/* Resume Title */}
        <p
          className="
            text-sm
            text-center

            px-3

            font-semibold

            text-gray-900

            transition-transform
            duration-300

            group-hover:scale-105
          "
        >
          {resume.title}
        </p>



        {/* Updated Date */}
        <p
          className="
            absolute
            bottom-2

            text-[11px]

            text-gray-500

            text-center
            px-2
          "
        >
          Updated on{" "}
          {
            resume.updatedAt
            ? new Date(resume.updatedAt).toLocaleDateString()
            : "N/A"
          }
        </p>


      </button>
    );
  })}
</div>

        {/* Create Resume Modal */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => {
              setShowCreateResume(false);
              setTitle("");
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl"
            >
              <h2 className="mb-5 text-2xl font-semibold text-white">
                Create Resume
              </h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 mb-5 text-white placeholder:text-slate-500 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[0077b6]"
                required
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0077b6] py-3 text-white font-medium hover:bg-[#023e8a] transition-colors"
              >
                Create Resume
              </button>

              <XIcon
                className="absolute top-4 right-4 h-5 w-5 cursor-pointer text-slate-400 hover:text-white transition-colors"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {
          showUploadResume && (
            <form
            onSubmit={uploadResume}
            onClick={() => {
              setShowUploadResume(false);
              setTitle("");
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl"
            >
              <h2 className="mb-5 text-2xl font-semibold text-white">
                Upload Resume
              </h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 mb-5 text-white placeholder:text-slate-500 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[0077b6]"
                required
              />

            <div>
              <label htmlFor="resume-input" className="block text-sm text-slate">
                Select Resume File
                <div className='flex flex-col items-center justify-center gap-2
                      border group text-slate-400 border-slate-400 border-dashed
                      rounded-md p-4 py-10 my-4 hover:border-[#0077b6]
                      hover:text-[#023e8a] cursor-pointer transition-colors'>
                {resume ? (
                  <p className="text-[#0077b6]">{resume.name}</p>
                ) : 
                <>
                <UploadCloud className='size-14 stroke-1'/>
                <p>Upload Resume</p>
                </>}
                </div>
              </label>
              <input type="file" id="resume-input" accept=".pdf" hidden onChange={(e)=>{
                setResume(e.target.files[0])
              }}/>

            </div>

          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full
              rounded-lg
              bg-[#0077b6]
              py-3
              text-white
              font-medium

              flex
              items-center
              justify-center
              gap-2

              transition-all
              duration-300

              hover:bg-[#023e8a]

              disabled:cursor-not-allowed
              disabled:opacity-80
              disabled:hover:bg-[#0077b6]
            "
          >
            {isLoading ? (
              <>
                <LoaderCircleIcon className="h-5 w-5 animate-spin" />
                <span>Uploading Resume...</span>
              </>
            ) : (
              "Upload Resume"
            )}
          </button>

              <XIcon
                className="absolute top-4 right-4 h-5 w-5 cursor-pointer text-slate-400 hover:text-white transition-colors"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
          )
        }

        {editResumeId && (
          <form
            onSubmit={editTitle}
            onClick={() => {
              setEditResumeId('');
              setTitle("");
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl"
            >
              <h2 className="mb-5 text-2xl font-semibold text-white">
                Edit Resume Title
              </h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 mb-5 text-white placeholder:text-slate-500 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[0077b6]"
                required
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0077b6] py-3 text-white font-medium hover:bg-[#023e8a] transition-colors"
              >
                Update
              </button>

              <XIcon
                className="absolute top-4 right-4 h-5 w-5 cursor-pointer text-slate-400 hover:text-white transition-colors"
                onClick={() => {
                  setEditResumeId('');
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;