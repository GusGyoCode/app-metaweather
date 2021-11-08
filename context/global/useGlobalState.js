import { useEffect, useState } from 'react'
import storage from 'local-storage-fallback'

const initialStateTranslate = () => {
  if (typeof window !== 'undefined' && navigator !== 'undefined') {
    if (storage.getItem('language')) {
      return storage.getItem('language')
    } else {
      const ln = navigator.language || navigator.userLanguage
      if (ln === 'en-EN') {
        storage.setItem('language', ln)
        return 'en-EN'
      } else if (ln === 'es-ES') {
        storage.setItem('language', ln)
        return 'es-ES'
      } else {
        storage.setItem('language', 'en-EN')
        return 'en-EN'
      }
    }
  }
}

const initialStateLocations = () => {
  if (typeof window !== 'undefined' && navigator !== 'undefined') {
    if (storage.getItem('locations')) {
      const locations = storage.getItem('locations')
      return JSON.parse(locations)
    } else {
      storage.setItem('locations', JSON.stringify([]))
      return []
    }
  }
}

const useGlobalState = () => {
  const [language, setLanguage] = useState(initialStateTranslate)
  const [isDark, setIsDark] = useState('dark')
  const [data, setData] = useState([])
  const [validation, setValidation] = useState(false)
  const [error, setError] = useState(false)
  const [convertTemp, setConvertTemp] = useState(false)
  const [savedLocations, setSavedLocations] = useState(initialStateLocations)

  const handleTranslate = e => {
    storage.setItem('language', e)
  }
  const handleTheme = e => {
    storage.setItem('isDark', e)
  }

  useEffect(() => {
    handleTranslate(language)
    handleTheme(isDark)
  }, [language, isDark])

  return { language, setLanguage, isDark, setIsDark, data, setData, validation, setValidation, error, setError, convertTemp, setConvertTemp, savedLocations, setSavedLocations }
}

export default useGlobalState
