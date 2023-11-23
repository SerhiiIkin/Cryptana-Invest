class Slider {
    #slider;
    
    static ACTIVE = 'active';

    constructor(sliderUrl, interval) {
        this.#slider = document.querySelector(sliderUrl);
        this.container = this.#slider.children[0];
        this.content = this.container.children[0];
        this.slides = this.content.children;
        this.index = 0;

        this.addClassBody();

       

        setInterval(() => {
            if (this.index === this.slides.length - 1) {
                this.onFirstSlide();
            } else if (this.index >= 0) {
                this.onNextSlide();
            }
        }, interval);
    }

    addClassBody() {
        this.container.classList.add("slider__container");
        this.content.classList.add("slider__content");
        this.slides[this.index].classList.add(Slider.ACTIVE);

        for (let slide of this.slides) {
            slide.classList.add("slide");
        }


    }

    onNextSlide() {
        let i = this.index;
        this.index += 1;
        this.removeClass(this.slides[i], Slider.ACTIVE);
        this.addClass(this.slides[this.index], Slider.ACTIVE);
    }

    onFirstSlide() {
        this.removeClass(this.slides[this.index], Slider.ACTIVE);
        this.addClass(this.slides[0], Slider.ACTIVE);
        this.index = 0;
    }


    addClass(item, ...arg) {
        arg.forEach((el) => item.classList.add(el));
    }

    removeClass(item, ...arg) {
        arg.forEach((el) => item.classList.remove(el));
    }

    
}

export default Slider;
