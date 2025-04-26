import { Search } from "lucide-react"
import { Input } from "./ui/input"

interface HeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border py-4">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">کریپتو بازار</h1>
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="جستجوی ارز دیجیتال..."
            className="pl-10 pr-4 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  )
}