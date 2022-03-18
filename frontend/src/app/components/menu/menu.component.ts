import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  audioPlayer!: HTMLAudioElement;


  ngOnInit(): void {

  }

  playAudio() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = "../../../assets/audio/1.mp3";
    this.audioPlayer.load();
    this.audioPlayer.play();
  }

  stopAudio() {
    this.audioPlayer = new Audio();
    // this.audioPlayer.();
  }
}
