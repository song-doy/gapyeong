$(function(){
    let nowIdx = 0;
    let oldIdx = null;
    let intervalKey = null;

    const $arboretum_indicatior = $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-pagination>li>a');

    arboretum_fadeActionFn = function(){
        $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-container>li').eq(oldIdx).stop().fadeOut(1000);
        $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-container>li').eq(nowIdx).stop().fadeIn(1000);

        $arboretum_indicatior.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    };

    //아침고요 수목원
    $arboretum_indicatior.on('click',function(evt){
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = $arboretum_indicatior.index(this);

        arboretum_fadeActionFn();
    });
    //아침고요 수목원 - 이전
    $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-navigation.slides-prev').on('click',function(evt){
        evt.preventDefault();
        oldIdx = nowIdx;

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx = 4;
        };

        arboretum_fadeActionFn();
    });
    //아침고요 수목원 - 다음
    $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-navigation.slides-next').on('click',function(evt){
        evt.preventDefault();
        oldIdx = nowIdx;
        
        if(nowIdx<4){ 
            nowIdx++;
        }else{
            nowIdx = 0;
        }
        arboretum_fadeActionFn();
    });
    //아침고요 수목원 - 자동재생
    $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-btn.play').on('click',function(evt){
        evt.preventDefault();
        intervalKey = setInterval(function(){
            oldIdx = nowIdx;
            
            if(nowIdx<4){ 
                nowIdx++;
            }else{
                nowIdx = 0;
            }
            arboretum_fadeActionFn();
        },4000);
    });
    //아침고요 수목원 - 일시정지
    $('.gp_travel>.gp_travel_num.arboretum>.slides>.slides-btn.pause').on('click',function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
    });
});
$(function(){
    let nowIdx = 0;

    const $railpark_indicatior = $('.gp_travel>.gp_travel_num.railpark>.slides>.slides-pagination>li>a');
    railpark_slideActionFn = function(){
        $('.gp_travel>.gp_travel_num.railpark>.slides>.slides-container').stop().animate({
            left : -670 * nowIdx
        });
         $railpark_indicatior.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    };
    let intervalKey = null;

    //가평 레일바이크
    $railpark_indicatior.on('click',function(evt){
        evt.preventDefault();
        
        nowIdx = $railpark_indicatior.index(this);
        
        railpark_slideActionFn();
    });
    //가평 레일바이크 - 이전
    $('.gp_travel>.gp_travel_num.railpark>.slides>.slides-navigation.slides-prev').on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx = 4;
        };
        
        railpark_slideActionFn();
    });
    //가평 레일바이크 - 다음
    $('.gp_travel>.gp_travel_num.railpark>.slides>.slides-navigation.slides-next').on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx<4){ 
            nowIdx++;
        }else{
            nowIdx = 0;
        }
        
        railpark_slideActionFn();
    });
    //가평 레일바이크 - 자동재생
    $('.gp_travel>.gp_travel_num.railpark>.slides>.slides-btn.play').on('click',function(evt){
        evt.preventDefault();
        intervalKey = setInterval(function(){
            if(nowIdx<4){ 
                nowIdx++;
            }else{
                nowIdx = 0;
            }
            railpark_slideActionFn();
        },4000);
    });
    //가평 레일바이크 - 일시정지
    $('.gp_travel>.gp_travel_num.railpark>.slides>.slides-btn.pause').on('click',function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
    });
});
$(function(){
    const $museum_thmbs = $('.gp_travel>.gp_travel_num.museum>.gp_travel_num.museum_visual>.slides>li>a');

    let arrArticleTop = [];
    for(let i=0;i<4;i++){
        arrArticleTop[i] = $('.gp_travel_num').eq(i).offset().top;
    }

    scrollTop_start = function(){
        $('html,body').stop().animate({
            scrollTop : 0
        });
    };
    
    //인터렉티브 아트 뮤지엄
    $museum_thmbs.on('click',function(evt){
        evt.preventDefault();

        const museum_imgSrc = $(this).attr('href');
        $('.main').css({
            'background-image' : 'url(' + museum_imgSrc + ')'
        });

        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    //스크롤 - 아이콘
    $('header>div>p.scroll_down').on('click',function(){
        $('html, body').stop().animate({
            scrollTop : 900
        });
    });

    //스크롤 - gnb
    $('header>nav>.gp_gnb>li>a').on('click',function(evt){
        evt.preventDefault();
        nowIdx = $('header>nav>.gp_gnb>li>a').index(this);

        $('html, body').stop().animate({
            scrollTop : arrArticleTop[nowIdx]
        });
    });

    //푸터 - welcome to gp
    $('footer>.footer_container>p>a').on('click',function(evt){
        evt.preventDefault();

        scrollTop_start();
    });
    
    //top 버튼
    $(window).on('scroll',function(){
        if($(this).scrollTop()>800){
            $('aside').fadeIn();
        }else{
            $('aside').fadeOut();
        }

        $('aside').on('click',function(){
            scrollTop_start();
        });
    });

    $(window).on('load',function(){
        $('footer>.footer_container>p>a').trigger('click');
    });
});