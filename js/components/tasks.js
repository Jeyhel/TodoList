// tasks.js

export const Tasknormal = async (OnHold) => {
    let plantilla = "";

    for (let i = 0; i < OnHold.length; i++) {
        plantilla += /*html*/`
            <article class="Search__bar2">
                <p>${OnHold[i].task}</p>
                <div class="check">
                    <img class="check" src="storage/img/check.webp" alt="check" data-id="${OnHold[i].id}">
                    <img class="trash" src="storage/img/trash.webp" alt="trash" data-id="${OnHold[i].id}">
                </div>
            </article>`;
    }
    return plantilla;
};

export const TaskTachada = async (ready) => {
    let plantilla = "";

    for (let i = 0; i < ready.length; i++) {
        plantilla += /*html*/`
            <article class="Search__bar3">
                <del>${ready[i].task}</del> 
                <div class="check">
                    <img class="check" src="storage/img/check.webp" alt="check" data-id="${ready[i].id}">
                    <img class="trash" src="storage/img/trash.webp" alt="trash" data-id="${ready[i].id}">
                </div>
            </article>`;
    }
    return plantilla;
};

export const TaskSinB = (OnHold) => {
    let plantilla = "";

    plantilla += /*html*/`
        <article class="Search__bar2">
            <p>${OnHold}</p>
            <div class="check">
                <img src="storage/img/check.webp">
                <img src="storage/img/trash.webp">
            </div>
        </article>`;

    return plantilla;
};
