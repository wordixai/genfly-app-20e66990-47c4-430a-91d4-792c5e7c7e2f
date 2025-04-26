import { useState } from "react"
import { Header } from "@/components/Header"
import { CryptoList } from "@/components/CryptoList"
import { useCryptoData } from "@/hooks/useCryptoData"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { data: cryptos = [], isLoading, error } = useCryptoData()
  
  // Filter cryptos based on search query
  const filteredCryptos = cryptos.filter(crypto => 
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir="rtl">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-1">
        {error ? (
          <div className="container py-8">
            <div className="bg-destructive/10 text-destructive p-4 rounded-md">
              <p>خطا در دریافت اطلاعات: {(error as Error).message}</p>
              <p>لطفا بعدا دوباره امتحان کنید.</p>
            </div>
          </div>
        ) : (
          <CryptoList 
            cryptos={filteredCryptos} 
            isLoading={isLoading} 
          />
        )}
      </main>
      
      <footer className="border-t border-border py-6">
        <div className="container">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} کریپتو بازار - قیمت لحظه‌ای ارزهای دیجیتال
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index