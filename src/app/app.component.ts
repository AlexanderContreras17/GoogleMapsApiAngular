import {Component, ViewChild, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GoogleMap, MapHeatmapLayer} from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl:'./app.component.css',
  imports: [RouterOutlet, GoogleMap,MapHeatmapLayer],
})
export class AppComponent {
  center = {lat: 37.774546, lng: -122.433523};
  zoom = 12;
  heatmapOptions = {radius:19};
  heatmapData = [
    {lat: 37.782, lng: -122.447},
    {lat: 37.782, lng: -122.445},
    {lat: 37.782, lng: -122.443},
    {lat: 37.782, lng: -122.441},
    {lat: 37.782, lng: -122.439},
    {lat: 37.782, lng: -122.437},
    {lat: 37.782, lng: -122.435},
    {lat: 37.785, lng: -122.447},
    {lat: 37.785, lng: -122.445},
    {lat: 37.785, lng: -122.443},
    {lat: 37.785, lng: -122.441},
    {lat: 37.785, lng: -122.439},
    {lat: 37.785, lng: -122.437},
    {lat: 37.785, lng: -122.435}
  ];
  

}

