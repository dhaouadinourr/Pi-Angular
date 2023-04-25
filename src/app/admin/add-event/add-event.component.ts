import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieEvent } from 'src/app/Models/categorie-event';
import { Event } from 'src/app/Models/event';
import { CategeventService } from 'src/app/services/categevent.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})

export class AddEventComponent implements OnInit {
  files: string[] = [];
  selectedFiles!: FileList;
  images: string[] = [];
  event: Event = new Event();
  categories!: CategorieEvent[];
  errorMessage: string = '';
  userFile: any;
  file!: string;
  public imagePath: any;
  imgURL: any;

  constructor(public eventService: EventService,
    private router: Router,
    private categoryeventService: CategeventService,
    private fb: FormBuilder) {  
   }

  ngOnInit(): void {
    this.categoryeventService.getCategEventList().subscribe((data) => {
      this.categories = data;
    });
    this.infoForm();
  }
  infoForm() {
    this.eventService.dataForm = this.fb.group({
      nomEvent: ['', [Validators.required]],
      details: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      categ: ['', [Validators.required]],
    });

  }
  addProduct() {
    const formData = new FormData();
    const event = this.eventService.dataForm.value;
    console.log(event)
    console.log("==========")
    // formData.append('article', JSON.stringify(product));
    formData.append('event', JSON.stringify(event));


    for (let i = 0; i < this.files.length; i++) {
      formData.append('files', this.files[i]);
      console.log(formData);
    }

    // formData.append('file', this.userFile);
    formData.append('file', this.file);
    this.eventService.addEvent(formData).subscribe((data) => {
      this.router.navigate(['/listEvent']);
    });
  }

  setNewCategory(category: CategorieEvent): void {
    console.log(category);
    this.eventService.dataForm.value.categ = category;
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      for (var i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i]);
      }

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {

        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
  onSelectFirstFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {

        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}