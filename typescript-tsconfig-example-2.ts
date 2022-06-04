let logged;

function sendAnalytics(data: string) {
    console.log(data);
    logged = true;
    logged = 'Max';
}

sendAnalytics('The data');