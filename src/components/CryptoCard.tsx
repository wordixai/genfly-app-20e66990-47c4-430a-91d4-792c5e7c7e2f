import { ArrowDown, ArrowUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Cryptocurrency } from "@/types/crypto"

interface CryptoCardProps {
  crypto: Cryptocurrency
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const priceChangeIsPositive = crypto.price_change_percentage_24h > 0
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={crypto.image} 
              alt={crypto.name} 
              className="w-8 h-8 rounded-full"
            />
            <CardTitle className="text-lg">{crypto.name}</CardTitle>
            <span className="text-sm text-muted-foreground uppercase">{crypto.symbol}</span>
          </div>
          <Badge variant={priceChangeIsPositive ? "success" : "destructive"} className="flex items-center gap-1">
            {priceChangeIsPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">${crypto.current_price.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">
              حجم معاملات: ${crypto.total_volume.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm">
              <span className="text-muted-foreground">کمترین:</span> ${crypto.low_24h.toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">بیشترین:</span> ${crypto.high_24h.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}