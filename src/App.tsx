import React, { useState } from 'react';

const links: Record<string, string> = {
  Cc: 'https://genccvalid.vercel.app/',
  Instagram: 'https://instagram.com/robutcer',
  Telegram: 'https://t.me/sangpendosahandal',
  Ch Wa: 'https://whatsapp.com/channel/0029VaPN3yJ6hENm0YI55a2M',
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleNavigate = () => {
    if (selected) {
      window.open(links[selected], '_blank');
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '50px auto',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 30,
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(118, 75, 162, 0.6)',
      }}
    >
      <h1 style={{ color: '#f3f4f6', marginBottom: 30, fontWeight: '600' }}>Select a Link</h1>
      <div
        style={{
          marginBottom: 30,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        {Object.keys(links).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            style={{
              flex: '1 1 40%',
              minWidth: 120,
              padding: '12px 24px',
              backgroundColor: selected === key ? '#2563eb' : '#1e40af',
              color: selected === key ? '#fff' : '#93c5fd',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: selected === key ? '700' : '500',
              fontSize: 16,
              transition: 'background-color 0.3s, color 0.3s',
              boxShadow: selected === key ? '0 4px 10px rgba(37, 99, 235, 0.5)' : 'none',
            }}
            onMouseEnter={(e) => {
              if (selected !== key) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== key) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e40af';
                (e.currentTarget as HTMLButtonElement).style.color = '#93c5fd';
              }
            }}
          >
            {key}
          </button>
        ))}
      </div>
      <button
        onClick={handleNavigate}
        disabled={!selected}
        style={{
          padding: '14px 40px',
          backgroundColor: selected ? '#22c55e' : '#64748b',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          cursor: selected ? 'pointer' : 'not-allowed',
          fontWeight: '700',
          fontSize: 18,
          boxShadow: selected ? '0 4px 14px rgba(34, 197, 94, 0.6)' : 'none',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          if (selected) {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#16a34a';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(22, 163, 74, 0.8)';
          }
        }}
        onMouseLeave={(e) => {
          if (selected) {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#22c55e';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 14px rgba(34, 197, 94, 0.6)';
          }
        }}
      >
        Go to {selected || '...'}
      </button>
    </div>
  );
};

export default App;
