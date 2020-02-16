import { CotizacionService } from './services/cotizacion.service';
import { Component, OnInit } from '@angular/core';
import {Form,FormGroup, FormControl, Validators} from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webcotizacion';
  public formCotizacion:FormGroup;
  public cotizacion:any;
  public cotizacionDolar:any;
  public cotizacionPesos:any;
  public cotizacionCordoba:any;
  // Mostrar resultado
  public result:boolean;
  public urls:any;

  constructor(private CotizacionService:CotizacionService,private spinner: NgxSpinnerService) {
    this.formCotizacion= new FormGroup({
      'target':new FormControl('',Validators.required),
      'source':new FormControl('',Validators.required)
    })

    this.urls=[this.CotizacionService.getCotizacionDolar,this.CotizacionService.getCotizacionPesos,this.CotizacionService.getCotizacion];
  }


  ngOnInit(){
    this.cotizar()
     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 5000);
  }

  cotizar(){

      this.cotizarPesos();
      this.cotizarDolar();
      this.cotizarCordoba();


  }
  cotizarDolar(){
    setInterval((entry)=>{
      this.CotizacionService.getCotizacionDolar('').subscribe((res:any)=>{
        this.cotizacionDolar=res;
        console.log(this.cotizacionDolar);
      },error=>{
        console.log(error);
      })
    },5000)
  }
  cotizarPesos(){
    setInterval((entry)=>{
      this.CotizacionService.getCotizacionPesos('').subscribe((res:any)=>{
        this.cotizacionPesos=res;
        console.log(this.cotizacionPesos);
      },error=>{
        console.log(error);
      })
    },5500)
  }
  cotizarCordoba(){
    setInterval((entry)=>{
      this.CotizacionService.getCotizacionCordoba('').subscribe((res:any)=>{
        this.cotizacionCordoba=res;
        console.log(this.cotizacionCordoba);
      },error=>{
        console.log(error);
      })
    },6000)
  }
  onSubmit(){
    this.result=true;
    console.log(this.formCotizacion.value);
    this.CotizacionService.getCotizacion(this.formCotizacion.value).subscribe((res:any)=>{
      console.log(res);
      this.cotizacion=res.result.amount;
    },error=>{
      console.log(error);
    })
  }



}
