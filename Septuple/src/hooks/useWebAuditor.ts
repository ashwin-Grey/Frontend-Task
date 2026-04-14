import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useWebAuditor() {
  const navigate = useNavigate();
  const [source, setSource] = useState('google');
  const [url, setUrl] = useState('https://www.suptask.com');
  const [location, setLocation] = useState('United States');
  const [ignoredUrls, setIgnoredUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState('');

  const handleSourceChange = (val: string) => {
    setSource(val);
    if (val === 'manual') {
      setUrl('');
      setLocation('');
    } else {
      setUrl('https://www.suptask.com');
      setLocation('United States');
    }
  };

  const handleRunAudit = () => {
    navigate('/audit-results');
  };

  const addIgnoredUrl = () => {
    if (newUrl && !ignoredUrls.includes(newUrl)) {
      setIgnoredUrls([...ignoredUrls, newUrl]);
      setNewUrl('');
    }
  };

  const removeIgnoredUrl = (urlToDelete: string) => {
    setIgnoredUrls(ignoredUrls.filter(u => u !== urlToDelete));
  };

  return {
    source,
    url,
    setUrl,
    location,
    setLocation,
    ignoredUrls,
    newUrl,
    setNewUrl,
    handleSourceChange,
    handleRunAudit,
    addIgnoredUrl,
    removeIgnoredUrl
  };
}
