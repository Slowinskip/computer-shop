const initialState = {
  products: [
    {
      id: 1,
      category: 'computer',
      name: 'Lenovo T440',
      price: '950',
      oldPrice: '1000',
      image: ['LenovoT440_1', 'LenovoT440_2', 'LenovoT440_3', 'LenovoT440_4'],
      information:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: 2,
      category: 'computer',
      name: 'APPLE MacBook Air',
      price: '5100',
      oldPrice: '0',
      image: ['apple_2', 'apple_1', 'apple_3', 'apple_4'],
      information:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: 3,
      category: 'computer',
      name: 'ACER Extensa EX215',
      price: '2500',
      oldPrice: '2650',
      image: ['acer_1', 'acer_2', 'acer_3', 'acer_4'],
      information:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: 4,
      category: 'keybordandmouse',
      name: 'RAZER Mamba Elite',
      price: '200',
      oldPrice: '0',
      image: [
        'Mamba_Elite_1',
        'Mamba_Elite_2',
        'Mamba_Elite_3',
        'Mamba_Elite_4',
      ],
      information:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: 5,
      category: 'keybordandmouse',
      name: 'MAD DOG GK850W',
      price: '180',
      oldPrice: '220',
      image: [
        'Klawiatura-MAD-1',
        'Klawiatura-MAD-2',
        'Klawiatura-MAD-3',
        'Klawiatura-MAD-4',
      ],
      information:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: 6,
      category: 'keybordandmouse',
      name: 'RAZER Mamba Elite',
      price: '440',
      oldPrice: '0',
      image: ['logitech-1', 'logitech-2', 'logitech-3', 'logitech-4'],
      information:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
  ],
  cart: [],
  user: [],
  orders: [],
}

export default initialState
