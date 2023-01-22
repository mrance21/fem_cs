import { useState, lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const queryClient = new QueryClient ({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

const App = () => {
  const adoptedPet = useState(null)
  return (
    <div className="p-0 m-0" style={{ background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)" }}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense 
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🐶</h2>
              </div>
            }
          >
          <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 
          via-orange-500 to-red-500 p-7 text-center">
            <Link className="text-6xl text-white hover:text-gray-200" to="/">Adopt Me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />}/>
          </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  )
};

export default App

// making app general purpose so it can be run in node or browser