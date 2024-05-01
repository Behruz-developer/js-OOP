class Scroll {
    constructor({ nav, top, unit, header }) {
        this.nav = document.querySelector(nav);
        this.top = top || 100
        this.unit = unit || '%'
        this.nav.style = `position:fixed;
                        top:${this.scrollUnit()}px`

        window.addEventListener('scroll', () => {
            if (this.scrollUnit() > scrollY) {
                this.nav.style.top = `${this.scrollUnit() - scrollY}px`
            } else {
                this.nav.style.top = '0'
            }


        })
        this.headerElement = document.querySelector(header);
        this.headerElement.addEventListener('mouseover', this.moveElement.bind(this));
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.top
        } else {
            return Math.round((window.innerHeight / 100) * this.top - this.nav.clientHeight)
        }
    }
    moveElement() {
        const maxWidth = window.innerWidth - this.headerElement.clientWidth;
        const maxHeight = window.innerHeight - this.headerElement.clientHeight - this.nav.clientHeight;
        const minWidth = this.headerElement.clientWidth
        const minHeight = this.headerElement.clientHeight
        const randomX = Math.random() * (maxWidth - minWidth) + minWidth;
        const randomY = Math.random() * (maxHeight- minHeight) + minHeight;

        this.headerElement.style.marginLeft = `${randomX}px`;
        this.headerElement.style.marginTop = `${randomY}px`;

    }
}
new Scroll({
    nav: ".header__nav",
    top: 100,
    unit: '%',
    header: '.header__content'

})