// SCROLL REVEAL

const sr2 = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: false
});

sr2.reveal(` #eksplorKiri, #u1, #u2, #u3`, {
    interval:200
});

const srRight2 = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: false
});

srRight2.reveal(` #title1`, {
    interval:200
});
