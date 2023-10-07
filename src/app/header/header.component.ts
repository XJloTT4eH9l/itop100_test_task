import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  logo: string = 'CurrencyConvertor';
  usdCurrency: number = 0;
  euroCurrency: number = 0;

  async getCurrency(currency: string) : Promise<void> {
    try {
      const responce = await fetch(`https://v6.exchangerate-api.com/v6/b50399e21c7bbf1ca7c2c7b6/latest/${currency}`);
      const data = await responce.json();

      if(currency === 'USD') {
        this.usdCurrency = parseFloat((data.conversion_rates.UAH).toFixed(2));
      }
      if(currency === 'EUR') {
        this.euroCurrency = parseFloat((data.conversion_rates.UAH).toFixed(2));
      }
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getCurrency('USD');
    this.getCurrency('EUR');
  }
}
