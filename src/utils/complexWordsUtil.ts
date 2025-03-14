
// List of complex words that might be difficult for non-native speakers
export const complexWords = [
  'aggregation',
  'marginal',
  'compounded',
  'trajectory',
  'exponential',
  'accumulate',
  'transformative',
  'insignificant',
  'implementation',
  'revolutionary',
  'extraordinary',
  'dramatically',
  'consistency',
  'productivity',
  'distilling',
  'disruptions',
  'remarkable',
  'monumental',
  'appreciation',
  'perspective',
  'aggregation',
  'endeavor',
  'empirical',
  'incremental',
  'fundamentally',
  'systematically',
  'methodology',
  'acquisition',
  'deterioration'
];

// Function to check if a word is considered complex
export const isComplexWord = (word: string): boolean => {
  // Remove any punctuation and convert to lowercase for comparison
  const cleanWord = word.replace(/[.,;:!?"'()]/g, '').toLowerCase();
  return complexWords.includes(cleanWord) || (cleanWord.length > 9 && !commonWords.includes(cleanWord));
};

// Some common long words that shouldn't be marked as complex
const commonWords = [
  'everything',
  'understand',
  'something',
  'different',
  'important',
  'experience',
  'themselves',
  'sometimes',
  'yesterday',
  'interested',
  'beautiful',
  'wonderful',
  'together'
];
