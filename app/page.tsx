import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
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
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Бургер пицца",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Супер пицца",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Гавайская",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 11,
                    name: "Бургер пицца",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "Супер пицца",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "Пепперони",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "Гавайская",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
