<template>
  <div class="landing-page">
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div class="container">
      <a class="navbar-brand d-flex align-items-center fw-bold fs-4" href="#">
        <img 
          :src="logoBrand" 
          alt="Logo" 
          class="me-2 rounded shadow-sm" 
          style="height: 45px;"
        >
        <span class="text-dark">Áo thun Xuxu</span>
      </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item"><a class="nav-link mx-2" href="#">Trang chủ</a></li>
            <li class="nav-item"><a class="nav-link mx-2" href="#about">Về chúng tôi</a></li>
            <li class="nav-item"><a class="nav-link mx-2" href="#projects">Dự án</a></li>
            <li class="nav-item"><a class="nav-link mx-2" href="#gallery">Gallery</a></li>
            <li class="nav-item ms-lg-3">
              <a class="btn btn-primary px-4 rounded-pill" href="#contact">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <header class="hero-section text-center text-lg-start">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 text-white">
            <span class="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">Dự án tiêu biểu 2025</span>
            <h1 class="display-3 fw-bold mb-3">
              Đồng Hồ Kỷ Niệm <br />
              <span class="text-brand-blue">Đại Học Hồng Bàng</span>
            </h1>
            <p class="lead mb-4">
              Tự hào đồng hành cùng Trường Đại học Hồng Bàng trong việc sản xuất gần 7.000 chiếc đồng hồ cao cấp, ghi dấu kỷ niệm quý giá cho sinh viên.
            </p>
            <div class="d-flex flex-wrap gap-3">
          <a href="#project-story" class="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">
            Khám phá dự án
          </a>           
          <a href="#contact" class="btn btn-outline-light btn-lg px-5 rounded-pill">Liên hệ ngay</a>
            </div>
          </div>
        </div>

        <div class="row mt-5 pt-4">
          <div class="col-md-3 col-6 mb-3" v-for="stat in quickStats" :key="stat.label">
            <div class="stat-card text-white">
              <div class="h3 fw-bold mb-0">{{ stat.value }}</div>
              <div class="small opacity-75">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" class="py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
      <div class="row g-3">
        <div class="col-12">
          <img 
            :src="hb3" 
            class="img-fluid rounded-4 shadow w-100 object-fit-cover" 
            style="height: 400px;" 
            alt="Năng lực sản xuất"
          >
        </div>
        
        <div class="col-6">
          <img 
            :src="hb2" 
            class="img-fluid rounded-4 shadow w-100 object-fit-cover" 
            style="height: 250px;" 
            alt="Chi tiết sản xuất"
          >
        </div>
        
        <div class="col-6">
          <img 
            :src="hb4" 
            class="img-fluid rounded-4 shadow w-100 object-fit-cover" 
            style="height: 250px;" 
            alt="Sản phẩm hoàn thiện"
          >
        </div>
      </div>
          </div>
        <div class="col-lg-6 ps-lg-5">
          <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">VỀ CHÚNG TÔI</span>
          
          <h2 class="fw-bold mb-4 display-6">Áo thun Xuxu với năng lực sản xuất đa dạng</h2>
          
          <p class="text-muted mb-4 lh-lg">
            Với hơn 15 năm kinh nghiệm trong ngành may mặc và trang phục, chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp và tổ chức giáo dục. Không chỉ chuyên về may mặc, chúng tôi còn mở rộng năng lực sản xuất các sản phẩm quà tặng cao cấp, mang đến giải pháp toàn diện cho khách hàng.
          </p>

          <div class="d-flex align-items-start mb-4" v-for="cap in capabilities" :key="cap.title">
            <div class="bg-primary bg-opacity-10 p-3 rounded-3 me-3 text-primary d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
              <i :class="cap.icon" class="fs-5"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1 fs-6">{{ cap.title }}</h5>
              <p class="small text-muted mb-0">{{ cap.desc }}</p>
            </div>
          </div>

          <div class="text-success fw-medium d-flex align-items-center mt-4">
            <i class="bi bi-check-circle-fill me-2"></i> 
            <span>Đã phục vụ hơn 500+ khách hàng doanh nghiệp</span>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-5 text-center">
        <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">DỰ ÁN TIÊU BIỂU</span>
        <h2 class="fw-bold mb-4 display-5">Dự án Đồng Hồ Kỷ Niệm Đại Học Hồng Bàng</h2>
        <p class="text-muted mx-auto mb-5 lh-lg" style="max-width: 800px;">
          Một chiến dịch đầy ý nghĩa khi chúng tôi được đồng hành cùng Trường Đại học Hồng Bàng trong việc tạo ra món quà kỷ niệm đặc biệt cho gần 7,000 sinh viên.
        </p>

        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="detail in projectDetails" :key="detail.label">
            <div class="p-4 rounded-4 bg-primary bg-opacity-10 h-100 text-start border border-primary border-opacity-10">
              <i :class="detail.icon" class="text-primary fs-4 mb-3 d-block"></i>
              <div class="small text-muted mb-1">{{ detail.label }}</div>
              <div class="fw-bold text-dark">{{ detail.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="project-story" class="py-5 bg-white">
      <div class="container py-5">
        <div class="row align-items-center">
          
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="position-relative">
              <img 
                :src="storyImg" 
                class="img-fluid rounded-4 shadow-lg w-100 object-fit-cover" 
                style="min-height: 500px;"
                alt="Câu chuyện dự án Hồng Bàng"
              >
              <div class="position-absolute bottom-0 start-0 bg-primary text-white p-3 m-3 rounded-3 shadow-sm d-none d-md-block">
                <p class="mb-0 fw-bold">Dự án quy mô lớn</p>
                <small>Hợp tác cùng HIU</small>
              </div>
            </div>
          </div>

          <div class="col-lg-6 ps-lg-5">
            <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3">CASE STUDY</span>
            <h2 class="fw-bold mb-4 display-6">Câu chuyện dự án</h2>
            
            <div class="story-content text-muted lh-lg">
              <p class="mb-4">
                Khi Trường Đại học Hồng Bàng tìm đến chúng tôi với mong muốn tạo ra một món quà ý nghĩa cho sinh viên, 
                chúng tôi nhận thấy đây không chỉ là một dự án sản xuất thông thường mà còn là cơ hội để tạo nên 
                những kỷ niệm đáng nhớ.
              </p>
              
              <p class="mb-4">
                Đồng hồ được thiết kế với logo và màu sắc đặc trưng của trường, mỗi chiếc đồng hồ mang trong mình 
                câu chuyện về hành trình học vấn của từng sinh viên. Đây không chỉ là phụ kiện thời gian mà còn 
                là biểu tượng của sự trưởng thành và kỷ niệm tuổi học trò.
              </p>
              
              <div class="p-4 bg-light rounded-3 border-start border-primary border-4">
                <p class="mb-0 fw-semibold text-dark italic">
                  "Với quy mô gần 7,000 chiếc, dự án đòi hỏi năng lực sản xuất mạnh mẽ và sự tỉ mỉ trong từng chi tiết. 
                  Chúng tôi tự hào đã hoàn thành xuất sắc, góp phần vào thành công của chiến dịch ý nghĩa này."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-5 text-center">
        <span class="section-tag">CÁC DỰ ÁN KHÁC</span>
        <h2 class="fw-bold mb-5">Các lĩnh vực hoạt động</h2>
        <div class="row g-4 text-start">
          <div class="col-md-4" v-for="service in services" :key="service.title">
            <div class="service-card bg-white h-100 p-4 rounded-4 shadow-sm border-0">
              <div :class="service.color" class="icon-box rounded-3 mb-4 d-inline-flex align-items-center justify-content-center">
                <i :class="service.icon" class="fs-3 text-white"></i>
              </div>
              <h4 class="fw-bold mb-3">{{ service.title }}</h4>
              <p class="text-muted small mb-4">{{ service.desc }}</p>
            <a 
              :href="service.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-brand-blue text-decoration-none fw-bold"
            >
              Tìm hiểu thêm <i class="bi bi-arrow-right ms-1"></i>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-5">
            <span class="section-tag">LIÊN HỆ</span>
            <h2 class="fw-bold mb-4">Hãy để chúng tôi giúp bạn</h2>
            <div class="contact-info mt-5">
              <div class="d-flex mb-4" v-for="info in contactDetails" :key="info.val">
                <div class="bg-light p-3 rounded-circle me-3 text-primary">
                  <i :class="info.icon"></i>
                </div>
                <div>
                  <div class="small text-muted">{{ info.label }}</div>
                  <div class="fw-bold">{{ info.val }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card border-0 shadow p-4 p-md-5 rounded-4">
              <h4 class="fw-bold mb-4">Gửi thông tin liên hệ</h4>
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label class="form-label small fw-bold">Họ và tên</label>
                  <input v-model="form.name" type="text" class="form-control" placeholder="Nguyễn Văn A" />
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold">Email</label>
                    <input v-model="form.email" type="email" class="form-control" placeholder="email@example.com" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold">Số điện thoại</label>
                    <input v-model="form.phone" type="text" class="form-control" placeholder="0123 456 789" />
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label small fw-bold">Nội dung</label>
                  <textarea v-model="form.message" class="form-control" rows="4"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg w-100 rounded-pill">Gửi thông tin</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

<footer class="text-white py-5" style="background-color: #0f172a;">
  <div class="container">
    <div class="row g-4">
      
      <div class="col-lg-5 col-md-12">
        <div class="d-flex align-items-center mb-4">
          <div class="bg-primary rounded-3 d-flex align-items-center justify-content-center me-2" style="width: 45px; height: 45px;">
            <span class="fw-bold text-white fs-5">HB</span>
          </div>
          <h5 class="mb-0 fw-bold">Doanh Nghiệp May Mặc</h5>
        </div>
        <p class="text-secondary lh-lg mb-4" style="max-width: 400px;">
          Với hơn 15 năm kinh nghiệm trong ngành may mặc và trang phục, chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp và tổ chức giáo dục.
        </p>
        <div class="d-flex gap-2">
          <a href="#" class="social-icon-box"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social-icon-box"><i class="bi bi-instagram"></i></a>
          <a href="#" class="social-icon-box"><i class="bi bi-envelope"></i></a>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <h6 class="fw-bold mb-4 text-white">Liên kết</h6>
        <ul class="list-unstyled">
          <li class="mb-3"><a href="#" class="text-secondary text-decoration-none hover-white">Trang chủ</a></li>
          <li class="mb-3"><a href="#about" class="text-secondary text-decoration-none hover-white">Về chúng tôi</a></li>
          <li class="mb-3"><a href="#project-story" class="text-secondary text-decoration-none hover-white">Dự án</a></li>
          <li class="mb-3"><a href="#" class="text-secondary text-decoration-none hover-white">Gallery</a></li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6">
        <h6 class="fw-bold mb-4 text-white">Liên hệ</h6>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center mb-3 text-secondary">
            <i class="bi bi-telephone text-primary me-3 fs-5"></i>
            <span>076 771 0030</span>
          </li>
          <li class="d-flex align-items-center mb-3 text-secondary">
            <i class="bi bi-envelope text-primary me-3 fs-5"></i>
            <span>aolopxuxu@gmail.com</span>
          </li>
          <li class="d-flex align-items-start text-secondary">
            <i class="bi bi-geo-alt text-primary me-3 fs-5"></i>
            <span>Biên Hòa, Đồng Nai</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import hb2 from './assets/images/hongbang2.jpg'
import hb3 from './assets/images/hongbang3.jpg'
import hb4 from './assets/images/hongbang4.jpg'

import storyImg from './assets/images/hongbang5.jpg' 

import logoBrand from './assets/images/logo.jpg'

// Dữ liệu mẫu (Reactive data)
const quickStats = ref([
  { label: 'Sản phẩm đã sản xuất', value: '7,000' },
  { label: 'Năm kinh nghiệm', value: '15+' },
  { label: 'Cam kết chất lượng', value: '100%' },
  { label: 'Đối tác tin cậy', value: '500+' }
]);

const projectDetails = ref([
  { icon: 'bi bi-mortarboard', label: 'Đối tác', value: 'Trường Đại học Hồng Bàng' },
  { icon: 'bi bi-calendar-event', label: 'Thời gian', value: 'Tháng 9 - 11/2025' },
  { icon: 'bi bi-box-seam', label: 'Số lượng', value: 'Gần 7,000 chiếc' },
  { icon: 'bi bi-star', label: 'Mục tiêu', value: 'Quà tặng sinh viên' }
]);

const capabilities = ref([
  { 
    icon: 'bi bi-buildings', // Icon năng lực sản xuất
    title: 'Năng lực sản xuất mạnh mẽ', 
    desc: 'Trang thiết bị hiện đại, quy trình sản xuất chuyên nghiệp' 
  },
  { 
    icon: 'bi bi-award', // Icon chất lượng
    title: 'Chất lượng đảm bảo', 
    desc: 'Kiểm soát chất lượng nghiêm ngặt từng khâu sản xuất' 
  },
  { 
    icon: 'bi bi-graph-up-arrow', // Icon đa dạng sản phẩm
    title: 'Đa dạng sản phẩm', 
    desc: 'Từ may mặc, trang phục đến các sản phẩm quà tặng cao cấp' 
  }
]);

const services = ref([
  { 
    title: 'Đồng phục doanh nghiệp', 
    icon: 'bi bi-person-badge', 
    color: 'bg-purple', 
    desc: 'Thiết kế và sản xuất cho hơn 200 doanh nghiệp.',
    link: 'https://aothunxuxu.com/mau-thiet-ke-dong-phuc/8/mau-thiet-ke-ao-nhom.html' // Link riêng
  },
  { 
    title: 'Trang phục học sinh', 
    icon: 'bi bi-mortarboard', 
    color: 'bg-success', 
    desc: 'Cung cấp trang phục thiết kế hiện đại, bền đẹp.',
    link: 'https://aothunxuxu.com/mau-thiet-ke-dong-phuc/7/mau-thiet-ke-ao-lop.html' // Link riêng
  },
  { 
    title: 'Quà tặng doanh nghiệp', 
    icon: 'bi bi-gift', 
    color: 'bg-orange', 
    desc: 'Sản phẩm cao cấp cho sự kiện và marketing.',
    link: 'https://aothunxuxu.com/dich-vu-khac/6/in-ly.html' // Link riêng
  }
]);

const contactDetails = ref([
  { icon: 'bi bi-telephone', label: 'Điện thoại', val: '076 771 0030' },
  { icon: 'bi bi-envelope', label: 'Email', val: 'aolopxuxu@gmail.com' },
  { icon: 'bi bi-geo-alt', label: 'Địa chỉ', val: 'Biên Hòa, Đồng Nai' }
]);


const form = ref({ name: '', email: '', phone: '', message: '' });

const handleSubmit = () => {
  alert('Thông tin của ' + form.value.name + ' đã được gửi thành công!');
};
</script>

<style scoped>
/* Màu sắc thương hiệu */
.bg-brand-blue { background-color: #2D5BFF; }
.text-brand-blue { color: #2D5BFF; }

html {
  scroll-behavior: smooth;
}

/* Mẹo nhỏ: Tránh bị thanh Menu che mất tiêu đề khi trượt xuống */
#cau-chuyen-du-an {
  scroll-margin-top: 100px; 
}

/* Hero */
.hero-section {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('@/assets/images/hongbang1.jpg');
  background-size: cover;
  background-position: center;
  padding: 120px 0;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
}

.section-tag {
  background: #E8EFFF;
  color: #2D5BFF;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
}

.icon-box {
  width: 60px;
  height: 60px;
}

/* Service Colors */
.bg-purple { background-color: #9b59b6; }
.bg-orange { background-color: #f39c12; }

.img-placeholder {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  transition: all 0.3s ease;
}

/* Tùy chỉnh input Bootstrap */
.form-control {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.form-control:focus {
  border-color: #2D5BFF;
  box-shadow: 0 0 0 0.25rem rgba(45, 91, 255, 0.1);
}
</style>