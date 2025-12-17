
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Sparkles, Key, AlertCircle } from 'lucide-react';

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
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `A futuristic, high-fidelity cinematic enterprise-grade visualization of ${prompt}. Epic scale, volumetric lighting, cybernetic architecture, neon accents, 8k resolution style.` }],
        },
        config: {
          imageConfig: { 
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        },
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error("No visualization data returned from AI cluster.");
      }
    } catch (err: any) {
      console.error("Image generation failed:", err);
      if (err.message?.includes("Requested entity was not found")) {
        // Handle specific key issues
        setError("AI Core Auth Failure. Please re-authenticate.");
      } else {
        setError("Visualization Stream Interrupted.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, [prompt]);

  const handleRetry = async () => {
    if (error?.includes("Auth Failure")) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }
    generateImage();
  };

  return (
    <div className="relative glass-panel rounded-none border border-white/5 overflow-hidden group min-h-[300px] flex items-center justify-center bg-brand-dark/50">
      {loading ? (
        <div className="flex flex-col items-center gap-4 p-8">
          <Loader2 className="w-12 h-12 text-brand-electricBlue animate-spin" />
          <div className="space-y-2 text-center">
            <p className="text-[10px] text-brand-electricBlue font-bold tracking-[0.3em] uppercase font-orbitron animate-pulse">Initializing Rendering Engine...</p>
            <p className="text-[8px] text-gray-600 font-bold uppercase tracking-[0.2em]">Synthesizing Enterprise Context</p>
          </div>
        </div>
      ) : error ? (
        <div className="text-center p-8 flex flex-col items-center gap-4">
           <div className="p-3 bg-red-500/10 text-red-500 rounded-full border border-red-500/30">
             <AlertCircle className="w-6 h-6" />
           </div>
           <p className="text-red-500 text-xs uppercase font-bold tracking-widest leading-relaxed max-w-[200px]">{error}</p>
           <button onClick={handleRetry} className="text-white text-[10px] font-black uppercase tracking-widest border-b border-white hover:text-brand-electricBlue hover:border-brand-electricBlue transition-all pt-2">
             Retry Sync Protocol
           </button>
        </div>
      ) : imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            alt={prompt} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-brand-dark/90 backdrop-blur-md border border-brand-electricBlue/30 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
            <Sparkles className="w-3 h-3 text-brand-electricBlue" />
            <span className="text-[8px] text-brand-electricBlue font-bold uppercase tracking-widest">Enterprise AI Vision v3.0</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AIVisualizer;
