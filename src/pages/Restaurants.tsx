import Navigation from "@/components/Navigation";
import PlaceCard from "@/components/PlaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";
import restaurantImage from "@/assets/restaurant-card.jpg";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = [
    "ของหวาน", "โฮมเมด", "Instagram-able", "วาฟเฟิล", "เครื่องดื่ม", 
    "ก๋วยเตี๋ยว", "ยำ", "อาหารจานเดียว", "ไส้กรอก", "ย่าง", 
    "ราคาดี", "อาหารไทย", "ราคานักศึกษา", "อาหารเช้า", "อาหารกลางวัน", 
    "อาหารเย็น", "เปิดดึก", "ฟาสต์ฟู้ด", "สลัด", "เวียดนาม"
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const restaurants = [
    {
      name: "Daw in Dessert",
      description: "ของหวานโฮมเมดที่ทำด้วยใจทุกชิ้น หวานกำลังดี วัตถุดิบพรีเมียม สดใหม่ทุกวัน เติมเต็มทุกช่วงเวลาแห่งความสุขให้พิเศษยิ่งขึ้น",
      image: "https://img.wongnai.com/p/800x0/2022/01/01/d9de9bb9905048d8b457a9a689e9839e.jpg",
      rating: 4.5,
      priceRange: "50-120 บาท",
      openHours: "10:00-21:00",
      distance: "200 ม.",
      tags: ["ของหวาน", "โฮมเมด", "Instagram-able"],
      highlights: ["ขนมหวาน", "เค้ก", "เครื่องดื่ม" ]
    },
    {
      name: "Maru Waffle สาขา Heyday ม.กรุงเทพ",
      description: "Maru Waffle วาฟเฟิลสูตรพิเศษ หอม กรอบนอกนุ่มใน หวานกำลังดี ที่ Heyday ม.กรุงเทพ",
      image: "https://img.wongnai.com/p/1920x0/2025/03/18/4b558fa1750e4a14ba1a3f8765f0dcb1.jpg",
      rating: 4.3,
      priceRange: "80-200 บาท",
      openHours: "11:00-22:00",
      distance: "300 ม.",
      tags: ["วาฟเฟิล", "ของหวาน", "เครื่องดื่ม"],
      highlights: ["วาฟเฟิล", "ไอศกรีม", "เครื่องดื่ม" ]
    },
    {
      name: "ไทสยามนู้ดเดิ้ล Thaisiam Noodle",
      description: "ร้านก๋วยเตี๋ยวที่มีทั้งก๋วยเตี๋ยว ยำ ข้าว อาหารทานเล่น อาหารรสชาติดี ",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npBT4TuJHWzWaMexuUQODmZmeGglcRFgORTGLKITq_FoJG7yKHsYHPsctseEsD-RKEJtv2Biu-TqKrAJLT5Ibn9NJgGlXLcdl8TtQ_U4dkWyj7V5IClDF2huak7Z-E_IcxNY8BHT0uj3zw=w408-h306-k-no",
      rating: 4.7,
      priceRange: "35-80 บาท",
      openHours: "08:00-16:00",
      distance: "150 ม.",
      tags: ["ก๋วยเตี๋ยว", "ยำ", "อาหารจานเดียว"],
      highlights: ["ก๋วยเตี๋ยวหมู", "ยำวุ้นเส้น", "ข้าวหมูทอด" ]
    },
    {
      name: "ไส้กรอกย่างจัมโบ้ รังสิตภิรมย์",
      description: "ไส้กรอกย่างจัมโบ้ เนื้อแน่น อร่อยเต็มคำ สูตรเด็ดรังสิตภิรมย์ กัดคำเดียวฟินจนหยุดไม่ได้!",
      image: "https://img.wongnai.com/p/800x0/2025/09/16/371f995628d54d48a6b22d70c83f3680.jpg",
      rating: 4.2,
      priceRange: "120-300 บาท",
      openHours: "11:00-23:00",
      distance: "400 ม.",
      tags: ["ไส้กรอก", "ย่าง", "ราคาดี"],
      highlights: ["ไส้กรอกย่าง", "แหนม", "เบียร์เย็น"]
    },
    {
      name: "ครัวลูกแมว รังสิต",
      description: "ส้มตำรสจัดจ้าน บรรยากาศร่มๆ ย่านวิทยาเขต ราคาดี มีที่นั่งเยอะ เหมาะกับกิน กลุ่มใหญ่",
      image: "https://img.wongnai.com/p/1920x0/2022/09/03/fdeafffc8cca4777a280f33e4e6f1fe8.jpg",
      rating: 4.4,
      priceRange: "25-70 บาท",
      openHours: "16:00-22:00",
      distance: "250 ม.",
      tags: ["ส้มตำ", "อาหารอีสาน", "ราคาถูก"],
      highlights: ["ส้มตำไทย", "ลาบหมู", "ไก่ย่าง"]
    },
    {
      name: "สมยงตำซั่ว รังสิตภิรมย์",
      description: "ขนมจีนแบบดั้งเดิม น้ำยาหวานมัน อาหารเช้าแสนอร่อย ต้องลองเมื่อมาธุรกิจรังสิต",
      image: "https://img.wongnai.com/p/1920x0/2022/08/06/246fd37f8518462e8c4fd0a074e8d235.jpg",
      rating: 4.6,
      priceRange: "30-80 บาท",
      openHours: "11:00-21:30",
      distance: "350 ม.",
      tags: ["อาหารเช้า", "ขนมจีน", "อาหารจานเดียว"],
      highlights: ["ขนมจีนน้ำยา", "ไข่กระทะ", "ข้าวคลุกกะปิ"]
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => restaurant.tags.includes(filter));
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-gradient-warm text-primary-foreground py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              ร้านอาหารใกล้ม.กรุงเทพ
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              ค้นหาร้านอาหารอร่อยๆ ราคาเป็นกันเอง สำหรับนักศึกษา
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                  <Input 
                    placeholder="ค้นหาร้านอาหาร เช่น ข้าวผัด, ส้มตำ, พิซซ่า..."
                    className="pl-9 sm:pl-12 pr-20 sm:pr-24 bg-card/95 backdrop-blur-sm border-0 h-12 sm:h-14 text-sm sm:text-base shadow-lg text-black rounded-lg w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button 
                    size="sm"
                    className="absolute right-1.5 top-1/2 transform -translate-y-1/2 h-9 sm:h-11 px-3 sm:px-4 text-xs sm:text-sm bg-coffee hover:bg-coffee/90 rounded-md"
                  >
                    ค้นหา
                  </Button>
                </div>
                
                {/* Filter Toggle */}
                <div
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center gap-2 cursor-pointer h-12 sm:h-14 px-4 sm:px-6 min-w-fit rounded-lg border-2 transition-all duration-200 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 shadow-md"
                >
                  <Filter className="h-4 w-4" />
                  <span className=" sm:inline font-medium">ตัวกรอง</span>
                  {selectedFilters.length > 0 && (
                    <div className="ml-1 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center">
                      {selectedFilters.length}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Filter Options */}
              {showFilters && (
                <div className="mt-4 p-4 bg-card/90 backdrop-blur-sm rounded-lg shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-foreground">ตัวกรองร้านอาหาร</h3>
                    {selectedFilters.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-coffee hover:text-coffee/80"
                      >
                        <X className="h-4 w-4 mr-1" />
                        ล้างทั้งหมด
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.map((filter) => (
                      <Badge
                        key={filter}
                        variant={selectedFilters.includes(filter) ? "default" : "outline"}
                        className={`cursor-pointer transition-all duration-200 font-medium ${
                          selectedFilters.includes(filter)
                            ? "bg-amber-600 text-white hover:bg-amber-700 shadow-md border-amber-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"
                        }`}
                        onClick={() => toggleFilter(filter)}
                      >
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            ร้านอาหารแนะนำ
            {filteredRestaurants.length !== restaurants.length && (
              <span className="text-base font-normal text-muted-foreground ml-2">
                ({filteredRestaurants.length} จาก {restaurants.length} ร้าน)
              </span>
            )}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">ร้านอาหารอร่อยๆ ใกล้มหาวิทยาลัยกรุงเทพ ราคาเป็นกันเอง</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant, index) => (
              <PlaceCard key={index} {...restaurant} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg mb-2">ไม่พบร้านอาหารที่ตรงกับเงื่อนไข</p>
              <p className="text-sm text-muted-foreground">ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;