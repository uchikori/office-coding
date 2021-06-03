let mySwiper = new Swiper('.main-visual__swiper',{
    autoplay:{
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
		reverseDirection: false
    },
    speed:1000,
    loop:true,
    shortSwipes: false,
    longSwipes: false,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
let mySwiper02 = new Swiper('.text-place-swiper02',{
    loop:true,
    slideToClickedSlide: true,
    controller:{
        control: mySwiper,
        inverse: false,
        by: 'slide'
    },
    slidesPerView:1,
    slideToClickedSlide: true,
});
mySwiper.controller.control = mySwiper02;
/**
 * 
 * Slice Slider アニメーション
 * 
 * */
// function sliceSlider(){
//     var SliceSlider = {
//         //オブジェクトの定義
//         settings:{
//             delta: 0,
//             currentSlideIndex: 0,
//             scrollThereshold: 2,
//             slides: jQuery('.slide'),
//             numSlides: jQuery('.slide').length,
//             navPrev: jQuery('.js-prev'),
//             navNext: jQuery('.js-next'),
//             paginationCurrent: jQuery('.page-current'),
//             paginationTotal: jQuery('page-total'),
//         },

//         //初期化
//         init: function(){
//             s = SliceSlider.settings;
//             this.bindEvents();
//         },

//         //スクロールイベント・キーイベント・ボタンクリックイベントをバウンディング
//         bindEvents: function(){
//             //スクロール
//             s.slides.on({'DOMMouseScroll mousewheel' : SliceSlider.handleScroll});
//             //prev click
//             s.navPrev.on({'click': SliceSlider.prevSlide});
//             //next click
//             s.navNext.on({'click': SliceSlider.nextSlide});
//             //キーボタン
//             jQuery(document).keyup(function(e){
//                 //左or上キー
//                 if((e.which === 37) || (e.which === 38)){
//                     SliceSlider.prevSlide();
//                 }
//                 //右or下キー
//                 if((e.which === 39) || (e.which === 40)) {
//                     SliceSlider.nextSlide();
//                 } 
//             });
//             //スマホのスワイプ(タッチ開始時のy座標の取得)
//             let startY;
//             let moveY;
//             let dist = 100;
//             document.querySelector('.slides').addEventListener('touchstart', function(e){
//                 // e.preventDefault();
//                 // e.stopPropagation();
//                 startY = e.touches[0].pageY;
                
//             });
//             //タッチ中のy座標の取得
//             document.querySelector('.slides').addEventListener('touchmove', function(e){
//                 e.preventDefault();
//                 moveY = e.changedTouches[0].pageY;
                
//             });
//             document.querySelector('.slides').addEventListener('touchend', function(e){
//                 if(startY > moveY && startY > moveY + dist){
//                     SliceSlider.nextSlide();
//                 }
//                 else if(startY < moveY && startY + dist < moveY){
//                     SliceSlider.prevSlide();
//                 } else {
//                     return false;
//                 }
//             });
//         },

//         //スクロールイベント
//         handleScroll: function(e){
//             //.detailはDOMMouseScrollのスクロール量を取得---.wheelDeltaはmousewheelはマウスのホイールの方向を取得
//             //つまり、上方向へのスクロールまたはマウスを奥にスクロールした場合
//             if(e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0){
//                 if(document.body.classList.contains('is-sliding')){
//                     s.delta = 0;
//                 } else {
//                     s.delta--;
//                     if(Math.abs(s.delta) >= s.scrollThereshold){
//                         s.delta = 7;
//                         SliceSlider.prevSlide();
//                     }
//                 }
//             }
//             //スクロールダウンの場合
//             else {
//                 if(document.body.classList.contains('is-sliding')){
//                     s.delta = 0;
//                 } else {
//                     s.delta++;
//                     if(s.delta >= s.scrollThereshold){
//                         s.delta = 7;
//                         SliceSlider.nextSlide();
//                     }
//                 }

//             }
//             //ページがスクロールしないようにする
//             return false;
//         },

//         //クラス付与でアニメーション
//         showSlide: function(){
//             //リセット
//             s.delta = 0;
//             //既にクラスが付与されている場合は、処理続行
//             if(jQuery('body').hasClass('is-sliding')){
//                 return;
//             }
//             //.slideクラスのついたオブジェクトのそれぞれに処理を加える
//             //each(function(index, val))
//             s.slides.each(function(i, slide){
//                 //i番目とcurrentSlideIndexの値がtrueなら「is-active」クラスを付与する
//                 jQuery(slide).toggleClass('is-active', (i === s.currentSlideIndex));
//                 jQuery(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1));
//                 jQuery(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1));
//                 //「is-sliding」クラスの付与
//                 jQuery('body').addClass('is-sliding');
//                 //「is-sliding」クラスを1秒後に削除
//                 setTimeout(function(){
//                     jQuery('body').removeClass('is-sliding');
//                 }, 1000);
//             });
//         },

//         //スライドを手前に戻す
//         prevSlide: function(){
//             //現在のスライドナンバーがマイナスの値になったとき（つまりスライドが先頭まで行きさらにスクロールされたとき）
//             if(s.currentSlideIndex <= 0){
//                 //現在のスライドはスライド全体の長さの最大値（つまりスライドの最後尾）
//                 s.currentSlideIndex = s.numSlides;
//             }
//             s.currentSlideIndex--;
//             SliceSlider.showSlide();
//             paginationCurrent.innerText = '0'+ (s.currentSlideIndex + 1);
//         },

//         //スライドを次に進める
//         nextSlide: function(){
//             //最後のスライダーまでスクロールしたときとき
//             //currentSlideIndex=5
//             //numSlides=6
//             //となっている状態なのでこの時点でcurrentSlideIndex++を行って等しくする必要がある
//             s.currentSlideIndex++;
//             //現在のスライドナンバーがスライドの最大値を超えたとき（つまりスライドが最後尾まで行きさらにスクロールされたとき）
//             if(s.currentSlideIndex >= s.numSlides){
//                 //現在のスライドは0番目（つまりスライドの先頭）
//                 s.currentSlideIndex = 0;
//             }
//             SliceSlider.showSlide();
//             paginationCurrent.innerText = '0' + (s.currentSlideIndex + 1);
//         },
//     };
//     SliceSlider.init();
// }