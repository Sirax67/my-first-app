import Link from "next/link";

const posts=[
    {id: "1", title: "Первый пост"},
    {id: "2", title: "Второй пост"},
    {id: "3", title: "Третий пост"},    
]

export default function PostsPage() {
    return(
        <ul className="divide-y divide-gray-200">
            {posts.map((post)=>(
                <li key={post.id}>
                    <Link 
                    className="hover:text0blue-600 hover:underline py-2"
                    href={`/posts/${post.id}`}>
                        {post.title}
                    </Link></li>
            ))}
        </ul>
    );
}
