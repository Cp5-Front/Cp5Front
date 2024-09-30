import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/biografia">Biografia</Link> </li>
                <li> <Link href="/venus">Teoria do Nascimento de Venus</Link> </li>
                <li> <Link href="/livro">Livro</Link></li>
                <li> <Link href="/calculo">Cálculo</Link></li>
            </ul>
        </nav>
    )
}