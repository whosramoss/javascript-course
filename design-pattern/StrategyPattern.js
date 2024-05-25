function Fedex() {
  this.calculate = (package) => {
    // fedex calculations...
    return 2.45;
  };
}
function Ups() {
  this.calculate = (package) => {
    // ups calculations...
    return 1.56;
  };
}

function Usps() {
  this.calculate = (package) => {
    // usps calculations...
    return 4.5;
  };
}

const fedex = new Fedex();
const ups = new Ups();
const usps = new Usps();

const package = { from: 'Alabama', to: 'Georgia', weight: 1.56 };

// fedex.calculate(package);
// ups.calculate(package)
// usps.calculate(package)
// all of this in one place

function Shipping() {
  this.company = '';
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(`Fedex ${shipping.calculate(package)}`);

shipping.setStrategy(ups);
console.log(`ups ${shipping.calculate(package)}`);

shipping.setStrategy(usps);
console.log(`usps ${shipping.calculate(package)}`);
