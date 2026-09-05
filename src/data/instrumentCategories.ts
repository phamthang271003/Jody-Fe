export interface InstrumentCategory {
  slug: string
  label: string
  title?: string
  group: 'Piano' | 'Guitar' | 'Dây' | 'Bộ gõ'
  description: string
  imageIndex: number
}

export const instrumentCategories: InstrumentCategory[] = [
  {
    slug: 'piano-digital', label: 'Piano Digital', title: 'Piano Điện', group: 'Piano', imageIndex: 1,
    description: 'Dễ dàng chọn cây đàn piano phù hợp để bắt đầu và duy trì việc luyện tập mỗi ngày.',
  },
  {
    slug: 'piano-co', label: 'Piano Cơ', group: 'Piano', imageIndex: 0,
    description: 'Khám phá âm thanh piano mộc mạc, giàu cảm xúc cùng thiết kế cổ điển, thanh lịch.',
  },
  {
    slug: 'guitar-acoustic', label: 'Guitar Acoustic', group: 'Guitar', imageIndex: 2,
    description: 'Âm thanh mộc, tự nhiên, phù hợp để đệm hát và khám phá những giai điệu yêu thích.',
  },
  {
    slug: 'guitar-classic', label: 'Guitar Classic', group: 'Guitar', imageIndex: 4,
    description: 'Chất âm dây nylon ấm áp, nhẹ nhàng cho người mới bắt đầu và người yêu nhạc cổ điển.',
  },
  {
    slug: 'guitar-dien', label: 'Guitar Điện', group: 'Guitar', imageIndex: 3,
    description: 'Khám phá nhiều màu sắc âm thanh, từ những câu riff đầu tiên đến phong cách của riêng bạn.',
  },
  {
    slug: 'guitar-bass', label: 'Guitar Bass', title: 'Bass', group: 'Dây', imageIndex: 5,
    description: 'Âm trầm mạnh mẽ, đầy đặn, kết nối nhịp điệu và giai điệu trong mỗi bản hòa tấu.',
  },
  {
    slug: 'violin', label: 'Violin', group: 'Dây', imageIndex: 6,
    description: 'Âm sắc trong trẻo, giàu biểu cảm, đồng hành cùng hành trình luyện tập và biểu diễn.',
  },
  {
    slug: 'trong', label: 'Trống', group: 'Bộ gõ', imageIndex: 7,
    description: 'Khơi dậy năng lượng và cảm hứng giữ nhịp, từ luyện tập cá nhân đến chơi cùng ban nhạc.',
  },
]
