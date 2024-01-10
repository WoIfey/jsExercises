import React, { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const input = (e) => {
    setName(e.target.value)
  }

  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      const data = await res.json()
      setPokemon(data)
      setError(null)
    } catch (error) {
      setPokemon(null)
      setError("Pokemon not found")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-slate-100 dark:bg-[url(bg.jpg)] text-white">
      <div className='bg-slate-700 min-w-max w-1/5 h-full flex justify-center items-center flex-col'>
        {error && (
          <div className='bg-slate-800 w-full p-6 mb-4 flex justify-center items-center'>
            <p className='max-w-80 max-h-32 overflow-y-auto'>{error}</p>
          </div>
        )}
        <h1 className='text-2xl mb-2 font-bold tracking-widest'>Search Pokémon</h1>
        {pokemon && (
          <div className='bg-slate-800 w-full p-6 mb-4'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div>
                <div className='flex gap-2'>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} className="bg-slate-500 rounded-md w-24 h-24 p-1" />
                  <div className='ml-1'>
                    <p>Type: <span className='uppercase'>{pokemon.types[0].type.name}</span></p>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>XP: {pokemon.base_experience}</p>
                  </div>
                </div>
                <div className='flex gap-2'>
                  {pokemon.sprites.front_shiny && (
                    <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className="bg-slate-500 rounded-md w-14 h-14 p-1 mt-2" />
                  )}
                  <div className='ml-1 mt-1'>
                    <h2 className="text-2xl font-bold uppercase tracking-wide">{pokemon.name}</h2>
                    <p className='italic font-light'>ID: {pokemon.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex gap-2 mx-4">
          <input
            type="text"
            value={name}
            onChange={input}
            placeholder="pokemon/id"
            className="p-2 border border-gray-300 rounded text-black uppercase w-44"
          />
          <button type="submit" onClick={fetchPokemon} className="bg-blue-600 text-white px-4 py-2 h-10 rounded hover:bg-blue-800 transition-all flex justify-center items-center gap-1">
            <img src="/search.svg" alt="" className='size-4' />
            <p className={loading ? 'opacity-0' : 'opacity-100'}>Search</p>
            {loading && (
              <div className="flex items-center justify-center absolute ml-5">
                <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-white border-solid"></div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
