//getElementById node取得
const spanWrap = (id) => {
  let origin_title = document.getElementById(id).innerText;
  let convert_title = origin_title.replace(/\r?\n/g, '');//テキストから改行コード削除
  convert_title = convert_title.split('').reduce((acc, v) => {
    return acc + `<span>${v}</span>`
  }, "");

  document.getElementById(id).style.opacity = 1;
  document.getElementById(id).innerHTML = convert_title;
}

// mission box クリック
const missionClickClassName = (className) => {
  let targets = document.getElementsByClassName(className);
  for(let i = 0; i < targets.length; i++) {
      targets[i].addEventListener("click",() => {
        const isOpened = targets[i].classList.contains('is-open');
        $('.is-open').removeClass('is-open');
        if (isOpened) {
        } else {
          targets[i].classList.add("is-open");
        }
      }, false)
  }
  var elements = document.getElementsByClassName( "is-open" ) ;	
}

$(function() {

  // -- loader --
  var loader = $('.loader-wrap');
	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});
	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},10000);

  // 600の所で写真出てきたら、タイトル消える
  gsap.to('#home' , {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: '#open-images',
      start: 'top bottom',
      scrub: true,
      // markers: true,
    }
  });

  // about白のboxがtopにきたら　写真消す
  gsap.to('.images-row, .images-row-small', {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: '.mv-area',
      start: 'top top',
      scrub: true,
      toggleActions: 'play pause resume reverse',
      // markers: true,
    }
  });

  // header 表示/非表示
  gsap.set('header', {autoAlpha: 0});
  gsap.to('header', {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '#about',
      start: 'top top',
      toggleActions: 'play pause resume reverse',  // 繰り返し
      // scrub: 1,
      // markers: true,
    }
  });
  
  // 背景が黒の時、headerを白に
  ScrollTrigger.create({
    trigger: '.black-bg', //アニメーションが始まるトリガーとなる要素
    start: 'top 100',
    end: 'bottom 100', 
    toggleClass: {targets: ".logo-black, .logo-white, .menu-toggle span", className: "is-active"}, //クラスをつけたり、外したりできる
  });

  //-- about --

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      //　vision　mission　value　背景動作
      ScrollTrigger.create({
        trigger: '.ab-us-vision', //アニメーションが始まるトリガーとなる要素
        start: 'top center',
        end: 'bottom 100', 
        toggleClass: {targets: ".ab-us-vision__sub-text-0", className: "is-active"},
        once: true
      });
      ScrollTrigger.create({
        trigger: '.ab-us-mission', //アニメーションが始まるトリガーとなる要素
        start: 'top center',
        end: 'bottom 100', 
        toggleClass: {targets: ".ab-us-mission__sub-text", className: "is-active"},
        once: true
      });
      ScrollTrigger.create({
        trigger: '.ab-us-value__inner', //アニメーションが始まるトリガーとなる要素
        start: 'top center',
        end: 'bottom 100',
        toggleClass: {targets: ".ab-us-value__sub-text", className: "is-active"},
        once: true
      });
      
      gsap.to('#about .mv-title .sr', {
        y: -320,
        scrollTrigger: {
          trigger: '.ab-us',
          start: 'top 95%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
          // markers: true,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
           }
      });
      // ビジョン
      gsap.to('.ab-text', {
        scale:1.8,
        scrollTrigger: {
          trigger: '.ab-us-vision',
          start: '-30% top',
          toggleActions: 'play pause resume reverse',
          scrub: true, 
          // markers: true,
        }
      });
      // ミッション
      gsap.to('.ab-us-mission__text', {
        rotation: -90,
        scrollTrigger: {
          trigger: '.ab-us-mission',
          start: '-15% top',
          toggleActions: 'play pause resume reverse',
        }
      });
      //　バリュー
      gsap.set('.ab-us-value__text-l', {x: 1000});
      gsap.to('.ab-us-value__text-l', {
        x: 0,
        scrollTrigger: {
          trigger: '.ab-us-value',
          start: '10% top',
          toggleActions: 'play pause resume reverse',
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.6 //0.1秒ズラしてアニメーション
          }
      });
      //　next
      gsap.to('#about .next-nav-title', {
        y: -100,
        scrollTrigger: {
          trigger: '#about .next-nav',
          start: '10% top',
          toggleActions: 'play pause resume reverse',
          scrub: true,
          // markers: true,
        }
      });
    },
    "(max-width: 768px)": function() {
      //　vision　mission　value　背景動作
      ScrollTrigger.create({
        trigger: '.ab-us-vision', //アニメーションが始まるトリガーとなる要素
        start: 'top 80%',
        end: 'bottom 100', 
        toggleClass: {targets: ".ab-us-vision__sub-text-0", className: "is-active"},
        once: true,
      });
      ScrollTrigger.create({
        trigger: '.ab-us-mission', //アニメーションが始まるトリガーとなる要素
        start: 'top 80%',
        end: 'bottom 100', 
        toggleClass: {targets: ".ab-us-mission__sub-text", className: "is-active"},
        once: true,
      });
      ScrollTrigger.create({
        trigger: '.ab-us-value__inner', //アニメーションが始まるトリガーとなる要素
        start: 'top 80%',
        end: 'bottom 100',
        toggleClass: {targets: ".ab-us-value__sub-text", className: "is-active"},
        once: true,
        // markers: true,
      });

      gsap.to('#about .mv-title .sr', {
        y: -260,
        scrollTrigger: {
          trigger: '.ab-us',
          start: 'top 80%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          // delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
           }
      });
      //ビジョン
      gsap.to('.ab-text', {
        scale:1.8,
        scrollTrigger: {
          trigger: '.ab-us-vision',
          start: '-170% top',
          toggleActions: 'play pause resume reverse',
          scrub: true,            
        }
      });
      // ミッション
      gsap.to('.ab-us-mission__text', {
        rotation: -90,
        scrollTrigger: {
          trigger: '.ab-us-mission',
          start: '-70% top',
          toggleActions: 'play pause resume reverse',
        }
      });
      //　バリュー
        // L
      gsap.set('.ab-us-value__text-l', {x: 400});
      gsap.to('.ab-us-value__text-l', {
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.ab-us-value',
          start: '-30% top',
          toggleActions: 'play pause resume reverse',
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 1 //0.1秒ズラしてアニメーション
          }
      });
      //　next
      gsap.to('#about .next-nav-title', {
        y: -100,
        scrollTrigger: {
          trigger: '#about .next-nav',
          start: '10% top',
          toggleActions: 'play pause resume reverse',
          scrub: true,
          // markers: true,
        }
      });
    },
  });

  ScrollTrigger.create({
    trigger: '#ab-us-text',
    start: 'center top',
    toggleActions: 'play pause resume reverse',
    toggleClass: {targets: ".ab-bg-image", className: "js-opacity-1"}, //クラスをつけたり、外したりできる
  });

  // js-opacity-0 追加 /aboutバックのテキスト　消す
  ScrollTrigger.create({
    trigger: '.ab-bg', //アニメーションが始まるトリガーとなる要素
    start: 'center top',
    toggleActions: 'play pause resume reverse',
    toggleClass: {targets: ".ab-bg", className: "js-opacity-0"}, //クラスをつけたり、外したりできる
  });

  // -- work --
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      // mv-title の動き
      gsap.to('#work .mv-title .sr', {
        y: -320,
        scrollTrigger: {
          trigger: '.wr-content',
          start: 'top 80%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });

      // ミッションbox
      gsap.set('.ms-tile-item', {x: -100});
      gsap.to('.ms-tile-item', {
        x: 0,
        scrollTrigger: {
          trigger: '.ms',
          start: 'top center',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
    },
    "(max-width: 768px)": function() {
      // mv-title の動き
      gsap.to('#work .mv-title .sr', {
        y: -260,
        scrollTrigger: {
          trigger: '.wr-content',
          start: 'top 95%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });

      // ミッションbox
      gsap.set('.ms-tile-item', {y: -50});
      gsap.to('.ms-tile-item', {
        y: 0,
        scrollTrigger: {
          trigger: '.ms',
          start: 'top 40%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
    }
  });

  //　next
  gsap.to('#work .next-nav-title', {
    y: -100,
    scrollTrigger: {
      trigger: '#work .next-nav',
      start: '10% top',
      toggleActions: 'play pause resume reverse',
      scrub: true,
      // markers: true,
    }
  });

  // -- member --
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {

      // mv-title の動き
      gsap.to('.mv-title-member .sr', {
        y: -320,
        scrollTrigger: {
          trigger: '.company-member.mv-area',
          start: 'top 5%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
    },
    "(max-width: 768px)": function() {

      // mv-title の動き
      gsap.to('.mv-title-member .sr', {
        y: -260,
        scrollTrigger: {
          trigger: '.company-member.mv-area',
          start: 'top 30%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
          // markers: true,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
    }
  });

  const el = document.querySelector('.members-list-up');
  gsap.to(el, {
    xPercent: -80,
    ease: 'none',
    scrollTrigger: {
      trigger: '#member',
      start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
      end: `+=${el.clientWidth}`, // リストの横幅分移動したら終わり
      scrub: true,
      pin: true,
    },
  });


  // -- company --

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {

      // mv-title の動き
      gsap.to('#company .mv-title-long .sr', {
        y: -320,
        scrollTrigger: {
          trigger: '.company-inner',
          start: 'top 80%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });

      gsap.to('.company-title .sr', {
        y: 50,
        scrollTrigger: {
          trigger: '#company',
          start: 'top top',
          toggleActions: 'play pause resume reverse',
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
      
    },
    "(max-width: 768px)": function() {

      // mv-title の動き
      gsap.to('#company .mv-title-long .sr', {
        y: -260,
        scrollTrigger: {
          trigger: '.company-inner',
          start: 'top 95%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
      
      gsap.set('.company-title .sr', {y: -50});
      gsap.to('.company-title .sr', {
        y: 0,
        scrollTrigger: {
          trigger: '#company',
          start: '-18% top',
          toggleActions: 'play pause resume reverse',
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
    }
  });

  // -- contact --

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {

      // mv-title の動き
      gsap.to('#contact .mv-title-long .sr', {
        y: -320,
        scrollTrigger: {
          trigger: '.contact-inner',
          start: 'top 80%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });

      gsap.to('.contact-title__title .sr', {
        y: 60,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top top',
          toggleActions: 'play pause resume reverse',
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
      
    },
    "(max-width: 768px)": function() {

      // mv-title の動き
      gsap.to('#contact .mv-title-long .sr', {
        y: -260,
        scrollTrigger: {
          trigger: '.contact-inner',
          start: 'top 95%',
          toggleActions: 'play pause resume reverse',  // 繰り返し
          delay: 2,
        },
        stagger: {
          from: "random", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
      
      gsap.set('.contact-title__title .sr', {y: -50});
      gsap.to('.contact-title__title .sr', {
        y: 0,
        scrollTrigger: {
          trigger: '#contact',
          start: '-13% top',
          toggleActions: 'play pause resume reverse',
          // markers: true,
        },
        stagger: {
          from: "start", //左からアニメーション start、center、edges、random、endが指定できる
          amount: 0.5 //0.1秒ズラしてアニメーション
          }
      });
      
    }
  });

  
  // luxy 初期化
  luxy.init({});
  
  //　-- ナビゲーション --
  $(".menu-toggle-btn").click(function () {
    //active ×印要素
    $(this).toggleClass('active');
    // ハンバーガーメニュー開いた時、headerを黒に
    $('.logo-black').toggleClass('active');
    $('.logo-white').toggleClass('active');
    $('.menu-toggle span').toggleClass('active');
    //スライド
    $('.nav').toggleClass('slide-in');
    $('body').toggleClass('noscroll');
    $('.menu li').toggleClass('fadein');
    $('.sns').toggleClass('fadein');
  });
  // ナビゲーション 閉じ
  $('.menuLink').on('click', function(event) {
    $('.menu-toggle-btn').trigger('click');
  });

  missionClickClassName('ms-tile-item');

  ScrollReveal().reveal('#home__img', {
    duration: 1600, 
  });

  setTimeout(function() {
    spanWrap('home__text');
  }, 1000);

  ScrollReveal().reveal('.scroll__inner', {
    duration: 1000, 
    delay: 2500,
  });

  // -- about --

  ScrollReveal().reveal('.ab-us-sub__title', {
    delay: 300,
    duration: 1600,
    reset: true
  });

  ScrollReveal().reveal('.company-member .mv-title', {
    delay: 300,
    duration: 1600,
    reset: true
  });

  ScrollReveal().reveal('.ab-us-sub__text', {
    delay: 300,
    duration: 1600,
    origin: 'right',
    distance: '50px',
    reset: true
  });

  ScrollReveal().reveal('#ab-us-title', {
    delay: 300,
    duration: 1600,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('#ab-us-text-sub', {
    delay: 1000,
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('#ab-us-text', {
    delay: 1500,
    duration: 2500,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.next-nav-about-img', {
    // delay: 500,
    duration: 3000,
    scale: 0.8,
    reset: true,
  });
  

  //-- work --


  ScrollReveal().reveal('.wr-content__title', {
    delay: 600,
    duration: 1600,
    origin: 'left',
    distance: '100px',
    // reset: true
  });

  ScrollReveal().reveal('.wr-content__text', {
    delay: 800,
    duration: 1600,
    origin: 'right',
    distance: '100px',
    // reset: true
  });

  ScrollReveal().reveal('.wr-title', {
    // delay: 300,
    duration: 1600,
    origin: 'left',
    distance: '50px',
    // reset: true
  });

  ScrollReveal().reveal('.pd-list', {
    delay: 500,
    duration: 2000,
    origin: 'rigth',
    distance: '100px',
    // reset: true
  });

  ScrollReveal().reveal('.blank', {
    delay: 500,
    duration: 2000,
    origin: 'rigtn',
    distance: '20px',
    // reset: true
  });

  ScrollReveal().reveal('.next-nav-work-img', {
    // delay: 500,
    duration: 3000,
    scale: 0.8,
    reset: true,
  });
  
  // -- member --

  // -- company --

  ScrollReveal().reveal('.company-title', {
    delay: 400,
    duration: 1600,
    origin: 'bottom',
    distance: '50px',
    // reset: true
  });

  ScrollReveal().reveal('.company-header__text', {
    delay: 500,
    duration: 1800,
    origin: 'bottom',
    distance: '50px',
    // reset: true
  });

  ScrollReveal().reveal('.p-company__table', {
    delay: 500,
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('#access-content', {
    delay: 400,
    duration: 2200,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('#access__map', {
    delay: 400,
    duration: 2400,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.client', {
    delay: 400,
    duration: 2600,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.group-company', {
    delay: 400,
    duration: 2800,
    origin: 'bottom',
    distance: '50px',
  });

  // -- contact --

  ScrollReveal().reveal('.contact-title', {
    delay: 400,
    duration: 1600,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.contact__items .item:nth-child(1)', {
    delay: 500,
    duration: 1800,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.contact__items .item:nth-child(2)', {
    delay: 500,
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.contact__items .item:nth-child(3)', {
    delay: 500,
    duration: 2200,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.contact__items .item:nth-child(4)', {
    delay: 500,
    duration: 2400,
    origin: 'bottom',
    distance: '50px',
  });
  
  ScrollReveal().reveal('.contact__items .item:nth-child(5)', {
    delay: 500,
    duration: 2600,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.contact__items .item:nth-child(6)', {
    delay: 500,
    duration: 2800,
    origin: 'bottom',
    distance: '50px',
  });

  ScrollReveal().reveal('.contact__form-btns', {
    delay: 500,
    duration: 3000,
    distance: '-100px',
    origin: 'bottom',
    distance: '50px',
  });

  document.getElementById("mv").classList.add("active")
});