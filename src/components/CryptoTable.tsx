import { ArrowDown, ArrowUp } from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table"
import { Badge } from "./ui/badge"
import { Cryptocurrency } from "@/types/crypto"

interface CryptoTableProps {
  cryptos: Cryptocurrency[]
}

export function CryptoTable({ cryptos }: CryptoTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead>نام</TableHead>
          <TableHead>قیمت</TableHead>
          <TableHead>تغییرات ۲۴ ساعته</TableHead>
          <TableHead className="text-right">حجم معاملات</TableHead>
          <TableHead className="text-right">ارزش بازار</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cryptos.map((crypto) => {
          const priceChangeIsPositive = crypto.price_change_percentage_24h > 0
          
          return (
            <TableRow key={crypto.id}>
              <TableCell>{crypto.market_cap_rank}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img 
                    src={crypto.image} 
                    alt={crypto.name} 
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">{crypto.name}</span>
                  <span className="text-sm text-muted-foreground uppercase">{crypto.symbol}</span>
                </div>
              </TableCell>
              <TableCell>${crypto.current_price.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={priceChangeIsPositive ? "success" : "destructive"} className="flex items-center gap-1 w-fit">
                  {priceChangeIsPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </Badge>
              </TableCell>
              <TableCell className="text-right">${crypto.total_volume.toLocaleString()}</TableCell>
              <TableCell className="text-right">${crypto.market_cap.toLocaleString()}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}