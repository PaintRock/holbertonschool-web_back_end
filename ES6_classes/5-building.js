class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

// Example usage:
class OfficeBuilding extends Building {
  constructor(sqft, officeCount) {
    super(sqft);
    this._officeCount = officeCount;
  }

  // Override the abstract method
  evacuationWarningMessage() {
    return `Evacuate the office building with ${this._officeCount} offices!`;
  }
}

const officeBuilding = new OfficeBuilding(5000, 10);
console.log(officeBuilding.evacuationWarningMessage()); // Output: Evacuate the office building with 10 offices!

// Example of a class that does not override the abstract method
class ResidentialBuilding extends Building {
  constructor(sqft, numberOfRooms) {
    super(sqft);
    this._numberOfRooms = numberOfRooms;
  }
}

try {
  const residentialBuilding = new ResidentialBuilding(3000, 5);
  residentialBuilding.evacuationWarningMessage(); // This should throw an error
} catch (error) {
  console.error(error.message); // Output: Class extending Building must override evacuationWarningMessage
}
