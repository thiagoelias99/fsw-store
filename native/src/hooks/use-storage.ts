import AsyncStorage from "@react-native-async-storage/async-storage"

const TRIP_STORAGE_BASE_KEY = "@fsw-store"

async function save(key: string, value: string) {
  try {
    await AsyncStorage.setItem(`${TRIP_STORAGE_BASE_KEY}:${key}`, value)
  } catch (error) {
    throw error
  }
}

async function get(key: string) {
  try {
    const tripId = await AsyncStorage.getItem(`${TRIP_STORAGE_BASE_KEY}:${key}`)
    return tripId
  } catch (error) {
    throw error
  }
}

async function remove(key: string) {
  try {
    await AsyncStorage.removeItem(`${TRIP_STORAGE_BASE_KEY}:${key}`)
  } catch (error) {
    throw error
  }
}

export const nativeStorage = { save, get, remove }