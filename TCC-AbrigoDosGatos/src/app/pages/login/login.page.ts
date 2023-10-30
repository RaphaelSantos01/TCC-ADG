// import do arquivo environments
import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  private readonly API = environment.baseApiUrl;

  login!:FormGroup;

  constructor(private router: Router) { }
  senha:any
  email:any

  async validaLogin(){
    let dados:any ={
        "email": `${this.email}`,
        "senha": `${this.senha}`
      }
      console.log(dados);
      let res=await this.post(dados);
      console.log(res);
      if(res){
        alert("Logado com sucesso");
        this.router.navigate(['/home-admin']);
      }else{
        alert("Email ou senha incorretos")
      }

    console.log(this.login.value);

  }

  createFormLogin(){
    this.login = new FormGroup ({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
  })
  }

  ngOnInit() {
  }

  async post(dados:any){
    const options = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(this.API+'login.php',  options)

    .then(res => {
      return res.json() ;
    })
    .catch(err => {
      console.log(err) ;
    })
  }
}