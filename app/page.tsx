import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Мой первый проект на Next.js</h1>
      <p>Выполнила: Абрамова Е., группа ИС-24/9</p>
      <Link href="/about">Обо мне</Link>

      <div>
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
