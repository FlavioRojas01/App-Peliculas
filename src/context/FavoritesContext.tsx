import {
  createContext,
  useContext,
  useState
} from "react";

import type { ReactNode } from "react";

import type { Movies } from '../interfaces/Movie'

interface FavoritesContextType {
  favorites: Movies[]
  toggleFavorite: (movie: Movies) => void
  isFavorite: (id: number) => boolean
}

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined)

interface Props {
  children: ReactNode
}

export const FavoritesProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Movies[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')

    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (movie: Movies) => {
    const exists = favorites.some((fav) => fav.id === movie.id)

    if (exists) {
      setFavorites((prev) =>
        prev.filter((fav) => fav.id !== movie.id)
      )
    } else {
      setFavorites((prev) => [...prev, movie])
    }
  }

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites debe usarse dentro del Provider')
  }

  return context
}
