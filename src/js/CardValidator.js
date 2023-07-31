import checkPaySystem from "./checkPaySystem";
import checkValidity from "./checkValidity";

export default class CardValidator{
    constructor() {
        this.parentEl = null;
        this.cards = null;
        this.input = null;
        this.button = null;
        this.result = null;

        this.isValid = false;
    }

    bindToDOM(container) {
        this.parentEl = container;
        this.drawUI();
    }

    drawUI() {
        this.parentEl.innerHTML = `<ul class="cards-row">
        <li class="card-ico mastercard"></li>
        <li class="card-ico visa"></li>
        <li class="card-ico mir"></li>
        <li class="card-ico ae"></li>
    </ul>
    <form>
        <div>
            <input type="text" class="card-input" placeholder="Credit card number">
            <button class="button">Validate</button>
        </div>
    </form>
    <div class="result"></div>`;

        this.cards = document.querySelectorAll('.card-ico');
        this.input = document.querySelector('.card-input');
        this.button = document.querySelector('.button');
        this.result = document.querySelector('.result');

        this.addListeners();
    }

    addListeners() {
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.isValid = checkValidity(this.input.value);
            this.showResult(this.isValid)

            if(this.isValid) {
                this.paySistem = checkPaySystem(this.input.value);
                this.showCard(this.paySistem);
            }
        });

        this.input.addEventListener('input', (e) => {
            this.clearResults();
            this.input.value = this.input.value.replace(/[^\d]/g,'');
        });
    }

    showResult(isValid) {
        if(isValid){
            this.result.innerText = 'Номер валиден!';
            this.result.classList.add('valid');
        }
        else{
            this.result.innerText = 'Номер невалиден!';
            this.result.classList.add('invalid');
        }
    }

    showCard(paySystem) {
        this.cards.forEach((card) => {
            if(card.classList.contains(paySystem)){
                card.classList.add('active');
            }
        })
    }

    clearResults() {
        this.result.innerText = '';
        this.result.classList.remove('valid');
        this.result.classList.remove('invalid');

        this.cards.forEach((card) => {
            card.classList.remove('active');
        })
    }
}