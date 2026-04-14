import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useDispatch } from 'react-redux';
import { addProfile } from '@/redux/slices/profileSlice';

interface CreateProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateProfileModal({ open, onOpenChange }: CreateProfileModalProps) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [location, setLocation] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSave = () => {
    if (!name || !domain) return;
    dispatch(addProfile({
      name,
      domain,
      location,
      status: 'Active',
      tags,
      tokens: 0
    }));
    onOpenChange(false);
    // Reset
    setName('');
    setDomain('');
    setLocation('');
    setTags([]);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[600px] p-0 flex flex-col">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-xl font-bold text-slate-900">Create Business Profile</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Business Name</label>
            <Input 
              placeholder="e.g. DigitalSEO" 
              className="h-11"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Business Domain (URL)</label>
            <Input 
              placeholder="https://example.com" 
              className="h-11"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Location</label>
            <Input 
              placeholder="e.g. New York, USA" 
              className="h-11"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tags</label>
            <Input 
              placeholder="Type and press Enter to add tags..." 
              className="h-11"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
            />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <Badge key={tag} className="bg-slate-100 text-slate-600 border-slate-200 px-3 py-1 flex items-center space-x-2">
                    <span className="text-xs font-medium">{tag}</span>
                    <button onClick={() => removeTag(tag)} className="hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Status</label>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
              <span className="text-sm font-medium text-slate-600">Active</span>
            </div>
          </div>
        </div>

        <SheetFooter className="p-6 border-t border-border bg-slate-50/50 flex flex-row items-center justify-end space-x-3">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="h-11 px-6 font-bold">Cancel</Button>
          <Button onClick={handleSave} className="h-11 px-8 bg-primary hover:bg-primary/90 font-bold">Save Profile</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
