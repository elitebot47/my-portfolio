import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-fit lg:text-start border-t-2 border-white/20   text-center py-1.5 bg-accent dark:bg-accent/50 px-8 lg:py-2">
      <div className="lg:text-lg flex justify-center items-center text-foreground gap-x-2 leading-none">
        <small className="align-middle">© {new Date().getFullYear()}</small>
        <span className="align-middle">•</span>
        <span className="align-middle">Created by</span>
        <Link
          aria-label="Rishab Yadav on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rishab-yadav-9785b5228"
          className="font-semibold duration-300 hover:text-blue-300 hover:shadow-lg transition align-middle"
        >
          Rishab Yadav
        </Link>
      </div>
    </footer>
  );
}
