webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/demande-attestation/demande-attestation-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myDemandeAttestationLabel\\\">Create or edit a Demande Attestation</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!demandeAttestation.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"demandeAttestation.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_name\\\">Name</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"name\\\" id=\\\"field_name\\\" [(ngModel)]=\\\"demandeAttestation.name\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_lastname\\\">Lastname</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"lastname\\\" id=\\\"field_lastname\\\" [(ngModel)]=\\\"demandeAttestation.lastname\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_cause\\\">Cause</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"cause\\\" id=\\\"field_cause\\\" [(ngModel)]=\\\"demandeAttestation.cause\\\"/> </div> <div *jhiHasAnyAuthority=\\\"'ROLE_ENSEIGNANT'\\\" class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_signerPar\\\">Signer Par</label> <select class=\\\"form-control\\\" id=\\\"field_signerPar\\\" name=\\\"signerPar\\\" [(ngModel)]=\\\"demandeAttestation.signerPar\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"enseignantOption.id === demandeAttestation.signerPar?.id ? demandeAttestation.signerPar : enseignantOption\\\" *ngFor=\\\"let enseignantOption of signerpars; trackBy: trackEnseignantById\\\">{{enseignantOption.user?.login}}</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span>Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlbWFuZGUtYXR0ZXN0YXRpb24vZGVtYW5kZS1hdHRlc3RhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWw/OGE5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnV0FBZ1csNjdDQUE2N0Msa0NBQWtDLDhCQUE4QixzTUFBc00sMEtBQTBLIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZW1hbmRlLWF0dGVzdGF0aW9uL2RlbWFuZGUtYXR0ZXN0YXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwibXlEZW1hbmRlQXR0ZXN0YXRpb25MYWJlbFxcXCI+Q3JlYXRlIG9yIGVkaXQgYSBEZW1hbmRlIEF0dGVzdGF0aW9uPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIWRlbWFuZGVBdHRlc3RhdGlvbi5pZFxcXCI+IDxsYWJlbCBmb3I9XFxcImlkXFxcIj5JRDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiaWRcXFwiIG5hbWU9XFxcImlkXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVtYW5kZUF0dGVzdGF0aW9uLmlkXFxcIiByZWFkb25seT1cXFwicmVhZG9ubHlcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9uYW1lXFxcIj5OYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIGlkPVxcXCJmaWVsZF9uYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVtYW5kZUF0dGVzdGF0aW9uLm5hbWVcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9sYXN0bmFtZVxcXCI+TGFzdG5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdG5hbWVcXFwiIGlkPVxcXCJmaWVsZF9sYXN0bmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImRlbWFuZGVBdHRlc3RhdGlvbi5sYXN0bmFtZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2NhdXNlXFxcIj5DYXVzZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjYXVzZVxcXCIgaWQ9XFxcImZpZWxkX2NhdXNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVtYW5kZUF0dGVzdGF0aW9uLmNhdXNlXFxcIi8+IDwvZGl2PiA8ZGl2ICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0VOU0VJR05BTlQnXFxcIiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX3NpZ25lclBhclxcXCI+U2lnbmVyIFBhcjwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZpZWxkX3NpZ25lclBhclxcXCIgbmFtZT1cXFwic2lnbmVyUGFyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVtYW5kZUF0dGVzdGF0aW9uLnNpZ25lclBhclxcXCI+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJudWxsXFxcIj48L29wdGlvbj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcImVuc2VpZ25hbnRPcHRpb24uaWQgPT09IGRlbWFuZGVBdHRlc3RhdGlvbi5zaWduZXJQYXI/LmlkID8gZGVtYW5kZUF0dGVzdGF0aW9uLnNpZ25lclBhciA6IGVuc2VpZ25hbnRPcHRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGVuc2VpZ25hbnRPcHRpb24gb2Ygc2lnbmVycGFyczsgdHJhY2tCeTogdHJhY2tFbnNlaWduYW50QnlJZFxcXCI+e3tlbnNlaWduYW50T3B0aW9uLnVzZXI/LmxvZ2lufX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZWRpdEZvcm0uZm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNhdmVcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlbWFuZGUtYXR0ZXN0YXRpb24vZGVtYW5kZS1hdHRlc3RhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZW1hbmRlLWF0dGVzdGF0aW9uL2RlbWFuZGUtYXR0ZXN0YXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/demande-attestation/demande-attestation-dialog.component.html\n");

/***/ })

})