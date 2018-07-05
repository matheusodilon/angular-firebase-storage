import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uploadProgress: Observable<number>;
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;

  constructor(private firebaseStorage: AngularFireStorage) { }

  upload(event) {

    const id = event.target.files[0].name;
    this.ref = this.firebaseStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();

    this.task.then((task) => {
      this.downloadURL = this.ref.getDownloadURL();
    });
  }

}
