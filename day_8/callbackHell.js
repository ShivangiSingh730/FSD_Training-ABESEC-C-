const orderCoffee = () =>
{
    setTimeout(() => {
        console.log("Make some order:");
        setTimeout(() => {
            console.log("Brewing Coffee.");
            setTimeout(() => {
                console.log("Pouring into cup.");
            }, 3000);
        });
    });
}
