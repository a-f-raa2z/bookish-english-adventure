
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Triangle } from 'lucide-react';

interface AudioPlayerProps {
  paragraphs: string[];
  onParagraphChange: (index: number) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ paragraphs, onParagraphChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  
  // Time tracking
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number | null>(null);
  
  // Mock audio file - in a real implementation, you would use actual audio files
  const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  
  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    
    // Set up event listeners
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });
    
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
      
      // Simulate paragraph changes
      // In a real implementation, you would have timestamps for each paragraph
      const paragraphDuration = audio.duration / paragraphs.length;
      const newParagraphIndex = Math.min(
        Math.floor(audio.currentTime / paragraphDuration),
        paragraphs.length - 1
      );
      
      if (newParagraphIndex !== currentParagraphIndex) {
        setCurrentParagraphIndex(newParagraphIndex);
        onParagraphChange(newParagraphIndex);
      }
    });
    
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      setCurrentParagraphIndex(0);
      onParagraphChange(0);
    });
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      
      if (progressInterval.current) {
        window.clearInterval(progressInterval.current);
      }
    };
  }, [paragraphs.length, onParagraphChange]);
  
  useEffect(() => {
    // Update volume when changed
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0]);
    if (isMuted && newValue[0] > 0) {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const handleProgressChange = (newValue: number[]) => {
    const newTime = (newValue[0] / 100) * (duration || 0);
    setCurrentTime(newTime);
    setProgress(newValue[0]);
    
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };
  
  const handleSkipBack = () => {
    const newIndex = Math.max(currentParagraphIndex - 1, 0);
    setCurrentParagraphIndex(newIndex);
    onParagraphChange(newIndex);
    
    // Simulate skipping to the beginning of the paragraph
    if (audioRef.current) {
      const paragraphDuration = audioRef.current.duration / paragraphs.length;
      audioRef.current.currentTime = newIndex * paragraphDuration;
    }
  };
  
  const handleSkipForward = () => {
    const newIndex = Math.min(currentParagraphIndex + 1, paragraphs.length - 1);
    setCurrentParagraphIndex(newIndex);
    onParagraphChange(newIndex);
    
    // Simulate skipping to the beginning of the paragraph
    if (audioRef.current) {
      const paragraphDuration = audioRef.current.duration / paragraphs.length;
      audioRef.current.currentTime = newIndex * paragraphDuration;
    }
  };
  
  // Format time as mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm mb-6">
      <div className="flex items-center gap-3 mb-2">
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={handleSkipBack}
          disabled={currentParagraphIndex === 0}
        >
          <SkipBack className="h-5 w-5" />
        </Button>
        
        <Button 
          size="icon" 
          variant="default" 
          className="h-10 w-10 rounded-full" 
          onClick={togglePlay}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={handleSkipForward}
          disabled={currentParagraphIndex === paragraphs.length - 1}
        >
          <SkipForward className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 mx-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <Slider
            value={[progress]}
            min={0}
            max={100}
            step={0.1}
            onValueChange={handleProgressChange}
            className="w-full"
          />
        </div>
        
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={toggleMute}
        >
          {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
        
        <Slider
          value={[volume]}
          min={0}
          max={100}
          step={1}
          onValueChange={handleVolumeChange}
          className="w-24"
        />
      </div>
      
      <div className="text-sm text-center text-muted-foreground">
        Playing paragraph {currentParagraphIndex + 1} of {paragraphs.length}
      </div>
    </div>
  );
};

export default AudioPlayer;
