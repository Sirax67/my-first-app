import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Мой первый проект на Next.js</h1>
      <p>Выполнила: Абрамова Е., группа ИС-24/9</p>
      <Link 
      className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded" 
      href="/about">Обо мне</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6">
        <Card
          title="Первая карточка"
          text="Текс первой карточки"
        ></Card>

        <Card
          title="Вторая карточка"
          text="Текс второй карточки"
        ></Card>
      </div>
    </div>
  );
}
