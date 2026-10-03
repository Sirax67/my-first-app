export default function PostLayout({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <header>
                <h1>Блог</h1>
                {children}
            </header>
        </div>
    );
}