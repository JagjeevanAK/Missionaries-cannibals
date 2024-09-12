import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Create script element dynamically
    const script = document.createElement('script');
    script.src = '//license.novelgames.com/games/game.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='h-screen w-screen bg-black text-white flex flex-col'>
      <div className='flex justify-center font-semibold text-8xl p-4'>
        Missionaries and Cannibals Problem
      </div>
      <div className='p-6 m-6 text-center text-xl'>
        The missionaries and cannibals problem, is closely related to jealous husbands problem, these 
        are classic river-crossing logic puzzles. The missionaries and cannibals problem is a 
        well-known toy problem in artificial intelligence, where it was used by <b className='italic'> Saul Amarel</b> as 
        an example of problem representation.
      </div>
      <div className='p-6 m-6 text-center text-xl'>
        In the missionaries and cannibals problem, three missionaries and three cannibals must 
        cross a river using a boat which can carry at most two people, under the constraint that, 
        for both banks, if there are missionaries present on the bank, they cannot be outnumbered 
        by cannibals (if they were, the cannibals would eat the missionaries). The boat cannot 
        cross the river by itself with no people on board. And, in some variations, one of the 
        cannibals has only one arm and cannot row.
      </div>
      <ins 
        className="novelgames_cloudgame flex justify-center flex-1" 
        data-game-short-name="missionaries" 
        data-language="en"
        style={{ width: '100%', height: '100%' }}
      ></ins>
    </div>
  );
}

export default App;
