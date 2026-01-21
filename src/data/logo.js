
import inlua from '@/assets/images/ao/inlua.jpg'
import innhiet from '@/assets/images/ao/innhiet.jpg'
import inpet from '@/assets/images/ao/inpet.jpg'
import theu from '@/assets/images/ao/theu.jpg'
import hongbang1 from '@/assets/images/hongbang1.jpg'
import hongbang2 from '@/assets/images/hongbang2.jpg'
import hongbang3 from '@/assets/images/hongbang3.jpg'
import hongbang4 from '@/assets/images/hongbang4.jpg'
import hongbang5 from '@/assets/images/hongbang5.jpg'
import dongho from '@/assets/images/DongHoTranh.jpg'
import ao from '@/assets/images/ao/ao.jpg'

// Placeholder for missing images to prevent ReferenceError
// Connect these to real images when they are added to assets



export const features = [
    {
        icon: 'bi bi-lightning-charge-fill',
        title: 'In nhanh lấy gấp',
        desc: 'Hỗ trợ đơn hàng cần gấp trong 24h với công nghệ in kỹ thuật số hiện đại.'
    },
    {
        icon: 'bi bi-palette-fill',
        title: 'Màu sắc chuẩn xác',
        desc: 'Cam kết màu in sắc nét, đúng mã màu thương hiệu, không phai màu theo thời gian.'
    },
    {
        icon: 'bi bi-shield-check',
        title: 'Bảo hành in ấn',
        desc: 'Chính sách bảo hành hình in lên đến 12 tháng, bong tróc hoàn tiền 100%.'
    }
];

export const technologies = [
    {
        name: 'In Lụa Cao Cấp',
        image: inlua,
        icon: 'bi bi-layers-fill',
        features: ['Bền màu tuyệt đối', 'Giá tốt số lượng lớn', 'Hiệu ứng nổi, nhũ...']
    },
    {
        name: 'In Decal Nhiệt',
        image: innhiet,
        icon: 'bi bi-printer-fill',
        features: ['In được mọi màu sắc', 'Không giới hạn hình in', 'Lấy ngay trong ngày']
    },
    {
        name: 'In PET Chuyển Nhiệt',
        image: inpet,
        icon: 'bi bi-file-earmark-image-fill',
        features: ['Hình ảnh sắc nét', 'Chi tiết nhỏ cực tốt', 'Cảm giác mỏng nhẹ']
    },
    {
        name: 'Thêu Vi Tính',
        image: theu,
        icon: 'bi bi-scissors',
        features: ['Sang trọng, đẳng cấp', 'Độ bền vĩnh viễn', 'Đồng bộ thương hiệu']
    }
];

export const process = [
    { icon: 'bi bi-chat-right-text', title: 'Tư Vấn & Báo Giá', desc: 'Tiếp nhận yêu cầu và tư vấn giải pháp' },
    { icon: 'bi bi-pencil-square', title: 'Thiết Kế Demo', desc: 'Lên mẫu demo miễn phí cho khách duyệt' },
    { icon: 'bi bi-printer', title: 'Tiến Hành In Ấn', desc: 'Sản xuất đúng quy trình kỹ thuật' },
    { icon: 'bi bi-box-seam', title: 'Giao Hàng', desc: 'Kiểm tra và đóng gói giao tận nơi' }
];

export const shirtColors = [
    { name: 'Trắng', hex: '#ffffff', border: true },
    { name: 'Đen', hex: '#000000' },
    { name: 'Xám', hex: '#808080' },
    { name: 'Xanh Navy', hex: '#000080' },
    { name: 'Đỏ', hex: '#ff0000' },
    { name: 'Vàng', hex: '#ffff00' },
    { name: 'Cam', hex: '#FFA500' },
    { name: 'Xanh Dương', hex: '#007bff' },
    { name: 'Tím', hex: '#6f42c1' },
    { name: 'Hồng', hex: '#e83e8c' },
];

export const contactDetails = [
    { icon: 'bi bi-telephone-fill', label: 'Hotline', val: '076 771 0030' },
    { icon: 'bi bi-envelope-fill', label: 'Email', val: 'aothunxuxu@gmail.com' },
    { icon: 'bi bi-geo-alt-fill', label: 'Địa chỉ', val: '38/16 Đ. Đặng Đức Thuật, Tam Hiệp, Biên Hòa, Đồng Nai' },
];

export const galleryImages = [
    { src: ao, alt: 'Mẫu in lụa', title: '' },
    { src: ao, alt: 'Mẫu in nhiệt', title: '' },
    { src: ao, alt: 'Mẫu in PET', title: '' },
    { src: ao, alt: 'Mẫu thêu', title: '' },
    { src: ao, alt: 'Đồng phục Hồng Bàng', title: '' },
    { src: ao, alt: 'Sự kiện sinh viên', title: '' },
    { src: ao, alt: 'Áo kỷ niệm', title: '' },
    { src: ao, alt: 'Đồng phục CLB', title: '' },
];
