import { Component, OnInit } from '@angular/core';
import {VideoService} from "src/app/services/video.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  videos: any;

  constructor(public videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideos()
      .subscribe((videos: any) => {
        this.videos = videos;
      })
  }

}
