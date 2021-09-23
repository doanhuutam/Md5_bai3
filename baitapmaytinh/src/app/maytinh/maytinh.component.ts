import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maytinh',
  templateUrl: './maytinh.component.html',
  styleUrls: ['./maytinh.component.css']
})
export class MaytinhComponent implements OnInit {
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;

    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  // @ts-ignore
  private doCalculation(op: string, secondOp: string) {
    switch (op) {
      case '+':
        // @ts-ignore
        return this.firstOperand += secondOp;
      case '-':
        // @ts-ignore
        return this.firstOperand -= secondOp;
      case '*':
        // @ts-ignore
        return this.firstOperand *= secondOp;
      case '/':
        // @ts-ignore
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      // @ts-ignore
      this.firstOperand = Number(this.currentNumber);

    } else if (this.operator) {
      // @ts-ignore
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      // @ts-ignore
      this.firstOperand = result;
    }
    // @ts-ignore
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

}
