# MusicJody_FE — Quy chuẩn giao diện dành cho AI

## Mục đích và phạm vi

- File này áp dụng cho toàn bộ repository.
- Mọi AI/code agent phải đọc file này trước khi sửa hoặc tạo UI.
- Yêu cầu trực tiếp mới nhất của người dùng luôn có ưu tiên cao hơn file này. Nếu yêu cầu không nói rõ về redesign, phải mặc định giữ nguyên ngôn ngữ thiết kế hiện tại.
- Mục tiêu thương hiệu cố định: **Golden Yellow + Cream + Navy**, mang cảm giác ấm áp, cao cấp, rõ ràng và phù hợp với một trung tâm âm nhạc tại Việt Nam.
- Không tự ý redesign, đổi layout, spacing, typography, border-radius, component, hình ảnh, icon hoặc nội dung ngoài phạm vi được yêu cầu.
- Thực hiện thay đổi nhỏ nhất có thể và không “vibe code” thêm chi tiết trang trí chỉ vì thấy khoảng trống.

## Các ràng buộc giao diện bắt buộc

- Giữ cấu trúc, nhịp điệu và cá tính của giao diện hiện có. Tính nhất quán quan trọng hơn việc làm từng section “độc lạ”.
- Không thêm icon, hình ảnh, gradient, animation, glow, shadow hoặc component mới nếu người dùng không yêu cầu.
- Không thay đổi nội dung tiếng Việt, số liệu, ảnh hoặc thứ tự nội dung trong một tác vụ chỉ liên quan đến style.
- Khối thống kê `1.200+`, `24+`, `10+`, `9+ năm` phải giữ nguyên thiết kế và không được thêm icon.
- Không dùng purple/violet làm màu thương hiệu trở lại.
- Không global replace màu một cách mù quáng. Phải kiểm tra độ tương phản và vai trò của từng màu trong ngữ cảnh.
- Không biến toàn bộ website thành màu vàng. Vàng chỉ dành cho CTA, active state, highlight, underline, đường trang trí và các điểm nhấn có chủ đích.

## Hệ màu thương hiệu

| Vai trò | Token ưu tiên | Giá trị | Cách dùng |
| --- | --- | --- | --- |
| Primary Yellow | `primary` | `#F4B942` | CTA chính, active state, điểm nhấn |
| Primary Hover | `primary-hover` | `#D99718` | hover, chữ highlight vàng đậm, focus |
| Soft Yellow | `soft-yellow` | `#FFF1C7` | nền nhấn nhẹ |
| Cream Soft | `cream-soft` | `#FFF8E7` | nền vàng kem rất nhẹ |
| Background Cream | `paper` | `#FAF7F1` | nền chính của website |
| Navy/Text | `ink` | `#10182F` | heading, body chính, chữ trên nền vàng |
| Ink Soft | `ink-soft` | `#27304A` | navy phụ khi cần phân cấp |
| Muted Text | `muted` | `#667085` | mô tả và metadata |
| Border | `border` / `mist` | `#E9E2D7` | divider và border nhẹ |
| Accent Orange | `accent` | `#E9864A` | điểm nhấn phụ, Hotline, line trang trí |

Quy tắc màu:

- CTA vàng phải dùng chữ navy `#10182F`, không dùng chữ trắng.
- CTA hover dùng `#D99718` và vẫn giữ chữ navy nếu contrast đạt yêu cầu.
- Chữ highlight tím cũ phải chuyển sang `#D99718`.
- Nền tím nhạt cũ chuyển sang `#FFF1C7` hoặc `#FFF8E7` tùy mức độ nhấn.
- Nền section lớn ưu tiên cream, white hoặc navy; không dùng mảng vàng bão hòa quá lớn.
- `iris`, `tangerine`, `lime`, `charcoal` hiện là alias tương thích cũ. Không tạo cách dùng mới dựa trên tên legacy; với code mới phải ưu tiên semantic token chính.
- Không đưa lại các mã tím như `#6C5CE7` hoặc Tailwind `violet-*`/`purple-*` vào UI.
- Màu nhận diện của dịch vụ bên thứ ba là ngoại lệ có chủ đích. Nút Zalo tiếp tục dùng xanh Zalo.
- Các nút nổi phải phân biệt rõ: Hotline dùng `accent` cam, Messenger dùng `primary` vàng, Zalo dùng xanh dịch vụ. Không để Hotline và Messenger trùng màu.

## Typography tiếng Việt

### Font

- Font mặc định/UI/body: `Be Vietnam Pro`, fallback `sans-serif`.
- Font display/editorial: `Fraunces`, fallback `serif`.
- Chỉ dùng các weight đã tải: Be Vietnam Pro `300, 400, 500, 600, 700`; Fraunces `500, 600, 700`.
- Không thêm font mới hoặc thay font của component hiện có nếu người dùng không yêu cầu.
- Giữ cách phân vai hiện tại: Be Vietnam Pro cho UI và nội dung; Fraunces chỉ cho display heading/điểm nhấn biên tập phù hợp.

### Cỡ chữ và line-height

- Thiết kế mobile-first. Không dùng một cỡ cố định rất lớn như `text-6xl` cho mọi breakpoint.
- H1 page hero: khoảng `40–48px` trên mobile, tăng dần lên `64–96px` trên desktop.
- H1 trang chi tiết: khoảng `44–52px` trên mobile, tăng dần lên `72–120px` trên desktop khi layout cho phép.
- H2 section: khoảng `36–44px` trên mobile và `48–72px` trên desktop.
- H3/card title: khoảng `20–30px` trên mobile và `24–32px` trên desktop.
- Body chính: ưu tiên `16px`; supporting text không nhỏ hơn `14px` nếu không phải eyebrow/label ngắn.
- Dùng `clamp()` hoặc breakpoint responsive để chuyển cỡ chữ mượt. Luôn kiểm tra cỡ nhỏ nhất thực tế.
- Tiếng Việt có nhiều dấu trên/dưới. Heading nhiều dòng phải có `line-height` tối thiểu `1.15`; ưu tiên `1.18–1.25` khi chữ đậm hoặc rất lớn.
- Chỉ dùng line-height khoảng `1.1` cho display text khi đã xác minh dấu tiếng Việt và các dòng không chạm nhau.
- Không dùng `leading-none`, line-height `< 1.1`, margin âm hoặc transform để ép các dòng heading sát nhau.
- Body text dùng line-height khoảng `1.6–1.75`.
- Tracking heading chỉ âm nhẹ, khoảng `-0.02em` đến `-0.035em`. Không siết tracking đến mức dấu hoặc chữ nhìn dính nhau.
- Mỗi trang chỉ có một `h1`; giữ hierarchy `h1` → `h2` → `h3` đúng ngữ nghĩa.
- Trước khi hoàn tất, kiểm tra các từ có dấu cao/thấp như `Vì`, `âm nhạc`, `bài bản`, `ĐẦU LÀNG` ở cả desktop và mobile.

## Khoảng cách và layout

- Container chuẩn là `.container-site`: gutter mobile `1rem` mỗi bên, từ `768px` là `2rem` mỗi bên, max width `82rem`.
- Section chuẩn dùng `.section-pad`, hiện tương đương khoảng `64px` mobile, `80–96px` tablet/laptop và tối đa `112px` desktop.
- Section compact có thể dùng nhịp `48 / 56 / 64px`; section nội dung tiêu chuẩn dùng `64 / 80 / 96–112px`.
- Không cộng đồng thời padding section lớn với margin top/bottom lớn trên child đầu/cuối, gây khoảng trắng gấp đôi.
- Khoảng từ eyebrow đến heading thường `20–32px`; từ heading đến đoạn mô tả thường `20–32px` mobile và `24–40px` desktop.
- Không giảm khoảng cách bằng margin âm để chữa heading. Sửa `font-size`, `line-height` và wrapping đúng nguyên nhân.
- Giữ grid, flex direction, thứ tự nội dung, radius và aspect ratio hiện có nếu tác vụ không yêu cầu thay layout.
- Header fixed phải có khoảng bù ở page hero; ưu tiên khoảng top hiện tại `128px` mobile và `160px` desktop.
- Không để section chạm nhau, nhưng cũng không tạo vùng trống quá lớn. Nhịp dọc phải có chủ ý và lặp lại nhất quán giữa các trang.

## Button và CTA

- Dùng `Button` hoặc `ButtonLink` từ `src/components/common/Button.tsx` khi có thể.
- Button chuẩn giữ dạng pill hiện tại: `rounded-full`, `min-h-12`, `px-6`, `text-sm`, `font-semibold`.
- Primary: nền `#F4B942`, chữ `#10182F`.
- Primary hover: nền `#D99718`, nâng `translateY(-2px)`, shadow `0 8px 24px rgba(217, 151, 24, 0.22)`.
- Active/click: `scale(0.97)`.
- Transition: `0.25s ease` cho màu, background, border, shadow và transform.
- Icon mũi tên có sẵn trong button có thể dịch phải `4px` khi hover.
- Shine chỉ được rất nhẹ và chỉ cho CTA chính; không thêm shine/glow vào mọi button.
- Không bounce, rung, pulse liên tục hoặc dùng animation mạnh kiểu game.
- Hover transform chỉ áp dụng trong môi trường hỗ trợ hover. Phải tôn trọng `prefers-reduced-motion`.
- Touch target tương tác tối thiểu `44×44px`; focus-visible phải rõ bằng `.focus-ring`.
- Không thay đổi radius, chiều cao hoặc padding của button cục bộ nếu không có lý do layout cụ thể.

## Responsive bắt buộc

- Mọi UI mới hoặc UI được chạm tới phải kiểm tra tối thiểu ở width `320`, `375`, `768`, `1024` và `1440px`.
- Ở `320–375px`: không có horizontal overflow, chữ không bị cắt, heading không đè dấu, CTA không vượt viewport, touch target vẫn đủ lớn.
- Không ẩn nội dung quan trọng trên mobile để né lỗi layout.
- Dùng wrapping có chủ đích; tránh `<br>` cố định chỉ đẹp ở desktop. Nếu cần xuống dòng nghệ thuật, phải có biến thể responsive.
- Kích thước ảnh và media phải giữ aspect ratio; không đổi crop hoặc asset nếu người dùng không yêu cầu.
- Khi sửa typography, phải kiểm tra cả mobile lẫn desktop trong cùng tác vụ.

## Accessibility và nội dung

- Duy trì contrast rõ ràng. Nền vàng dùng chữ navy; text muted chỉ dùng cho nội dung phụ và phải còn dễ đọc.
- Link/button phải có focus-visible, semantic element và accessible name.
- Không truyền đạt trạng thái chỉ bằng màu nếu có trạng thái nghiệp vụ mới.
- Giữ tài liệu và nội dung tiếng Việt ở UTF-8. Không tạo mojibake như `Dáº¤U Láº¶NG`.
- Nếu phát hiện mojibake có sẵn ngoài phạm vi tác vụ, báo lại; chỉ sửa khi thuộc phạm vi hoặc khi người dùng đồng ý.
- Không tự viết lại copy, đổi số điện thoại, địa chỉ, khóa học, giáo viên, sự kiện hoặc số liệu.

## Quy trình làm việc bắt buộc cho AI

1. Đọc file này và kiểm tra file hướng dẫn gần nhất trong thư mục đang sửa.
2. Đọc `src/index.css`, component dùng chung và component hiện tại trước khi viết code.
3. Tìm cách tái sử dụng token/component trước khi thêm style mới.
4. Xác định thay đổi nhỏ nhất đáp ứng yêu cầu; tránh sửa lan sang section không liên quan.
5. Với thay đổi màu, kiểm tra từng context và contrast; không dùng search-and-replace toàn bộ mã màu.
6. Với thay đổi chữ, kiểm tra font-size, line-height, wrapping và khoảng cách ở cả desktop/mobile.
7. Với thay đổi CTA, giữ đúng variant, interaction và reduced-motion ở trên.
8. Chạy build sau khi sửa code: `npm.cmd run build` trên PowerShell Windows.
9. Không tuyên bố lint đã pass nếu chưa chạy thành công. Hiện `npm.cmd run lint` cần ESLint 9 config (`eslint.config.js`) mà repository chưa có; không tự ý thêm config nếu tác vụ không yêu cầu.
10. Tóm tắt chính xác file đã sửa, điều đã kiểm tra và mọi giới hạn còn lại.

## Checklist trước khi bàn giao UI

- [ ] Đúng Golden Yellow + Cream + Navy, không có violet/purple mới.
- [ ] Không hard-code màu thương hiệu trong component khi đã có token.
- [ ] Vàng được dùng tiết chế; nền vàng dùng chữ navy.
- [ ] Hotline, Messenger và Zalo không trùng màu nhận diện.
- [ ] Font vẫn là Be Vietnam Pro + Fraunces đúng vai trò.
- [ ] Heading tiếng Việt không dính dòng, không đè dấu ở mobile và desktop.
- [ ] Cỡ chữ responsive, không có fixed giant type trên mobile.
- [ ] Khoảng cách section theo nhịp chuẩn, không bị double spacing.
- [ ] Button/CTA giữ pill, hover nhẹ, active `0.97`, focus rõ và reduced-motion.
- [ ] Không thay layout, radius, component, ảnh, icon hoặc nội dung ngoài yêu cầu.
- [ ] Không có horizontal overflow từ `320px` trở lên.
- [ ] Khối thống kê `1.200+`, `24+`, `10+`, `9+ năm` kh`ông đổi và không có icon mới.
- [ ] `npm.cmd run build` thành công sau thay đổi code.
