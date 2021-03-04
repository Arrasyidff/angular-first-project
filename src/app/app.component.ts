import { Component, OnInit } from '@angular/core';
import { ItemListComponent, Item } from "./junior-data"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '[NPC] Beginner Merchant';
  dataItem: Item[] = []
  charts: Item[] = []
  total: number = 0
  constructor(private data: ItemListComponent) {
  }

  ngOnInit() {
    this.dataItem = this.data.items
    console.log(this.dataItem, "dataItem")
    // console.log(this.charts, "charts")
  }

  addChart(data: any) {
    console.log(data)
    let dataChartsBefore = this.charts
    let dataChartsAfter = []

    let findData = dataChartsBefore.find(el => el.name === data.name)
    if (!findData) {
      console.log('ga ada')
      this.charts.push(data)
      for (let i = 0; i < this.dataItem.length; i++) {
        if (this.dataItem[i].name === data.name) {
          this.dataItem[i].addedToCart = true
        }
      }
      this.total += data.price
    } else {
      console.log('ada')
      let chartsFilter = dataChartsBefore.filter(el => el.name !== data.name)
      this.charts = chartsFilter
      for (let i = 0; i < this.dataItem.length; i++) {
        if (this.dataItem[i].name === data.name) {
          this.dataItem[i].addedToCart = false
        }
      }
      this.total -= data.price
    }

    console.log(this.charts)
  }
}
