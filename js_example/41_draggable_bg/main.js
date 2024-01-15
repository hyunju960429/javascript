const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  //--------------------------------------
  
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector(".close-btn");
    const productImg = document.querySelector(".product-img img");
    const productName = document.querySelector(".product-name");
    const modalProductName = document.querySelector(".modal .product-name h1");
    const modalProductInfo = document.querySelector(".modal .product-name p");
    const boxCount = 12 * 12;
  
    const boxSize = 240;
    const totalImages = 15;
    //const columns = 12;
    const columns = 12;
    const products = [
      {
        info: "The Roger Advantage",
        name: "White | Sand",
      },
      {
        info: "The Roger Advantage",
        name: "White | Rust",
      },
      {
        info: "The Roger Clubhouse",
        name: "White | Cobalt",
      },
      {
        info: "The Roger Centercourt",
        name: "White | Midnight",
      },
      {
        info: "The Roger Clubhouse",
        name: "White | Sienna",
      },
      {
        info: "The Roger Advantage",
        name: "White | Gum",
      },
      {
        info: "The Roger Centercourt",
        name: "White | Coral",
      },
      {
        info: "The Roger Advantage",
        name: "White | Sand",
      },
      {
        info: "The Roger Advantage",
        name: "White | Indigo",
      },
      {
        info: "The Roger Advantage",
        name: "White | Reseda",
      },
      {
        info: "The Roger Centercourt",
        name: "White | Jungle",
      },
      {
        info: "The Roger Advantage",
        name: "White | Flame",
      },
      {
        info: "The Roger Advantage",
        name: "White | Phantom",
      },
      {
        info: "The Roger Clubhouse",
        name: "White | Flint",
      },
      {
        info: "The Roger Centercourt",
        name: "White | Surf",
      },
    ];
  
    const containerWidth = columns * boxSize;
    container.style.width = containerWidth + "px";
    for (let i = 0; i < boxCount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      const img = document.createElement("img");
      img.classList.add("img");
      const imageIndex = (i % totalImages) + 1;
      img.src = `assets/img${imageIndex}.png`;
  
      const productIndex = i % products.length;
      console.log(0 % 12);
      console.log(1 % 12);
      console.log(2 % 12);
      console.log(3 % 12);
      console.log(4 % 12);
      console.log(5 % 12);
      console.log(6 % 12);
      const product = products[productIndex];
      const info = document.createElement("p");
      info.textContent = product.info;
      const name = document.createElement("h1");
      name.textContent = product.name;
  
      const content = document.createElement("div");
      content.classList.add("content");
      content.appendChild(info);
      content.appendChild(name);
      box.appendChild(img);
      box.appendChild(content);
      container.appendChild(box);
  
      let isDragging = false;
      let isClicking = false;
      box.addEventListener("mousedown", function () {
        isDragging = false;
        isClicking = true;
      });
      box.addEventListener("mousemove", function () {
        isDragging = true;
        isClicking = false;
      });
  
      box.addEventListener("click", function () {
        if (!isDragging && isClicking) {
          gsap.set(modal, {
            display: "flex",
          });
          gsap.to(modal, {
            opacity: 1,
            duration: 0.4,
          });
          productImg.src = img.src;
          modalProductName.textContent = product.name;
          modalProductInfo.textContent = product.info;
        }
      });
    }
  
    modalCloseBtn.addEventListener("click", function () {
      gsap.to(modal, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          gsap.set(modal, {
            display: "none",
          });
        },
      });
    });
  
    let isContainerDragging = false;
    let startCoords = {
      x: 0,
      y: 0,
    };
    let startTranslate = {
      x: 0,
      y: 0,
    };
    container.addEventListener("mousedown", onDragStart);
    container.addEventListener("mouseup", onDragEnd);
    container.addEventListener("mouseleave", onDragEnd);
    container.addEventListener("mousemove", onDrag);
  
    function onDragStart(e) {
      isContainerDragging = true;
      startCoords.x = e.clientX;
      startCoords.y = e.clientY;
  
      console.log(e.clientX);
      startTranslate.x = gsap.getProperty(container, "x");
      startTranslate.y = gsap.getProperty(container, "y");
      gsap.set(container, {
        cursor: "grabbing",//주먹   //grab:손바닥
      });
      // gsap.set(container, {
      //   useSelect: "none",//CSS 속성은 사용자가 텍스트를 선택할 수 있는지 여부를 제어
      // });
      //gsap.set(container, {useSelect*: "none" });
    }
  
    function onDragEnd() {
      ///if (!isContainerDragging) return;
      isContainerDragging = false;
      gsap.set(container, {
        cursor: "grab",
      });
      // gsap.set(container, {
      //   useSelect: "auto",
      // });
    }
  
    //const setX = gsap.quickSetter(".ball", "x", "px");
    function onDrag(e) {
      if (!isContainerDragging) return;
      e.preventDefault();
      const deltaX = e.clientX - startCoords.x;//다음 클릭한것사이의 거리
      const deltaY = e.clientY - startCoords.y;
  
      let translateX = startTranslate.x + deltaX;
      let translateY = startTranslate.y + deltaY;
      console.log(translateX);
      if (translateX <= -440) {
        translateX = -440;
      }
      if (translateX >= 440) {
        translateX = 440;
      }
  
      if (translateY >= 940) {
        translateY = 940;
      }
      if (translateY <= -945) {
        translateY = -945;
      }
  
      gsap.to(container, {
        x: translateX,
        y: translateY,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  });