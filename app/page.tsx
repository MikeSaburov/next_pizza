import { Container, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      {/* Заголовок страницы */}
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      {/* Липкий топбар */}
      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Блок фильтрации */}
          <div className="w-[250px]">Фильтры</div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
