import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductCard,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      {/* Заголовок страницы */}
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      {/* Липкий топбар */}
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Блок фильтрации */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name={"Чизбургер-пицца"}
                price={550}
                imageUrl={
                  "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif"
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
