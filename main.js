// カードを表す要素を作成する関数
const createCardElement = (card) => {
    const elem = document.createElement('div');
    elem.classList.add('card');

    const cardLabel = document.createElement('div');
    cardLabel.innerText = `${card.suit || ''}${card.label}`;
    elem.appendChild(cardLabel);

    return elem;
}

// メイン処理

(function startGame(){
    //カード情報作成
    const deck = new Deck({includesJoker: true});
    const cards = deck.deal(5);

    //カードを描画する
    (function render(renderTarget, state){
        renderTarget.innerText = '';

        //カードの組みを表示するコンテナを作成
        const container = document.createElement('div');
        container.classList.add('card-group');
        renderTarget.appendChild(container);

        //カードをコンテナに詰め込む
        for(const card of state.cardList){
            const cardElem = createCardElement(card);
            container.appendChild(cardElem);
        }
    })(document.body, {cardList: cards});
})();