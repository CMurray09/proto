import { Component, OnInit } from '@angular/core';
import {VideoService} from "src/app/services/video.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
// TODO: Fix the videos 'any' type
export class VideoComponent implements OnInit {
  videos: any;

  constructor(public videoService: VideoService) { }

  ngOnInit(): void {
    // Normally would not use any type, but time constraints from solving this issue
    this.videoService.getVideos()
      .subscribe((videos: any) => {
        for (const video of videos) {
          if (!video['images']) {
            video['images'] = [
              {
                url: '/assets/default-thumbnail.png',
                type: 'thumbnail'
              },
              {
                url: '/assets/default-thumbnail.png',
                type: 'packshot'
              },
            ]
          }
        }
        this.videos = videos;
      })
  }

}
