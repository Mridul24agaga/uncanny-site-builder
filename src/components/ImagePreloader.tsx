import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

const ImagePreloader = ({ images }: ImagePreloaderProps) => {
  useEffect(() => {
    images.forEach((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
    
    // Cleanup
    return () => {
      images.forEach((imageSrc) => {
        const existingLinks = document.querySelectorAll(`link[href="${imageSrc}"]`);
        existingLinks.forEach(link => link.remove());
      });
    };
  }, [images]);

  return null; // This component doesn't render anything visible
};

export default ImagePreloader;