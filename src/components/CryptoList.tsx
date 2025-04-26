import { useState } from "react"
import { CryptoCard } from "./CryptoCard"
import { CryptoTable } from "./CryptoTable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Cryptocurrency } from "@/types/crypto"

interface CryptoListProps {
  cryptos: Cryptocurrency[]
  isLoading: boolean
}

export function CryptoList({ cryptos, isLoading }: CryptoListProps) {
  const [view, setView] = useState<"grid" | "table">("grid")
  
  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex justify-center">
          <p className="text-lg">در حال بارگذاری...</p>
        </div>
      </div>
    )
  }
  
  if (cryptos.length === 0) {
    return (
      <div className="container py-8">
        <div className="flex justify-center">
          <p className="text-lg">هیچ ارز دیجیتالی یافت نشد.</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container py-8">
      <div className="mb-6 flex justify-end">
        <Tabs defaultValue="grid" onValueChange={(value) => setView(value as "grid" | "table")}>
          <TabsList>
            <TabsTrigger value="grid">کارت</TabsTrigger>
            <TabsTrigger value="table">جدول</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptos.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <CryptoTable cryptos={cryptos} />
        </div>
      )}
    </div>
  )
}