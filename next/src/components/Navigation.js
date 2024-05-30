import Link from 'next/link'

const Navigation = ({ title }) => {
    return (
        <nav className="layout">
            <Link href="/">{title}</Link>
            <Link href="/create">create</Link>
        </nav>
    )
}

export default Navigation