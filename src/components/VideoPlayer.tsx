import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {title && (
        <div className="absolute top-4 left-4 z-10 bg-black/50 px-4 py-2 rounded-full">
          <h3 className="text-white font-medium text-sm md:text-base">{title}</h3>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center">
        <button
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-2"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-2"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;