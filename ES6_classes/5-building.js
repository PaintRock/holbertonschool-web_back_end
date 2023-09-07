export default class Building {
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
