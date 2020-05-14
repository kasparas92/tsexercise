enum Cars {
  BMW = 1,
  AUDI = 2,
  Lamborghini = 3,
  Ferrari = 4,
}
function ReturnCars(name: string): number;
function ReturnCars(name: number): string;

function ReturnCars(name: any): any {
  if (typeof name == 'string') {
    if (name == 'BMW') {
      return Cars.BMW;
    } else if (name == 'AUDI') {
      return Cars.AUDI;
    } else if (name == 'Lamborghini') {
      return Cars.Lamborghini;
    } else {
      return Cars.Ferrari;
    }
  } else {
    if (name == Cars.BMW) {
      return 'BMW';
    } else if (name == Cars.AUDI) {
      return 'AUDI';
    } else if (name == Cars.Lamborghini) {
      return 'Lamborghini';
    } else {
      return 'Ferrari';
    }
  }
}

console.log('number:');
console.log(ReturnCars(1));
console.log(ReturnCars(2));
console.log(ReturnCars(3));
console.log(ReturnCars(4));

console.log('string:');
console.log(ReturnCars('BMW'));
console.log(ReturnCars('AUDI'));
console.log(ReturnCars('Lamborghini'));
console.log(ReturnCars('Ferrari'));
