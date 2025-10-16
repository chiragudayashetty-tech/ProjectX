// Parse script text and extract frames
export const parseScript = (scriptText) => {
  const frames = [];
  
  // Split by frame markers: "Frame 1:", "Frame 2:", etc.
  const framePattern = /Frame\s+(\d+)\s*:([^]*?)(?=Frame\s+\d+\s*:|$)/gi;
  let match;
  
  while ((match = framePattern.exec(scriptText)) !== null) {
    const frameNumber = match[1];
    const content = match[2].trim();
    
    if (content) {
      frames.push({
        id: `parsed-${Date.now()}-${frameNumber}`,
        frameNumber: frameNumber,
        frameTone: 'Informative',
        content: content,
        frameType: 'Live Footage',
        voiceOverRequired: false,
        editingRequired: false,
        facilitatorCostume: '',
        sceneDescription: '',
        cameraNote: '',
        editingNote: '',
        suggestions: ''
      });
    }
  }
  
  return frames;
};