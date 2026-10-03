export default function PostLayout({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <header className="bg-brand text-white p-6 mb-6">
                <h1>Блог</h1>
                {children}
            </header>
        </div>
    );
}
