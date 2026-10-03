export default function Card ({title, text}: {title: string; text: string}) {
    return(
        <div className="
        dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group">
            <h2 className="dark:text-white text-xl font-bold mb-2 group-hover:text-blue-600">{title}</h2>
            <p className="dark:text-gray-300 text-gray-600">{text}</p>
        </div>
    )
}
