// Mock authentication and data
export const mockUser = {
  username: 'Chirag',
  password: 'Loki',
  token: 'mock-jwt-token-12345'
};

export const mockFrames = [
  {
    id: '1',
    frameNumber: '1',
    frameTone: 'Informative',
    content: 'Welcome to our AI video course. Today we will explore the fundamentals of artificial intelligence and machine learning.',
    frameType: 'Live Footage',
    voiceOverRequired: true,
    editingRequired: true,
    facilitatorCostume: 'Professional blazer, white shirt',
    sceneDescription: 'Instructor standing in modern studio with soft lighting',
    cameraNote: 'Medium shot, 50mm lens, f/2.8',
    editingNote: 'Add lower third with name and title',
    suggestions: 'Consider adding subtle background music'
  },
  {
    id: '2',
    frameNumber: '2',
    frameTone: 'Cinematic',
    content: 'Artificial Intelligence has transformed the way we live and work in the 21st century.',
    frameType: 'Animation',
    voiceOverRequired: true,
    editingRequired: true,
    facilitatorCostume: 'N/A',
    sceneDescription: 'Animated visualization of AI neural networks',
    cameraNote: 'N/A - Animation sequence',
    editingNote: 'Smooth transitions between network nodes',
    suggestions: 'Use blue and purple color palette for tech feel'
  }
];

export const frameToneOptions = [
  'Informative',
  'Cinematic',
  'Emotional',
  'Playful',
  'Serious'
];

export const frameTypeOptions = [
  'Live Footage',
  'Animation',
  'Live Footage + Animation'
];