state = {
    visibleType: 0,
    allButtons: ,
    itemsPerPage: ,
    currentPage: ,
    active: '',
};

changeType = (e, i) => {

    let buttonNumber;
    const typeNumber = parseInt(org.type[i].items.length, 10);

    if (typeNumber !== 3 && typeNumber % 3 === 0) {
        buttonNumber = typeNumber / 3;
    } else if (typeNumber === 3) {
        buttonNumber = 0;
    }

    this.setState({
        visibleType: i,
        allButtons: buttonNumber,
        currentPage: 1,
        active: i,
    });
};

changeSite = (e, i) => {

    this.setState({
        currentPage: i,
        active: i,
    });
};

showButtons = () => {
    let buttons = [];
    for (let i = 1; i <= this.state.allButtons ; i++) {
        buttons.push(
            <button key={i}
                    onClick={(e) => this.changeSite(e,i)}
                    className={`buttonDisplay ${this.state.currentPage === i ? 'active' : ''}`}>{i}</button>
        );
    }
    return buttons;
};
