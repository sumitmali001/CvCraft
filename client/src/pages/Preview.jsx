import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResumePreview from "../components/ResumePreview";
import { ArrowLeft, Loader } from "lucide-react";
import api from "../configs/api";


const Preview = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadResume = async () => {
    try {
      const { data } = await api.get("/api/resumes/public/" + resumeId);

      setResumeData(data.resume);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  return resumeData ? (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader className="size-8 animate-spin text-[#0077b6]" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-center text-6xl text-slate-400 font-medium">
            Resume not found
          </p>

          <a
            href="/"
            className="mt-6 bg-[#0077b6] hover:bg-[#005f8f] text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-[#0077b6]/50 flex items-center transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" />
            Go to home page
          </a>
        </div>
      )}
    </div>
  );
};

export default Preview;