
import React from 'react';
import { Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const tags = [
  "English Learning", 
  "Literature", 
  "Self-paced", 
  "Vocabulary", 
  "Speaking Practice", 
  "Listening Skills", 
  "Writing Skills",
  "Book Club"
];

const CourseTags = () => {
  return (
    <div className="glass-card p-6 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Course Tags</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="bg-accent/40 hover:bg-accent">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CourseTags;
