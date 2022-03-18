import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  audioPlayer!: HTMLAudioElement;

  title = 'DZIEŃ, W KTÓRYM ZGASŁO SŁOŃCE';

  playAudio() {
    if (!this.audioPlayer) {
      this.audioPlayer = new Audio();
      this.audioPlayer.src = "../../../assets/audio/1.mp3";
      this.audioPlayer.load();
      this.audioPlayer.play();
    }
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
    }
  }

  stopAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }
}
