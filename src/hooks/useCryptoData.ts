import { useQuery } from "@tanstack/react-query"
import { Cryptocurrency } from "@/types/crypto"

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

async function fetchCryptoData(): Promise<Cryptocurrency[]> {
  const response = await fetch(API_URL)
  
  if (!response.ok) {
    throw new Error("Failed to fetch cryptocurrency data")
  }
  
  return response.json()
}

export function useCryptoData() {
  return useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
    refetchInterval: 60000, // Refetch every minute
  })
}