const normalizer = (array) => {
    return array.map(p => p.buy_box_winner || p);
}

module.exports = normalizer;