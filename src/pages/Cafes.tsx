import Navigation from "@/components/Navigation";
import PlaceCard from "@/components/PlaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";
import cafeImage from "@/assets/cafe-workspace.jpg";

const Cafes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = [
    "นั่งทำงาน", "เปิดเช้า", "มินิมอล", "Wi-Fi", "ร้านหนังสือ", 
    "เปิดดึก", "วิวดี", "กลางแจ้ง", "Instagram", "ธรรมชาติ", 
    "ทำงานกลุ่ม", "ปลั๊กไฟ", "เงียบ", "เบเกอรี่", "อาหารเช้า", 
    "ราคาดี", "ดาดฟ้า", "วิวเมือง", "Sunset", "โรแมนติก"
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

  const cafes = [
    {
      name: "88 Coffee & Restaurant พลัมคอนโด รังสิต",
      description: "คาเฟ่มินิมอลสไตล์โมเดิร์น เปิดเช้า Wi-Fi เร็ว เหมาะสำหรับนั่งทำงาน บรรยากาศสงบ",
      image: "https://img.wongnai.com/p/1920x0/2017/11/27/c37425941a0f44f28a0f17508c859c2f.jpg",
      rating: 4.6,
      priceRange: "60-150 บาท",
      openHours: "06:30-21:00",
      distance: "180 ม.",
      tags: ["นั่งทำงาน", "เปิดเช้า", "มินิมอล", "Wi-Fi"],
      highlights: ["Cappuccino", "Croissant", "Cheesecake"]
    },
    {
      name: "Term Waan Cafe & Bistro Klong3",
      description: "คาเฟ่บุ๊คสโตร์ บรรยากาศอบอุ่น มีหนังสือให้อ่าน กาแฟหอมกรุ่น เปิดจนดึก เหมาะกับศึกษา",
      image: "https://img.wongnai.com/p/800x0/2023/02/07/c6e4f541f5474526ac924fd8f2323893.jpg",
      rating: 4.5,
      priceRange: "55-120 บาท",
      openHours: "08:00-23:00",
      distance: "220 ม.",
      tags: ["ร้านหนังสือ", "เปิดดึก", "อ่านหนังสือ", "ศึกษา"],
      highlights: ["Latte Art", "Brownie", "ชาไทย"]
    },
    {
      name: "Knox Cafe",
      description: "คาเฟ่วิวสวน บรรยากาศธรรมชาติ โซนกลางแจ้ง โซนปรับอากาศ Instagram-able สวยงาม",
      image: "https://img.wongnai.com/p/400x0/2018/05/27/42f0873aeb564228b85271564ae7f62c.jpg",
      rating: 4.4,
      priceRange: "70-180 บาท",
      openHours: "07:00-20:00",
      distance: "5 กม.",
      tags: ["วิวดี", "กลางแจ้ง", "Instagram", "ธรรมชาติ"],
      highlights: ["Americano", "Matcha Latte", "Waffle"]
    },
    {
      name: "คอฟแอนด์คาว (CO-F & CO-W)ธรรมศาสตร์ รังสิต",
      description: "คาเฟ่สไตล์มินิมอล โต๊ะทำงานกว้าง ปลั๊กไฟทุกที่นั่ง เงียบสงบ เหมาะทำงานกลุ่ม",
      image: "https://img.wongnai.com/p/400x0/2019/08/28/65272d70e757475287e4ea8822f5b986.jpg",
      rating: 4.3,
      priceRange: "50-130 บาท",
      openHours: "09:00-22:00",
      distance: "5 กม.",
      tags: ["มินิมอล", "ทำงานกลุ่ม", "ปลั๊กไฟ", "เงียบ"],
      highlights: ["Espresso", "Sandwich", "Cake"]
    },
    {
      name: "Duckyy Tea Bar (ดักกี้ ที บาร์)คลองหลวง ",
      description: "คาเฟ่เปิดเช้า รับแสงแรก กาแฟสดทุกวัน เบเกอรี่หอมๆ เมนูอาหารเช้า ราคาดี",
      image: "https://img.wongnai.com/p/800x0/2021/07/13/8c22a7587d0a467495956dfd0fa767c4.jpg",
      rating: 4.2,
      priceRange: "45-110 บาท",
      openHours: "05:30-18:00",
      distance: "5 กม.",
      tags: ["เปิดเช้า", "เบเกอรี่", "อาหารเช้า", "ราคาดี"],
      highlights: ["Morning Blend", "Croissant", "Yogurt"]
    },
    {
      name: "la miette | ละเมียด โฮม คาเฟ่ (la miette)",
      description: "คาเฟ่ชั้นบนดาดฟ้า วิวเมือง บรรยากาศโรแมนติก เหมาะนัดเพื่อน Sunset view สวยมาก",
      image: "https://img.wongnai.com/p/400x0/2020/01/03/04f1fade90d943c195d8a81fb5ae9034.jpg",
      rating: 4.7,
      priceRange: "80-200 บาท",
      openHours: "10:00-24:00",
      distance: "450 ม.",
      tags: ["ดาดฟ้า", "วิวเมือง", "Sunset", "โรแมนติก"],
      highlights: ["Cold Brew", "Tiramisu", "Smoothie"]
    }
  ];

  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cafe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cafe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => cafe.tags.includes(filter));
    
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
              คาเฟ่ใกล้ม.กรุงเทพ
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              ค้นหาคาเฟ่นั่งชิล นั่งทำงาน บรรยากาศดี ใกล้มหาวิทยาลัย
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                  <Input 
                    placeholder="ค้นหาคาเฟ่ เช่น นั่งทำงาน, วิวสวน, เปิดเช้า..."
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
                    <h3 className="font-medium text-foreground">ตัวกรองคาเฟ่</h3>
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
                           ? ""
                           : ""
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
            คาเฟ่แนะนำ 
            {filteredCafes.length !== cafes.length && (
              <span className="text-base font-normal text-muted-foreground ml-2">
                ({filteredCafes.length} จาก {cafes.length} ร้าน)
              </span>
            )}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">คาเฟ่บรรยากาศดี เหมาะนั่งชิล นั่งทำงาน ใกล้มหาวิทยาลัยกรุงเทพ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCafes.length > 0 ? (
            filteredCafes.map((cafe, index) => (
              <PlaceCard key={index} {...cafe} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg mb-2">ไม่พบคาเฟ่ที่ตรงกับเงื่อนไข</p>
              <p className="text-sm text-muted-foreground">ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cafes;