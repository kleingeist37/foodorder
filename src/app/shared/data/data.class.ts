import { CategoryCard } from "../classes/category-card.class";
import { FoodItem } from "../classes/food-item.class";
import { NavElement } from "../classes/nav-element.class";

export class Data {
    static navElements: NavElement[] = [
        new NavElement('Home', ''),
        new NavElement('Vorspeisen', '/list', {'cat': 'starter'}),
        new NavElement('Salate', '/list', {'cat': 'salad'}),
        new NavElement('Pizza', '/list', {'cat': 'pizza'}),
        new NavElement('Pasta', '/list', {'cat': 'pasta'})
    ];

    static CategoryCards: CategoryCard[] = [
        new CategoryCard('Vorspeisen', '/list', 'Für den Anfang', 'https://p1.pxfuel.com/preview/854/449/76/bruschetti-italian-food-starters-gourmet.jpg', {'cat': 'starter'}),
        new CategoryCard('Salate', '/list', 'Gesund statt rund!', 'https://simply-delicious-food.com/wp-content/uploads/2020/10/Lemon-Parmesan-Green-Salad-5.jpg', {'cat': 'salad'}),
        new CategoryCard('Pizza', '/list', 'Fett und nett', 'https://www.lieferando.de/foodwiki/uploads/sites/8/2018/01/pizza-3-1080x960.jpg', {'cat': 'pizza'}),
        new CategoryCard('Pasta', '/list', 'Mamma mia!', 'https://ais.kochbar.de/kbrezept/306041_1010094/1200x1200/pasta-aurora-rezept-bild-nr-2.jpg', {'cat': 'pasta'}),
    ];

    static Pizza: FoodItem[] = [
        new FoodItem('Salami', 10, 7.00, ['Mozzarella', 'Tomaten', 'Salami']),
        new FoodItem('Schinken', 20, 7.50, ['Mozzarella', 'Tomaten', 'Schinken']),
        new FoodItem('Schinken', 20, 7.50, ['Mozzarella', 'Tomaten', 'Schinken']),
        new FoodItem('Schinken', 20, 7.50, ['Mozzarella', 'Tomaten', 'Schinken']),
        new FoodItem('Schinken', 20, 7.50, ['Mozzarella', 'Tomaten', 'Schinken']),
        new FoodItem('Schinken', 20, 7.50, ['Mozzarella', 'Tomaten', 'Schinken']),
        new FoodItem('Schinken', 20, 7.50, ['Mozzarella', 'Tomaten', 'Schinken']),
        new FoodItem('4 Käse', 30, 10.00, ['Mozzarella', 'Tomaten', 'Parmesan', 'Schmelzkäse', 'Feta', 'Mozzarella', 'Tomaten', 'Parmesan', 'Schmelzkäse', 'Feta']),
    ];

    static Salad: FoodItem[] = [
        new FoodItem('Vorspeisensalat', 100, 3.00, ['Salat', 'Soße']),
        new FoodItem('Cäsar Salat', 110, 7.00, ['Salat', 'Cäsardressing', 'Hähnchen', 'Croutons']),
        new FoodItem('Tomatensalat', 120, 9.00, ['Tomaten', 'Mozzarella']),
    ]

    static Pictures: {cat:string, url:string}[] = [
        {cat:'salad', url: 'https://opasouvlaki.ca/opawp/wp-content/uploads/2017/09/greek-salad-banner.png'},
        {cat:'pizza', url: 'https://previews.123rf.com/images/shlyahovayulia/shlyahovayulia2006/shlyahovayulia200600090/148968238-horizontales-banner-f%C3%BCr-die-website-flyer-f%C3%BCr-men%C3%BCrestaurant-mit-verschiedenen-pizzasorten-flaches-v.jpg'},
        {cat:'pasta', url: 'https://previews.123rf.com/images/timolina/timolina2104/timolina210400126/168174291-spaghetti-alla-amatriciana-with-guanciale-tomatoes-and-pecorino-cheese-italian-healthy-food-.jpg'},
        {cat:'starter', url: 'https://previews.123rf.com/images/vasiliybudarin/vasiliybudarin1807/vasiliybudarin180700171/105454118-bruschetta-with-tomatoes-mozzarella-cheese-and-basil-on-a-old-rustic-table-traditional-italian-appet.jpg'}
    ];
}