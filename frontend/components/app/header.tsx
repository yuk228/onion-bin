import Link from 'next/link'

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-foreground/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="text-xl font-bold hover:text-foreground/80 transition-colors"
                    >
                        OnionBin
                    </Link>
                </div>
                <div className="flex items-center gap-2"></div>
            </div>
        </header>
    )
}
