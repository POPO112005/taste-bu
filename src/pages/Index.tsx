import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Search, Star, MapPin, Coffee, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-cafe.jpg";
import restaurantImage from "@/assets/restaurant-card.jpg";
import cafeImage from "@/assets/cafe-workspace.jpg";

const Index = () => {
  const keywords = [
    "ครัวลูกแมว",
    "สมยงตำซั่ว", 
    "88 Coffee & Restaurant",
    "co-f & co-w",
    "ไส้กรอกย่างคจัมโบ้",
    "Knoz Cafe",
    "Daw in Dessert",
    "Duckyy Tea Bar (ดักกี้ ที บาร์)คลองหลวง",
    "la miette | ละเมียด โฮม คาเฟ่ (la miette)",
    "Term Waan Cafe & Bistro Klong3",
  ];

  const featuredPlaces = [
    {
      name: "ครัวลูกแมว",
      type: "restaurant",
      image: "https://img.wongnai.com/p/1920x0/2022/09/03/fdeafffc8cca4777a280f33e4e6f1fe8.jpg",
      rating: 4.5,
      distance: "4 กม.",
      priceRange: "50-120 บาท",
      tags: ["อาหารไทย", "ราคานักศึกษา"]
    },
    {
      name: "สมยงตำซั่ว",
      type: "restaurant",
      image: "https://img.wongnai.com/p/1920x0/2022/08/06/246fd37f8518462e8c4fd0a074e8d235.jpg",
      rating: 4.6,
      distance: "1 กม.",
      priceRange: "60-150 บาท",
      tags: ["อาหารไทย", "ราคานักศึกษา"]
    },
    {
      name: "88 Coffee & Restaurant พลัมคอนโด รังสิต",
      type: "cafe",
      image: "https://img.wongnai.com/p/1920x0/2017/11/27/c37425941a0f44f28a0f17508c859c2f.jpg",
      rating: 4.3,
      distance: "1 กม.",
      priceRange: "80-200 บาท",
      tags: ["อาหารไทย", "Instagram-able"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coffee/80 to-warm-brown/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            คาเฟ่ ร้านอาหารอร่อย ใกล้ม.กรุงเทพ
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 opacity-90 leading-relaxed">
            <span className="block text-lg sm:inline ">ค้นหาอาหารตามสั่ง คาเฟ่นั่งทำงาน</span>
            <span className="block text-lg sm:inline"> ร้านกาแฟ รังสิต ราคานักศึกษา</span>
          </p>
          
          {/* Hero Search */}
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
             

             
            </div>
          </div>
          
          {/* Quick Links Carousel */}
          <div className="max-w-5xl mx-auto mt-8 sm:mt-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 30,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                })
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 carousel-smooth">
                {keywords.map((keyword, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-3 md:pl-4 basis-auto">
                    <Badge 
                      variant="secondary" 
                      className="text-sm sm:text-base md:text-lg py-2 sm:py-3 px-4 sm:px-6 md:px-8 bg-card/80 backdrop-blur-sm hover:bg-card/90 cursor-pointer badge-smooth-hover whitespace-nowrap font-medium"
                    >
                      {keyword}
                    </Badge>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Featured Places */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">ร้านอาหารและคาเฟ่แนะนำ ใกล้ม.กรุงเทพ</h2>
          <p className="text-base sm:text-lg text-muted-foreground">คาเฟ่นั่งทำงาน ร้านกาแฟ อาหารอร่อย ราคานักศึกษา รังสิต</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredPlaces.map((place, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-warm-orange fill-current" />
                  <span className="text-sm font-medium">{place.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{place.name}</h3>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>4 กม.</span>
                  </div>
                  <span className="font-medium text-coffee">{place.priceRange}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {place.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Link to="/restaurants" className="group">
            <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-48 sm:h-56 lg:h-64">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/90 to-coffee/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground px-4">
                    <UtensilsCrossed className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">ร้านอาหารอร่อย ใกล้ม.กรุงเทพ</h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-3 sm:mb-4">อาหารตามสั่ง อาหารเกาหลี ขนมหวาน ราคานักศึกษา</p>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium">
                      <span>ดูทั้งหมด</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cafes" className="group">
            <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-48 sm:h-56 lg:h-64">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee/90 to-warm-brown/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground px-4">
                    <Coffee className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">คาเฟ่นั่งทำงาน รังสิต</h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-3 sm:mb-4">ร้านกาแฟ คาเฟ่มินิมอล บรรยากาศดี ใกล้ม.กรุงเทพ</p>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium">
                      <span>ดูทั้งหมด</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
