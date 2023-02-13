import { Colors } from "../Colors";
import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    // king walks on vertical
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    if (dx === 1 && dy === 1) {
      return true;
    }
    // king walks on one step vertival & horizontal
    if (this.cell.y === target.y + 1 && this.cell.x === target.x) {
      return true;
    }

    if (this.cell.y === target.y - 1 && this.cell.x === target.x) {
      return true;
    }

    if (this.cell.x === target.x + 1 && this.cell.y === target.y) {
      return true;
    }

    if (this.cell.x === target.x - 1 && this.cell.y === target.y) {
      return true;
    }

    return false;
  }
}
