import Link from "next/link";

export default function Home() {

    let linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  
    return (
      <main>
        <h1>News Report</h1>
        <ul>
          <li>
            <Link
              className = {linkStyles}
              href="./international/"
            >
              International News
            </Link>
          </li>
          <li>
            <Link
              className={linkStyles}
              href="./national"
            >
              National News
            </Link>
          </li>
          <li>
            <Link
              className={linkStyles}
              href="./local"
            >
              Local News
            </Link>
          </li>
        </ul>
      </main>
    );
  }