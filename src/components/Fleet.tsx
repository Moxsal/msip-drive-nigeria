import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Fuel, Settings } from "lucide-react";
import toyotaCorolla from "@/assets/toyota-corolla.jpg";
import toyotaCamry from "@/assets/toyota-camry.jpg";
import toyotaPrado from "@/assets/toyota-prado.jpg";
import lexusRx from "@/assets/lexus-rx.jpg";
import mercedesBenz from "@/assets/mercedes-benz.jpg";
import toyotaHighlander from "@/assets/toyota-highlander.jpg";
import hiaceVan from "@/assets/hiace-van.png";
import siennaBlue from "@/assets/sienna-blue.png";
import siennaGray from "@/assets/sienna-gray.png";
import fortunerWhite from "@/assets/fortuner-white.png";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla 2020",
    image: toyotaCorolla,
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 2,
    name: "Toyota Camry 2021",
    image: toyotaCamry,
    category: "Executive Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 3,
    name: "Toyota Prado 2022",
    image: toyotaPrado,
    category: "Executive SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Lexus RX 350",
    image: lexusRx,
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Mercedes-Benz E-Class",
    image: mercedesBenz,
    category: "Luxury Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "Toyota Highlander 2022",
    image: toyotaHighlander,
    category: "Family SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 7,
    name: "Toyota Fortuner 2023",
    image: fortunerWhite,
    category: "Executive SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    id: 8,
    name: "Toyota Sienna",
    image: siennaBlue,
    category: "Premium Van",
    seats: 8,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 9,
    name: "Toyota Hiace",
    image: hiaceVan,
    category: "Group Transport",
    seats: 14,
    transmission: "Manual",
    fuel: "Diesel",
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional vehicles available for corporate, airport, and private hire across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-medium transition-smooth group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {car.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">{car.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-primary">Available for Hire</span>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="h-4 w-4" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="h-4 w-4" />
                    {car.fuel}
                  </div>
                </div>

                <Button
                  variant="hero"
                  className="w-full"
                  asChild
                >
                  <a
                    href={`https://wa.me/2348062237960?text=${encodeURIComponent(`Hi, I'd like to hire the ${car.name} from Msip Global Services Ltd. Please provide more information.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
