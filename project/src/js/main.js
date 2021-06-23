//start slide du an noi bat
$(".slide-card-duannoibat").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left duannoibat-btn-prev'></i>",
    "<i class='fas fa-chevron-right duannoibat-btn-next'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
  dots: false,
  autoplay: true,
  autoplayTimeout: 6000,
});
//end slide du an noi bat

let rangeSlide = jQuery(".js-range-slider");
if (rangeSlide) {
  jQuery(".js-range-slider").ionRangeSlider();
}

// TIEN ICH

$(".btn-mobile-utilities a").click(function (e) {
  e.preventDefault();
  var parent = $(this).parents(".utilities");
  var child = parent.children(".utilities-content");
  child.toggleClass("show-item");
});

// FLITER

$(".btn-control .btn-filter").click(function () {
  if ($(this).siblings(".control-table").hasClass("active")) {
    $(this).siblings(".control-table").removeClass("active");
    $(this).removeClass("active");
  } else {
    $(".control-table").removeClass("active");
    $(".btn-control .btn-filter").removeClass("active");
    $(this).siblings(".control-table").addClass("active");
    $(this).addClass("active");
  }
});

var refreshBtn = function (btn, checked) {
  let buttonRefresh = document.querySelectorAll(btn);
  let checkedBox = Array.from(document.querySelectorAll(checked));

  if (buttonRefresh.length !== 1) {
    $(btn).click(function (e) {
      var asda = $(this).parents(checked);
      var dsw = asda[0].querySelectorAll("[type=checkbox]");
      for (let i = 0; i < dsw.length; i++) {
        dsw[i].checked = false;
      }
    });
  } else {
    buttonRefresh = buttonRefresh[0];
    buttonRefresh.addEventListener("click", function (e) {
      e.preventDefault();
      for (let i = 0; i < checkedBox.length; i++) {
        checkedBox[i].checked = false;
      }
    });
  }
};

refreshBtn("#delete-filter", ".control-table [type=checkbox]");
refreshBtn("#refresh-fileter", ".control-table [type=checkbox]");
refreshBtn(".btn-delete", ".control-table");

jQuery("#showBoLoc").click(function (e) {
  e.preventDefault();
  jQuery(".filter-control-mobile").addClass("active");
  jQuery("body").addClass("none-scroll");
});

jQuery("#close-filter").click(function (e) {
  e.preventDefault();
  jQuery(".filter-control-mobile").removeClass("active");
  jQuery(".filter-control-mobile").addClass("close-animt");
  jQuery("body").removeClass("none-scroll");
});

//============================

jQuery(".like-product-card").click(function () {
  jQuery(this).toggleClass("liked");
});

// MATBANGDUAN
var btn = document.querySelectorAll(".tab ul .tab-item");
var tabs = document.querySelectorAll(".content-tab-item");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    for (var i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active-tab");
    }
    this.classList.add("active-tab");
    //tinh vi tri
    var btnActive = this;
    var j = 0;
    for (j = 0; (btnActive = btnActive.previousElementSibling); j++) {}
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active-item");
      tabs[j].classList.add("active-item");
    }
  });
}

// BẢNG SẢN PHẨM

var btnActiveTab = document.querySelectorAll(".list-tab li");
var tabItem = document.querySelectorAll(".tab-items");
for (var i = 0; i < btnActiveTab.length; i++) {
  btnActiveTab[i].addEventListener("click", function () {
    for (var i = 0; i < btnActiveTab.length; i++) {
      btnActiveTab[i].classList.remove("active-table-tab");
    }
    this.classList.add("active-table-tab");
    //tinh vi tri
    var active = this;
    var j = 0;
    for (j = 0; (active = active.previousElementSibling); j++) {}
    for (var i = 0; i < tabItem.length; i++) {
      tabItem[i].classList.remove("active-item-table");
      tabItem[j].classList.add("active-item-table");
    }
  });
}

function myFunction(x) {
  var searchBtm = jQuery(".header-search");
  var searchPlh = jQuery(".header-search input");

  if (x.matches) {
    // Reponsive Header
    jQuery(".header").addClass("header-mobile");
    jQuery(".header-mobile .header-logo-box").click(function (e) {
      e.preventDefault();
      jQuery("body").toggleClass("none-scroll");
      jQuery(".header-main-box").toggleClass("active");
      jQuery(".header-mobile").toggleClass("full-height");
    });
    jQuery(".header-menu-box").append(searchBtm);
    searchPlh.attr("placeholder", "Nhập tên dự án cần tìm kiếm");
    $(document).ready(function () {
      $(".has-menu-btn-show").on("click", function () {
        if ($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
        } else {
          $(".has-menu-drp").removeClass("active");
          $(this).parent().addClass("active");
        }
      });
    });

    var appendMenuDrd = function appendMenuDrd(idMain, idAppend) {
      var getParentIdMain = idMain.parent();
      var getChildMenu;
    };

    jQuery(".bottom-show-menu").click(function (e) {
      jQuery("body").addClass("none-scroll");
      jQuery(".menu-phanloai").addClass("active");
      jQuery(".menu-phanloai").removeClass("close-animt");
    });
    //======================

    // Reponsive Filter
    $("#filter-control").addClass("filter-control-mobile");
    $(".justify-content-end").removeClass("row");
    //==================

    // Progress
    let progressStatus = Array.from(document.querySelectorAll(".progress-status"));
    let barPer = document.querySelector(".progress-per");
    let ecs = 0;
    progressStatus.forEach((el, inx) => {
      let cdas = (ecs += 17);
      cdas = cdas -= 17;
      el.style.top = cdas + "%";
      setInterval(function () {
        var getHeight = parseFloat(barPer.dataset.progress);
        for (var i = 0; i <= getHeight; i++) {
          barPer.style.height = i + "%";
          let daw = parseFloat(el.style.top);
          if (i >= daw) {
            el.classList.add("active");
          }
        }
      }, 500);
    });
  } else {
    // Header
    jQuery(".header").removeClass("header-mobile");
    jQuery(".header-bottom-box").append(searchBtm);
    searchPlh.attr("placeholder", "Nhập tên dự án hoặc khu vực bạn muốn tìm");
    jQuery(".bottom-show-menu").click(function (e) {
      e.preventDefault();
      jQuery(".bottom-show-menu").toggleClass("active");
      jQuery(".menu-dropdown").toggleClass("active");
    });

    function clickDocToClose(class1, class2) {
      document.addEventListener("click", (e) => {
        let checkoutMenu1 = e.target.closest(class1);
        let getMenuDrop = document.querySelectorAll(class2);
        getMenuDrop.forEach((val) => {
          let cvArryDrpdo = val.getAttribute("class").split(" ");
          if (checkoutMenu1 == null && cvArryDrpdo.indexOf("active") !== -1) {
            val.classList.remove("active");
          }
        });
      });
    }
    clickDocToClose(".header", ".menu-dropdown");
    clickDocToClose(".header", ".bottom-show-menu");

    clickDocToClose(".btn-control", ".control-table");
    clickDocToClose(".btn-control", ".btn-filter");

    //===================

    // Filter
    $("#filter-control").removeClass("filter-control-mobile");
    $(".justify-content-end").addClass("row");
    //================

    // Progress
    let progressStatus = Array.from(document.querySelectorAll(".progress-status"));
    let barPer = document.querySelector(".progress-per");
    let ecs = 7;
    progressStatus.forEach((el, inx) => {
      let cdas = (ecs += 11);
      cdas = cdas -= 11;
      el.style.left = cdas + "%";
      setInterval(function () {
        var getWidth = parseFloat(barPer.dataset.progress);
        for (var i = 0; i <= getWidth; i++) {
          barPer.style.width = i + "%";
          let daw = parseFloat(el.style.left);
          if (i >= daw) {
            el.classList.add("active");
          }
        }
      }, 500);
    });
  }
}

var x = window.matchMedia("(max-width: 850px)");
myFunction(x);
x.addListener(myFunction);

// let getExcept = document.querySelector('.except-more');
// let getBtnShow = document.querySelector('.btn-more-less');

// getBtnShow.addEventListener('click', event=>{
//     const linkText = event.target.textContent.toLowerCase();
//     event.preventDefault();

//     if (linkText == "xem chi tiết") {
//         getBtnShow.innerText = "Ẩn bớt";
//         getExcept.classList.add('show');
//     } else {
//         getBtnShow.innerText = "Xem chi tiết";
//         getExcept.classList.remove('show');
//     }
// });

// Testtttttttttt

const Utils = {
  lessExcerpt: function (element) {
    return element.slice(0, 300);
  },

  showMore: function (btn, excerpt, excerptO) {
    btn.addEventListener("click", (e) => {
      const linkText = e.target.textContent.toLowerCase();
      e.preventDefault();
      // console.log(excerpt)
      if (linkText == "xem chi tiết") {
        btn.innerText = "Ẩn bớt";
        excerpt.textContent = excerptO;
      } else {
        btn.innerText = "Xem chi tiết";
        excerpt.textContent = this.lessExcerpt(excerptO) + " ...";
      }
    });
  },
};

const ExcerptWidget = {
  showMore: function (btnShowLes, excerptTarget) {
    const showMoreBtn = document.querySelectorAll(btnShowLes);
    showMoreBtn.forEach(function (link) {
      const excerpt = link.parentElement.parentElement.querySelector(excerptTarget);
      let excerptO = link.parentElement.parentElement.querySelector(excerptTarget).textContent;
      excerpt.textContent = excerptO.slice(0, 300) + " ...";
      Utils.showMore(link, excerpt, excerptO);
    });
  },
};

ExcerptWidget.showMore(".btn-more-less", ".except-more");

//testttttttttttttttt============

//======================
// TOGGLE MAP LIST PROJECT
var ip = document.getElementById("view-map");
var map = document.getElementById("map");
var category = document.querySelector(".card-category");
var listCard = document.querySelectorAll(".items");
var block = document.querySelector(".flex-map");
var showMap = true;
var newClassCard = "";
var oddClassCard = "";
var mapPosition;
for (var i = 0; i < listCard.length; i++) {
  oddClassCard = listCard[i].getAttribute("class");
  newClassCard = oddClassCard.replace(/col-4/g, "col-6");
}
function setAttributeCard() {
  for (var i = 0; i < listCard.length; i++) {
    listCard[i].setAttribute("class", newClassCard);
  }
}
function backAttributeCard() {
  for (var i = 0; i < listCard.length; i++) {
    listCard[i].setAttribute("class", oddClassCard);
  }
}
if (ip) {
  ip.onclick = function () {
    if (showMap) {
      map.style.cssText = "display:block;";
      category.style.width = "70%";
      setAttributeCard();
      block.style.display = "flex";
      mapPosition = map.offsetTop;

      showMap = false;
    } else if (showMap === false) {
      map.style.cssText = "display:none";
      category.style.width = "100%";
      backAttributeCard();
      block.style.display = "block";
      showMap = true;
    }
  };
}
// STICK MAP

if (map) {
  var payHome = document.getElementById("pay-home").offsetTop;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 272 && window.pageYOffset < payHome) {
      map.classList.add("map-fixed");
    } else if (window.pageYOffset < 272 || window.pageYOffset > payHome) {
      map.classList.remove("map-fixed");
    }
  });
}
// STICK CHITIETCANHO
let infoHome = document.querySelector(".chitietduan-rightcolumn");
let tableProduct = document.querySelector(".table-product");

let header = document.querySelector("header");
//Function chạy ở trang detail-project
let infoHomeOffsetRight = infoHome.offsetLeft + infoHome.clientWidth;
let calcRight = document.querySelector("body").clientWidth - infoHomeOffsetRight;

if (tableProduct) {
  let parent = infoHome.closest(".position-relative");
  let stopStick = tableProduct.offsetTop;
  let lastScroll = 0;
  let endPoint =
    parent.offsetTop + parent.offsetHeight - (infoHome.offsetHeight + header.offsetHeight);

  window.addEventListener("scroll", function () {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    console.log(currentScroll);
    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;

      if (currentScroll > 20 && currentScroll < stopStick - infoHome.clientHeight) {
        infoHome.classList.add("active-fixed");
        infoHome.style.right = calcRight + "px";
      }
      if (currentScroll > endPoint) {
        infoHome.classList.remove("active-fixed");
        infoHome.style.position = "absolute";
        infoHome.style.bottom = "0";
      }
    } else {
      if (currentScroll < stopStick - infoHome.clientHeight) {
        infoHome.classList.add("active-fixed");
        infoHome.style.right = calcRight + "px";
        infoHome.style.bottom = "";
        infoHome.style.position = "";
      }

      if (currentScroll <= 116) {
        infoHome.style.position = "";
        infoHome.classList.remove("active-fixed");
        infoHome.style.bottom = "";
        infoHome.style.right = "";
      }

      lastScroll = currentScroll;
    }
  });
}

let progressBox = document.querySelector(".progress-box");
console.log(progressBox);
let stickyRight = document.querySelector(".sticky-detailapartment");

//Function chạy ở trang detail-apartment
if (stickyRight) {
  let stickyOffsetRight = stickyRight.offsetLeft + stickyRight.clientWidth;
  let stickyRightPos = document.querySelector("body").clientWidth - stickyOffsetRight;
  let lastScroll = 0;
  var stopStick = progressBox.offsetTop;
  let parent = stickyRight.closest(".position-relative");
  let endPoint =
    parent.offsetTop + parent.offsetHeight - (stickyRight.offsetHeight + header.offsetHeight);

  window.addEventListener("scroll", function () {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;

      if (currentScroll > 20 && currentScroll < stopStick - stickyRight.clientHeight) {
        stickyRight.classList.add("active-fixed");
        stickyRight.style.right = stickyRightPos - 5 + "px";
      }
      if (currentScroll > endPoint) {
        stickyRight.classList.remove("active-fixed");
        stickyRight.style.position = "absolute";
        stickyRight.style.bottom = "0";
      }
    } else {
      if (currentScroll < stopStick - stickyRight.clientHeight) {
        stickyRight.classList.add("active-fixed");
        stickyRight.style.bottom = "";
        stickyRight.style.position = "";
      }

      if (currentScroll <= 116) {
        stickyRight.style.position = "";
        stickyRight.classList.remove("active-fixed");
        stickyRight.style.bottom = "";
        stickyRight.style.right = "";
      }

      lastScroll = currentScroll;
    }
  });
}

//draggable
let big = document.querySelector("big");

if (big) {
  big.onclick = function () {
    jQuery(".mapify-holder").draggable();
  };
}
