import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { VideoModel } from 'src/app/models/videoModel';
import { DetailsModalService } from 'src/app/services/details-modal.service';

@Component({
    selector: 'app-videos-gridview',
    templateUrl: './videos-gridview.component.html',
    styleUrls: ['./videos-gridview.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosGridviewComponent  {

    @Input() videos: VideoModel[] = [];

    constructor(private modalService: DetailsModalService) { }

    openDetailsModal(video: VideoModel): void {

        this.modalService.sendVideoData(video);
    }
}
