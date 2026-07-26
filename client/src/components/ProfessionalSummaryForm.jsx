import { Loader2, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import api from "../configs/api";

const ProfessionalSummaryForm = ({
  data,
  onChange,
  setResumeData,
}) => {
  const { token } = useSelector((state) => state.auth);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    try {
      setIsGenerating(true);

      const prompt = `Enhance the following professional summary and make it more professional, ATS-friendly and impactful:\n\n${data}`;

      const response = await api.post(
        "/api/ai/enhance-pro-sum",
        { userContent: prompt },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data);

      const enhancedSummary =
        response.data.enhancedContent ||
        response.data.summary ||
        response.data.content;

      if (!enhancedSummary) {
        throw new Error("AI did not return an enhanced summary.");
      }

      onChange(enhancedSummary);

      // Alternatively, you could use:
      // setResumeData(prev => ({
      //   ...prev,
      //   professional_summary: enhancedSummary,
      // }));

      toast.success("Professional summary enhanced successfully!");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>

          <p className="text-sm text-gray-500">
            Add a professional summary for your resume.
          </p>
        </div>

        <button
          type="button"
          onClick={generateSummary}
          disabled={isGenerating}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Sparkles className="size-4" />
          )}

          {isGenerating ? "Enhancing..." : "AI Enhance"}
        </button>
      </div>

      <div>
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-3 px-4 border border-gray-300 rounded-lg text-sm outline-none resize-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 transition-all"
          placeholder="Write a compelling professional summary that highlights your key strengths, experience, and career objectives..."
        />

        <p className="mt-2 text-xs text-gray-500 text-center">
          Tip: Keep it concise (3–4 sentences) and highlight your most relevant
          skills and achievements.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;