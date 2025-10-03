import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Fuel, Settings } from "lucide-react";
import toyotaCorolla from "@/assets/toyota-corolla.jpg";
import toyotaCamry from "@/assets/toyota-camry.jpg";
import toyotaPrado from "@/assets/toyota-prado.jpg";
import lexusRx from "@/assets/lexus-rx.jpg";
import mercedesBenz from "@/assets/mercedes-benz.jpg";
import toyotaHighlander from "@/assets/toyota-highlander.jpg";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla 2020",
    image: toyotaCorolla,
    price: "₦25,000",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 2,
    name: "Toyota Camry 2021",
    image: toyotaCamry,
    price: "₦35,000",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 3,
    name: "Toyota Prado 2022",
    image: toyotaPrado,
    price: "₦80,000",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Lexus RX 350",
    image: lexusRx,
    price: "₦90,000",
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Mercedes-Benz E-Class",
    image: mercedesBenz,
    price: "₦100,000",
    category: "Luxury Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "Toyota Highlander 2022",
    image: toyotaHighlander,
    price: "₦70,000",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles to suit your needs and budget
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
                  <div className="text-2xl font-bold text-primary">{car.price}</div>
                  <div className="text-sm text-muted-foreground">per day</div>
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
                    href={`https://wa.me/2348062237960?text=${encodeURIComponent(`Hi, I'm interested in booking the ${car.name} at ${car.price}/day. Please provide more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
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
