// image slide animation
document.addEventListener("DOMContentLoaded", () => {
    // Image Slide Animation
    const images = document.querySelectorAll(".image-slide img");
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove("visible");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("visible");
    }, 3000); // Change every 3 seconds
});

//typing text
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing-text");
    const textContent = typingElement.textContent.trim(); // div内のテキストを取得
    let charIndex = 0;

    // 初期状態でテキストを空にする（要素の高さや幅を維持）
    const textWidth = typingElement.offsetWidth; // 元の幅を取得
    typingElement.style.width = textWidth + "px"; // 幅を固定
    typingElement.textContent = "";

    function typeText() {
        if (charIndex < textContent.length) {
            typingElement.textContent += textContent.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 200); //文字の出る速度
        } else {
            setTimeout(eraseText, 1000); // 全て表示後の待機時間
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingElement.textContent = textContent.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 80); // 文字の削除速度
        } else {
            setTimeout(typeText, 1000); // 削除後の待機時間
        }
    }

    typeText();
});

//typing animation part2
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing-text-cursor");
    const cursorElement = document.querySelector(".typing-cursor");
    const textContent = "テキストアニメーション2"; // 表示するテキストを定義
    let charIndex = 0;

    // 初期状態でテキストを空にする
    typingElement.textContent = "";

    function typeText() {
        if (charIndex < textContent.length) {
            typingElement.textContent += textContent.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 200); // 次の文字までの待機時間
        } else {
            setTimeout(eraseText, 2000); // 全て表示後の待機時間
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingElement.textContent = textContent.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 100); // 次の削除までの待機時間
        } else {
            setTimeout(typeText, 1000); // 削除後の待機時間
        }
    }

    typeText();
});

//scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    // 要素が画面内に入ったか確認する関数
    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };

    // 要素が画面外に出たか確認する関数
    const elementOutOfView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop > (window.innerHeight || document.documentElement.clientHeight);
    };

    // 要素を表示状態にする
    const displayScrollElement = (element) => {
        element.classList.add("show");
    };

    // 要素を非表示状態にする
    const hideScrollElement = (element) => {
        element.classList.remove("show");
    };

    // スクロール時のアニメーション処理
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el); // 表示状態にする
            } else if (elementOutOfView(el)) {
                hideScrollElement(el); // 非表示状態にする
            }
        });
    };

    // スクロールイベントにアニメーション処理をバインド
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // 初回実行（初期状態の設定）
    handleScrollAnimation();
});

//click animation
document.addEventListener("DOMContentLoaded", () => {
    const clickElement = document.querySelector(".click-animation");

    clickElement.addEventListener("click", () => {
        clickElement.classList.add("active");

        // アニメーション終了後に元に戻す
        setTimeout(() => {
            clickElement.classList.remove("active");
        }, 300);
    });
});
