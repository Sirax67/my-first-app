import Link from "next/link";

export default function Header () {
    return(
        <nav className="flex items-center justify-between bg-white p-4 shadow-sm">
            <span className="text-xl font-bold w-[137px]">Мой блог</span>
            <div className="flex gap-4">
                <Link href="/" className="hover:text-blue-600">Главная</Link>
                <Link href="/posts" className="hover:text-blue-600">Блог</Link>
            </div>
        </nav>
    )
}
