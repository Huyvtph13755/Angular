import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-app';
  name = 'Huy';
  class = 'WE16301';
  students = [
    {name: 'Huy', msv: 'ph13755', status: 1},
    {name: 'Huy1', msv: 'ph137551', status: 0},
    {name: 'Huy2', msv: 'ph137552', status: 1},
    {name: 'Huy3', msv: 'ph137553', status: 0},
    {name: 'Huy4', msv: 'ph137554', status: 0},
    {name: 'Huy5', msv: 'ph137555', status: 1}
  ]
  champs = [
    {name: "Jhin", dame: 100, defend: 200, speed: 20, price: 400, avatar: "https://lienminh.garena.vn/images/champions/skin/202_Jhin/0.jpg"},
    {name: "Jax", dame: 511, defend: 210, speed: 30, price: 6300, avatar: "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd4fed7a873727d60/60ee0e44855e1f64f143ef7c/Jax_0.jpg"},
    {name: "Master Yi", dame: 200, defend: 240, speed: 40, price: 6300, avatar: "https://hoiquancaothu.com/images/skins/toc-chien/masteryi-kiem-su-wuju.jpg"},
    {name: "Yasuo", dame: 300, defend: 280, speed: 10, price: 6300, avatar: "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt41c476486b063ef8/60ee13df31f9ee2ab08a4dfe/Yasuo_0.jpg"},
    {name: "Annie", dame: 600, defend: 100, speed: 150, price: 6300, avatar: "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt82bcfb363404fdb5/60ee0b65496a232835c1ff45/Annie_0.jpg"},
    {name: "Lux", dame: 240, defend: 201, speed: 20, price: 6300, avatar: "https://thethaiger.com/wp-content/uploads/2019/11/image-2019-11-07T174232.655.jpeg"},
    
  ];
  code = 'PH13755';
  showStatus = true;
  onClickBtn(){
    console.log("Btn Active");
    this.showStatus = !this.showStatus;
  }
  
  inputValue = {
    name: "",
    dame: "",
    defend: "",
    speed: "",
    price: "",
    avatar: ""
  }
  onInput(e:any, key:'name'|'dame'|'defend'|'speed'|'price'|'avatar'){
    this.inputValue[key] = e.target.value;
  }
  onSubmit(){
    this.champs.push({...this.inputValue,
    dame: +this.inputValue.dame,
    defend: +this.inputValue.defend,
    speed: +this.inputValue.speed,
    price: +this.inputValue.price
    }) 
  }
}
