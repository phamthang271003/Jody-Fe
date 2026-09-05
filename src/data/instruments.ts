export interface InstrumentProduct {
  slug: string
  name: string
  model: string
  brand: string
  // Leave unset until confirmed review and sales figures are available.
  rating?: number
  soldCount?: number
  category: string
  series: string
  badge: string
  price: number
  originalPrice?: number
  description: string
  body: string
  shape: 'portable' | 'console' | 'clavinova'
  finish: 'black' | 'rosewood'
  images: { src: string; alt: string }[]
}

// Initial catalogue and prices transcribed from the supplied design references.
// Replace with the store's confirmed catalogue before connecting a checkout.
// Add licensed product photos to `images`; the gallery uses labelled illustrations until then.
// Demo ratings and sold counts requested for the UI preview; replace with verified figures before publishing.
export const instruments: InstrumentProduct[] = [
  {
    slug: 'piano-dien-p-45b', name: 'Piano Điện P-45B', model: 'Digital Piano P-45B/E',
    brand: 'Yamaha', category: 'piano-digital', series: 'P Series', badge: 'Tiết kiệm',
    rating: 4.9, soldCount: 128,
    price: 7790000, originalPrice: 8990000, shape: 'portable', finish: 'black', images: [],
    description: 'Đàn Piano Điện Tử Yamaha P-45B (không kèm chân đàn). Tận hưởng âm thanh piano chân thực với thiết kế tinh tế của dòng P-series.',
    body: 'Một lựa chọn để bắt đầu hành trình piano, luyện tập tại nhà và làm quen với những giai điệu đầu tiên. Thiết kế gọn gàng giúp bạn dễ bố trí góc âm nhạc trong không gian sống. Liên hệ Jody Music để được tư vấn trải nghiệm đàn và chọn phụ kiện phù hợp. Chân đàn trong hình minh họa không nằm trong giá sản phẩm.',
  },
  {
    slug: 'piano-dien-p-143', name: 'Piano Điện P-143', model: 'Digital Piano P-143B/E + L-100B/Y',
    brand: 'Yamaha', category: 'piano-digital', series: 'P Series', badge: 'Bán chạy nhất',
    rating: 4.8, soldCount: 96,
    price: 17073818, shape: 'console', finish: 'black', images: [],
    description: 'Đàn Piano Điện Tử Yamaha P-143 (kèm chân và pedal). Mẫu đàn phù hợp cho những người mới bắt đầu chơi.',
    body: 'P-143 mang đến một góc luyện tập ngăn nắp với chân đàn đồng bộ. Sản phẩm trong danh mục đi kèm chân và pedal như cấu hình được giới thiệu. Đội ngũ Jody Music sẽ hỗ trợ bạn tìm hiểu cách sử dụng và lựa chọn đàn theo không gian, nhu cầu học tập.',
  },
  {
    slug: 'piano-dien-ydp-105', name: 'Piano Điện YDP-105', model: 'Digital Piano YDP-105R',
    brand: 'Yamaha', category: 'piano-digital', series: 'ARIUS', badge: 'Tốt nhất tầm giá',
    rating: 4.9, soldCount: 74,
    price: 21295637, shape: 'console', finish: 'rosewood', images: [],
    description: 'Đàn Piano Điện Tử Yamaha YDP-105. Chất âm đàn sang trọng và dễ dàng biểu đạt cảm xúc cùng những đường nét cổ điển.',
    body: 'Thuộc dòng ARIUS, YDP-105 có kiểu dáng piano đứng phù hợp với góc học tập và phòng khách. Tông màu gỗ ấm áp kết hợp cùng thiết kế liền khối mang đến một không gian âm nhạc gần gũi. Liên hệ Jody Music để tìm hiểu cấu hình, phụ kiện và trải nghiệm trước khi lựa chọn.',
  },
  {
    slug: 'clavinova-clp-835', name: 'Clavinova CLP-835', model: 'Digital Piano CLP-835',
    brand: 'Yamaha', category: 'piano-digital', series: 'Clavinova', badge: 'Dòng Clavinova',
    rating: 5.0, soldCount: 32,
    price: 51339273, shape: 'clavinova', finish: 'black', images: [],
    description: 'Đàn Piano Điện Tử Yamaha Clavinova CLP-835. Thiết kế sang trọng dành cho hành trình học tập và biểu diễn piano.',
    body: 'CLP-835 thuộc dòng Clavinova với thiết kế piano đứng, tạo điểm nhấn cho không gian âm nhạc tại nhà. Đây là lựa chọn trong danh mục dành cho người muốn khám phá một trải nghiệm piano chuyên sâu hơn. Jody Music hỗ trợ tư vấn và so sánh trực tiếp với những mẫu đàn phù hợp nhu cầu của bạn.',
  },
]

export const instrumentContact = {
  phone: 'tel:0938793558',
  zalo: 'https://zalo.me/0938793558',
  messenger: 'https://www.facebook.com/share/1JpKxr2jj9/?mibextid=wwXIfr',
}

// Only use benefits already supported by the site's existing content.
// Vendor-specific vouchers and commercial policies in the references are not Jody Music offers.
export const instrumentBenefits = [
  'Tư vấn chọn đàn theo nhu cầu và ngân sách',
  'Hỗ trợ lựa chọn phụ kiện phù hợp',
  'Trải nghiệm một buổi học thử miễn phí',
]

export const formatInstrumentPrice = (price: number) => `${new Intl.NumberFormat('vi-VN').format(price)} VNĐ`
