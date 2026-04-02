document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navLi a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.actingBox');
    let currentIndex = 0;
    /* const slideInterval = 3000; // 슬라이드 전환 간격 (3초) */
    let isAnimating = false; // 애니메이션이 진행 중인지 여부를 나타내는 변수

    // 다음 슬라이드로 이동하는 함수
    function nextSlide() {
        if (!isAnimating) { // 애니메이션 중이 아닐 때만 실행
            goToSlide(currentIndex + 1, 'right');
        }
    }

    // 이전 슬라이드로 이동하는 함수
    function prevSlide() {
        if (!isAnimating) { // 애니메이션 중이 아닐 때만 실행
            goToSlide(currentIndex - 1, 'left');
        }
    }

    // 특정 슬라이드로 이동하는 함수
    function goToSlide(n, direction) {
        if (!isAnimating) { // 애니메이션 중이 아닐 때만 실행
            isAnimating = true; // 애니메이션이 시작됨을 나타내는 플래그 설정

            // 현재 슬라이드를 투명하게 만들고, 새로운 슬라이드를 보이게 함
            slides[currentIndex].style.opacity = '0';
            currentIndex = (n + slides.length) % slides.length;
            slides[currentIndex].style.opacity = '1';

            // 애니메이션이 완료된 후에 플래그를 재설정하여 다음 애니메이션이 실행될 수 있도록 함
            setTimeout(function() {
                isAnimating = false;
            }, 800); // transition duration이 0.8초이므로, 800ms 후에 플래그를 재설정함
        }
    }

    // 이전 버튼 클릭 시 이벤트 핸들러
    document.getElementById('leftBtn').addEventListener('click', function() {
        prevSlide();
    });

    // 다음 버튼 클릭 시 이벤트 핸들러
    document.getElementById('rightBtn').addEventListener('click', function() {
        nextSlide();
    });

    /* // 일정 시간마다 자동으로 슬라이드 전환
    setInterval(nextSlide, slideInterval); */
});

function flipCard(element) {
    var card = element.closest('.card');
    if (card) {
        card.classList.toggle('flipped');
    } else {
        console.error('카드 요소를 찾을 수 없습니다.');
    }
}
