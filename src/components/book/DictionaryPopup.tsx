
import React from 'react';
import { BookOpen, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface DictionaryPopupProps {
  word: string;
  language: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  position: { x: number; y: number };
}

interface WordDefinition {
  word: string;
  definition: string;
  examples: string[];
}

const DictionaryPopup: React.FC<DictionaryPopupProps> = ({
  word,
  language,
  isOpen,
  onOpenChange,
  position
}) => {
  // Mock dictionary lookup function
  const getWordDefinition = (word: string, lang: string): WordDefinition => {
    // We're using mock data here as a demonstration
    const definitions: Record<string, Record<string, string>> = {
      'habits': {
        en: 'A settled tendency or usual manner of behavior.',
        es: 'Un patrón de comportamiento regular.',
        fr: 'Une tendance établie ou une manière habituelle de se comporter.',
        de: 'Eine etablierte Tendenz oder übliche Verhaltensweise.',
        zh: '习惯是一种定期的行为方式。',
      },
      'improvements': {
        en: 'The act or process of making something better.',
        es: 'El acto o proceso de mejorar algo.',
        fr: 'L\'acte ou le processus d\'amélioration de quelque chose.',
        de: 'Der Akt oder Prozess, etwas zu verbessern.',
        zh: '改进是使某事物变得更好的行为或过程。',
      },
      'changes': {
        en: 'To make or become different.',
        es: 'Hacer o volverse diferente.',
        fr: 'Rendre ou devenir différent.',
        de: 'Anders machen oder werden.',
        zh: '改变是使某事物变得不同的过程。',
      },
      'success': {
        en: 'The accomplishment of an aim or purpose.',
        es: 'El logro de un objetivo o propósito.',
        fr: 'L\'accomplissement d\'un but ou d\'un objectif.',
        de: 'Die Erreichung eines Ziels oder Zwecks.',
        zh: '成功是完成目标或目的的行为。',
      },
      'aggregation': {
        en: 'The formation of a number of things into a cluster.',
        es: 'La formación de varias cosas en un grupo.',
        fr: 'La formation d\'un certain nombre de choses en un groupe.',
        de: 'Die Bildung einer Anzahl von Dingen zu einem Cluster.',
        zh: '聚合是将多个事物形成一个集群的过程。',
      },
      'marginal': {
        en: 'Relating to or at the edge or margin.',
        es: 'Relacionado con o en el borde o margen.',
        fr: 'Relatif à ou au bord ou à la marge.',
        de: 'Bezogen auf oder am Rand oder an der Grenze.',
        zh: '边际的，与边缘或边界有关的。',
      },
      'transformative': {
        en: 'Causing a marked change in someone or something.',
        es: 'Causando un cambio notable en alguien o algo.',
        fr: 'Causant un changement marqué chez quelqu\'un ou quelque chose.',
        de: 'Verursacht eine deutliche Veränderung bei jemandem oder etwas.',
        zh: '变革性的，引起显著变化的。',
      }
    };

    // Handle words not in our mock dictionary
    if (!definitions[word.toLowerCase()]) {
      return {
        word: word,
        definition: lang === 'en' 
          ? 'Definition not available.' 
          : `Definition not available in ${lang}.`,
        examples: []
      };
    }

    // Return the definition in the requested language or English as fallback
    return {
      word: word,
      definition: definitions[word.toLowerCase()][lang] || definitions[word.toLowerCase()].en,
      examples: []
    };
  };

  const wordInfo = getWordDefinition(word, language);

  if (!isOpen) return null;

  // Get translated language name for display
  const getLanguageName = (langCode: string): string => {
    const languages: Record<string, string> = {
      'en': 'English',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'zh': 'Chinese'
    };
    return languages[langCode] || langCode;
  };

  // Create tooltip-like popup positioned above the word
  return (
    <div
      className="fixed z-50 bg-popover text-popover-foreground shadow-md rounded-md border p-3 w-64"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <h3 className="font-medium">{word} - {getLanguageName(language)}</h3>
        </div>
        <button onClick={() => onOpenChange(false)} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <Separator className="my-2" />
      
      <div className="mt-2">
        <p className="text-sm">{wordInfo.definition}</p>
      </div>
      
      {/* Pointer at the bottom of the tooltip */}
      <div 
        className="absolute w-3 h-3 bg-popover rotate-45"
        style={{
          left: '50%',
          bottom: '-6px',
          marginLeft: '-6px',
          borderRight: '1px solid hsl(var(--border))',
          borderBottom: '1px solid hsl(var(--border))'
        }}
      ></div>
    </div>
  );
};

export default DictionaryPopup;
