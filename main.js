document.addEventListener("DOMContentLoaded", () => {
  
  // Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // Translation Database
  const translationPairs = [
    ["Dịch Vụ", "Services"],
    ["Dự Án", "Projects"],
    ["Báo Giá", "Pricing"],
    ["Bài Viết", "Insights"],
    ["Về Chúng Tôi", "About Us"],
    ["Liên Hệ", "Contact"],
    ["Chuyên gia thiết kế và thi công Nhà phố, Biệt thự, Spa, Sauna & Wellness.", "Experts in design & build for Townhouses, Villas, Spas, Saunas & Wellness."],
    ["Xem Dự Án", "View Projects"],
    ["VỀ ARCT Studio", "ABOUT ARCT Studio"],
    ["Thành lập với khát vọng định chuẩn lại không gian sống thượng lưu, ARCT Studio là một tập thể các kiến trúc sư và nhà thiết kế nội thất mang tư duy tối giản (minimalism) và tinh tế.", "Founded with the ambition to redefine luxury living, ARCT Studio is a collective of architects and interior designers embodying minimalism and refinement."],
    ["10+ Năm Kinh Nghiệm", "10+ Years Experience"],
    ["150+ Dự Án Hoàn Thành", "150+ Completed Projects"],
    ["DỊCH VỤ CỦA CHÚNG TÔI", "OUR SERVICES"],
    ["GIẢI PHÁP THIẾT KẾ & THI CÔNG TOÀN DIỆN", "COMPREHENSIVE DESIGN & BUILD SOLUTIONS"],
    ["Thiết Kế & Thi Công Nhà Phố", "Townhouse Design & Build"],
    ["Tối ưu hóa không gian phát triển theo chiều dọc nhưng vẫn đảm bảo thông gió tự nhiên, tạo ra một ốc đảo bình yên giữa lòng đô thị nhộn nhịp.", "Optimizing vertical space while ensuring natural ventilation, creating a peaceful oasis amidst the busy city."],
    ["Biệt Thự & Căn Hộ Hạng Sang", "Luxury Villa & Apartment"],
    ["Ứng dụng vật liệu cao cấp và tỷ lệ kiến trúc chuẩn mực để làm nổi bật vị thế của gia chủ. Mỗi không gian là một tác phẩm nghệ thuật độc bản.", "Applying high-end materials and standard architectural proportions to highlight the owner's status. Each space is a unique masterpiece."],
    ["Sauna, Fitness & Wellness", "Sauna, Fitness & Wellness"],
    ["Thiết kế chuyên biệt không gian chăm sóc sức khỏe, ứng dụng tiêu chuẩn ánh sáng, công nghệ nhiệt học và các nguyên lý trị liệu thiên nhiên.", "Designing specialized healthcare spaces, applying standard lighting, thermal technology, and natural therapy principles."],
    ["Thiết Kế Spa & Boutique Hotel", "Spa & Boutique Hotel"],
    ["Xây dựng trải nghiệm khách hàng xuất sắc thông qua không gian. Quy hoạch luồng giao thông tinh tế, sử dụng vật liệu mộc bản để mang lại cảm giác thư thái tuyệt đối cho mọi giác quan.", "Building excellent customer experiences through space. Planning subtle traffic flows, using rustic materials for absolute relaxation."],
    ["DỰ ÁN NỔI BẬT", "FEATURED PROJECTS"],
    ["BỘ SƯU TẬP CÁC TÁC PHẨM KIẾN TRÚC ĐỘC BẢN", "A COLLECTION OF UNIQUE ARCHITECTURAL MASTERPIECES"],
    ["Nhà Phố Sài Gòn", "Saigon Townhouse"],
    ["TP. Hồ Chí Minh", "Ho Chi Minh City"],
    ["Dự Án Sauna Resort", "Sauna Resort Project"],
    ["Đà Lạt", "Da Lat"],
    ["Wellness Hub", "Wellness Hub"],
    ["Nha Trang", "Nha Trang"],
    ["Biệt Thự Vũng Tàu", "Vung Tau Villa"],
    ["Vũng Tàu", "Vung Tau"],
    ["Phòng Gym & Fitness Cao Cấp", "Premium Gym & Fitness"],
    ["Quận 2, TP. HCM", "District 2, HCMC"],
    ["Tòa Nhà Văn Phòng Xanh", "Green Office Building"],
    ["Hà Nội", "Hanoi"],
    ["BẢNG GIÁ DỊCH VỤ", "SERVICE PRICING"],
    ["BÁO GIÁ THIẾT KẾ CHI TIẾT", "DETAILED DESIGN QUOTATION"],
    ["Minh bạch trong từng hạng mục. Chúng tôi cung cấp các gói giải pháp linh hoạt, phù hợp với từng quy mô dự án và yêu cầu khắt khe nhất của gia chủ.", "Transparent in every detail. We provide flexible solutions tailored to every project scale and the strictest requirements."],
    ["Nhà Phố & Căn Hộ", "Townhouse & Apartment"],
    ["Biệt Thự Hạng Sang", "Luxury Villa"],
    ["Được Yêu Thích", "Most Popular"],
    [".000 VNĐ/m²", ".000 VND/m²"],
    ["Phối cảnh 3D ngoại thất & nội thất", "3D Exterior & Interior Perspective"],
    ["Hồ sơ kỹ thuật thi công chi tiết", "Detailed Technical Construction Profile"],
    ["Dự toán chi phí vật tư cơ bản", "Basic Material Cost Estimate"],
    ["Giám sát tác giả 3 lần", "Author Supervision (3 times)"],
    ["Thiết kế hệ thống Smart Home", "Smart Home System Design"],
    ["Nhận Tư Vấn", "Get Consultation"],
    ["Phối cảnh 3D siêu thực (Hyper-Realistic)", "Hyper-Realistic 3D Perspective"],
    ["Hồ sơ bản vẽ chi tiết & ME tiêu chuẩn", "Detailed Drawings & Standard M&E"],
    ["Thiết kế cảnh quan (Landscape)", "Landscape Design"],
    ["Dự toán chi tiết vật tư cao cấp", "Premium Material Cost Estimate"],
    ["Giám sát tác giả suốt thi công", "Full-time Author Supervision"],
    ["Concept trải nghiệm không gian 5 sao", "5-Star Space Experience Concept"],
    ["Thiết kế chuyên sâu luồng giao thông", "In-depth Traffic Flow Design"],
    ["Tư vấn công nghệ (Sauna, Infrared, v.v.)", "Technology Consulting (Sauna, Infrared, etc.)"],
    ["Hồ sơ chiếu sáng sinh học cao cấp", "Premium Biological Lighting Profile"],
    ["Báo giá vật liệu & thiết bị độc quyền", "Exclusive Material & Equipment Quote"],
    ["BÀI VIẾT NỔI BẬT", "FEATURED INSIGHTS"],
    ["Khám phá những xu hướng thiết kế kiến trúc và không gian sống wellness mới nhất.", "Discover the latest trends in architectural design and wellness living spaces."],
    ["SẴN SÀNG KIẾN TẠO?", "READY TO CREATE?"],
    ["Gửi Tin Nhắn", "Send Message"],
    ["Chi Tiết Dịch Vụ", "Service Details"],
    ["Khám phá bộ sưu tập 6 hình ảnh chi tiết của dự án, thể hiện rõ nét triết lý thiết kế và mức độ hoàn thiện tinh xảo của ARCT Studio.", "Explore a collection of 6 detailed project images, clearly expressing ARCT Studio's design philosophy and exquisite level of completion."],
    ["ARCT Studio: Kiêu Hãnh Trong", "ARCT Studio: Pride In"],
    ["Từng Đường Nét.", "Every Detail."],
    ["KIẾN TẠO DI SẢN", "CRAFTING TIMELESS"],
    ["VƯỢT THỜI GIAN", "LEGACIES"],
    ["HÃY CÙNG CHÚNG TÔI", "LET'S MAKE YOUR"],
    ["HIỆN THỰC HÓA GIẤC MƠ", "DREAM COME TRUE"],
    ["CÔNG TY TNHH THIẾT KẾ XÂY DỰNG ARCT (ARCT Studio)", "ARCT CONSTRUCTION DESIGN CO., LTD (ARCT Studio)"],
    ["Địa chỉ: Phường Thới An, Thành phố Hồ Chí Minh", "Address: Thoi An Ward, Ho Chi Minh City"],
    ["Gửi Yêu Cầu", "Submit Request"]
  ];

  let currentLang = "vi";
  window.currentGlobalLang = "vi";

  // Translate Node
  function translateNode(node, currentLang, targetLang) {
    if (node.nodeType === 1 && node.hasAttribute("data-en")) {
      return; // Handled separately
    }
    if (node.nodeType === 3) {
      let val = node.nodeValue;
      if (val.trim() === "") return;
      
      // Sort translation pairs by length to prevent partial replacements
      const sortedPairs = [...translationPairs].sort((a, b) => {
        const strA = currentLang === "vi" ? a[0] : a[1];
        const strB = currentLang === "vi" ? b[0] : b[1];
        return strB.length - strA.length;
      });

      sortedPairs.forEach(pair => {
        const viText = pair[0];
        const enText = pair[1];
        if (currentLang === "vi" && targetLang === "en") {
          if (val.includes(viText)) {
            val = val.split(viText).join(enText);
          }
        } else if (currentLang === "en" && targetLang === "vi") {
          if (val.includes(enText)) {
            val = val.split(enText).join(viText);
          }
        }
      });
      node.nodeValue = val;
    } else {
      node.childNodes.forEach(child => translateNode(child, currentLang, targetLang));
    }
  }

  // Switch Language
  function switchLanguage(targetLang) {
    const prevLang = currentLang;
    if (targetLang === prevLang) return;

    translateNode(document.body, prevLang, targetLang);

    // Update element tags with [data-en]
    document.querySelectorAll("[data-en]").forEach(el => {
      if (!el.dataset.vi) {
        el.dataset.vi = el.innerHTML;
      }
      el.innerHTML = targetLang === "en" ? el.dataset.en : el.dataset.vi;
    });

    // Update input placeholders with [data-en-placeholder]
    document.querySelectorAll("[data-en-placeholder]").forEach(el => {
      if (!el.dataset.viPlaceholder) {
        el.dataset.viPlaceholder = el.placeholder;
      }
      el.placeholder = targetLang === "en" ? el.dataset.enPlaceholder : el.dataset.viPlaceholder;
    });

    currentLang = targetLang;
    window.currentGlobalLang = targetLang;
  }

  // Language Button Listeners
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.lang;
      document.querySelectorAll(".lang-btn").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      switchLanguage(targetLang);
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = header.offsetHeight;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });

  // Intersection Observer for animations
  const obsOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  }, obsOptions);

  document.querySelectorAll(".fade-in-up").forEach(el => {
    observer.observe(el);
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Đang Gửi...";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = "Đã Gửi Thành Công!";
        submitBtn.style.backgroundColor = "#2ecc71";
        submitBtn.style.borderColor = "#2ecc71";
        contactForm.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = "";
          submitBtn.style.borderColor = "";
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // Modal Functionality
  const modal = document.getElementById("detail-modal");
  const modalCloseBtn = document.getElementById("detail-modal-close-btn");
  const modalCloseBg = document.getElementById("detail-modal-close-bg");
  const modalDynamicContent = document.getElementById("modal-dynamic-content");

  const openModal = (htmlContent) => {
    modalDynamicContent.innerHTML = htmlContent;
    if (window.currentGlobalLang === "en") {
      translateNode(modalDynamicContent, "vi", "en");
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      modalDynamicContent.innerHTML = "";
    }, 300);
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalCloseBg) modalCloseBg.addEventListener("click", closeModal);

  // Blog Details Content DB
  const getBlogDetailContent = (title) => {
    return ({
      "Xu Hướng Kiến Trúc Tối Giản Xanh": `
        <p>Kiến trúc tối giản xanh (Minimalist Green Architecture) đang trở thành triết lý cốt lõi tại ARCT Studio. Bằng cách loại bỏ những chi tiết rườm rà và tập trung vào tỷ lệ hình khối, chúng tôi nhường chỗ cho thiên nhiên lên tiếng.</p>
        <p>Việc ứng dụng các mảng xanh thông minh không chỉ dừng lại ở việc trồng cây, mà là sự tính toán kỹ lưỡng về hướng gió, vi khí hậu và khả năng thanh lọc không khí tự nhiên. Hệ thống lam che nắng tự động kết hợp cùng vật liệu thân thiện môi trường giúp công trình có khả năng tự "thở", giảm thiểu đến 40% năng lượng tiêu thụ.</p>
        <p>ARCT Studio tin rằng, một không gian sống hoàn hảo là nơi con người và thiên nhiên giao hòa làm một, mang lại sự bình yên tuyệt đối sau những xô bồ của cuộc sống đô thị.</p>
      `,
      "Tiêu Chuẩn Thiết Kế Phòng Gym & Spa Chuẩn 5 Sao": `
        <p>Thiết kế không gian Wellness (Gym & Spa) đòi hỏi những quy chuẩn vô cùng khắt khe về mặt kỹ thuật lẫn nghệ thuật trải nghiệm. Một phòng Spa 5 sao không chỉ là nơi làm đẹp, mà là một "thánh đường" của sự thư giãn.</p>
        <p>Tại ARCT Studio, chúng tôi áp dụng nguyên tắc "Tĩnh - Động" phân minh. Khu vực Spa sử dụng vật liệu gỗ Teak ấm áp, đá tự nhiên nhám mờ cùng hệ thống ánh sáng gián tiếp (indirect lighting) với nhiệt độ màu chuẩn 2700K, kích thích cơ thể sản sinh Melatonin để thư giãn sâu.</p>
        <p>Ngược lại, khu vực Fitness lại bùng nổ năng lượng với hệ gương vô cực, ánh sáng động 4000K sắc nét và hệ thống thông gió khử mùi ion âm tiên tiến nhất. Mọi chi tiết đều được đo lường để tối đa hóa trải nghiệm của giới thượng lưu.</p>
      `,
      "Tích Hợp AI Vào Thiết Kế Kiến Trúc Tương Lai": `
        <p>Trí tuệ nhân tạo (AI) không còn là khái niệm viễn vông mà đã trở thành công cụ đắc lực tại ARCT Studio. Chúng tôi ứng dụng Generative Design để tối ưu hóa kết cấu và hình khối kiến trúc.</p>
        <p>Chỉ với những thông số đầu vào về hướng nắng, sức gió và nhu cầu sinh hoạt, AI giúp tạo ra hàng nghìn phương án mặt bằng khác nhau. Từ đó, các kiến trúc sư của chúng tôi sẽ tinh chỉnh và chọn lọc ra giải pháp không gian hoàn mỹ nhất, vừa đảm bảo tính độc bản vừa đạt hiệu suất năng lượng tối đa.</p>
      `,
      "Vật Liệu Sinh Học: Tương Lai Của Xây Dựng Bền Vững": `
        <p>Ngành xây dựng đang bước vào một cuộc cách mạng vật liệu, và ARCT Studio tự hào là một trong những đơn vị tiên phong ứng dụng vật liệu sinh học tại Việt Nam.</p>
        <p>Sợi nấm (Mycelium), gạch đất nện gia cường, và tre ép công nghệ cao không chỉ có lượng phát thải carbon bằng không mà còn mang lại vẻ đẹp thô mộc, sang trọng đầy bất ngờ. Chúng tôi đang biến những công trình kiến trúc thành những thực thể sống thực sự, hòa quyện vào môi trường xung quanh.</p>
      `,
      "Nghệ Thuật Ánh Sáng Tự Nhiên Trong Nhà Phố Kín": `
        <p>Nhà ống, nhà phố lô góc luôn đối mặt với bài toán thiếu sáng và ngột ngạt. ARCT Studio giải bài toán này bằng "Nghệ thuật điêu khắc ánh sáng".</p>
        <p>Các khe sáng hẹp (slit skylights), giếng trời kết hợp hồ nước phản quang, và gạch kính (glass block) được tính toán theo biểu đồ mặt trời 365 ngày. Kết quả là những vạt nắng nhảy múa trên bức tường bê tông trần, thay đổi theo từng giờ trong ngày, biến ngôi nhà thành một tác phẩm nghệ thuật sống động.</p>
      `,
      "Phong Cách Brutalism Hiện Đại Lên Ngôi Năm 2026": `
        <p>Brutalism (Chủ nghĩa thô mộc) đang quay trở lại mạnh mẽ trong phân khúc bất động sản hàng hiệu. Tuy nhiên, đó không còn là những khối bê tông lạnh lẽo, mà là sự tinh tế đến cùng cực.</p>
        <p>ARCT Studio ứng dụng bê tông vân gỗ, bê tông mài sàn lộ đá (terrazzo) kết hợp cùng nội thất da bò Ý và kim loại mạ PVD ánh kim. Sự tương phản mãnh liệt giữa chất thô ráp của kiến trúc và sự mềm mại, xa xỉ của nội thất tạo nên một đẳng cấp không thể nhầm lẫn.</p>
      `,
      "Tối Ưu Vi Khí Hậu Trong Thiết Kế Biệt Thự Nhiệt Đới": `
        <p>Biệt thự nhiệt đới (Tropical Villa) đòi hỏi sự am hiểu sâu sắc về khí hậu địa phương. Thiết kế của ARCT Studio luôn tuân thủ nguyên tắc "Che chở và Thông thoáng".</p>
        <p>Hệ mái vươn dài (overhangs) ngăn chặn bức xạ nhiệt trực tiếp, trong khi mặt bằng không gian mở (open-plan) và hệ cửa trượt panorama cho phép gió đối lưu xuyên phòng. Kết hợp cùng hồ bơi sinh thái đóng vai trò như một cỗ máy điều hòa tự nhiên, mang lại không gian sống mát mẻ vĩnh cửu.</p>
      `
    })[title] || `<p>Đang cập nhật nội dung chi tiết cho bài viết: <strong>${title}</strong>.</p>`;
  };

  // Blog Card Click Listeners
  document.querySelectorAll(".blog-card").forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", e => {
      e.preventDefault();
      const imgUrl = card.querySelector("img").src;
      const title = card.querySelector("h3").textContent;
      const category = card.querySelector(".blog-category").textContent;
      const modalHtml = `
        <div class="blog-modal-image-wrapper">
          <img src="${imgUrl}" alt="${title}">
        </div>
        <div class="blog-modal-text">
          <span class="blog-category">${category}</span>
          <h2>${title}</h2>
          <div class="modal-body-content">${getBlogDetailContent(title)}</div>
        </div>
      `;
      openModal(modalHtml);
    });
  });

  // Service Detail Database
  const getServiceDetailContent = (title) => {
    return ({
      "Thiết Kế & Thi Công Nhà Phố": "<p>Nhà phố hiện đại đòi hỏi một giải pháp thiết kế cực kỳ tinh gọn, tối đa hóa công năng trên một diện tích hạn chế. Quy trình của chúng tôi bao gồm:</p><ul><li>Phân tích vi khí hậu và hướng nắng gió.</li><li>Thiết kế mặt bằng công năng mở, sử dụng giếng trời và mảng xanh lõi.</li><li>Ứng dụng công nghệ nhà thông minh (Smart Home).</li><li>Thi công xây dựng trọn gói với tiêu chuẩn khắt khe, cam kết sai số dưới 2mm.</li></ul><p><em>Hãy để ARCT Studio kiến tạo tổ ấm trong mơ giữa lòng đô thị cho bạn.</em></p>",
      "Biệt Thự & Căn Hộ Hạng Sang": "<p>Đẳng cấp của một không gian sống xa xỉ không nằm ở sự dát vàng dát bạc, mà nằm ở tỷ lệ hoàn hảo, vật liệu độc bản và ánh sáng điện ảnh.</p><p>Các chuyên gia của chúng tôi chuyên tư vấn, thiết kế và thi công trọn gói cho biệt thự đơn lập, siêu biệt thự ven biển và penthouse. Đặc quyền của bạn khi làm việc với chúng tôi là:</p><ul><li>Sử dụng nội thất nhập khẩu từ các thương hiệu hàng đầu Châu Âu.</li><li>Thiết kế cảnh quan (Landscape) đồng bộ với phong cách kiến trúc.</li><li>Quản lý dự án chuyên nghiệp theo tiêu chuẩn quốc tế.</li></ul>",
      "Sauna, Fitness & Wellness": "<p>Là chuyên gia hàng đầu trong mảng Wellness, ARCT Studio mang đến các giải pháp thiết kế Sauna, Steam room và Fitness theo chuẩn y khoa và nghỉ dưỡng 5 sao.</p><p>Hệ thống bao gồm:</p><ul><li>Phòng xông hơi khô (Sauna) sử dụng gỗ Hemlock/Cedar nhập khẩu Canada, chịu nhiệt tốt và tỏa hương thơm tự nhiên.</li><li>Hệ thống đèn tia hồng ngoại (Infrared) giúp trẻ hóa tế bào.</li><li>Setup trang thiết bị phòng Gym hiện đại đạt chuẩn quốc tế.</li></ul><p><em>Sức khỏe của bạn là tài sản quý giá nhất, hãy để chúng tôi chăm sóc nó ngay tại nhà.</em></p>",
      "Thiết Kế Spa & Boutique Hotel": "<p>Không gian kinh doanh dịch vụ đòi hỏi một bài toán kinh tế kết hợp nghệ thuật trải nghiệm khách hàng hoàn hảo.</p><p>Chúng tôi cung cấp giải pháp toàn diện:</p><ul><li>Quy hoạch Concept tổng thể tạo điểm nhấn 'Wow' cho khách lưu trú.</li><li>Thiết kế chiếu sáng cường độ thấp kích thích sự thư giãn tối đa.</li><li>Tối ưu hóa luồng giao thông nội bộ (Back-of-house) dành riêng cho nhân viên vận hành, không làm phiền khách.</li><li>Tuyển chọn vật liệu chống ẩm, chống trượt, dễ bảo trì nhưng cực kỳ sang trọng.</li></ul>"
    })[title] || "<p>Chi tiết dịch vụ đang được cập nhật...</p>";
  };

  // Service Card Click Listeners
  document.querySelectorAll(".service-card").forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", e => {
      e.preventDefault();
      const title = card.querySelector("h3").textContent;
      const modalHtml = `
        <div class="blog-modal-image-wrapper">
          <img src="./assets/images/hero-bg.jpg" alt="${title}" style="filter: brightness(0.7);">
        </div>
        <div class="blog-modal-text">
          <span class="blog-category">Chi Tiết Dịch Vụ</span>
          <h2>${title}</h2>
          <div class="modal-body-content">${getServiceDetailContent(title)}</div>
        </div>
      `;
      openModal(modalHtml);
    });
  });

  // Project Gallery Database
  const projectGalleries = [
    [
      "./assets/images/project1.jpg",
      "./assets/images/blog1.jpg",
      "./assets/images/about.jpg",
      "./assets/images/blog2.jpg",
      "./assets/images/project2.jpg",
      "./assets/images/hero-bg.jpg"
    ],
    [
      "./assets/images/z7795636798375_7ae67c046180adbc6502ac4feabe66fd.jpg",
      "./assets/images/z7795636804473_ac56a9c0352aab91c494f661ee281811.jpg",
      "./assets/images/z7795636805709_19ed35dad40e1695a3e5c4eb941bfbe5.jpg",
      "./assets/images/z7795636822457_859b11ff9980daa2f1a0d1aa4b75bed2.jpg",
      "./assets/images/z7795636824107_9ad54bd5d675fea345a979ad3be5d506.jpg",
      "./assets/images/z7795636838557_9d701c533d2fbc9d8786e0c6caae2665.jpg"
    ],
    [
      "./assets/images/project3.jpg",
      "./assets/images/project4.jpg",
      "./assets/images/blog7.jpg",
      "./assets/images/blog1.jpg",
      "./assets/images/project5.jpg",
      "./assets/images/about.jpg"
    ],
    [
      "./assets/images/project4.jpg",
      "./assets/images/blog2.jpg",
      "./assets/images/blog3.jpg",
      "./assets/images/project6.jpg",
      "./assets/images/blog5.jpg",
      "./assets/images/hero-bg.jpg"
    ],
    [
      "./assets/images/project5.jpg",
      "./assets/images/blog6.jpg",
      "./assets/images/project1.jpg",
      "./assets/images/blog4.jpg",
      "./assets/images/blog7.jpg",
      "./assets/images/project2.jpg"
    ],
    [
      "./assets/images/project6.jpg",
      "./assets/images/about.jpg",
      "./assets/images/blog1.jpg",
      "./assets/images/project3.jpg",
      "./assets/images/blog5.jpg",
      "./assets/images/hero-bg.jpg"
    ]
  ];

  // Project Card Click Listeners
  document.querySelectorAll(".project-card").forEach((card, idx) => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const title = card.querySelector("h4").textContent;
      const category = card.querySelector("p").textContent;
      const images = projectGalleries[idx] || projectGalleries[0];
      const galleryHtml = images.map(src => `<div class="gallery-item"><img src="${src}" alt="${title}"></div>`).join("");
      const modalHtml = `
        <div class="blog-modal-text" style="padding-bottom: 1rem; border-bottom: 1px solid rgba(0,0,0,0.05);">
          <span class="blog-category">${category}</span>
          <h2>${title}</h2>
          <p class="modal-body-content" style="margin-bottom: 0;">Khám phá bộ sưu tập 6 hình ảnh chi tiết của dự án, thể hiện rõ nét triết lý thiết kế và mức độ hoàn thiện tinh xảo của ARCT Studio.</p>
        </div>
        <div class="modal-gallery-grid" style="padding: 2rem 3rem;">
          ${galleryHtml}
        </div>
      `;
      openModal(modalHtml);
    });
  });
});