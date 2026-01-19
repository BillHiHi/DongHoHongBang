<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm p-2">
    <div class="container position-relative"> 
      <router-link class="navbar-brand d-flex align-items-center fw-bold fs-4" to="/">
        <img :src="logoBrand" alt="Logo" class="me-2 rounded shadow-sm" style="height: 45px;">
        <span class="text-dark">Áo thun Xuxu</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><router-link class="nav-link mx-2" to="/">Trang chủ</router-link></li>

          <li class="nav-item dropdown has-megamenu">
            <a class="nav-link dropdown-toggle mx-2" href="#" data-bs-toggle="dropdown">Dịch vụ & Sản phẩm</a>
            <div class="dropdown-menu megamenu shadow-lg border-0 p-4" role="menu">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"> 
                
                <div class="col">
                  <h6 class="category-title"><i class="bi bi-person-workspace me-2"></i>Thời Trang In Ấn</h6>
                  <router-link class="dropdown-item" to="/ao-thun">Áo thun đồng phục - lớp</router-link>
                  <router-link class="dropdown-item" to="/tui-canvas">Tạp dề quán - Nón team</router-link>
                  <router-link class="dropdown-item" to="/canvas">Túi canvas/vải in logo</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-gift me-2"></i>Quà tặng in logo</h6>
                  <router-link class="dropdown-item" to="/ly-binh">Bình giữ nhiệt – ly sứ</router-link>
                  <router-link class="dropdown-item" to="/dong-ho">Đồng hồ treo tường</router-link>
                  <router-link class="dropdown-item" to="/ca-nhan">Quà tặng cá nhân hóa</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-palette me-2"></i>Tranh & Decor</h6>
                  <router-link class="dropdown-item" to="/tranh">Tranh canvas - quote</router-link>
                  <router-link class="dropdown-item" to="/chibi">Ảnh cá nhân – Chibi</router-link>
                  <router-link class="dropdown-item" to="/standee">Standee – bảng treo</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-megaphone me-2"></i>In ấn quảng cáo</h6>
                  <router-link class="dropdown-item" to="/catalogue">Tờ rơi – Catalogue</router-link>
                  <router-link class="dropdown-item" to="/namecards">Name card – Sticker</router-link>
                  <router-link class="dropdown-item" to="/quang-cao">Ấn phẩm quảng cáo nhanh</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-printer me-2"></i>In ấn giấy</h6>
                  <router-link class="dropdown-item" to="/brochures">Brochure</router-link>
                  <router-link class="dropdown-item" to="/envelope">Bao thư</router-link>
                  <router-link class="dropdown-item" to="/voucher">Voucher</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-printer me-2"></i>In theo yêu cầu</h6>
                  <router-link class="dropdown-item" to="/in-ao">In lẻ từ 1–5 áo</router-link>
                  <router-link class="dropdown-item" to="/in-qua">In quà tặng 1 cái</router-link>
                  <router-link class="dropdown-item" to="/test">Làm mẫu test sản xuất</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-gear me-2"></i>Xưởng & Đào tạo</h6>
                  <router-link class="dropdown-item" to="/cong-nghe">Công nghệ In lụa/Nhiệt</router-link>
                  <router-link class="dropdown-item" to="/hau-truong">Hậu trường xưởng XUXU</router-link>
                  <router-link class="dropdown-item" to="/hoc-nghe">Đào tạo in ấn</router-link>
                </div>

                <div class="col">
                  <h6 class="category-title"><i class="bi bi-people me-2"></i>Cộng đồng</h6>
                  <router-link class="dropdown-item" to="/tet">Sản phẩm mùa vụ – Tết</router-link>
                  <router-link class="dropdown-item" to="/du-an">Dự án sinh viên</router-link>
                  <router-link class="dropdown-item" to="/tuyen-dung">Tuyển CTV – Thực tập</router-link>
                </div>

              </div>
            </div>
          </li>

          <li class="nav-item"><a class="nav-link mx-2" href="#about">Về chúng tôi</a></li>
          <li class="nav-item ms-lg-3">
            <a class="btn btn-primary px-4 rounded-pill text-white shadow-sm fw-bold" href="#contact">Liên hệ ngay</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Hiệu ứng Hover Desktop */
@media (min-width: 992px) {
  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

/* Mega Menu chính */
.megamenu {
  width: 1100px; /* Tăng chiều rộng để chia 4 cột đẹp hơn */
  position: absolute;
  right: -250px; /* Kéo menu lùi sang trái để cân đối giữa màn hình */
  left: auto !important;
  border-radius: 20px;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  border: 1px solid rgba(0,0,0,0.05) !important;
}

/* Fix lỗi lệch hàng: Ép tiêu đề cùng độ cao */
.category-title {
  font-weight: 700;
  color: #0d6efd;
  font-size: 0.85rem;
  text-transform: uppercase;
  border-bottom: 2px solid #f8f9fa;
  padding-bottom: 10px;
  margin-bottom: 12px;
  min-height: 50px; /* Quan trọng: Đảm bảo các dòng dưới thẳng hàng */
  display: flex;
  align-items: center;
}

/* Các link sản phẩm */
.dropdown-item {
  font-size: 0.88rem;
  padding: 6px 0;
  color: #555 !important;
  background: transparent !important;
  white-space: normal; 
  line-height: 1.4;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  color: #0d6efd !important;
  transform: translateX(8px); /* Hiệu ứng đẩy nhẹ sang phải khi hover */
}

/* Tối ưu cho Mobile */
@media (max-width: 991px) {
  .megamenu {
    width: 100% !important;
    position: static !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
  }
  .category-title {
    min-height: auto;
    margin-top: 1.5rem;
    font-size: 1rem;
  }
  .dropdown-item {
    padding: 10px 15px !important;
    border-bottom: 1px solid #f8f9fa;
  }
}
</style>

<script setup>
import logoBrand from '@/assets/images/logo.jpg'
</script>