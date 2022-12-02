import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'three-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
})
export class CubeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef;

  public renderer = new THREE.WebGLRenderer();
  public camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  public scene = new THREE.Scene();

  public material = new THREE.LineBasicMaterial( { color: 0x0000ff } );





  ngOnInit() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    this.camera.position.set( 0, 0, 100 );
    this.camera.lookAt( 0, 0, 0 );


    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, this.material );

    this.scene.add( line );
    this.renderer.render( this.scene, this.camera )

  }













  ngAfterViewInit() {
    throw Error('No after view on init');
    // this.createScene();
    // this.startRenderingLoop();
  }
}
