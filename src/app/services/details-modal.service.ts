import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VideoModel } from '../models/videoModel';

@Injectable({
    providedIn: 'root'
})
export class DetailsModalService {
    

    private sendVideoDataSource = new Subject<VideoModel>();
    videoData$ = this.sendVideoDataSource.asObservable();

    constructor() { }

    sendVideoData(video: VideoModel)
    {
        this.sendVideoDataSource.next(video);
    }
}
