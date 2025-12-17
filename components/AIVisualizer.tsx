
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Sparkles, Key } from 'lucide-react';

interface AIVisualizerProps {
  prompt: string;
}

const AIVisualizer: React.FC<AIVisualizerProps> = ({ prompt }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `A futuristic, high-fidelity cinematic visualization of ${prompt}. Cinematic lighting, cybernetic aesthetic, neon highlights, ultra-detailed.` }],
        },
        config: {
          imageConfig: { aspectRatio: "16:9" }
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (err: any) {
      console.error("Image generation failed:", err);
      setError("Failed to generate AI visualization.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, [prompt]);

  return (
    <div className="relative glass-panel rounded-none border border-white/5 overflow-hidden group min-h-[300px] flex items-center justify-center bg-brand-dark/50">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-brand-electricBlue animate-spin" />
          <p className="text-[10px] text-brand-electricBlue font-bold tracking-[0.3em] uppercase font-orbitron animate-pulse">Rendering Future Visualization...</p>
        </div>
      ) : error ? (
        <div className="text-center p-8 flex flex-col items-center gap-4">
           <div className="p-3 bg-red-500/10 text-red-500 rounded-full border border-red-500/30">
             <Key className="w-6 h-6" />
           </div>
           <p className="text-red-500 text-xs uppercase font-bold tracking-widest">{error}</p>
           <button onClick={generateImage} className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-white hover:text-brand-electricBlue hover:border-brand-electricBlue">Retry Sync</button>
        </div>
      ) : imageUrl ? (
        <>
          <img src={imageUrl} alt={prompt} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-brand-electricBlue/30">
            <Sparkles className="w-3 h-3 text-brand-electricBlue" />
            <span className="text-[8px] text-brand-electricBlue font-bold uppercase tracking-widest">AI Generated Vision</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AIVisualizer;
