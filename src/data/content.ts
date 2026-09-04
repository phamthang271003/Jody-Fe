import type { FAQ, PricingPackage, Testimonial } from '../types'

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Chị Thu Hà', type: 'Phụ huynh', course: 'Piano thiếu nhi', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80', content: 'Điều mình trân trọng nhất là báo cáo sau mỗi buổi học. Con không bị ép luyện đàn mà tự hào kể về bài mới và mong đến lớp mỗi tuần.' },
  { id: 2, name: 'Nguyễn Hải Nam', type: 'Học viên', course: 'Guitar Acoustic', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80', content: 'Tôi bắt đầu ở tuổi 31 và đã có thể đệm hát bài mình yêu sau ba tháng. Lộ trình rất rõ nhưng không hề tạo áp lực.' },
  { id: 3, name: 'Anh Hoàng Long', type: 'Phụ huynh', course: 'Trống thiếu nhi', rating: 5, avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=240&q=80', content: 'Giáo viên hiểu tâm lý trẻ và biết biến năng lượng của con thành sự tập trung. Mini show cuối kỳ là một kỷ niệm rất đẹp.' },
]

export const faqs: FAQ[] = [
  { question: 'Tôi chưa biết gì về âm nhạc có học được không?', answer: 'Hoàn toàn được. Hơn 70% học viên mới tại Jody Music bắt đầu từ con số 0. Buổi đánh giá đầu vào giúp giáo viên xây lộ trình đúng với mục tiêu và tốc độ của bạn.' },
  { question: 'Trung tâm có lớp cho trẻ em không?', answer: 'Có. Chương trình dành cho trẻ từ 5 tuổi, sử dụng hoạt động cảm âm, vận động và repertoire phù hợp từng giai đoạn phát triển.' },
  { question: 'Có lớp cho người lớn không?', answer: 'Có. Lịch học linh hoạt buổi tối và cuối tuần, mục tiêu có thể là thư giãn, đệm hát, biểu diễn hoặc thi chứng chỉ.' },
  { question: 'Một khóa học bao nhiêu buổi?', answer: 'Gói khởi đầu gồm 12 buổi. Học viên có thể chọn lộ trình 24, 48 hoặc 96 buổi để nhận mức học phí tốt hơn và theo đuổi mục tiêu dài hạn.' },
  { question: 'Tôi có cần mua nhạc cụ không?', answer: 'Trung tâm chuẩn bị sẵn nhạc cụ trong giờ học. Giáo viên sẽ tư vấn thời điểm và lựa chọn phù hợp nếu bạn cần nhạc cụ để luyện tập tại nhà.' },
  { question: 'Có được học thử không?', answer: 'Có. Bạn được trải nghiệm một buổi học thử, đánh giá năng khiếu và trao đổi mục tiêu cùng chuyên viên học thuật.' },
  { question: 'Có thể đổi giáo viên không?', answer: 'Có. Bộ phận học vụ sẽ lắng nghe phản hồi và hỗ trợ đổi giáo viên hoặc khung giờ khi cần để bảo đảm trải nghiệm học tập phù hợp.' },
  { question: 'Có hỗ trợ thi ABRSM/Trinity không?', answer: 'Có. Chúng tôi có lộ trình luyện thi riêng, mock test định kỳ và giáo viên giàu kinh nghiệm với ABRSM, Trinity và Rockschool.' },
  { question: 'Có lớp tại nhà không?', answer: 'Có tại một số khu vực TP.HCM. Chương trình tại nhà giữ nguyên giáo trình, báo cáo tiến độ và tiêu chuẩn giáo viên của trung tâm.' },
]

export const pricingPackages: PricingPackage[] = [
  { sessions: 12, price: 4200000, pricePerSession: 350000 },
  { sessions: 24, price: 7680000, pricePerSession: 320000, discount: 'Tiết kiệm 9%', featured: true },
  { sessions: 48, price: 14400000, pricePerSession: 300000, discount: 'Tiết kiệm 14%' },
  { sessions: 96, price: 26880000, pricePerSession: 280000, discount: 'Tiết kiệm 20%' },
]

export const blogPosts = [
  { slug: 'tre-hoc-piano-tu-may-tuoi', category: 'Dành cho phụ huynh', title: 'Trẻ nên học piano từ mấy tuổi?', excerpt: 'Những dấu hiệu cho thấy con đã sẵn sàng và cách tạo khởi đầu không áp lực.', date: '28.08.2026', image: 'https://images.unsplash.com/photo-1546058256-47154de4046c?auto=format&fit=crop&w=1000&q=85' },
  { slug: '20-phut-luyen-tap', category: 'Luyện tập', title: '20 phút luyện tập hiệu quả hơn 2 giờ thế nào?', excerpt: 'Một cấu trúc luyện tập ngắn, đều và có chủ đích dành cho người bận rộn.', date: '21.08.2026', image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'chon-guitar-dau-tien', category: 'Guitar', title: 'Chọn cây guitar đầu tiên: đừng bắt đầu bằng giá tiền', excerpt: 'Kích thước, action và cảm giác chơi mới là ba điều cần quan tâm trước tiên.', date: '14.08.2026', image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1000&q=85' },
]
