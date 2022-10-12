function ticketPrice(quantity) {
    const first100 = 100;
    const second100 = 90;
    const rest = 70;
    if (quantity <= 100) {
        const price = quantity * 100;
        return price;
    }
    else if (quantity <= 200) {
        const firstrate = 100 * first100;
        const restqunatity = quantity - 100;
        const restprice = restqunatity + second100;
        const totalprice = first100 + restprice;
        return totalprice;

    }
    else {
        first100price = 100 * first100;
        second100price = 100 * second100;
        const restqunatity = quantity - 200;
        const restprice = restqunatity * rest;
        const totalcost = firstrate + second100price + restprice;
        return totalcost;

    }
}
const log = ticketPrice(300);
console.log(log);