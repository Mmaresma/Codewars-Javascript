//JavaScript: 4 kyu - Codewars style ranking system
//https://www.codewars.com/kata/51fda2d95d6efda45e00004e

class User {
  constructor() {
    this.rank = -8; // El rango inicial es -8
    this.progress = 0; // El progreso inicial es 0
  }
  incProgress(p) {
    if (p > 8 || p === 0 || p < -8) {
      throw new Error("Invalid rank " + p); // Valida que el rango sea valido
    }
    const dif = 
      p > 0 && this.rank < 0  // Si el rango de la actividad es positivo y el del usuario es negativo
        ? p - this.rank - 1 
        : this.rank > 0 && p < 0 // Si el rango del usuario es positivo y el de la actividad es negativo
        ? p - this.rank + 1
        : p - this.rank; // En cualquier otro caso, se calcula dif = (rango de la actividad - rango del usuario)
    if (dif > 0) {
      this.progress += 10 * dif * dif; // Si la diferencia es positiva, se añade al progreso 10 * diferencia al cuadrado
    } else if (dif === 0) {
      this.progress += 3; // Si la diferencia es cero, se añade 3 al progreso
    } else if (dif < 0) {
      this.progress += 1; // Si la diferencia es negativa, se añade 1 al progreso
    }
    while (this.progress >= 100) {
      this.progress -= 100;
      this.rank++;
      if (this.rank === 0) {
        this.rank = 1; // Si el rango es 0, se establece en 1 
      }
      if (this.rank > 8) {
        this.rank = 8; // Si el rango es mayor que 8, se establece en 8.
      }
    }
    if (this.rank === 8) {
      this.progress = 0; // Si el rango es 8, se establece el progreso en 0
    }
    return this;
  }
}
