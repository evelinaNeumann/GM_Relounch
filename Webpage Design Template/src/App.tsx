import { useState } from 'react';
import { VariantTeal } from './components/VariantTeal';
import { VariantRed } from './components/VariantRed';
import { VariantBlue } from './components/VariantBlue';

export default function App() {
  const [activeVariant, setActiveVariant] = useState<'teal' | 'red' | 'blue'>('blue');

  return (
    <div className="min-h-screen">
      {/* Variant Switcher */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 bg-white shadow-lg rounded-lg p-2">
        <button
          onClick={() => setActiveVariant('blue')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeVariant === 'blue'
              ? 'bg-[rgb(0, 150, 153)] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Variante 1 (Blue/WordPress)
        </button>
        <button
          onClick={() => setActiveVariant('teal')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeVariant === 'teal'
              ? 'bg-[rgb(233,40,39)] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Variante 2 (Red)
        </button>
        <button
          onClick={() => setActiveVariant('red')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeVariant === 'red'
              ? 'bg-[rgb(233,40,39)] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Variante 3 (Red/Mixed)
        </button>
      </div>

      {/* Render Active Variant */}
      {activeVariant === 'blue' ? <VariantBlue /> : activeVariant === 'teal' ? <VariantTeal /> : <VariantRed />}
    </div>
  );
}