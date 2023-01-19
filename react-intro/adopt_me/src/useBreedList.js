import { useQuery } from "@tanstack/react-query"
import fetchBreedList from "./fetchBreedList"

export default function useBreedList(animal) {
  const results = useQuery(["breed", animal], fetchBreedList)
  // console.log(results?.data?.breeds ?? [], results.status)
  return [results?.data?.breeds ?? [], results.status]
}