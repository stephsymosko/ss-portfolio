import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'three-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
})
export class CubeComponent implements AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef;

  /** Declare cube properties */
  @Input() rotationSpeedX = 0.5;
  @Input() rotationSpeedY = 0.1;
  @Input() size = 200;
  @Input() texture = 'assets/texture.jpg';

  /** Declare stage properties */
  @Input() cameraZ = 400;
  @Input() fieldOfView = 1;
  @Input() nearClippingPlane = 1;
  @Input() farClippingPlane = 1000;

  /** Declare helper properties */
  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1,1,1);
  // private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture)});
  private material = new THREE.MeshPhongMaterial({color: 0xe136a0});

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;


  /**
   * @description Create the scene
   */

  private createScene() {
    // Scene
    this.scene = new THREE.Scene;
    this.scene.background = new THREE.Color(0xc1c1c1);
    this.scene.add(this.cube);

    // Camera
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  /**
   * @description determines aspect ratio based of canvas height and width
   * @returns
   */
  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * @description add cube rotations in incremental approach
   */
  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  /**
   * @description Create a renderer function
   */
  private startRenderingLoop() {
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    })
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
