import Link from "next/link"

export default function HomePage(){
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/ssg">SSG</Link>
                </li>
                <li>
                    <Link href="/ssr">SSR</Link>
                </li>
            </ul>
        </div>
    )
}